<template>
  <div class="m-t-20">
    <vxe-pager
      auto-hidden
      border
      :align="align"
      :current-page.sync="pageOption.page"
      :page-size.sync="pageOption.page_size"
      :total="pageOption.total"
      background
      :layouts="layouts"
      @page-change="pageChange"
    ></vxe-pager>
  </div>
</template>

<script>
  export default {
    name: 'GPage',
    props: {
      align: {
        type: String,
        default: 'center',
      },
      pageOption: {
        type: Object,
        default: () => {
          return { page: 1, page_size: 10, total: 200 }
        },
      },
      layouts: {
        type: Array,
        default: () => [
          'PrevJump',
          'PrevPage',
          'Number',
          'NextPage',
          'NextJump',
          'FullJump',
          'Total',
        ],
      },
    },
    data() {
      return {}
    },
    created() {},
    methods: {
      pageChange(event) {
        this.$emit('change', event)
      },
    },
  }
</script>

<style lang="scss" scoped>
  ::v-deep {
    .is--active {
      background: #1890ff !important;
    }
  }
</style>
