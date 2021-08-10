/* 自动注册组件 */
let components = [];
const ctx = require.context(".", true, /index\.vue$/);
ctx
  .keys()
  .filter((path) => /^\.\/g/g.test(path)) //G开头即全局组件
  .forEach((path) => {
    const module = ctx(path);

    // 兼容 import export 和 require module.export 两种规范

    const component = module.default || module;
    components.push({ name: component.name, component: component });
  });

  export default components;