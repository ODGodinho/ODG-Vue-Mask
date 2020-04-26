/* eslint-disable valid-typeof */
import ODGMask from "@odg/odg-mask";
import Vue from "vue";
/**
 * Find v-model no input
 * @param {import("vue/types/umd").VNode} vnode VNode
 * @returns {string} text
 */
const findElementVueRef = function (vnode) {
  let model = null;
  let text = null;

  vnode.data.directives.forEach((o) => {
    if (o.name === "model") model = o.expression;
    if (o.name === "text") text = o.expression;
  });

  return model ? model : text;
};

/**
 * Verifica se uma variavel é um object
 * @param {any} $var Variavel a ser verificada
 */
const isObject = function ($var) {
  if (!$var && !(typeof $var === "array" || $var instanceof Array)) return false;

  return (
    typeof $var === "object" || $var instanceof Object || Object.is($var)
  );
};

/**
 * 
 * @param {String|Object} model 
 */
const getModelName = function (model) {
  if (typeof model === 'string' && model.endsWith('.value')) {
    return model.substr(0, model.lastIndexOf(".value"));
  }
  return model;
}
/**
 *
 * @param {HTMLElement} el Elemento html
 * @param {import("vue").DirectiveFunction} direc directive function vuejs
 * @param {import("vue/types/umd").VNode} vNodeNew VNode vuejs
 */
const updateMaskDirective = function (el, direc, vNodeNew) {

  const model = findElementVueRef(vNodeNew);

  if (!direc.value) return;

  if (!model) {
    updateMaskInputEvent(el, direc, vNodeNew);
    return;
  }

  const modelName = getModelName(model);
  const currentModel = vNodeNew.context[ modelName ];
  const useObject = isObject(currentModel);

  let currentValue = currentModel;

  if (useObject) {
    currentValue = currentModel.value;
  }

  let options = vNodeNew.data.attrs ? vNodeNew.data.attrs['odg-mask-options'] : {};

  const mask = ODGMask(String(currentValue), direc.value, { ...options, el: el });
  let changed = false;

  if (!mask) return;

  if (useObject) {
    if (String(currentModel.value) !== mask.value || currentModel.valid !== mask.valid || currentModel.unmasked !== mask.unmasked) {
      vNodeNew.context[ modelName ] = Object.assign({}, vNodeNew.context[ modelName ], mask);
      changed = true;
    }
  } else if (String(currentModel) !== mask.value) {
    vNodeNew.context[ modelName ] = mask.value;
    changed = true;
  }

  if (el === document.activeElement && changed) {
    el.selectionStart = mask.newPosition;
    el.selectionEnd = mask.newPosition;
    Vue.nextTick(() => {
      el.selectionStart = mask.newPosition;
      el.selectionEnd = mask.newPosition;
    });
  }

};

/**
 *
 * @param {HTMLElement} el Elemento html
 * @param {import("vue").DirectiveFunction} direc directive function vuejs
 * @param {import("vue/types/umd").VNode} vNodeNew VNode vuejs
 */
const updateMaskInputEvent = function (el, direc, vNodeNew) {

  let currentValue = el.innerText;
  let eventType = document.activeElement === el ? 'input' : 'change';

  if (el.tagName == 'INPUT') currentValue = el.value;
  currentValue = String(currentValue);

  let options = vNodeNew.data.attrs ? vNodeNew.data.attrs[ 'odg-mask-options' ] : {};
  
  const mask = ODGMask(currentValue, direc.value, { ...options, el: el });

  if (!mask) return;
  if (currentValue === mask.value) return;

  if (el.tagName == 'INPUT') { 
    el.value = mask.value;
    
    el.selectionStart = mask.newPosition;
    el.selectionEnd = mask.newPosition;
    const e = document.createEvent('Event');
    e.initEvent(eventType, true, true);
    el.dispatchEvent(e);
  } else {
    el.innerText = mask.value;
  }

}


export {
  findElementVueRef, isObject, updateMaskDirective
};