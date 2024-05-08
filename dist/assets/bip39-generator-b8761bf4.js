import { NGrid, NGi, NFormItem, NInputGroup, NIcon } from 'naive-ui';
import { u as useValidation, b as useCopy, h as __unplugin_components_0, e as __unplugin_components_3, a as __unplugin_components_0$1 } from '../entry-server.js';
import { defineComponent, ref, computed, withCtx, unref, isRef, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { generateEntropy, entropyToMnemonic, englishWordList, chineseSimplifiedWordList, chineseTraditionalWordList, czechWordList, frenchWordList, italianWordList, japaneseWordList, koreanWordList, portugueseWordList, spanishWordList, mnemonicToEntropy } from '@it-tools/bip39';
import { Refresh, Copy } from '@vicons/tabler';
import { i as isNotThrowing } from './boolean-5697d061.js';
import { w as withDefaultOnError } from './defaults-f1b4cc24.js';
import '@vue/server-renderer';
import '@css-render/vue3-ssr';
import 'pinia';
import '@vueuse/head';
import 'lodash';
import 'figue';
import 'vue-router';
import '@vueuse/core';
import 'date-fns';
import 'vue-i18n/dist/vue-i18n.runtime.esm-bundler.js';
import '@vicons/material';
import 'fuse.js';
import 'marked';
import 'dompurify';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "bip39-generator",
  __ssrInlineRender: true,
  setup(__props) {
    const languages = {
      "English": englishWordList,
      "Chinese simplified": chineseSimplifiedWordList,
      "Chinese traditional": chineseTraditionalWordList,
      "Czech": czechWordList,
      "French": frenchWordList,
      "Italian": italianWordList,
      "Japanese": japaneseWordList,
      "Korean": koreanWordList,
      "Portuguese": portugueseWordList,
      "Spanish": spanishWordList
    };
    const entropy = ref(generateEntropy());
    const passphraseInput = ref("");
    const language = ref("English");
    const passphrase = computed({
      get() {
        return withDefaultOnError(() => entropyToMnemonic(entropy.value, languages[language.value]), passphraseInput.value);
      },
      set(value) {
        passphraseInput.value = value;
        entropy.value = withDefaultOnError(() => mnemonicToEntropy(value, languages[language.value]), "");
      }
    });
    const entropyValidation = useValidation({
      source: entropy,
      rules: [
        {
          validator: (value) => value === "" || value.length <= 32 && value.length >= 16 && value.length % 4 === 0,
          message: "Entropy length should be >= 16, <= 32 and be a multiple of 4"
        },
        {
          validator: (value) => /^[a-fA-F0-9]*$/.test(value),
          message: "Entropy should be an hexadecimal string"
        }
      ]
    });
    const mnemonicValidation = useValidation({
      source: passphrase,
      rules: [
        {
          validator: (value) => isNotThrowing(() => mnemonicToEntropy(value, languages[language.value])),
          message: "Invalid mnemonic"
        }
      ]
    });
    function refreshEntropy() {
      entropy.value = generateEntropy();
    }
    const { copy: copyEntropy } = useCopy({ source: entropy, text: "Entropy copied to the clipboard" });
    const { copy: copyPassphrase } = useCopy({ source: passphrase, text: "Passphrase copied to the clipboard" });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_n_grid = NGrid;
      const _component_n_gi = NGi;
      const _component_c_select = __unplugin_components_0;
      const _component_n_form_item = NFormItem;
      const _component_n_input_group = NInputGroup;
      const _component_c_input_text = __unplugin_components_3;
      const _component_c_button = __unplugin_components_0$1;
      const _component_n_icon = NIcon;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_n_grid, {
        cols: "3",
        "x-gap": "12"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_n_gi, { span: "1" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_c_select, {
                    value: unref(language),
                    "onUpdate:value": ($event) => isRef(language) ? language.value = $event : null,
                    searchable: "",
                    label: "Language:",
                    options: Object.keys(languages)
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_c_select, {
                      value: unref(language),
                      "onUpdate:value": ($event) => isRef(language) ? language.value = $event : null,
                      searchable: "",
                      label: "Language:",
                      options: Object.keys(languages)
                    }, null, 8, ["value", "onUpdate:value", "options"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_n_gi, { span: "2" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_n_form_item, {
                    label: "Entropy (seed):",
                    feedback: unref(entropyValidation).message,
                    "validation-status": unref(entropyValidation).status
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_n_input_group, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_c_input_text, {
                                value: unref(entropy),
                                "onUpdate:value": ($event) => isRef(entropy) ? entropy.value = $event : null,
                                placeholder: "Your string..."
                              }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_c_button, {
                                onClick: ($event) => refreshEntropy()
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_n_icon, { size: "22" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(unref(Refresh), null, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(unref(Refresh))
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_n_icon, { size: "22" }, {
                                        default: withCtx(() => [
                                          createVNode(unref(Refresh))
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_c_button, {
                                onClick: ($event) => unref(copyEntropy)()
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_n_icon, { size: "22" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(unref(Copy), null, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(unref(Copy))
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_n_icon, { size: "22" }, {
                                        default: withCtx(() => [
                                          createVNode(unref(Copy))
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_c_input_text, {
                                  value: unref(entropy),
                                  "onUpdate:value": ($event) => isRef(entropy) ? entropy.value = $event : null,
                                  placeholder: "Your string..."
                                }, null, 8, ["value", "onUpdate:value"]),
                                createVNode(_component_c_button, {
                                  onClick: ($event) => refreshEntropy()
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_n_icon, { size: "22" }, {
                                      default: withCtx(() => [
                                        createVNode(unref(Refresh))
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }, 8, ["onClick"]),
                                createVNode(_component_c_button, {
                                  onClick: ($event) => unref(copyEntropy)()
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_n_icon, { size: "22" }, {
                                      default: withCtx(() => [
                                        createVNode(unref(Copy))
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }, 8, ["onClick"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_n_input_group, null, {
                            default: withCtx(() => [
                              createVNode(_component_c_input_text, {
                                value: unref(entropy),
                                "onUpdate:value": ($event) => isRef(entropy) ? entropy.value = $event : null,
                                placeholder: "Your string..."
                              }, null, 8, ["value", "onUpdate:value"]),
                              createVNode(_component_c_button, {
                                onClick: ($event) => refreshEntropy()
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_n_icon, { size: "22" }, {
                                    default: withCtx(() => [
                                      createVNode(unref(Refresh))
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }, 8, ["onClick"]),
                              createVNode(_component_c_button, {
                                onClick: ($event) => unref(copyEntropy)()
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_n_icon, { size: "22" }, {
                                    default: withCtx(() => [
                                      createVNode(unref(Copy))
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }, 8, ["onClick"])
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_n_form_item, {
                      label: "Entropy (seed):",
                      feedback: unref(entropyValidation).message,
                      "validation-status": unref(entropyValidation).status
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_n_input_group, null, {
                          default: withCtx(() => [
                            createVNode(_component_c_input_text, {
                              value: unref(entropy),
                              "onUpdate:value": ($event) => isRef(entropy) ? entropy.value = $event : null,
                              placeholder: "Your string..."
                            }, null, 8, ["value", "onUpdate:value"]),
                            createVNode(_component_c_button, {
                              onClick: ($event) => refreshEntropy()
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_n_icon, { size: "22" }, {
                                  default: withCtx(() => [
                                    createVNode(unref(Refresh))
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }, 8, ["onClick"]),
                            createVNode(_component_c_button, {
                              onClick: ($event) => unref(copyEntropy)()
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_n_icon, { size: "22" }, {
                                  default: withCtx(() => [
                                    createVNode(unref(Copy))
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }, 8, ["onClick"])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["feedback", "validation-status"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_n_gi, { span: "1" }, {
                default: withCtx(() => [
                  createVNode(_component_c_select, {
                    value: unref(language),
                    "onUpdate:value": ($event) => isRef(language) ? language.value = $event : null,
                    searchable: "",
                    label: "Language:",
                    options: Object.keys(languages)
                  }, null, 8, ["value", "onUpdate:value", "options"])
                ]),
                _: 1
              }),
              createVNode(_component_n_gi, { span: "2" }, {
                default: withCtx(() => [
                  createVNode(_component_n_form_item, {
                    label: "Entropy (seed):",
                    feedback: unref(entropyValidation).message,
                    "validation-status": unref(entropyValidation).status
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_n_input_group, null, {
                        default: withCtx(() => [
                          createVNode(_component_c_input_text, {
                            value: unref(entropy),
                            "onUpdate:value": ($event) => isRef(entropy) ? entropy.value = $event : null,
                            placeholder: "Your string..."
                          }, null, 8, ["value", "onUpdate:value"]),
                          createVNode(_component_c_button, {
                            onClick: ($event) => refreshEntropy()
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_n_icon, { size: "22" }, {
                                default: withCtx(() => [
                                  createVNode(unref(Refresh))
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }, 8, ["onClick"]),
                          createVNode(_component_c_button, {
                            onClick: ($event) => unref(copyEntropy)()
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_n_icon, { size: "22" }, {
                                default: withCtx(() => [
                                  createVNode(unref(Copy))
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }, 8, ["onClick"])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, ["feedback", "validation-status"])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_n_form_item, {
        label: "Passphrase (mnemonic):",
        feedback: unref(mnemonicValidation).message,
        "validation-status": unref(mnemonicValidation).status
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_n_input_group, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_c_input_text, {
                    value: unref(passphrase),
                    "onUpdate:value": ($event) => isRef(passphrase) ? passphrase.value = $event : null,
                    placeholder: "Your mnemonic...",
                    "raw-text": ""
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_c_button, {
                    onClick: ($event) => unref(copyPassphrase)()
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_n_icon, {
                          size: "22",
                          component: unref(Copy)
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_n_icon, {
                            size: "22",
                            component: unref(Copy)
                          }, null, 8, ["component"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_c_input_text, {
                      value: unref(passphrase),
                      "onUpdate:value": ($event) => isRef(passphrase) ? passphrase.value = $event : null,
                      placeholder: "Your mnemonic...",
                      "raw-text": ""
                    }, null, 8, ["value", "onUpdate:value"]),
                    createVNode(_component_c_button, {
                      onClick: ($event) => unref(copyPassphrase)()
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_n_icon, {
                          size: "22",
                          component: unref(Copy)
                        }, null, 8, ["component"])
                      ]),
                      _: 1
                    }, 8, ["onClick"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_n_input_group, null, {
                default: withCtx(() => [
                  createVNode(_component_c_input_text, {
                    value: unref(passphrase),
                    "onUpdate:value": ($event) => isRef(passphrase) ? passphrase.value = $event : null,
                    placeholder: "Your mnemonic...",
                    "raw-text": ""
                  }, null, 8, ["value", "onUpdate:value"]),
                  createVNode(_component_c_button, {
                    onClick: ($event) => unref(copyPassphrase)()
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_n_icon, {
                        size: "22",
                        component: unref(Copy)
                      }, null, 8, ["component"])
                    ]),
                    _: 1
                  }, 8, ["onClick"])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/tools/bip39-generator/bip39-generator.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
