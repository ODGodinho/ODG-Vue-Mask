/* eslint-disable sort-keys */

import {
  updateMaskDirective
} from "./helpers";

export default {
  acceptStatement: true,
  twoWay: true,

  /**
   *
   * @param {HTMLElement} el
   * @param {import("vue").DirectiveFunction} direc
   * @param {import("vue/types/umd").VNode} vNodeNew
   */
  bind: function (el, direc, vNodeNew) {
    updateMaskDirective(el, direc, vNodeNew);
  },

  /**
   * Quando o elemento com a diretiva for atualizado
   *
   * @param {HTMLElement} el
   * @param {import("vue").DirectiveFunction} direc
   * @param {import("vue/types/umd").VNode} vNodeNew
   */
  update: function (el, direc, vNodeNew) {
    updateMaskDirective(el, direc, vNodeNew);
  },
};