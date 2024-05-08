import { _ as _sfc_main$1 } from './FormatTransformer-3830ed2a.js';
import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { stringify } from 'iarna-toml-esm';
import { parse } from 'yaml';
import { w as withDefaultOnError } from './defaults-f1b4cc24.js';
import './TextareaCopyable-9915a41d.js';
import 'naive-ui';
import '../entry-server.js';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "yaml-to-toml",
  __ssrInlineRender: true,
  setup(__props) {
    const convertYamlToToml = (value) => [stringify(parse(value))].flat().join("\n").trim();
    const transformer = (value) => value.trim() === "" ? "" : withDefaultOnError(() => convertYamlToToml(value), "");
    const rules = [
      {
        validator: (v) => v === "" || parse(v),
        message: "Provided JSON is not valid."
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_format_transformer = _sfc_main$1;
      _push(ssrRenderComponent(_component_format_transformer, mergeProps({
        "input-label": "Your YAML",
        "input-placeholder": "Paste your YAML here...",
        "output-label": "TOML from your YAML",
        "output-language": "toml",
        "input-validation-rules": rules,
        transformer
      }, _attrs), null, _parent));
    };
  }
});

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/tools/yaml-to-toml/yaml-to-toml.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
