<template>
  <div>
    <vxe-table
      ref="table"
      :align="align"
      :header-align="align"
      :data="tableOption.tableData"
      :border="border"
      highlight-hover-row
      v-bind="$attrs"
      :scroll-y="{ enabled: false }"
      :filter-config="{ remote: true }"
      v-on="$listeners"
      @sort-change="sortChangeEvent"
    >
      <vxe-table-column v-if="expand" type="expand" width="60">
        <template #content="{ row }">
          <slot name="expand" :row="row"></slot>
        </template>
      </vxe-table-column>
      <template v-for="(item, key) in tableOption.column">
        <vxe-table-column
          :key="key"
          :field="getFiled(item.prop)"
          :title="item.label"
          :align="item.align || align"
          :width="item.width || ''"
          :show-overflow="item.tooltip || false"
          :sortable="item.sort"
          :tree-node="item.treeNode"
          :formatter="item.formatter"
          :fixed="item.fixed ? 'left' : ''"
          :filters="item.filters"
          :filter-multiple="!item.noMultiple"
        >
          <template v-if="item.slotHeader" #header="{ column, columnIndex }">
            <slot
              :name="slotName(item.prop) + 'Header'"
              :column="column"
              :columnIndex="columnIndex"
            ></slot>
          </template>
          <template v-if="item.slot" #default="{ row }">
            <slot :name="slotName(item.prop)" :row="row"></slot>
          </template>
        </vxe-table-column>
      </template>
    </vxe-table>
  </div>
</template>

<script>
  export default {
    name: 'GTable',
    inheritAttrs: false,
    props: {
      tableOption: {
        type: Object,
      },
      align: {
        type: String,
        default: 'left',
      },
      expand: {
        type: Boolean,
        default: false,
      },
      border: {
        type: [String, Boolean],
        default: 'inner',
      },
      isBaseHeight: {
        type: Boolean,
        default: true,
      },
    },
    created() {},
    mounted() {
      this.tableOption.ref = this.$refs.table
    },
    methods: {
      sortChangeEvent({ sortList }) {},
      // 展开所有行
      unfoldingAllLines() {
        this.$nextTick(() => this.$refs.table.setAllTreeExpand(true))
      },
      getFiled(prop) {
        return prop
      },
      slotName(prop) {
        prop = prop.split('.')
        let name = ''
        prop.forEach((e, index) => {
          if (index > 0) {
            let str = e.toLowerCase().replace(/(?:^|\s)\w/g, function (c) {
              return c.toUpperCase()
            })
            name += str
          } else {
            name += e
          }
        })
        return name
      },
      /* 刷新列配置（对于动态修改属性、显示/隐藏列等场景下可能会用到） */
      refreshColumn() {
        this.$refs.table.refreshColumn(this.tableOption.column)
      },
    },
  }
</script>

<style lang="scss" scoped></style>
