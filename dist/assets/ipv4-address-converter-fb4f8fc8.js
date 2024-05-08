import { _ as _sfc_main$1 } from './InputCopyable-2bc098e2.js';
import { NDivider } from 'naive-ui';
import { u as useValidation, e as __unplugin_components_3 } from '../entry-server.js';
import { defineComponent, computed, unref, isRef, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList } from 'vue/server-renderer';
import { c as convertBase } from './integer-base-converter.model-5f44352e.js';
import { i as ipv4ToInt, b as ipv4ToIpv6, a as isValidIpv4 } from './ipv4-address-converter.service-7b2d32fe.js';
import { useStorage } from '@vueuse/core';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ipv4-address-converter",
  __ssrInlineRender: true,
  setup(__props) {
    const rawIpAddress = useStorage("ipv4-converter:ip", "192.168.1.1");
    const convertedSections = computed(() => {
      const ipInDecimal = ipv4ToInt({ ip: rawIpAddress.value });
      return [
        {
          label: "Decimal: ",
          value: String(ipInDecimal)
        },
        {
          label: "Hexadecimal: ",
          value: convertBase({ fromBase: 10, toBase: 16, value: String(ipInDecimal) }).toUpperCase()
        },
        {
          label: "Binary: ",
          value: convertBase({ fromBase: 10, toBase: 2, value: String(ipInDecimal) })
        },
        {
          label: "Ipv6: ",
          value: ipv4ToIpv6({ ip: rawIpAddress.value })
        },
        {
          label: "Ipv6 (short): ",
          value: ipv4ToIpv6({ ip: rawIpAddress.value, prefix: "::ffff:" })
        }
      ];
    });
    const { attrs: validationAttrs } = useValidation({
      source: rawIpAddress,
      rules: [{ message: "Invalid ipv4 address", validator: (ip) => isValidIpv4({ ip }) }]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_c_input_text = __unplugin_components_3;
      const _component_n_divider = NDivider;
      const _component_input_copyable = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_c_input_text, {
        value: unref(rawIpAddress),
        "onUpdate:value": ($event) => isRef(rawIpAddress) ? rawIpAddress.value = $event : null,
        label: "The ipv4 address:",
        placeholder: "The ipv4 address..."
      }, null, _parent));
      _push(ssrRenderComponent(_component_n_divider, null, null, _parent));
      _push(`<!--[-->`);
      ssrRenderList(unref(convertedSections), ({ label, value }) => {
        _push(ssrRenderComponent(_component_input_copyable, {
          key: label,
          label,
          "label-position": "left",
          "label-width": "100px",
          "label-align": "right",
          "mb-2": "",
          value: unref(validationAttrs).validationStatus === "error" ? "" : value,
          placeholder: "Set a correct ipv4 address"
        }, null, _parent));
      });
      _push(`<!--]--></div>`);
    };
  }
});

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/tools/ipv4-address-converter/ipv4-address-converter.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
