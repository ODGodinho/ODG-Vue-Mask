import directive from "./directive";

const ODGVueMask = (Vue) => {
  Vue.directive("odg-mask", directive);
};

if (typeof window !== "undefined" && window.Vue) {
  window.Vue.use(ODGVueMask);
}

export default ODGVueMask;