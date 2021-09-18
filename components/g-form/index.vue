<template>
  <el-form
    ref="form"
    class="el-row is-justify-space-between"
    :class="[flex ? 'el-row--flex' : '']"
    :model="formOption.formData"
    :rules="rules"
    :label-width="formOption.labelWidth || '80px'"
    :label-position="formOption.labelPosition || 'right'"
  >
    <template v-for="(item, key) in formOption.formList">
      <el-col v-if="item.type == 'slot'" :key="key" :span="item.span">
        <!-- solt -->
        <slot :name="key" />
      </el-col>
      <el-col v-else :key="key" :span="item.span">
        <el-form-item
          v-if="item.show === false ? false : true"
          :label="item.noLable ? '' : item.label"
          :prop="key"
          :class="item.className"
          :label-width="item.labelWidth"
        >
          <!-- solt -->
          <template v-if="item.slot">
            <slot :name="key" />
          </template>
          <!-- 普通输入框 -->
          <el-input
            v-else-if="item.type === 'input'"
            v-model="formOption.formData[key]"
            :type="item.type"
            :disabled="item.disabled"
            :placeholder="item.placeholder || getPlaceholder(item)"
            :style="{ width: item.width || '100%' }"
            @input="handleEvent(item, formOption.formData[key], key)"
            @change="handleEvent(item, formOption.formData[key], key)"
          ></el-input>
          <!-- 密码输入框 -->
          <template v-else-if="item.type === 'password'">
            <el-input
              ref="password"
              v-model="formOption.formData[key]"
              class="password"
              :type="passwordType || item.type"
              :disabled="item.disabled"
              :placeholder="getPlaceholder(item)"
              :style="{ width: item.width || '100%' }"
            >
              <g-icon
                slot="suffix"
                :icon="
                  passwordType === 'password' ? 'icon-eye' : 'icon-eye-open'
                "
                @click="showPwd"
              />
            </el-input>
          </template>
          <!-- 文本输入框 -->
          <el-input
            v-else-if="item.type === 'textarea'"
            v-model="formOption.formData[key]"
            :type="item.type"
            :maxlength="item.maxlength"
            :disabled="item.disabled"
            :placeholder="getPlaceholder(item)"
            :autosize="item.autosize || { minRows: 5, maxRows: 10 }"
            :show-word-limit="item.showWordLimit"
          />
          <!-- 计数器 -->
          <el-input-number
            v-else-if="item.type === 'inputNumber'"
            v-model="formOption.formData[key]"
            :min="item.min"
            :max="item.max"
            @change="handleEvent(item, formOption.formData[key], key)"
          />
          <!-- 级联选择器 -->
          <el-cascader
            v-else-if="item.type === 'cascader'"
            :ref="key"
            :key="dataSourceUpdate"
            v-model="formOption.formData[key]"
            :options="item.list"
            :props="item.props"
            clearable
            filterable
            :placeholder="getPlaceholder(item)"
            @change="handleEvent(item, formOption.formData[key], key)"
          />
          <!-- 选择器 -->
          <el-select
            v-else-if="item.type === 'select'"
            v-model="formOption.formData[key]"
            :disabled="item.disabled"
            :clearable="item.clearable"
            :filterable="item.filterable"
            :placeholder="getPlaceholder(item)"
            :multiple="item.multiple || false"
            @change="handleEvent(item, formOption.formData[key], key)"
          >
            <el-option
              v-for="(childItem, childIndex) in item.list"
              :key="childIndex"
              :label="childItem.name || childItem[item.props.label]"
              :value="childItem.id || childItem[item.props.value]"
            />
          </el-select>
          <!-- 多选框按钮组合 -->
          <el-checkbox-group
            v-else-if="item.type === 'checkbox-group'"
            v-model="formOption.formData[key]"
            class="checkbox-group"
            @change="handleEvent(item, formOption.formData[key], key)"
          >
            <el-checkbox-button
              v-for="(childItem, index) in item.list"
              :key="index"
              :label="childItem.id || childItem[item.props.value]"
            >
              {{ childItem.name || childItem[item.props.label] }}
            </el-checkbox-button>
          </el-checkbox-group>
          <!-- 单选框按钮组合 -->
          <el-radio-group
            v-else-if="item.type === 'radio-group'"
            v-model="formOption.formData[key]"
            @change="handleEvent(item, formOption.formData[key], key)"
          >
            <template v-if="item.button">
              <el-radio-button
                v-for="(childItem, index) in item.list"
                :key="index"
                :label="childItem.id || childItem[item.props.value]"
              >
                {{ childItem.name || childItem[item.props.label] }}
              </el-radio-button>
            </template>
            <template v-else>
              <el-radio
                v-for="(childItem, index) in item.list"
                :key="index"
                :label="childItem.id || childItem[item.props.value]"
              >
                {{ childItem.name || childItem[item.props.label] }}
              </el-radio>
            </template>
          </el-radio-group>
          <!-- 日期选择框 -->
          <el-date-picker
            v-else-if="item.type === 'date'"
            v-model="formOption.formData[key]"
            :type="item.dateType"
            :picker-options="item.TimePickerOptions"
            :clearable="item.clearable"
            :format="item.formatType"
            :disabled="item.disabled"
            :placeholder="getPlaceholder(item)"
            @focus="handleEvent(item, formOption.formData[key], key)"
          />
        </el-form-item>
      </el-col>
    </template>
  </el-form>
