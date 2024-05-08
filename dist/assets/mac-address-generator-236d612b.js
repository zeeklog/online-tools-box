import { b as useCopy, e as __unplugin_components_3, l as _sfc_main$1, c as __unplugin_components_1, a as __unplugin_components_0 } from '../entry-server.js';
import { NInputNumber } from 'naive-ui';
import { defineComponent, ref, mergeProps, unref, isRef, withCtx, createVNode, toDisplayString, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import _ from 'lodash';
import { c as computedRefreshable } from './computedRefreshable-cc665c88.js';
import { u as usePartialMacAddressValidation } from './macAddress-07e77b49.js';
import { useStorage } from '@vueuse/core';
import '@vue/server-renderer';
import '@css-render/vue3-ssr';
import 'pinia';
import '@vueuse/head';
import 'figue';
import 'vue-router';
import '@vicons/tabler';
import 'date-fns';
import 'vue-i18n/dist/vue-i18n.runtime.esm-bundler.js';
import '@vicons/material';
import 'fuse.js';
import 'marked';
import 'dompurify';

function splitPrefix(prefix) {
  const base = prefix.match(/[^0-9a-f]/i) === null ? prefix.match(/.{1,2}/g) ?? [] : prefix.split(/[^0-9a-f]/i);
  return base.filter(Boolean).map((byte) => byte.padStart(2, "0"));
}
function generateRandomMacAddress({ prefix: rawPrefix = "", separator = ":", getRandomByte = () => _.random(0, 255).toString(16).padStart(2, "0") } = {}) {
  const prefix = splitPrefix(rawPrefix);
  const randomBytes = _.times(6 - prefix.length, getRandomByte);
  const bytes = [...prefix, ...randomBytes];
  return bytes.join(separator);
}

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "mac-address-generator",
  __ssrInlineRender: true,
  setup(__props) {
    const amount = useStorage("mac-address-generator-amount", 1);
    const macAddressPrefix = useStorage("mac-address-generator-prefix", "64:16:7F");
    const prefixValidation = usePartialMacAddressValidation(macAddressPrefix);
    const casesTransformers = [
      { label: "Uppercase", value: (value) => value.toUpperCase() },
      { label: "Lowercase", value: (value) => value.toLowerCase() }
    ];
    const caseTransformer = ref(casesTransformers[0].value);
    const separators = [
      {
        label: ":",
        value: ":"
      },
      {
        label: "-",
        value: "-"
      },
      {
        label: ".",
        value: "."
      },
      {
        label: "None",
        value: ""
      }
    ];
    const separator = useStorage("mac-address-generator-separator", separators[0].value);
    const [macAddresses, refreshMacAddresses] = computedRefreshable(() => {
      if (!prefixValidation.isValid) {
        return "";
      }
      const ids = _.times(amount.value, () => caseTransformer.value(generateRandomMacAddress({
        prefix: macAddressPrefix.value,
        separator: separator.value
      })));
      return ids.join("\n");
    });
    const { copy } = useCopy({ source: macAddresses, text: "MAC addresses copied to the clipboard" });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_n_input_number = NInputNumber;
      const _component_c_input_text = __unplugin_components_3;
      const _component_c_buttons_select = _sfc_main$1;
      const _component_c_card = __unplugin_components_1;
      const _component_c_button = __unplugin_components_0;
      _push(`<div${ssrRenderAttrs(mergeProps({
        flex: "",
        "flex-col": "",
        "justify-center": "",
        "gap-2": ""
      }, _attrs))}><div flex items-center><label w-150px pr-12px text-right> Quantity:</label>`);
      _push(ssrRenderComponent(_component_n_input_number, {
        value: unref(amount),
        "onUpdate:value": ($event) => isRef(amount) ? amount.value = $event : null,
        min: "1",
        max: "100",
        "flex-1": ""
      }, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_c_input_text, {
        value: unref(macAddressPrefix),
        "onUpdate:value": ($event) => isRef(macAddressPrefix) ? macAddressPrefix.value = $event : null,
        label: "MAC address prefix:",
        placeholder: "Set a prefix, e.g. 64:16:7F",
        clearable: "",
        "label-position": "left",
        spellcheck: "false",
        validation: unref(prefixValidation),
        "raw-text": "",
        "label-width": "150px",
        "label-align": "right"
      }, null, _parent));
      _push(ssrRenderComponent(_component_c_buttons_select, {
        value: unref(caseTransformer),
        "onUpdate:value": ($event) => isRef(caseTransformer) ? caseTransformer.value = $event : null,
        options: casesTransformers,
        label: "Case:",
        "label-width": "150px",
        "label-align": "right"
      }, null, _parent));
      _push(ssrRenderComponent(_component_c_buttons_select, {
        value: unref(separator),
        "onUpdate:value": ($event) => isRef(separator) ? separator.value = $event : null,
        options: separators,
        label: "Separator:",
        "label-width": "150px",
        "label-align": "right"
      }, null, _parent));
      _push(ssrRenderComponent(_component_c_card, {
        "mt-5": "",
        flex: "",
        "data-test-id": "ulids"
      }, {
        default: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<pre m-0 m-x-auto${_scopeId}>${ssrInterpolate(unref(macAddresses))}</pre>`);
          } else {
            return [
              createVNode("pre", {
                "m-0": "",
                "m-x-auto": ""
              }, toDisplayString(unref(macAddresses)), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div flex justify-center gap-2>`);
      _push(ssrRenderComponent(_component_c_button, {
        "data-test-id": "refresh",
        onClick: ($event) => unref(refreshMacAddresses)()
      }, {
        default: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Refresh `);
          } else {
            return [
              createTextVNode(" Refresh ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_c_button, {
        onClick: ($event) => unref(copy)()
      }, {
        default: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Copy `);
          } else {
            return [
              createTextVNode(" Copy ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
});

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/tools/mac-address-generator/mac-address-generator.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
