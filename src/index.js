import directive from "./directive";

const ODGVueMask = (Vue) => {
  Vue.directive("odg-mask", directive);
};

let GlobalVue = null;

if (typeof window !== "undefined" && window.Vue) {
  GlobalVue = window.Vue;
} else if (typeof global !== "undefined" && global.Vue) {
  GlobalVue = global.Vue;
}
if (GlobalVue) {
  GlobalVue.use(ODGVueMask);
}

export default ODGVueMask;