</template>

<script>
  export default {
    name: 'GForm',
    inheritAttrs: false,
    props: {
      formOption: {
        type: Object,
        required: true,
      },
      flex: {
        type: Boolean,
        default: false,
      },
    },
    data() {
      return {
        passwordType: 'password',
        dataSourceUpdate: 0,
      }
    },
    computed: {
      rules() {
        let newRules = {}
        try {
          let oldRules = this.formOption.rules || {}
          Object.keys(oldRules).forEach((e) => {
            let item = _.filter(this.formOption.formList, function (o, key) {
              if (key == e) {
                return o
              }
            })
            let message = this.getPlaceholder(item[0])
            let required = {
              required: oldRules[e],
              trigger: ['blur', 'change'],
              message,
            }
            if (typeof oldRules[e] == 'boolean') {
              newRules[e] = [required]
            } else {
              //validator 无法与reg和required共存
              newRules[e] = [
                {
                  ...required,
                  required: oldRules[e].required,
                  message: oldRules[e].requiredMsg
                    ? oldRules[e].requiredMsg
                    : message,
                },
                {
                  pattern: oldRules[e].reg,
                  message:
                    oldRules[e].regMsg || this.getRegPlaceholder(item[0]),
                  trigger: ['blur', 'change'],
                },
                {
                  validator: oldRules[e].validator,
                  trigger: ['blur', 'change'],
                },
              ]
              oldRules[e].required ? '' : newRules[e].splice(0, 1)
            }
          })
        } catch (error) {}
        return newRules
      },
    },
    watch: {
      'formOption.formList': {
        handler(n, o) {
          this.dataSourceUpdate++
        },
        deep: true,
      },
    },
    mounted() {
      this.$emit('update:refObj', this.$refs.form)
    },
    methods: {
      // 得到placeholder的提示
      getPlaceholder(row) {
        let inputArr = ['input', 'textarea', 'password']
        let selectArr = ['select', 'time', 'date', 'cascader']
        let placeholder
        if (inputArr.includes(row.type)) {
          placeholder = '请输入' + row.label
        } else if (selectArr.includes(row.type)) {
          placeholder = '请选择' + row.label
        } else {
          placeholder = '请选择' + row.label
        }
        return placeholder
      },
      // 得到正则验证的提示
      getRegPlaceholder(row) {
        let placeholder
        let type = ['input', 'textarea', 'password']
        placeholder = '请输入正确的' + row.label
        return placeholder
      },
      // 绑定的相关事件
      handleEvent(item, data, key) {
        switch (item.type) {
          case 'select':
            data = item.list.find((e) => {
              return (e.id || e[item.props.value]) == data
            })
            this.$emit('handleEvent', { key, data, row: item })
            break
          case 'cascader':
            this.$nextTick(() => {
              let checkNodes = this.$refs[key][0].getCheckedNodes()[0]
              if (checkNodes) {
                this.$emit('handleEvent', {
                  key,
                  data: {
                    valus: checkNodes.path,
                    labels: checkNodes.pathLabels,
                  },
                  row: item,
                })
              }
            })
            break

          default:
            this.$emit('handleEvent', { key, data, row: item })
            break
        }
      },
      showPwd() {
        if (this.passwordType === 'password') {
          this.passwordType = 'input'
        } else {
          this.passwordType = 'password'
        }
      },
      /**
       * 描述 清除表单数据
       */
      resetForm() {
        this.formOption.ref.clearValidate()
        this.formOption.ref.resetFields()
        _.forEach(this.formOption.formData, (value, key) => {
          let item = _.filter(this.formOption.formList, function (e, key2) {
            return key2 == key
          })
          if (item.length) {
            let otherReset = ['checkbox-group', 'upload']
            if (otherReset.includes(item[0].type)) {
              this.formOption.formData[key] = []
            } else {
              this.formOption.formData[key] = ''
            }
          }
        })
      },
    },
  }
</script>

<style lang="scss" scoped>
  ::v-deep {
    .show-pwd {
      position: absolute;
      top: 7px;
      right: 10px;
      font-size: 16px;
      color: #ccc;
      cursor: pointer;
      user-select: none;
    }
    .password {
      .el-input__suffix-inner {
        line-height: 32px;
      }
    }
    .svg-icon {
      width: 18px !important;
      height: 18px !important;
    }
  }
</style>
