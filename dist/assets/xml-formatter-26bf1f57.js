import { _ as _sfc_main$1 } from './FormatTransformer-3830ed2a.js';
import { NFormItem, NSwitch, NInputNumber } from 'naive-ui';
import { defineComponent, withCtx, unref, isRef, createVNode, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import xmlFormat from 'xml-formatter';
import { w as withDefaultOnError } from './defaults-f1b4cc24.js';
import { useStorage } from '@vueuse/core';
import './TextareaCopyable-9915a41d.js';
import '../entry-server.js';
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
import 'highlight.js/lib/core';
import 'highlight.js/lib/languages/json';
import 'highlight.js/lib/languages/sql';
import 'highlight.js/lib/languages/xml';
import 'highlight.js/lib/languages/yaml';
import 'highlight.js/lib/languages/ini';

function cleanRawXml(rawXml) {
  return rawXml.trim();
}
function formatXml(rawXml, options) {
  return withDefaultOnError(() => xmlFormat(cleanRawXml(rawXml), options) ?? "", "");
}
function isValidXML(rawXml) {
  const cleanedRawXml = cleanRawXml(rawXml);
  if (cleanedRawXml === "") {
    return true;
  }
  try {
    xmlFormat(cleanedRawXml);
    return true;
  } catch (e) {
    return false;
  }
}

const defaultValue = "<hello><world>foo</world><world>bar</world></hello>";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "xml-formatter",
  __ssrInlineRender: true,
  setup(__props) {
    const indentSize = useStorage("xml-formatter:indent-size", 2);
    const collapseContent = useStorage("xml-formatter:collapse-content", true);
    function transformer(value) {
      return formatXml(value, {
        indentation: " ".repeat(indentSize.value),
        collapseContent: collapseContent.value,
        lineSeparator: "\n"
      });
    }
    const rules = [
      {
        validator: isValidXML,
        message: "Provided XML is not valid."
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_n_form_item = NFormItem;
      const _component_n_switch = NSwitch;
      const _component_n_input_number = NInputNumber;
      const _component_format_transformer = _sfc_main$1;
      _push(`<!--[--><div important:flex-full important:flex-shrink-0 important:flex-grow-0><div flex justify-center>`);
      _push(ssrRenderComponent(_component_n_form_item, {
        label: "Collapse content:",
        "label-placement": "left"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_n_switch, {
              value: unref(collapseContent),
              "onUpdate:value": ($event) => isRef(collapseContent) ? collapseContent.value = $event : null
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_n_switch, {
                value: unref(collapseContent),
                "onUpdate:value": ($event) => isRef(collapseContent) ? collapseContent.value = $event : null
              }, null, 8, ["value", "onUpdate:value"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_n_form_item, {
        label: "Indent size:",
        "label-placement": "left",
        "label-width": "100",
        "show-feedback": false
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_n_input_number, {
              value: unref(indentSize),
              "onUpdate:value": ($event) => isRef(indentSize) ? indentSize.value = $event : null,
              min: "0",
              max: "10",
              "w-100px": ""
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_n_input_number, {
                value: unref(indentSize),
                "onUpdate:value": ($event) => isRef(indentSize) ? indentSize.value = $event : null,
                min: "0",
                max: "10",
                "w-100px": ""
              }, null, 8, ["value", "onUpdate:value"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
      _push(ssrRenderComponent(_component_format_transformer, {
        "input-label": "Your XML",
        "input-placeholder": "Paste your XML here...",
        "output-label": "Formatted XML from your XML",
        "output-language": "xml",
        "input-validation-rules": rules,
        transformer,
        "input-default": defaultValue
      }, null, _parent));
      _push(`<!--]-->`);
    };
  }
});

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/tools/xml-formatter/xml-formatter.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
