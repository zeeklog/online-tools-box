import { u as useValidation, a as __unplugin_components_0 } from '../entry-server.js';
import { NFormItem, NInputNumber } from 'naive-ui';
import { defineComponent, ref, mergeProps, unref, withCtx, isRef, createVNode, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderStyle, ssrRenderComponent } from 'vue/server-renderer';
import { pki } from 'node-forge';
import { T as TextareaCopyable } from './TextareaCopyable-9915a41d.js';
import { a as withDefaultOnErrorAsync } from './defaults-f1b4cc24.js';
import { a as computedRefreshableAsync } from './computedRefreshable-cc665c88.js';
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
import 'highlight.js/lib/core';
import 'highlight.js/lib/languages/json';
import 'highlight.js/lib/languages/sql';
import 'highlight.js/lib/languages/xml';
import 'highlight.js/lib/languages/yaml';
import 'highlight.js/lib/languages/ini';

const workerScript = "/assets/prime.worker.min-e367bd53.js";

function generateRawPairs({ bits = 2048 }) {
  return new Promise(
    (resolve, reject) => pki.rsa.generateKeyPair({ bits, workerScript }, (err, keyPair) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(keyPair);
    })
  );
}
async function generateKeyPair(config = {}) {
  const { privateKey, publicKey } = await generateRawPairs(config);
  return {
    publicKeyPem: pki.publicKeyToPem(publicKey),
    privateKeyPem: pki.privateKeyToPem(privateKey)
  };
}

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "rsa-key-pair-generator",
  __ssrInlineRender: true,
  setup(__props) {
    const bits = ref(2048);
    const emptyCerts = { publicKeyPem: "", privateKeyPem: "" };
    const { attrs: bitsValidationAttrs } = useValidation({
      source: bits,
      rules: [
        {
          message: "Bits should be 256 <= bits <= 16384 and be a multiple of 8",
          validator: (value) => value >= 256 && value <= 16384 && value % 8 === 0
        }
      ]
    });
    const [certs, refreshCerts] = computedRefreshableAsync(
      () => withDefaultOnErrorAsync(() => generateKeyPair({ bits: bits.value }), emptyCerts),
      emptyCerts
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_n_form_item = NFormItem;
      const _component_n_input_number = NInputNumber;
      const _component_c_button = __unplugin_components_0;
      _push(`<!--[--><div style="${ssrRenderStyle({ "flex": "0 0 100%" })}"><div item-style="flex: 1 1 0" style="${ssrRenderStyle({ "max-width": "600px" })}" mx-auto flex gap-3>`);
      _push(ssrRenderComponent(_component_n_form_item, mergeProps({ label: "Bits :" }, unref(bitsValidationAttrs), {
        "label-placement": "left",
        "label-width": "100"
      }), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_n_input_number, {
              value: unref(bits),
              "onUpdate:value": ($event) => isRef(bits) ? bits.value = $event : null,
              min: "256",
              max: "16384",
              step: "8"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_n_input_number, {
                value: unref(bits),
                "onUpdate:value": ($event) => isRef(bits) ? bits.value = $event : null,
                min: "256",
                max: "16384",
                step: "8"
              }, null, 8, ["value", "onUpdate:value"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_c_button, { onClick: unref(refreshCerts) }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Refresh key-pair `);
          } else {
            return [
              createTextVNode(" Refresh key-pair ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div><h3>Public key</h3>`);
      _push(ssrRenderComponent(TextareaCopyable, {
        value: unref(certs).publicKeyPem
      }, null, _parent));
      _push(`</div><div><h3>Private key</h3>`);
      _push(ssrRenderComponent(TextareaCopyable, {
        value: unref(certs).privateKeyPem
      }, null, _parent));
      _push(`</div><!--]-->`);
    };
  }
});

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/tools/rsa-key-pair-generator/rsa-key-pair-generator.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
