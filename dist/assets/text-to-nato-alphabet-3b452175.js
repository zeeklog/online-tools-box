import { b as useCopy, e as __unplugin_components_3, c as __unplugin_components_1, a as __unplugin_components_0 } from '../entry-server.js';
import { defineComponent, ref, computed, unref, isRef, withCtx, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
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

const natoAlphabet = [
  "Alpha",
  "Bravo",
  "Charlie",
  "Delta",
  "Echo",
  "Foxtrot",
  "Golf",
  "Hotel",
  "India",
  "Juliet",
  "Kilo",
  "Lima",
  "Mike",
  "November",
  "Oscar",
  "Papa",
  "Quebec",
  "Romeo",
  "Sierra",
  "Tango",
  "Uniform",
  "Victor",
  "Whiskey",
  "X-ray",
  "Yankee",
  "Zulu"
];

function getLetterPositionInAlphabet({ letter }) {
  return letter.toLowerCase().charCodeAt(0) - "a".charCodeAt(0);
}
function textToNatoAlphabet({ text }) {
  return text.split("").map((character) => {
    const alphabetIndex = getLetterPositionInAlphabet({ letter: character });
    const natoWord = natoAlphabet[alphabetIndex];
    return natoWord ?? character;
  }).join(" ");
}

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "text-to-nato-alphabet",
  __ssrInlineRender: true,
  setup(__props) {
    const input = ref("");
    const natoText = computed(() => textToNatoAlphabet({ text: input.value }));
    const { copy } = useCopy({ source: natoText, text: "NATO alphabet string copied." });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_c_input_text = __unplugin_components_3;
      const _component_c_card = __unplugin_components_1;
      const _component_c_button = __unplugin_components_0;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_c_input_text, {
        value: unref(input),
        "onUpdate:value": ($event) => isRef(input) ? input.value = $event : null,
        label: "Your text to convert to NATO phonetic alphabet",
        placeholder: "Put your text here...",
        clearable: "",
        "mb-5": ""
      }, null, _parent));
      if (unref(natoText)) {
        _push(`<div><div mb-2> Your text in NATO phonetic alphabet </div>`);
        _push(ssrRenderComponent(_component_c_card, null, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(unref(natoText))}`);
            } else {
              return [
                createTextVNode(toDisplayString(unref(natoText)), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<div mt-3 flex justify-center>`);
        _push(ssrRenderComponent(_component_c_button, {
          autofocus: "",
          onClick: ($event) => unref(copy)()
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Copy NATO string `);
            } else {
              return [
                createTextVNode(" Copy NATO string ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/tools/text-to-nato-alphabet/text-to-nato-alphabet.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
