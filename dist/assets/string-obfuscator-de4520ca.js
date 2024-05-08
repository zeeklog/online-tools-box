import { b as useCopy, e as __unplugin_components_3, c as __unplugin_components_1, a as __unplugin_components_0, n as __unplugin_components_5 } from '../entry-server.js';
import { NInputNumber, NSwitch } from 'naive-ui';
import { computed, defineComponent, ref, unref, isRef, withCtx, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { get } from '@vueuse/core';
import '@vue/server-renderer';
import '@css-render/vue3-ssr';
import 'pinia';
import '@vueuse/head';
import 'lodash';
import 'figue';
import 'vue-router';
import '@vicons/tabler';
import 'date-fns';
import 'vue-i18n/dist/vue-i18n.runtime.esm-bundler.js';
import '@vicons/material';
import 'fuse.js';
import 'marked';
import 'dompurify';

function obfuscateString(str, { replacementChar = "*", keepFirst = 4, keepLast = 0, keepSpace = true } = {}) {
  return str.split("").map((char, index, array) => {
    if (keepSpace && char === " ") {
      return char;
    }
    return index < keepFirst || index >= array.length - keepLast ? char : replacementChar;
  }).join("");
}
function useObfuscateString(str, config = {}) {
  return computed(() => obfuscateString(
    get(str),
    {
      replacementChar: get(config.replacementChar),
      keepFirst: get(config.keepFirst),
      keepLast: get(config.keepLast),
      keepSpace: get(config.keepSpace)
    }
  ));
}

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "string-obfuscator",
  __ssrInlineRender: true,
  setup(__props) {
    const str = ref("Lorem ipsum dolor sit amet");
    const keepFirst = ref(4);
    const keepLast = ref(4);
    const keepSpace = ref(true);
    const obfuscatedString = useObfuscateString(str, { keepFirst, keepLast, keepSpace });
    const { copy } = useCopy({ source: obfuscatedString });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_c_input_text = __unplugin_components_3;
      const _component_n_input_number = NInputNumber;
      const _component_n_switch = NSwitch;
      const _component_c_card = __unplugin_components_1;
      const _component_c_button = __unplugin_components_0;
      const _component_icon_mdi58content_copy = __unplugin_components_5;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_c_input_text, {
        value: unref(str),
        "onUpdate:value": ($event) => isRef(str) ? str.value = $event : null,
        "raw-text": "",
        placeholder: "Enter string to obfuscate",
        label: "String to obfuscate:",
        clearable: "",
        multiline: ""
      }, null, _parent));
      _push(`<div mt-4 flex gap-10px><div><div>Keep first:</div>`);
      _push(ssrRenderComponent(_component_n_input_number, {
        value: unref(keepFirst),
        "onUpdate:value": ($event) => isRef(keepFirst) ? keepFirst.value = $event : null,
        min: "0"
      }, null, _parent));
      _push(`</div><div><div>Keep last:</div>`);
      _push(ssrRenderComponent(_component_n_input_number, {
        value: unref(keepLast),
        "onUpdate:value": ($event) => isRef(keepLast) ? keepLast.value = $event : null,
        min: "0"
      }, null, _parent));
      _push(`</div><div><div mb-5px> Keep spaces: </div>`);
      _push(ssrRenderComponent(_component_n_switch, {
        value: unref(keepSpace),
        "onUpdate:value": ($event) => isRef(keepSpace) ? keepSpace.value = $event : null
      }, null, _parent));
      _push(`</div></div>`);
      if (unref(obfuscatedString)) {
        _push(ssrRenderComponent(_component_c_card, {
          "mt-60px": "",
          "max-w-600px": "",
          flex: "",
          "items-center": "",
          "gap-5px": "",
          "font-mono": ""
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div break-anywhere text-wrap${_scopeId}>${ssrInterpolate(unref(obfuscatedString))}</div>`);
              _push2(ssrRenderComponent(_component_c_button, {
                onClick: ($event) => unref(copy)()
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_icon_mdi58content_copy, null, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_icon_mdi58content_copy)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode("div", {
                  "break-anywhere": "",
                  "text-wrap": ""
                }, toDisplayString(unref(obfuscatedString)), 1),
                createVNode(_component_c_button, {
                  onClick: ($event) => unref(copy)()
                }, {
                  default: withCtx(() => [
                    createVNode(_component_icon_mdi58content_copy)
                  ]),
                  _: 1
                }, 8, ["onClick"])
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/tools/string-obfuscator/string-obfuscator.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
