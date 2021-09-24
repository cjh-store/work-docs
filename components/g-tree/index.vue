<template>
  <div class="tree">
    <div v-if="showSearch" class="header">
      <el-input
        v-model="filterText"
        placeholder="请输入内容"
        prefix-icon="el-icon-search"
        class="searchInput"
      ></el-input>
      <slot name="head"></slot>
    </div>
    <el-tree
      :ref="treeName"
      :data="treeData"
      :props="defaultProps"
      :filter-node-method="filterNode"
      :node-key="nodeKey"
      :highlight-current="highlightCurrent"
      :expand-on-click-node="false"
      :style="{ width, border: border ? `1px solid #DCDFE6` : 'none' }"
      v-bind="$attrs"
      @node-click="handleNodeClick"
      @check="setSelectedNode"
      v-on="$listeners"
    >
      <span slot-scope="{ node, data }" class="custom-tree-node">
        <slot name="body" :node="node" :data="data">
          <span>{{ node.label }}</span>
        </slot>
      </span>
    </el-tree>
  </div>
</template>

<script>
  export default {
    name: 'GTree',
    inheritAttrs: false,
    props: {
      treeName: {
        type: String,
        default: 'tree',
      },
      width: {
        type: String,
        default: '100%',
      },
      treeData: {
        type: Array,
        default: () => {
          return []
        },
      },
      border: {
        type: Boolean,
        default: false,
      },
      // 多选
      multiple: {
        type: Boolean,
        default: false,
      },
      max: {
        type: [Number, String],
        default: '',
      },
      // 显示搜索
      showSearch: {
        type: Boolean,
        default: false,
      },
      nodeKey: {
        type: String,
        default: 'id',
      },
      defaultProps: {
        type: Object,
        default() {
          return {
            children: 'children',
            label: 'name',
          }
        },
      },
      // 是否高亮当前行
      highlightCurrent: {
        type: Boolean,
        default: false,
      },
    },
    data() {
      return {
        filterText: '',
      }
    },
    watch: {
      filterText(val) {
        this.$refs[this.treeName].filter(val)
      },
    },
    mounted() {},
    methods: {
      // 节点被点击时的回调
      handleNodeClick(data, node) {
        this.$emit('handleNodeClick', data, node)
      },
      // 搜索筛选
      filterNode(value, node) {
        if (!value) return true

        return node[this.defaultProps.label].includes(value)
      },
      // 单选
      setSelectedNode(data, obj) {
        if (this.multiple) {
          let length = obj.checkedKeys.length
          if (this.max && length > this.max) {
            this._.remove(obj.checkedKeys, (n, index) => {
              return n == data[this.nodeKey]
            })
            this.$msg(`最多选择${this.max}个`, 'warning')
            this.$refs[this.treeName].setCheckedKeys(obj.checkedKeys)
          }
          return
        }
        if (obj.checkedNodes.length) {
          this.$refs[this.treeName].setCheckedNodes([data])
        }
      },
      // 通过key设置回填 默认id  key为数组 里面多个字符串或数字
      setCheckedKeys(key) {
        this.$refs[this.treeName].setCheckedKeys(key)
      },
      // 获取选中的节点数据 leafOnly,leafOnly是否只是叶子节点
      getCheckedData(leafOnly = true) {
        let keys = this.$refs[this.treeName].getCheckedKeys(leafOnly)

        let nodes = this.$refs[this.treeName].getCheckedNodes(leafOnly)
        // 半选状态父级的值
        /*   let semiSelective = this.$refs[this.treeName].getHalfCheckedKeys()
        keys = [...new Set([...keys, ...semiSelective])] */
        return { keys, nodes }
      },
      // 通过node设置  node为数组 数组里是多个对象
      setCheckedNodes(node) {
        this.$refs[this.treeName].setCheckedNodes(node)
      },
    },
  }
</script>

<style lang="scss" scoped>
  .header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;
  }
  .el-tree {
    width: 100%;
    height: 100%;
  }
  .tree {
    padding-top: 5px;
  }

  .custom-tree-node {
    display: flex;
    align-items: center;
  }
</style>
