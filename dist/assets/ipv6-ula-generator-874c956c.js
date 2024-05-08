import { e as __unplugin_components_3 } from '../entry-server.js';
import { NAlert } from 'naive-ui';
import { defineComponent, ref, computed, withCtx, createTextVNode, unref, isRef, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList } from 'vue/server-renderer';
import { SHA1 } from 'crypto-js';
import { _ as _sfc_main$1 } from './InputCopyable-2bc098e2.js';
import { m as macAddressValidation } from './macAddress-07e77b49.js';
import '@vue/server-renderer';
import '@css-render/vue3-ssr';
import 'pinia';
import '@vueuse/head';
import 'lodash';
import 'figue';
import 'vue-router';
import '@vicons/tabler';
import '@vueuse/core';
import 'date-fns';
import 'vue-i18n/dist/vue-i18n.runtime.esm-bundler.js';
import '@vicons/material';
import 'fuse.js';
import 'marked';
import 'dompurify';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ipv6-ula-generator",
  __ssrInlineRender: true,
  setup(__props) {
    const macAddress = ref("20:37:06:12:34:56");
    const calculatedSections = computed(() => {
      const timestamp = (/* @__PURE__ */ new Date()).getTime();
      const hex40bit = SHA1(timestamp + macAddress.value).toString().substring(30);
      const ula = `fd${hex40bit.substring(0, 2)}:${hex40bit.substring(2, 6)}:${hex40bit.substring(6)}`;
      return [
        {
          label: "IPv6 ULA:",
          value: `${ula}::/48`
        },
        {
          label: "First routable block:",
          value: `${ula}:0::/64`
        },
        {
          label: "Last routable block:",
          value: `${ula}:ffff::/64`
        }
      ];
    });
    const addressValidation = macAddressValidation(macAddress);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_n_alert = NAlert;
      const _component_c_input_text = __unplugin_components_3;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_n_alert, {
        title: "Info",
        type: "info"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` This tool uses the first method suggested by IETF using the current timestamp plus the mac address, sha1 hashed, and the lower 40 bits to generate your random ULA. `);
          } else {
            return [
              createTextVNode(" This tool uses the first method suggested by IETF using the current timestamp plus the mac address, sha1 hashed, and the lower 40 bits to generate your random ULA. ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_c_input_text, {
        value: unref(macAddress),
        "onUpdate:value": ($event) => isRef(macAddress) ? macAddress.value = $event : null,
        placeholder: "Type a MAC address",
        clearable: "",
        label: "MAC address:",
        "raw-text": "",
        "my-8": "",
        validation: unref(addressValidation)
      }, null, _parent));
      if (unref(addressValidation).isValid) {
        _push(`<div><!--[-->`);
        ssrRenderList(unref(calculatedSections), ({ label, value }) => {
          _push(ssrRenderComponent(_sfc_main$1, {
            key: label,
            value,
            label,
            "label-width": "160px",
            "label-align": "right",
            "label-position": "left",
            readonly: "",
            "mb-2": ""
          }, null, _parent));
        });
        _push(`<!--]--></div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/tools/ipv6-ula-generator/ipv6-ula-generator.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
