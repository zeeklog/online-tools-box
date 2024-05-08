import { _ as _sfc_main$1 } from '../entry-server.js';
import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { useHead } from '@vueuse/head';
import '@vue/server-renderer';
import '@css-render/vue3-ssr';
import 'pinia';
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
  __name: "About",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({ title: "About - Zeeklog Online Tools" });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_c_markdown = _sfc_main$1;
      _push(ssrRenderComponent(_component_c_markdown, mergeProps({
        markdown: _ctx.$t("about.content"),
        "mx-auto": "",
        "mt-50px": "",
        "max-w-600px": ""
      }, _attrs), null, _parent));
    };
  }
});

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/About.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
