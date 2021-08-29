<template>
  <el-image v-if="isExternal" :src="icon" class="img-icon" v-on="$listeners" />
  <!-- <svg
    v-else-if="isSvg"
    :style="{ color }"
    :class="['g-icon', icon, 'w-' + size, 'h-' + size]"
    aria-hidden="true"
    v-on="$listeners"
  >
    <use :xlink:href="'#' + icon" />
  </svg> -->
  <span
    v-else-if="isSvg"
    :class="['g-icon', 'iconfont', icon]"
    :style="{ fontSize: size + 'px',color }"
  ></span>
  <i
    v-else
    :style="{ color }"
    :class="['ri-' + icon, icon, 'f-' + size]"
    aria-hidden="true"
    v-on="$listeners"
  ></i>
</template>

<script>
/**
 * 以http开头的默认为图片
 * 以icon-开头的默认svg
 * 否则使用remix-icon图标
 */
import "remixicon/fonts/remixicon.css";
import { isExternal, isSvg } from "../../utils/validate";

export default {
  name: "GIcon",
  props: {
    icon: {
      type: String,
      required: true,
    },
    size: {
      type: [String, Number],
    },
    color: {
      type: String,
    },
    className: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      remixIconPath: require("remixicon/fonts/remixicon.symbol.svg"),
    };
  },
  computed: {
    isExternal() {
      return isExternal(this.icon);
    },

    isSvg() {
      return isSvg(this.icon);
    },
    svgClass() {
      if (this.className) {
        return "g-icon " + this.className;
      } else {
        return "g-icon";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.img-icon {
  display: inline-block;
  width: 2em;
  height: 2em;
  vertical-align: middle;
}

.g-icon {
  display: inline-block;
  margin: 0 auto;
  overflow: hidden;
  vertical-align: middle;
  fill: currentColor;
}

[class*="ri"] {
  display: inline-block;
  font-size: 16px;
  text-align: center;
  vertical-align: -3.5px;
}
</style>
