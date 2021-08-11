/**
 * @description 判读是否为外链
 * @param path
 * @returns {boolean}
 */
 export function isExternal(path) {
    return /^(https?:|mailto:|tel:)/.test(path)
  }
  
  /**
   * @description 判读是否为icon-开头
   * @param path
   * @returns {boolean}
   */
  export function isSvg(path) {
    return /^icon-/.test(path)
  }