import { NFormItem, NInputNumber, NAlert, NDivider, NInputGroup, NInputGroupLabel } from 'naive-ui';
import { c as __unplugin_components_1, e as __unplugin_components_3, g as _export_sfc } from '../entry-server.js';
import { defineComponent, ref, computed, withCtx, unref, isRef, createVNode, createTextVNode, toDisplayString, mergeProps, openBlock, createBlock, createCommentVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { _ as _sfc_main$1 } from './InputCopyable-2bc098e2.js';
import { c as convertBase } from './integer-base-converter.model-5f44352e.js';
import _ from 'lodash';
import '@vue/server-renderer';
import '@css-render/vue3-ssr';
import 'pinia';
import '@vueuse/head';
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

function getErrorMessageIfThrows(cb) {
  try {
    cb();
    return void 0;
  } catch (err) {
    if (_.isString(err)) {
      return err;
    }
    if (_.isError(err)) {
      return err.message;
    }
    if (_.isObject(err) && _.has(err, "message")) {
      return err.message;
    }
    return "An error as occurred.";
  }
}

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "integer-base-converter",
  __ssrInlineRender: true,
  setup(__props) {
    const inputProps = {
      "labelPosition": "left",
      "labelWidth": "170px",
      "labelAlign": "right",
      "readonly": true,
      "mb-2": ""
    };
    const input = ref("42");
    const inputBase = ref(10);
    const outputBase = ref(42);
    function errorlessConvert(...args) {
      try {
        return convertBase(...args);
      } catch (err) {
        return "";
      }
    }
    const error = computed(
      () => getErrorMessageIfThrows(
        () => convertBase({ value: input.value, fromBase: inputBase.value, toBase: outputBase.value })
      )
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_c_card = __unplugin_components_1;
      const _component_c_input_text = __unplugin_components_3;
      const _component_n_form_item = NFormItem;
      const _component_n_input_number = NInputNumber;
      const _component_n_alert = NAlert;
      const _component_n_divider = NDivider;
      const _component_n_input_group = NInputGroup;
      const _component_n_input_group_label = NInputGroupLabel;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-4b84bbcf>`);
      _push(ssrRenderComponent(_component_c_card, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_c_input_text, {
              value: unref(input),
              "onUpdate:value": ($event) => isRef(input) ? input.value = $event : null,
              label: "Input number",
              placeholder: "Put your number here (ex: 42)",
              "label-position": "left",
              "label-width": "110px",
              "mb-2": "",
              "label-align": "right"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_n_form_item, {
              label: "Input base",
              "label-placement": "left",
              "label-width": "110",
              "show-feedback": false
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_n_input_number, {
                    value: unref(inputBase),
                    "onUpdate:value": ($event) => isRef(inputBase) ? inputBase.value = $event : null,
                    max: "64",
                    min: "2",
                    placeholder: "Put your input base here (ex: 10)",
                    "w-full": ""
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_n_input_number, {
                      value: unref(inputBase),
                      "onUpdate:value": ($event) => isRef(inputBase) ? inputBase.value = $event : null,
                      max: "64",
                      min: "2",
                      placeholder: "Put your input base here (ex: 10)",
                      "w-full": ""
                    }, null, 8, ["value", "onUpdate:value"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            if (unref(error)) {
              _push2(ssrRenderComponent(_component_n_alert, {
                style: { "margin-top": "25px" },
                type: "error"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(unref(error))}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(unref(error)), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(_component_n_divider, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$1, mergeProps({ label: "Binary (2)" }, inputProps, {
              value: errorlessConvert({ value: unref(input), fromBase: unref(inputBase), toBase: 2 }),
              placeholder: "Binary version will be here..."
            }), null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$1, mergeProps({ label: "Octal (8)" }, inputProps, {
              value: errorlessConvert({ value: unref(input), fromBase: unref(inputBase), toBase: 8 }),
              placeholder: "Octal version will be here..."
            }), null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$1, mergeProps({ label: "Decimal (10)" }, inputProps, {
              value: errorlessConvert({ value: unref(input), fromBase: unref(inputBase), toBase: 10 }),
              placeholder: "Decimal version will be here..."
            }), null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$1, mergeProps({ label: "Hexadecimal (16)" }, inputProps, {
              value: errorlessConvert({ value: unref(input), fromBase: unref(inputBase), toBase: 16 }),
              placeholder: "Hexadecimal version will be here..."
            }), null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$1, mergeProps({ label: "Base64 (64)" }, inputProps, {
              value: errorlessConvert({ value: unref(input), fromBase: unref(inputBase), toBase: 64 }),
              placeholder: "Base64 version will be here..."
            }), null, _parent2, _scopeId));
            _push2(`<div flex items-baseline data-v-4b84bbcf${_scopeId}>`);
            _push2(ssrRenderComponent(_component_n_input_group, { style: { "width": "160px", "margin-right": "10px" } }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_n_input_group_label, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Custom: `);
                      } else {
                        return [
                          createTextVNode(" Custom: ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_n_input_number, {
                    value: unref(outputBase),
                    "onUpdate:value": ($event) => isRef(outputBase) ? outputBase.value = $event : null,
                    max: "64",
                    min: "2"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_n_input_group_label, null, {
                      default: withCtx(() => [
                        createTextVNode(" Custom: ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_n_input_number, {
                      value: unref(outputBase),
                      "onUpdate:value": ($event) => isRef(outputBase) ? outputBase.value = $event : null,
                      max: "64",
                      min: "2"
                    }, null, 8, ["value", "onUpdate:value"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$1, mergeProps({ "flex-1": "" }, inputProps, {
              value: errorlessConvert({ value: unref(input), fromBase: unref(inputBase), toBase: unref(outputBase) }),
              placeholder: `Base ${unref(outputBase)} will be here...`
            }), null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode(_component_c_input_text, {
                value: unref(input),
                "onUpdate:value": ($event) => isRef(input) ? input.value = $event : null,
                label: "Input number",
                placeholder: "Put your number here (ex: 42)",
                "label-position": "left",
                "label-width": "110px",
                "mb-2": "",
                "label-align": "right"
              }, null, 8, ["value", "onUpdate:value"]),
              createVNode(_component_n_form_item, {
                label: "Input base",
                "label-placement": "left",
                "label-width": "110",
                "show-feedback": false
              }, {
                default: withCtx(() => [
                  createVNode(_component_n_input_number, {
                    value: unref(inputBase),
                    "onUpdate:value": ($event) => isRef(inputBase) ? inputBase.value = $event : null,
                    max: "64",
                    min: "2",
                    placeholder: "Put your input base here (ex: 10)",
                    "w-full": ""
                  }, null, 8, ["value", "onUpdate:value"])
                ]),
                _: 1
              }),
              unref(error) ? (openBlock(), createBlock(_component_n_alert, {
                key: 0,
                style: { "margin-top": "25px" },
                type: "error"
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(unref(error)), 1)
                ]),
                _: 1
              })) : createCommentVNode("", true),
              createVNode(_component_n_divider),
              createVNode(_sfc_main$1, mergeProps({ label: "Binary (2)" }, inputProps, {
                value: errorlessConvert({ value: unref(input), fromBase: unref(inputBase), toBase: 2 }),
                placeholder: "Binary version will be here..."
              }), null, 16, ["value"]),
              createVNode(_sfc_main$1, mergeProps({ label: "Octal (8)" }, inputProps, {
                value: errorlessConvert({ value: unref(input), fromBase: unref(inputBase), toBase: 8 }),
                placeholder: "Octal version will be here..."
              }), null, 16, ["value"]),
              createVNode(_sfc_main$1, mergeProps({ label: "Decimal (10)" }, inputProps, {
                value: errorlessConvert({ value: unref(input), fromBase: unref(inputBase), toBase: 10 }),
                placeholder: "Decimal version will be here..."
              }), null, 16, ["value"]),
              createVNode(_sfc_main$1, mergeProps({ label: "Hexadecimal (16)" }, inputProps, {
                value: errorlessConvert({ value: unref(input), fromBase: unref(inputBase), toBase: 16 }),
                placeholder: "Hexadecimal version will be here..."
              }), null, 16, ["value"]),
              createVNode(_sfc_main$1, mergeProps({ label: "Base64 (64)" }, inputProps, {
                value: errorlessConvert({ value: unref(input), fromBase: unref(inputBase), toBase: 64 }),
                placeholder: "Base64 version will be here..."
              }), null, 16, ["value"]),
              createVNode("div", {
                flex: "",
                "items-baseline": ""
              }, [
                createVNode(_component_n_input_group, { style: { "width": "160px", "margin-right": "10px" } }, {
                  default: withCtx(() => [
                    createVNode(_component_n_input_group_label, null, {
                      default: withCtx(() => [
                        createTextVNode(" Custom: ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_n_input_number, {
                      value: unref(outputBase),
                      "onUpdate:value": ($event) => isRef(outputBase) ? outputBase.value = $event : null,
                      max: "64",
                      min: "2"
                    }, null, 8, ["value", "onUpdate:value"])
                  ]),
                  _: 1
                }),
                createVNode(_sfc_main$1, mergeProps({ "flex-1": "" }, inputProps, {
                  value: errorlessConvert({ value: unref(input), fromBase: unref(inputBase), toBase: unref(outputBase) }),
                  placeholder: `Base ${unref(outputBase)} will be here...`
                }), null, 16, ["value", "placeholder"])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});

/* unplugin-vue-components disabled */const integerBaseConverter_vue_vue_type_style_index_0_scoped_4b84bbcf_lang = '';

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/tools/integer-base-converter/integer-base-converter.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const integerBaseConverter = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-4b84bbcf"]]);

export { integerBaseConverter as default };
