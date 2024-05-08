import { b as useCopy, e as __unplugin_components_3, a as __unplugin_components_0 } from '../entry-server.js';
import { defineComponent, ref, computed, unref, isRef, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import slugify from '@sindresorhus/slugify';
import { w as withDefaultOnError } from './defaults-f1b4cc24.js';
import '@vue/server-renderer';
import '@css-render/vue3-ssr';
import 'pinia';
import '@vueuse/head';
import 'lodash';
import 'figue';
import 'naive-ui';
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
  __name: "slugify-string",
  __ssrInlineRender: true,
  setup(__props) {
    const input = ref("");
    const slug = computed(() => withDefaultOnError(() => slugify(input.value), ""));
    const { copy } = useCopy({ source: slug, text: "Slug copied to clipboard" });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_c_input_text = __unplugin_components_3;
      const _component_c_button = __unplugin_components_0;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_c_input_text, {
        value: unref(input),
        "onUpdate:value": ($event) => isRef(input) ? input.value = $event : null,
        multiline: "",
        placeholder: "Put your string here (ex: My file path)",
        label: "Your string to slugify",
        autofocus: "",
        "raw-text": "",
        "mb-5": ""
      }, null, _parent));
      _push(ssrRenderComponent(_component_c_input_text, {
        value: unref(slug),
        multiline: "",
        readonly: "",
        placeholder: "You slug will be generated here (ex: my-file-path)",
        label: "Your slug",
        "mb-5": ""
      }, null, _parent));
      _push(`<div flex justify-center>`);
      _push(ssrRenderComponent(_component_c_button, {
        disabled: unref(slug).length === 0,
        onClick: ($event) => unref(copy)()
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Copy slug `);
          } else {
            return [
              createTextVNode(" Copy slug ")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/tools/slugify-string/slugify-string.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
