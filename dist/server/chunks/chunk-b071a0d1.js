import { _ as _sfc_main$1 } from './chunk-2e7c6ce5.js';
import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { parse } from 'iarna-toml-esm';
import { stringify } from 'yaml';
import { w as withDefaultOnError } from './chunk-f1b4cc24.js';
import { i as isValidToml } from './chunk-5c0cc9d1.js';
import './chunk-727cc0fb.js';
import 'naive-ui';
import './chunk-6003391e.js';
import '@vueuse/core';
import 'pinia';
import './chunk-8109fd17.js';
import '@vicons/tabler';
import 'highlight.js/lib/core';
import 'highlight.js/lib/languages/json';
import 'highlight.js/lib/languages/sql';
import 'highlight.js/lib/languages/xml';
import 'highlight.js/lib/languages/yaml';
import 'highlight.js/lib/languages/ini';
import './chunk-77c5cc16.js';
import 'lodash';
import './chunk-4e7a6a8d.js';
import './chunk-11f44f81.js';
import './chunk-35c3d701.js';
import './chunk-5697d061.js';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "toml-to-yaml",
  __ssrInlineRender: true,
  setup(__props) {
    const transformer = (value) => value.trim() === "" ? "" : withDefaultOnError(() => stringify(parse(value)), "");
    const rules = [
      {
        validator: isValidToml,
        message: "Provided TOML is not valid."
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_format_transformer = _sfc_main$1;
      _push(ssrRenderComponent(_component_format_transformer, mergeProps({
        "input-label": "Your TOML",
        "input-placeholder": "Paste your TOML here...",
        "output-label": "YAML from your TOML",
        "output-language": "yaml",
        "input-validation-rules": rules,
        transformer
      }, _attrs), null, _parent));
    };
  }
});

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/tools/toml-to-yaml/toml-to-yaml.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
