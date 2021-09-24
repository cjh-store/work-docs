<template>
  <div style="width: 100%; height: 100%">
    <el-upload
      ref="upload"
      class="upload"
      :class="{ hide: hideUpload }"
      :limit="limit"
      :action="url"
      :auto-upload="auto"
      :http-request="uploadFile"
      :list-type="type"
      :file-list="fileList"
      :on-preview="onPictureCardPreview"
      :on-change="onChange"
      :on-remove="onRemove"
      :on-progress="onProgress"
      v-bind="$attrs"
      :drag="type === 'drag'"
      :accept="accept"
      :on-exceed="overList"
      v-on="$listeners"
    >
      <slot>
        <template v-if="type === 'picture-card'">
          <i v-if="!iconName" class="el-icon-plus"></i>
          <svg-icon v-else :class="iconName" :icon-class="iconName" />

          <div slot="tip" class="el-upload__tip">
            <slot name="tip"></slot>
          </div>
        </template>
        <template v-if="type === 'button' || type === 'picture'">
          <el-button icon="el-icon-plus" size="small" type="primary">
            点击上传
          </el-button>
        </template>
        <template v-if="type === 'drag'">
          <i v-if="!iconName" class="el-icon-upload"></i>
          <svg-icon v-else :class="iconName" :icon-class="iconName" />
          <div class="el-upload__text">
            <em>点击上传文件</em>
          </div>
        </template>
      </slot>
      <div v-if="tip" slot="tip" class="el-upload__tip">{{ tip }}</div>
    </el-upload>
    <el-dialog v-if="type === 'picture-card'" :visible.sync="dialogVisible">
      <img width="100%" :src="dialogImageUrl" alt="" />
    </el-dialog>
  </div>
</template>

<script>
  import axios from 'axios'
  import Alioss from './OSS'

  export default {
    name: 'GUpload',
    inheritAttrs: false,
    props: {
      url: {
        type: String,
        default: 'https://jsonplaceholder.typicode.com/posts/',
      },
      list: {
        type: Array,
        default() {
          return []
        },
      },
      auto: {
        type: Boolean,
        default: false,
      },
      // picture/picture-card/button/text/drag
      type: {
        type: String,
      },
      limit: {
        type: Number,
      },
      // 单文件重传覆盖
      replace: {
        type: Boolean,
        default: false,
      },
      tip: {
        type: String,
      },
      //接受上传的文件类型
      accept: {
        type: String,
      },
      size: {
        type: Number,
      },
      iconName: {
        type: String,
      },
      // 用户控制上传给后台格式
      fileType: {
        type: String,
        default: '',
      },
      oss: {
        type: [Boolean, Object],
      },
    },
    data() {
      return {
        hideUpload: false, //控制显示隐藏
        fileList: [], //主要用于判断上传文件格式是数组还是单文件 还可在父组件中通过 this.$refs.upload.fileList 回填
        formData: '',
        dialogImageUrl: '',
        dialogVisible: false,
      }
    },
    watch: {
      fileList: {
        handler(n, o) {
          this.hideUpload = n.length >= this.limit ? true : false
          this.$emit('update:list', n)
        },
        deep: true,
      },
    },
    destroyed() {},
    methods: {
      overList(files) {
        this.$msg(`当前限制选择${this.limit}个文件`, 'warning')
      },
      onPictureCardPreview(file) {
        this.dialogImageUrl = file.url
        this.dialogVisible = true
      },
      onChange(file, fileList) {
        let fileSize = file.size / 1024 / 1024
        if (this.size) {
          if (fileSize > this.size) {
            this.$msg(`文件大小超过${this.size}M`, 'warning')
            this.fileList = []
            return false
          }
        }
        this.fileList = fileList
        if (this.accept) {
          file.type = file.name.substring(file.name.lastIndexOf('.'))
          let accept = this.accept.split(',')
          let flag = accept.some((e) => {
            return file.type === e
          })
          if (!flag) {
            this.fileList = []
            this.$msg('请上传指定格式文件', 'warning')
            return flag
          }
        }
        if (fileList.length > 1 && this.replace) {
          fileList.splice(0, 1)
        }
        this.$emit('onChange', file, fileList)

        /* OSS 在change的时候就上传 */
        if (this.oss.immediately) {
          let alioss = new Alioss({ type: this.oss.type })
          alioss
            .uploadOSS({ name: file.name, raw: file.raw, single: true })
            .then((res) => {
              file.name = res.name
              file.dirName = res.dirName
              this.$emit('onChange', file, fileList)
              this.fileList[this.fileList.length - 1].name = res.name
            })
        }
      },
      onRemove(file, fileList) {
        if (this.limit) {
          this.fileList = fileList
        }
        this.$emit('update:list', fileList)
      },
      onProgress() {},
      // 自定义上传函数
      uploadFile(file) {
        if (this.fileList.length > 1 || this.fileType == 'Array') {
          this.formData.append('file[]', file.file)
        } else {
          this.formData.append('file', file.file)
        }
      },
      //手动上传按钮触发函数 this.$refs.upload.manualUpload()  注：需带上表单参数
      manualUpload(data) {
        return new Promise((resolve, reject) => {
          // 分oss上传逻辑,附件和表单一起上传 和 直接上传服务器逻辑
          if (this.oss) {
            let alioss = new Alioss({ ...this.oss })
            alioss.uploadFiles(data).then((res1) => {
              // 等待文件上传完毕 ，继续进行表单的上传
              axios
                .post(this.url, res1)
                .then((res2) => {
                  this.$refs.upload.clearFiles()
                  resolve(res2)
                  alioss.closeLoading()
                })
                .catch((err) => {
                  reject(err)
                  alioss.closeLoading()
                })
            })
          } else {
            this.formData = new FormData()
            this.$refs.upload.submit() // 触发上传
            Object.keys(data).forEach((key) => {
              key === 'fileList' ? '' : this.formData.append(key, data[key])
            })

            axios
              .post(this.url, this.formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
                timeout: 3 * 60 * 1000,
              })
              .then((res) => {
                this.hideUpload = false
                this.$refs.upload.clearFiles()
                this.$emit('success', res)
                resolve(res)
              })
              .catch((err) => {
                reject(err)
              })
          }
        })
      },
    },
  }
</script>

<style lang="scss" scoped>
  ::v-deep {
    .el-upload-list--picture-card .el-upload-list__item-thumbnail {
      width: auto;
      max-width: 100%;
      height: auto;
      max-height: 100%;
    }
    .hide .el-upload--picture-card {
      display: none;
    }
  }
</style>
