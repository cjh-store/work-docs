<template>
  <div>{{msg}}</div>
</template>

<script>
export default {
  name: "GDialog",
  props: {
    msg: {
      type: String,
      default: "GDialog",
    },
  },
};
</script>

<style lang="scss" scoped></style>
