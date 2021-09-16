<template>
  <div class="base-dialog">
    <el-dialog
      :title="title"
      :visible="dialogVisible"
      :width="`${width}`"
      :center="center"
      v-bind="$attrs"
      @close="closeDialog"
      @open="openDialog"
      v-on="$listeners"
    >
      <slot name="body"></slot>
      <div slot="footer" class="dialog-footer">
        <slot v-if="showFooter" name="footer">
          <div
            class="button-group"
            :style="`justify-content:${center ? 'center' : buttonPositioning}`"
          >
            <el-button
              :class="[center ? 'cancelCenter' : 'cancel']"
              @click="cancel"
            >
              {{ cancelName }}
            </el-button>
            <el-button type="primary" @click="confirm">
              {{ confirmName }}
            </el-button>
          </div>
        </slot>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import _ from 'lodash'
import $tool from '../../utils/tool'
  export default {
    name: 'GDialog',
    inheritAttrs: false,
    props: {
      dialogVisible: {
        type: Boolean,
      },
      title: {
        type: String,
      },
      // 可百分比或px
      width: {
        type: String,
        default: '500px',
      },
      showFooter: {
        type: Boolean,
        default: true,
      },
      center: {
        type: Boolean,
        default: false,
      },
      form: {
        type: Object,
        default: () => {},
      },
      // 是否自动关闭
      isAutoClose: {
        type: Boolean,
        default: true,
      },
      buttonPositioning: {
        type: String,
        default: 'flex-end;', // flex-start  center  用于控制按钮定位
      },
      confirmName: {
        type: String,
        default: '确定', // 按钮名
      },
      cancelName: {
        type: String,
        default: '取消',
      },
    },
    watch: {},
    methods: {
      openDialog() {
        console.log('2 => ', 2)
        console.log('$tool.isEmpty(this.form) => ', $tool.isEmpty(this.form))
        if (!$tool.isEmpty(this.form)) {
          console.log('1 => ', 1)
          this.$nextTick(() => {
            this.form.ref.clearValidate()
          })
        }
      },
      confirm() {
        const formData = _.cloneDeep(this.form?.formData)
        if (!$tool.isEmpty(this.form)) {
          this.form.ref.validate((valid) => {
            if (valid) {
              this.$emit('confirm', formData)
            } else {
              return false
            }
          })
        } else {
          this.$emit('confirm', formData)
        }
      },
      cancel() {
        if (this.isAutoClose) this.$emit('update:dialogVisible', false)
        this.$emit('cancel')
      },
      closeDialog() {
        this.$emit('close')
        if (!$tool.isEmpty(this.form)) {
          this.form.ref.clearValidate()
          this.form.ref.resetFields()
          _.forEach(this.form.formData, (value, key) => {
            let item = _.filter(this.form.formList, function (e, key2) {
              return key2 == key
            })
            if (item.length) {
              let otherReset = ['checkbox-group', 'upload']
              if (otherReset.includes(item[0].type)) {
                this.form.formData[key] = []
              } else {
                this.form.formData[key] = ''
              }
            }
          })
          if (this.isAutoClose) this.$emit('update:dialogVisible', false)
        } else {
          if (this.isAutoClose) this.$emit('update:dialogVisible', false)
        }
      },
    },
  }
</script>

<style lang="scss" scoped>
  .button-group {
    display: flex;
    .el-button + .el-button {
      margin-left: 20px;
    }
  }

  .base-dialog {
    >>> .el-dialog {
      border-radius: 10px;
    }
  }
</style>
