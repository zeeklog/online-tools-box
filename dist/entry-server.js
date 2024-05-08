import { renderToString } from '@vue/server-renderer';
import { setup } from '@css-render/vue3-ssr';
import { openBlock, createElementBlock, createElementVNode, watch, defineComponent, toRefs, computed, mergeProps, withCtx, unref, renderSlot, withDirectives, createVNode, vShow, useSSRContext, resolveDynamicComponent, ref, createBlock, reactive, nextTick, onMounted, createCommentVNode, createTextVNode, toDisplayString, isRef, Fragment, renderList, shallowRef, vModelText, Transition, h, resolveComponent, createSSRApp } from 'vue';
import { defineStore, storeToRefs, createPinia } from 'pinia';
import { useHead, createHead } from '@vueuse/head';
import _, { noop } from 'lodash';
import { figue } from 'figue';
import { create, NLayout, NLayoutSider, NIcon, useThemeVars, NCollapseTransition, NMenu, NH1, darkTheme, NGlobalStyle, NMessageProvider, NNotificationProvider, NConfigProvider, NH3, NEllipsis, useMessage } from 'naive-ui';
import { ssrRenderComponent, ssrRenderSlot, ssrRenderStyle, ssrRenderVNode, ssrRenderAttrs, ssrRenderClass, ssrInterpolate, ssrRenderAttr, ssrIncludeBooleanAttr, ssrRenderDynamicModel, ssrRenderList } from 'vue/server-renderer';
import { RouterLink, useRouter, useRoute, RouterView, createRouter, createMemoryHistory } from 'vue-router';
import { Sun, Moon, FileDigit, Artboard, TextWrap, Mailbox, Devices, Binary, SortDescendingNumbers, EyeOff, FileDiff, MoodSmile, AlignJustified, Braces, List, Camera, Phone, BuildingFactory, Browser, BrandDocker, Edit, Certificate, Speakerphone, Keyboard, LockSquare, LetterCaseToggle, FileInvoice, Palette, Alarm, Calendar, DeviceDesktop, Lock, Hourglass, Percentage, BrandGit, Code, ArrowsLeftRight, Key, Math as Math$1, Tags, World, DeviceMobile, Qrcode, Server, LetterX, Database, Temperature, FileText, ArrowsShuffle, Link, Unlink, Fingerprint, Home2, Heart } from '@vicons/tabler';
import { useDark, useToggle, useMediaQuery, useStorage, useElementHover, get, useVModel, onClickOutside, useMagicKeys, whenever, syncRef, useClipboard } from '@vueuse/core';
import { isAfter, subWeeks } from 'date-fns';
import { createI18n, useI18n } from 'vue-i18n/dist/vue-i18n.runtime.esm-bundler.js';
import { PasswordRound, CompareArrowsRound, UnfoldMoreOutlined, HttpRound, SpeedFilled, RouterOutlined, AbcRound, TimerOutlined, ShortTextRound, ImageOutlined } from '@vicons/material';
import Fuse from 'fuse.js';
import { marked } from 'marked';
import DomPurify from 'dompurify';

const config = figue({
  app: {
    version: {
      doc: "Application current version",
      format: "string",
      default: "0.0.0",
      env: "PACKAGE_VERSION"
    },
    lastCommitSha: {
      doc: "Application last commit SHA version",
      format: "string",
      default: "",
      env: "VITE_VERCEL_GIT_COMMIT_SHA"
    },
    baseUrl: {
      doc: "Application base url",
      format: "string",
      default: "/",
      env: "BASE_URL"
    },
    env: {
      doc: "Application current env",
      format: "enum",
      values: ["production", "development", "preview", "test"],
      default: "development",
      env: "VITE_VERCEL_ENV"
    }
  },
  plausible: {
    isTrackerEnabled: {
      doc: "Is the tracker enabled",
      format: "boolean",
      default: false,
      env: "VITE_TRACKER_ENABLED"
    },
    domain: {
      doc: "Plausible current domain",
      format: "string",
      default: "",
      env: "VITE_PLAUSIBLE_DOMAIN"
    },
    apiHost: {
      doc: "Plausible remote api host",
      format: "string",
      default: "",
      env: "VITE_PLAUSIBLE_API_HOST"
    },
    trackLocalhost: {
      doc: "Enable or disable localhost tracking by plausible",
      format: "boolean",
      default: false
    }
  },
  showBanner: {
    doc: "Show the banner",
    format: "boolean",
    default: false,
    env: "VITE_SHOW_BANNER"
  }
}).loadEnv({
  ...{"BASE_URL":"/","MODE":"production","DEV":false,"PROD":true,"SSR":true,"PACKAGE_VERSION":"2023.12.21-5ed3693"},
  // Because the string '"2023.12.21-5ed3693"' is statically replaced during build time (see 'define' in vite.config.ts)
  PACKAGE_VERSION: "2023.12.21-5ed3693"
}).validate().getConfig();

function createFakePlausibleInstance() {
  return {
    trackEvent: noop,
    enableAutoPageviews: () => noop
  };
}
function createPlausibleInstance({
  config: config2
}) {
  if (config2.isTrackerEnabled) {
    return config2;
  }
  return createFakePlausibleInstance();
}
const plausible = {
  install: (app) => {
    const plausible2 = createPlausibleInstance({ config: config.plausible });
    plausible2.enableAutoPageviews();
    app.provide("plausible", plausible2);
  }
};

const naive = create();

const lightThemeOverrides = {
  Menu: {
    itemHeight: "32px"
  },
  Layout: { color: "#f1f5f9" },
  AutoComplete: {
    peers: {
      InternalSelectMenu: { height: "500px" }
    }
  }
};
const darkThemeOverrides = {
  common: {
    primaryColor: "#1ea54cFF",
    primaryColorHover: "#36AD6AFF",
    primaryColorPressed: "#0C7A43FF",
    primaryColorSuppl: "#36AD6AFF"
  },
  Notification: {
    color: "#333333"
  },
  AutoComplete: {
    peers: {
      InternalSelectMenu: { height: "500px", color: "#1e1e1e" }
    }
  },
  Menu: {
    itemHeight: "32px"
  },
  Layout: {
    color: "#1c1c1c",
    siderColor: "#232323",
    siderBorderColor: "transparent"
  },
  Card: {
    color: "#232323",
    borderColor: "#282828"
  },
  Table: {
    tdColor: "#232323",
    thColor: "#353535"
  }
};

const _hoisted_1$n = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$n = /*#__PURE__*/createElementVNode("path", {
  fill: "currentColor",
  d: "M8 3C5.79 3 4 4.79 4 7v7c0 1.1.9 2 2 2h3v4c0 1.1.9 2 2 2h2c1.1 0 2-.9 2-2v-4h3c1.1 0 2-.9 2-2V3H8m0 2h4v2h2V5h1v4h2V5h1v5H6V7c0-1.1.9-2 2-2m-2 9v-2h12v2H6Z"
}, null, -1);
const _hoisted_3$n = [
  _hoisted_2$n
];

function render$o(_ctx, _cache) {
  return (openBlock(), createElementBlock("svg", _hoisted_1$n, _hoisted_3$n))
}

const __unplugin_components_0$6 = { name: 'mdi-brush-variant', render: render$o };
/* vite-plugin-components disabled */

const useStyleStore = defineStore("style", {
  state: () => {
    const isDarkTheme = useDark();
    const toggleDark = useToggle(isDarkTheme);
    const isSmallScreen = useMediaQuery("(max-width: 700px)");
    const isMenuCollapsed = useStorage("isMenuCollapsed", isSmallScreen.value);
    watch(isSmallScreen, (v) => isMenuCollapsed.value = v);
    return {
      isDarkTheme,
      toggleDark,
      isMenuCollapsed,
      isSmallScreen
    };
  }
});

const _sfc_main$K = /* @__PURE__ */ defineComponent({
  __name: "MenuLayout",
  __ssrInlineRender: true,
  setup(__props) {
    const styleStore = useStyleStore();
    const { isMenuCollapsed, isSmallScreen } = toRefs(styleStore);
    const siderPosition = computed(() => isSmallScreen.value ? "absolute" : "static");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_n_layout = NLayout;
      const _component_n_layout_sider = NLayoutSider;
      _push(ssrRenderComponent(_component_n_layout, mergeProps({ "has-sider": "" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_n_layout_sider, {
              bordered: "",
              "collapse-mode": "width",
              "collapsed-width": 0,
              width: 240,
              collapsed: unref(isMenuCollapsed),
              "show-trigger": false,
              "native-scrollbar": false,
              position: unref(siderPosition)
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  ssrRenderSlot(_ctx.$slots, "sider", {}, null, _push3, _parent3, _scopeId2);
                } else {
                  return [
                    renderSlot(_ctx.$slots, "sider", {}, void 0, true)
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_n_layout, { class: "content" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  ssrRenderSlot(_ctx.$slots, "content", {}, null, _push3, _parent3, _scopeId2);
                  _push3(`<div style="${ssrRenderStyle(unref(isSmallScreen) && !unref(isMenuCollapsed) ? null : { display: "none" })}" class="overlay" data-v-63c31e01${_scopeId2}></div>`);
                } else {
                  return [
                    renderSlot(_ctx.$slots, "content", {}, void 0, true),
                    withDirectives(createVNode("div", {
                      class: "overlay",
                      onClick: ($event) => isMenuCollapsed.value = true
                    }, null, 8, ["onClick"]), [
                      [vShow, unref(isSmallScreen) && !unref(isMenuCollapsed)]
                    ])
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_n_layout_sider, {
                bordered: "",
                "collapse-mode": "width",
                "collapsed-width": 0,
                width: 240,
                collapsed: unref(isMenuCollapsed),
                "show-trigger": false,
                "native-scrollbar": false,
                position: unref(siderPosition)
              }, {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "sider", {}, void 0, true)
                ]),
                _: 3
              }, 8, ["collapsed", "position"]),
              createVNode(_component_n_layout, { class: "content" }, {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "content", {}, void 0, true),
                  withDirectives(createVNode("div", {
                    class: "overlay",
                    onClick: ($event) => isMenuCollapsed.value = true
                  }, null, 8, ["onClick"]), [
                    [vShow, unref(isSmallScreen) && !unref(isMenuCollapsed)]
                  ])
                ]),
                _: 3
              })
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});

/* unplugin-vue-components disabled */const MenuLayout_vue_vue_type_style_index_0_scoped_63c31e01_lang = '';

const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};

const _sfc_setup$K = _sfc_main$K.setup;
_sfc_main$K.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/MenuLayout.vue");
  return _sfc_setup$K ? _sfc_setup$K(props, ctx) : void 0;
};
const MenuLayout = /* @__PURE__ */ _export_sfc(_sfc_main$K, [["__scopeId", "data-v-63c31e01"]]);

function defineThemes(themes) {
  return {
    themes,
    useTheme() {
      const styleStore = useStyleStore();
      return computed(() => themes[styleStore.isDarkTheme ? "dark" : "light"]);
    }
  };
}

const { themes: appThemes, useTheme: useAppTheme } = defineThemes({
  light: {
    background: "#ffffff",
    text: {
      baseColor: "#333639",
      mutedColor: "#767c82"
    },
    default: {
      color: "rgba(46, 51, 56, 0.05)",
      colorHover: "rgba(46, 51, 56, 0.09)",
      colorPressed: "rgba(46, 51, 56, 0.22)"
    },
    primary: {
      color: "#18a058",
      colorHover: "#1ea54c",
      colorPressed: "#0C7A43",
      colorFaded: "#18a0582f"
    },
    warning: {
      color: "#f59e0b",
      colorHover: "#f59e0b",
      colorPressed: "#f59e0b",
      colorFaded: "#f59e0b2f"
    },
    success: {
      color: "#18a058",
      colorHover: "#36ad6a",
      colorPressed: "#0c7a43",
      colorFaded: "#18a0582f"
    },
    error: {
      color: "#d03050",
      colorHover: "#de576d",
      colorPressed: "#ab1f3f",
      colorFaded: "#d030502a"
    }
  },
  dark: {
    background: "#1e1e1e",
    text: {
      baseColor: "#ffffffd1",
      mutedColor: "#ffffff80"
    },
    default: {
      color: "rgba(255, 255, 255, 0.08)",
      colorHover: "rgba(255, 255, 255, 0.12)",
      colorPressed: "rgba(255, 255, 255, 0.24)"
    },
    primary: {
      color: "#1ea54c",
      colorHover: "#36AD6A",
      colorPressed: "#0C7A43",
      colorFaded: "#18a0582f"
    },
    warning: {
      color: "#f59e0b",
      colorHover: "#f59e0b",
      colorPressed: "#f59e0b",
      colorFaded: "#f59e0b2f"
    },
    success: {
      color: "#18a058",
      colorHover: "#36ad6a",
      colorPressed: "#0c7a43",
      colorFaded: "#18a0582f"
    },
    error: {
      color: "#e88080",
      colorHover: "#e98b8b",
      colorPressed: "#e57272",
      colorFaded: "#e8808029"
    }
  }
});

const clampHex = (value) => Math.max(0, Math.min(255, Math.round(value)));
function lighten(color, amount) {
  const alpha = color.length === 9 ? color.slice(7) : "";
  const num = Number.parseInt(color.slice(1, 7), 16);
  const r = clampHex((num >> 16 & 255) + amount);
  const g = clampHex((num >> 8 & 255) + amount);
  const b = clampHex((num & 255) + amount);
  return `#${(r << 16 | g << 8 | b).toString(16).padStart(6, "0")}${alpha}`;
}
function darken(color, amount) {
  return lighten(color, -amount);
}

function createState({
  textColor,
  backgroundColor,
  hoverBackground,
  hoveredTextColor = textColor,
  pressedBackground,
  pressedTextColor = textColor
}) {
  return {
    textColor,
    backgroundColor,
    hover: { textColor: hoveredTextColor, backgroundColor: hoverBackground },
    pressed: { textColor: pressedTextColor, backgroundColor: pressedBackground }
  };
}
function createTheme({ style }) {
  const theme = appThemes[style];
  return {
    size: {
      small: {
        width: "28px",
        fontSize: "12px"
      },
      medium: {
        width: "34px",
        fontSize: "14px"
      },
      large: {
        width: "40px",
        fontSize: "16px"
      }
    },
    basic: {
      default: createState({
        textColor: theme.text.baseColor,
        backgroundColor: theme.default.color,
        hoverBackground: theme.default.colorHover,
        pressedBackground: theme.default.colorPressed
      }),
      primary: createState({
        textColor: theme.primary.color,
        backgroundColor: theme.primary.colorFaded,
        hoverBackground: lighten(theme.primary.colorFaded, 30),
        pressedBackground: darken(theme.primary.colorFaded, 30)
      }),
      warning: createState({
        textColor: theme.warning.color,
        backgroundColor: theme.warning.colorFaded,
        hoverBackground: lighten(theme.warning.colorFaded, 30),
        pressedBackground: darken(theme.warning.colorFaded, 30)
      }),
      error: createState({
        textColor: theme.error.color,
        backgroundColor: theme.error.colorFaded,
        hoverBackground: lighten(theme.error.colorFaded, 30),
        pressedBackground: darken(theme.error.colorFaded, 30)
      })
    },
    text: {
      default: createState({
        textColor: theme.text.baseColor,
        backgroundColor: "transparent",
        hoverBackground: theme.default.colorHover,
        pressedBackground: theme.default.colorPressed
      }),
      primary: createState({
        textColor: theme.primary.color,
        backgroundColor: "transparent",
        hoverBackground: theme.primary.colorFaded,
        pressedBackground: darken(theme.primary.colorFaded, 30)
      }),
      warning: createState({
        textColor: darken(theme.warning.color, 20),
        backgroundColor: "transparent",
        hoverBackground: theme.warning.colorFaded,
        pressedBackground: darken(theme.warning.colorFaded, 30)
      }),
      error: createState({
        textColor: darken(theme.error.color, 20),
        backgroundColor: "transparent",
        hoverBackground: theme.error.colorFaded,
        pressedBackground: darken(theme.error.colorFaded, 30)
      })
    }
  };
}
const { useTheme: useTheme$6 } = defineThemes({
  dark: createTheme({ style: "dark" }),
  light: createTheme({ style: "light" })
});

const _sfc_main$J = /* @__PURE__ */ defineComponent({
  __name: "c-button",
  __ssrInlineRender: true,
  props: {
    type: { default: "default" },
    variant: { default: "basic" },
    disabled: { type: Boolean, default: false },
    round: { type: Boolean, default: false },
    circle: { type: Boolean, default: false },
    href: { default: void 0 },
    to: { default: void 0 },
    size: { default: "medium" }
  },
  emits: ["click"],
  setup(__props, { emit: emits }) {
    const props = __props;
    const { variant, disabled, round, circle, href, type, to, size: sizeName } = toRefs(props);
    function handleClick(event) {
      if (!disabled.value) {
        emits("click", event);
      }
    }
    const theme = useTheme$6();
    const variantTheme = computed(() => theme.value[variant.value][type.value]);
    const tag = computed(() => {
      if (href.value) {
        return "a";
      }
      if (to.value) {
        return "router-link";
      }
      return "button";
    });
    const appTheme = useAppTheme();
    const size = computed(() => theme.value.size[sizeName.value]);
    return (_ctx, _push, _parent, _attrs) => {
      const _cssVars = { style: {
        "--9a468bfe": unref(size).fontSize,
        "--09441655": unref(size).width,
        "--e1cab870": unref(variantTheme).textColor,
        "--645976e7": unref(variantTheme).backgroundColor,
        "--cea95e96": unref(variantTheme).hover.backgroundColor,
        "--369e4b1b": unref(variantTheme).pressed.backgroundColor,
        "--c8f65826": unref(appTheme).primary.color
      } };
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(tag)), mergeProps({
        href: unref(href) ?? unref(to),
        class: ["c-button", { disabled: unref(disabled), round: unref(round), circle: unref(circle) }],
        to: unref(to),
        onClick: handleClick
      }, _attrs, _cssVars), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default", {}, void 0, true)
            ];
          }
        }),
        _: 3
      }), _parent);
    };
  }
});

/* unplugin-vue-components disabled */const cButton_vue_vue_type_style_index_0_scoped_147876cf_lang = '';

const _sfc_setup$J = _sfc_main$J.setup;
_sfc_main$J.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/ui/c-button/c-button.vue");
  return _sfc_setup$J ? _sfc_setup$J(props, ctx) : void 0;
};
const __unplugin_components_0$5 = /* @__PURE__ */ _export_sfc(_sfc_main$J, [["__scopeId", "data-v-147876cf"]]);

const _sfc_main$I = /* @__PURE__ */ defineComponent({
  __name: "c-tooltip",
  __ssrInlineRender: true,
  props: {
    tooltip: { default: void 0 },
    position: { default: "top" }
  },
  setup(__props) {
    const props = __props;
    const { tooltip, position } = toRefs(props);
    const targetRef = ref();
    const isTargetHovered = useElementHover(targetRef);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        relative: "",
        "inline-block": ""
      }, _attrs))}><div>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
      if (unref(tooltip) || _ctx.$slots.tooltip) {
        _push(`<div class="${ssrRenderClass([{
          "op-0 scale-0": unref(isTargetHovered) === false,
          "op-100 scale-100": unref(isTargetHovered),
          "bottom-100% left-50% -translate-x-1/2 mb-5px": unref(position) === "top",
          "top-100% left-50% -translate-x-1/2 mt-5px": unref(position) === "bottom",
          "right-100% top-50% -translate-y-1/2 mr-5px": unref(position) === "left",
          "left-100% top-50% -translate-y-1/2 ml-5px": unref(position) === "right"
        }, "absolute z-10 whitespace-nowrap rounded bg-black px-12px py-6px text-sm text-white shadow-lg transition transition transition-duration-0.2s"])}">`);
        if (unref(isTargetHovered)) {
          ssrRenderSlot(_ctx.$slots, "tooltip", {}, () => {
            _push(`${ssrInterpolate(unref(tooltip))}`);
          }, _push, _parent);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});

const _sfc_setup$I = _sfc_main$I.setup;
_sfc_main$I.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/ui/c-tooltip/c-tooltip.vue");
  return _sfc_setup$I ? _sfc_setup$I(props, ctx) : void 0;
};

const _sfc_main$H = /* @__PURE__ */ defineComponent({
  __name: "NavbarButtons",
  __ssrInlineRender: true,
  setup(__props) {
    const styleStore = useStyleStore();
    const { isDarkTheme } = toRefs(styleStore);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_c_tooltip = _sfc_main$I;
      const _component_c_button = __unplugin_components_0$5;
      const _component_n_icon = NIcon;
      _push(ssrRenderComponent(_component_c_tooltip, mergeProps({
        tooltip: unref(isDarkTheme) ? _ctx.$t("home.nav.lightMode") : _ctx.$t("home.nav.darkMode"),
        position: "bottom"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_c_button, {
              circle: "",
              variant: "text",
              "aria-label": _ctx.$t("home.nav.mode"),
              onClick: () => unref(styleStore).toggleDark()
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (unref(isDarkTheme)) {
                    _push3(ssrRenderComponent(_component_n_icon, {
                      size: "25",
                      component: unref(Sun)
                    }, null, _parent3, _scopeId2));
                  } else {
                    _push3(ssrRenderComponent(_component_n_icon, {
                      size: "25",
                      component: unref(Moon)
                    }, null, _parent3, _scopeId2));
                  }
                } else {
                  return [
                    unref(isDarkTheme) ? (openBlock(), createBlock(_component_n_icon, {
                      key: 0,
                      size: "25",
                      component: unref(Sun)
                    }, null, 8, ["component"])) : (openBlock(), createBlock(_component_n_icon, {
                      key: 1,
                      size: "25",
                      component: unref(Moon)
                    }, null, 8, ["component"]))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_c_button, {
                circle: "",
                variant: "text",
                "aria-label": _ctx.$t("home.nav.mode"),
                onClick: () => unref(styleStore).toggleDark()
              }, {
                default: withCtx(() => [
                  unref(isDarkTheme) ? (openBlock(), createBlock(_component_n_icon, {
                    key: 0,
                    size: "25",
                    component: unref(Sun)
                  }, null, 8, ["component"])) : (openBlock(), createBlock(_component_n_icon, {
                    key: 1,
                    size: "25",
                    component: unref(Moon)
                  }, null, 8, ["component"]))
                ]),
                _: 1
              }, 8, ["aria-label", "onClick"])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});

/* unplugin-vue-components disabled */const NavbarButtons_vue_vue_type_style_index_0_scoped_99ae5a21_lang = '';

const _sfc_setup$H = _sfc_main$H.setup;
_sfc_main$H.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/NavbarButtons.vue");
  return _sfc_setup$H ? _sfc_setup$H(props, ctx) : void 0;
};
const NavbarButtons = /* @__PURE__ */ _export_sfc(_sfc_main$H, [["__scopeId", "data-v-99ae5a21"]]);

const { useTheme: useTheme$5 } = defineThemes({
  dark: {
    default: {
      textColor: appThemes.dark.primary.color,
      hover: {
        textColor: appThemes.dark.primary.colorHover
      },
      pressed: {
        textColor: appThemes.dark.primary.colorPressed
      },
      outline: {
        color: appThemes.dark.primary.color
      }
    }
  },
  light: {
    default: {
      textColor: appThemes.light.primary.color,
      hover: {
        textColor: appThemes.light.primary.colorHover
      },
      pressed: {
        textColor: appThemes.light.primary.colorPressed
      },
      outline: {
        color: appThemes.light.primary.color
      }
    }
  }
});

const _sfc_main$G = /* @__PURE__ */ defineComponent({
  __name: "c-link",
  __ssrInlineRender: true,
  props: {
    href: {},
    to: {}
  },
  setup(__props) {
    const props = __props;
    const { href, to } = toRefs(props);
    const theme = useTheme$5();
    const tag = computed(() => {
      if (href?.value) {
        return "a";
      }
      if (to?.value) {
        return RouterLink;
      }
      return "span";
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _cssVars = { style: {
        "--1eb0d378": unref(theme).default.textColor,
        "--7db8d4dc": unref(theme).default.hover.textColor,
        "--1fc91bc5": unref(theme).default.outline.color
      } };
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(tag)), mergeProps({
        href: unref(href) ?? unref(to),
        class: "c-link",
        to: unref(to)
      }, _attrs, _cssVars), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default", {}, void 0, true)
            ];
          }
        }),
        _: 3
      }), _parent);
    };
  }
});

/* unplugin-vue-components disabled */const cLink_vue_vue_type_style_index_0_scoped_affd0f5f_lang = '';

const _sfc_setup$G = _sfc_main$G.setup;
_sfc_main$G.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/ui/c-link/c-link.vue");
  return _sfc_setup$G ? _sfc_setup$G(props, ctx) : void 0;
};
const CLink = /* @__PURE__ */ _export_sfc(_sfc_main$G, [["__scopeId", "data-v-affd0f5f"]]);

const _sfc_main$F = /* @__PURE__ */ defineComponent({
  __name: "command-palette-option",
  __ssrInlineRender: true,
  props: {
    option: {},
    selected: { type: Boolean, default: false }
  },
  emits: ["activated"],
  setup(__props, { emit }) {
    const props = __props;
    const { option } = toRefs(props);
    const { selected } = toRefs(props);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        role: "option",
        "aria-selected": unref(selected),
        class: {
          "text-white": unref(selected),
          "bg-primary": unref(selected)
        },
        "w-full": "",
        flex: "",
        "cursor-pointer": "",
        "items-center": "",
        "overflow-hidden": "",
        rounded: "",
        "pa-3": "",
        transition: "",
        "hover:bg-primary": "",
        "hover:text-white": ""
      }, _attrs))}>`);
      if (unref(option).icon) {
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(option).icon), {
          "mr-3": "",
          "h-30px": "",
          "w-30px": "",
          "shrink-0": "",
          "op-50": ""
        }, null), _parent);
      } else {
        _push(`<!---->`);
      }
      _push(`<div flex-1 overflow-hidden><div truncate font-bold lh-tight op-90>${ssrInterpolate(unref(option).name)}</div>`);
      if (unref(option).description) {
        _push(`<div truncate lh-tight op-60>${ssrInterpolate(unref(option).description)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
});

const _sfc_setup$F = _sfc_main$F.setup;
_sfc_main$F.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/modules/command-palette/components/command-palette-option.vue");
  return _sfc_setup$F ? _sfc_setup$F(props, ctx) : void 0;
};

const _hoisted_1$m = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$m = /*#__PURE__*/createElementVNode("path", {
  fill: "currentColor",
  d: "M11.83 9L15 12.16V12a3 3 0 0 0-3-3h-.17m-4.3.8l1.55 1.55c-.05.21-.08.42-.08.65a3 3 0 0 0 3 3c.22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53a5 5 0 0 1-5-5c0-.79.2-1.53.53-2.2M2 4.27l2.28 2.28l.45.45C3.08 8.3 1.78 10 1 12c1.73 4.39 6 7.5 11 7.5c1.55 0 3.03-.3 4.38-.84l.43.42L19.73 22L21 20.73L3.27 3M12 7a5 5 0 0 1 5 5c0 .64-.13 1.26-.36 1.82l2.93 2.93c1.5-1.25 2.7-2.89 3.43-4.75c-1.73-4.39-6-7.5-11-7.5c-1.4 0-2.74.25-4 .7l2.17 2.15C10.74 7.13 11.35 7 12 7Z"
}, null, -1);
const _hoisted_3$m = [
  _hoisted_2$m
];

function render$n(_ctx, _cache) {
  return (openBlock(), createElementBlock("svg", _hoisted_1$m, _hoisted_3$m))
}

const __unplugin_components_3$2 = { name: 'mdi-eye-off', render: render$n };
/* vite-plugin-components disabled */

const _hoisted_1$l = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$l = /*#__PURE__*/createElementVNode("path", {
  fill: "currentColor",
  d: "M12 9a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3m0 8a5 5 0 0 1-5-5a5 5 0 0 1 5-5a5 5 0 0 1 5 5a5 5 0 0 1-5 5m0-12.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5Z"
}, null, -1);
const _hoisted_3$l = [
  _hoisted_2$l
];

function render$m(_ctx, _cache) {
  return (openBlock(), createElementBlock("svg", _hoisted_1$l, _hoisted_3$l))
}

const __unplugin_components_2$1 = { name: 'mdi-eye', render: render$m };
/* vite-plugin-components disabled */

const _hoisted_1$k = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$k = /*#__PURE__*/createElementVNode("path", {
  fill: "currentColor",
  d: "M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
}, null, -1);
const _hoisted_3$k = [
  _hoisted_2$k
];

function render$l(_ctx, _cache) {
  return (openBlock(), createElementBlock("svg", _hoisted_1$k, _hoisted_3$k))
}

const __unplugin_components_1$4 = { name: 'mdi-close', render: render$l };
/* vite-plugin-components disabled */

const { useTheme: useTheme$4 } = defineThemes({
  dark: {
    backgroundColor: "#333333",
    borderColor: "#333333",
    focus: {
      backgroundColor: "#1ea54c1a"
    }
  },
  light: {
    backgroundColor: "#ffffff",
    borderColor: "#e0e0e69e",
    focus: {
      backgroundColor: "#ffffff"
    }
  }
});

const random = () => Math.random();
const randFromArray = (array) => array[Math.floor(random() * array.length)];
const randIntFromInterval = (min, max) => Math.floor(random() * (max - min) + min);
function shuffleArrayMutate(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
const shuffleString = (str, delimiter = "") => shuffleArrayMutate(str.split(delimiter)).join(delimiter);
const generateRandomId = () => `id-${random().toString(36).substring(2, 12)}`;

function isFalsyOrHasThrown(cb) {
  try {
    const returnValue = cb();
    if (_.isNil(returnValue)) {
      return true;
    }
    return returnValue === false;
  } catch (_2) {
    return true;
  }
}
function useValidation({
  source,
  rules,
  watch: watchRefs = []
}) {
  const state = reactive({
    message: "",
    status: void 0,
    isValid: false,
    attrs: {
      validationStatus: void 0,
      feedback: ""
    }
  });
  watch(
    [source, ...watchRefs],
    () => {
      state.message = "";
      state.status = void 0;
      for (const rule of get(rules)) {
        if (isFalsyOrHasThrown(() => rule.validator(source.value))) {
          state.message = rule.message;
          state.status = "error";
        }
      }
      state.isValid = state.status !== "error";
      state.attrs.feedback = state.message;
      state.attrs.validationStatus = state.status;
    },
    { immediate: true }
  );
  return state;
}

const _sfc_main$E = /* @__PURE__ */ defineComponent({
  __name: "c-input-text",
  __ssrInlineRender: true,
  props: {
    value: { default: "" },
    id: { default: generateRandomId },
    placeholder: { default: "Input text" },
    label: { default: void 0 },
    readonly: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
    validationRules: { default: () => [] },
    validationWatch: { default: void 0 },
    validation: { default: void 0 },
    labelPosition: { default: "top" },
    labelWidth: { default: "auto" },
    labelAlign: { default: "left" },
    clearable: { type: Boolean, default: false },
    testId: { default: void 0 },
    autocapitalize: { default: void 0 },
    autocomplete: { default: void 0 },
    autocorrect: { default: void 0 },
    spellcheck: { type: [String, Boolean], default: void 0 },
    rawText: { type: Boolean, default: false },
    type: { default: "text" },
    multiline: { type: Boolean, default: false },
    rows: { default: 3 },
    autosize: { type: Boolean, default: false },
    autofocus: { type: Boolean, default: false },
    monospace: { type: Boolean, default: false }
  },
  emits: ["update:value"],
  setup(__props, { expose: __expose, emit }) {
    const props = __props;
    const value = useVModel(props, "value", emit);
    const showPassword = ref(false);
    const { id, placeholder, label, validationRules, labelPosition, labelWidth, labelAlign, autosize, readonly, disabled, clearable, type, multiline, rows, rawText, autofocus, monospace } = toRefs(props);
    const validation = props.validation ?? useValidation({
      rules: validationRules,
      source: value,
      watch: props.validationWatch
    });
    const theme = useTheme$4();
    const appTheme = useAppTheme();
    const textareaRef = ref();
    const inputRef = ref();
    const inputWrapperRef = ref();
    watch(
      [value, autosize, multiline, inputWrapperRef, textareaRef],
      () => nextTick(() => {
        if (props.multiline && autosize.value) {
          resizeTextarea();
        }
      }),
      { immediate: true }
    );
    function resizeTextarea() {
      if (!textareaRef.value || !inputWrapperRef.value) {
        return;
      }
      const scrollHeight = textareaRef.value.scrollHeight + 2;
      inputWrapperRef.value.style.height = `${scrollHeight}px`;
    }
    const htmlInputType = computed(() => {
      if (props.type === "password" && !showPassword.value) {
        return "password";
      }
      return "text";
    });
    function focus() {
      if (textareaRef.value) {
        textareaRef.value.focus();
      }
      if (inputRef.value) {
        inputRef.value.focus();
      }
    }
    function blur() {
      if (textareaRef.value) {
        textareaRef.value.blur?.();
      }
      if (inputRef.value) {
        inputRef.value.blur?.();
      }
    }
    onMounted(() => {
      if (autofocus.value) {
        focus();
      }
    });
    __expose({
      inputWrapperRef,
      focus,
      blur
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_c_button = __unplugin_components_0$5;
      const _component_icon_mdi_close = __unplugin_components_1$4;
      const _component_icon_mdi_eye = __unplugin_components_2$1;
      const _component_icon_mdi_eye_off = __unplugin_components_3$2;
      const _cssVars = { style: {
        "--1578999c": unref(appTheme).error.color,
        "--b18512fa": unref(appTheme).error.color + 22,
        "--15951ced": unref(labelWidth),
        "--1460862c": unref(labelAlign),
        "--e1b5bfd6": unref(theme).backgroundColor,
        "--e9ed6052": unref(theme).borderColor,
        "--1728643c": unref(appTheme).text.baseColor,
        "--ffa9e664": unref(appTheme).text.mutedColor,
        "--ac68db28": unref(appTheme).primary.color,
        "--0ab89a02": unref(theme).focus.backgroundColor
      } };
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["c-input-text", { disabled: unref(disabled), "error": !unref(validation).isValid, "label-left": unref(labelPosition) === "left", multiline: unref(multiline) }]
      }, _attrs, _cssVars))} data-v-c4df69f5>`);
      if (unref(label)) {
        _push(`<label${ssrRenderAttr("for", unref(id))} class="label" data-v-c4df69f5>${ssrInterpolate(unref(label))}</label>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="feedback-wrapper" data-v-c4df69f5><div class="input-wrapper" data-v-c4df69f5>`);
      ssrRenderSlot(_ctx.$slots, "prefix", {}, null, _push, _parent);
      if (unref(multiline)) {
        _push(`<textarea${ssrRenderAttr("id", unref(id))} class="${ssrRenderClass([{
          "leading-5 !font-mono": unref(monospace)
        }, "input"])}"${ssrRenderAttr("placeholder", unref(placeholder))}${ssrIncludeBooleanAttr(unref(readonly)) ? " readonly" : ""}${ssrIncludeBooleanAttr(unref(disabled)) ? " disabled" : ""}${ssrRenderAttr("data-test-id", _ctx.testId)}${ssrRenderAttr("autocapitalize", _ctx.autocapitalize ?? (unref(rawText) ? "off" : void 0))}${ssrRenderAttr("autocomplete", _ctx.autocomplete ?? (unref(rawText) ? "off" : void 0))}${ssrRenderAttr("autocorrect", _ctx.autocorrect ?? (unref(rawText) ? "off" : void 0))}${ssrRenderAttr("spellcheck", _ctx.spellcheck ?? (unref(rawText) ? false : void 0))}${ssrRenderAttr("rows", unref(rows))} data-v-c4df69f5>${ssrInterpolate(unref(value))}</textarea>`);
      } else {
        _push(`<input${ssrRenderAttr("id", unref(id))}${ssrRenderDynamicModel(unref(htmlInputType), unref(value), null)}${ssrRenderAttr("type", unref(htmlInputType))} class="${ssrRenderClass([{
          "leading-5 !font-mono": unref(monospace)
        }, "input"])}" size="1"${ssrRenderAttr("placeholder", unref(placeholder))}${ssrIncludeBooleanAttr(unref(readonly)) ? " readonly" : ""}${ssrIncludeBooleanAttr(unref(disabled)) ? " disabled" : ""}${ssrRenderAttr("data-test-id", _ctx.testId)}${ssrRenderAttr("autocapitalize", _ctx.autocapitalize ?? (unref(rawText) ? "off" : void 0))}${ssrRenderAttr("autocomplete", _ctx.autocomplete ?? (unref(rawText) ? "off" : void 0))}${ssrRenderAttr("autocorrect", _ctx.autocorrect ?? (unref(rawText) ? "off" : void 0))}${ssrRenderAttr("spellcheck", _ctx.spellcheck ?? (unref(rawText) ? false : void 0))} data-v-c4df69f5>`);
      }
      if (unref(clearable) && unref(value)) {
        _push(ssrRenderComponent(_component_c_button, {
          variant: "text",
          circle: "",
          size: "small",
          onClick: ($event) => value.value = ""
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_icon_mdi_close, null, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_icon_mdi_close)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(type) === "password") {
        _push(ssrRenderComponent(_component_c_button, {
          variant: "text",
          circle: "",
          size: "small",
          onClick: ($event) => showPassword.value = !unref(showPassword)
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              if (!unref(showPassword)) {
                _push2(ssrRenderComponent(_component_icon_mdi_eye, null, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              if (unref(showPassword)) {
                _push2(ssrRenderComponent(_component_icon_mdi_eye_off, null, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
            } else {
              return [
                !unref(showPassword) ? (openBlock(), createBlock(_component_icon_mdi_eye, { key: 0 })) : createCommentVNode("", true),
                unref(showPassword) ? (openBlock(), createBlock(_component_icon_mdi_eye_off, { key: 1 })) : createCommentVNode("", true)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      ssrRenderSlot(_ctx.$slots, "suffix", {}, null, _push, _parent);
      _push(`</div>`);
      if (!unref(validation).isValid) {
        _push(`<span class="feedback" data-v-c4df69f5>${ssrInterpolate(unref(validation).message)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
});

/* unplugin-vue-components disabled */const cInputText_vue_vue_type_style_index_0_scoped_c4df69f5_lang = '';

const _sfc_setup$E = _sfc_main$E.setup;
_sfc_main$E.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/ui/c-input-text/c-input-text.vue");
  return _sfc_setup$E ? _sfc_setup$E(props, ctx) : void 0;
};
const __unplugin_components_3$1 = /* @__PURE__ */ _export_sfc(_sfc_main$E, [["__scopeId", "data-v-c4df69f5"]]);

const { useTheme: useTheme$3 } = defineThemes({
  dark: {
    background: appThemes.dark.background
  },
  light: {
    background: appThemes.light.background
  }
});

const _sfc_main$D = /* @__PURE__ */ defineComponent({
  ...{
    inheritAttrs: false
  },
  __name: "c-modal",
  __ssrInlineRender: true,
  props: {
    open: { type: Boolean, default: false },
    centered: { type: Boolean, default: true }
  },
  emits: ["update:open"],
  setup(__props, { expose: __expose, emit }) {
    const props = __props;
    const isOpen = useVModel(props, "open", emit, { passive: true });
    const { centered } = toRefs(props);
    function close() {
      isOpen.value = false;
    }
    function open() {
      isOpen.value = true;
    }
    function toggle() {
      isOpen.value = !isOpen.value;
    }
    __expose({
      close,
      open,
      toggle,
      isOpen
    });
    const theme = useTheme$3();
    const modal = ref();
    onClickOutside(modal, () => {
      if (isOpen.value) {
        close();
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      ({ style: {
        "--f6e4b4d2": unref(theme).background
      } });
      if (unref(isOpen)) {
        _push(`<div${ssrRenderAttrs(mergeProps({
          class: ["c-modal--overlay", { "items-center": unref(centered) }],
          fixed: "",
          "left-0": "",
          "top-0": "",
          "z-10": "",
          "h-full": "",
          "w-full": "",
          flex: "",
          "justify-center": "",
          "px-2": ""
        }, _attrs))} data-v-94793f53><div${ssrRenderAttrs(mergeProps({
          ref_key: "modal",
          ref: modal,
          class: "c-modal--container"
        }, _ctx.$attrs, {
          "max-w-xl": "",
          "w-full": "",
          "flex-grow": "",
          "rounded-md": "",
          "pa-24px": ""
        }))} data-v-94793f53>`);
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});

/* unplugin-vue-components disabled */const cModal_vue_vue_type_style_index_0_scoped_94793f53_lang = '';

const _sfc_setup$D = _sfc_main$D.setup;
_sfc_main$D.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/ui/c-modal/c-modal.vue");
  return _sfc_setup$D ? _sfc_setup$D(props, ctx) : void 0;
};
const __unplugin_components_1$3 = /* @__PURE__ */ _export_sfc(_sfc_main$D, [["__scopeId", "data-v-94793f53"]]);

const _hoisted_1$j = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$j = /*#__PURE__*/createElementVNode("path", {
  fill: "currentColor",
  d: "M9.5 3A6.5 6.5 0 0 1 16 9.5c0 1.61-.59 3.09-1.56 4.23l.27.27h.79l5 5l-1.5 1.5l-5-5v-.79l-.27-.27A6.516 6.516 0 0 1 9.5 16A6.5 6.5 0 0 1 3 9.5A6.5 6.5 0 0 1 9.5 3m0 2C7 5 5 7 5 9.5S7 14 9.5 14S14 12 14 9.5S12 5 9.5 5Z"
}, null, -1);
const _hoisted_3$j = [
  _hoisted_2$j
];

function render$k(_ctx, _cache) {
  return (openBlock(), createElementBlock("svg", _hoisted_1$j, _hoisted_3$j))
}

const __unplugin_components_1$2 = { name: 'mdi-search', render: render$k };
/* vite-plugin-components disabled */

function defineTool(tool) {
  const isNew = tool.createdAt ? isAfter(tool.createdAt, subWeeks(/* @__PURE__ */ new Date(), 2)) : false;
  return {
    isNew,
    ...tool
  };
}

const isObject = (item) => item && typeof item === 'object' && !Array.isArray(item);

const mergeDeep = (target, ...sources) => {
  if (!sources.length) return target;
  const source = sources.shift();

  if (isObject(target) && isObject(source)) {
    for (const key in source) {
      if (isObject(source[key])) {
        if (!target[key]) Object.assign(target, { [key]: {} });
        mergeDeep(target[key], source[key]);
      } else {
        Object.assign(target, { [key]: source[key] });
      }
    }
  }

  return mergeDeep(target, ...sources);
};

const messages = mergeDeep({},
  {"en": {
  "home": {
    "categories": {
      "newestTools": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Newest tools"])},
      "favoriteTools": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Your favorite tools"])},
      "allTools": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["All the tools"])}
    },
    "subtitle": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Handy tools for developers"])},
    "toggleMenu": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Toggle menu"])},
    "home": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Home"])},
    "uiLib": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["UI Lib"])},
    "support": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Support Zeeklog Online Tools development"])},
    "buyMeACoffee": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Buy me a coffee"])},
    "follow": {
      "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["You like it-tools?"])},
      "p1": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Give us a star on"])},
      "githubRepository": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["IT-Tools GitHub repository"])},
      "p2": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["or follow us on"])},
      "twitterAccount": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["IT-Tools Twitter account"])},
      "thankYou": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Thank you !"])}
    },
    "nav": {
      "github": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["GitHub repository"])},
      "githubRepository": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["IT-Tools GitHub repository"])},
      "twitter": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Twitter account"])},
      "twitterAccount": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Zeeklog Online Tools Twitter account"])},
      "about": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["About  IT-Tools"])},
      "aboutLabel": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["About"])},
      "darkMode": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Dark mode"])},
      "lightMode": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Light mode"])},
      "mode": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Toggle dark/light mode"])}
    }
  },
  "about": {
    "content": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["# About IT-Tools\nThis wonderful website, made with ❤ by [Ne0inHK](https://github.com/zeeklog) , aggregates useful tools for developer and people working in IT. If you find it useful, please feel free to share it to people you think may find it useful too and don't forget to bookmark it in your shortcut bar!\nZeeklog Online Tools is open-source (under the MIT license) and free, and will always be, but it costs me money to host and renew the domain name. If you want to support my work, and encourage me to add more tools, please consider supporting by [sponsoring me](https://www.buymeacoffee.com/cthmsst).\n## Technologies\nZeeklog Online Tools is made in Vue.js (Vue 3) with the the Naive UI component library and is hosted and continuously deployed by Vercel. Third-party open-source libraries are used in some tools, you may find the complete list in the [package.json](https://github.com/zeeklog/it-tools/blob/main/package.json) file of the repository.\n## Found a bug? A tool is missing?\nIf you need a tool that is currently not present here, and you think can be useful, you are welcome to submit a feature request in the [issues section](https://github.com/zeeklog/it-tools/issues/new/choose) in the GitHub repository.\nAnd if you found a bug, or something doesn't work as expected, please file a bug report in the [issues section](https://github.com/zeeklog/it-tools/issues/new/choose) in the GitHub repository.\n"])}
  },
  404: {
    "notFound": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["404 Not Found"])},
    "sorry": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Sorry, this page does not seem to exist"])},
    "maybe": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Maybe the cache is doing tricky things, try force-refreshing?"])},
    "backHome": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Back home"])}
  },
  "favoriteButton": {
    "remove": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Remove from favorites"])},
    "add": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Add to favorites"])}
  },
  "toolCard": {
    "new": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["New"])}
  },
  "search": {
    "label": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Search"])}
  },
  "tools": {
    "categories": {
      "favorite-tools": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Your favorite tools"])},
      "crypto": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Crypto"])},
      "converter": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Converter"])},
      "web": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Web"])},
      "images and videos": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Images & Videos"])},
      "development": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Development"])},
      "network": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Network"])},
      "math": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Math"])},
      "measurement": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Measurement"])},
      "text": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Text"])},
      "data": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Data"])}
    },
    "password-strength-analyser": {
      "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Password strength analyser"])},
      "description": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Discover the strength of your password with this client side only password strength analyser and crack time estimation tool."])}
    },
    "chronometer": {
      "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Chronometer"])},
      "description": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Monitor the duration of a thing. Basically a chronometer with simple chronometer features."])}
    },
    "token-generator": {
      "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Token generator"])},
      "description": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Generate random string with the chars you want, uppercase or lowercase letters, numbers and/or symbols."])},
      "uppercase": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Uppercase (ABC...)"])},
      "lowercase": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Lowercase (abc...)"])},
      "numbers": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Numbers (123...)"])},
      "symbols": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Symbols (!-;...)"])},
      "length": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Length"])},
      "tokenPlaceholder": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["The token..."])},
      "copied": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Token copied to the clipboard"])},
      "button": {
        "copy": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Copy"])},
        "refresh": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Refresh"])}
      }
    },
    "percentage-calculator": {
      "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Percentage calculator"])},
      "description": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Easily calculate percentages from a value to another value, or from a percentage to a value."])}
    },
    "svg-placeholder-generator": {
      "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["SVG placeholder generator"])},
      "description": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Generate svg images to use as placeholder in your applications."])}
    },
    "json-to-csv": {
      "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["JSON to CSV"])},
      "description": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Convert JSON to CSV with automatic header detection."])}
    },
    "camera-recorder": {
      "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Camera recorder"])},
      "description": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Take a picture or record a video from your webcam or camera."])}
    },
    "keycode-info": {
      "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Keycode info"])},
      "description": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Find the javascript keycode, code, location and modifiers of any pressed key."])}
    },
    "emoji-picker": {
      "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Emoji picker"])},
      "description": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Copy and paste emojis easily and get the unicode and code points value of each emoji."])}
    },
    "color-converter": {
      "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Color converter"])},
      "description": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Convert color between the different formats (hex, rgb, hsl and css name)"])}
    },
    "bcrypt": {
      "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Bcrypt"])},
      "description": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Hash and compare text string using bcrypt. Bcrypt is a password-hashing function based on the Blowfish cipher."])}
    },
    "crontab-generator": {
      "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Crontab generator"])},
      "description": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Validate and generate crontab and get the human readable description of the cron schedule."])}
    },
    "http-status-codes": {
      "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["HTTP status codes"])},
      "description": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["The list of all HTTP status codes their name and their meaning."])}
    },
    "sql-prettify": {
      "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["SQL prettify and format"])},
      "description": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Format and prettify your SQL queries online (it supports various SQL dialects)."])}
    },
    "benchmark-builder": {
      "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Benchmark builder"])},
      "description": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Easily compare execution time of tasks with this very simple online benchmark builder."])}
    },
    "git-memo": {
      "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Git cheatsheet"])},
      "description": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Git is a decentralized version management software. With this cheatsheet you will have a quick access to the most common git commands."])}
    },
    "slugify-string": {
      "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Slugify string"])},
      "description": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Make a string url, filename and id safe."])}
    },
    "encryption": {
      "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Encrypt / decrypt text"])},
      "description": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Encrypt and decrypt text clear text using crypto algorithm like AES, TripleDES, Rabbit or RC4."])}
    },
    "random-port-generator": {
      "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Random port generator"])},
      "description": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Generate random port numbers outside of the range of \"known\" ports (0-1023)."])}
    },
    "yaml-prettify": {
      "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["YAML prettify and format"])},
      "description": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Prettify your YAML string to a human friendly readable format."])}
    },
    "eta-calculator": {
      "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["ETA calculator"])},
      "description": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["An ETA (Estimated Time of Arrival) calculator to know the approximate end time of a task, for example the moment of ending of a download."])}
    },
    "roman-numeral-converter": {
      "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Roman numeral converter"])},
      "description": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Convert Roman numerals to numbers and convert numbers to Roman numerals."])}
    },
    "hmac-generator": {
      "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Hmac generator"])},
      "description": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Computes a hash-based message authentication code (HMAC) using a secret key and your favorite hashing function."])}
    },
    "bip39-generator": {
      "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["BIP39 passphrase generator"])},
      "description": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Generate BIP39 passphrase from existing or random mnemonic, or get the mnemonic from the passphrase."])}
    },
    "base64-file-converter": {
      "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Base64 file converter"])},
      "description": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Convert string, files or images into a it\\'s base64 representation."])}
    },
    "list-converter": {
      "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["List converter"])},
      "description": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["This tool can process column-based data and apply various changes (transpose, add prefix and suffix, reverse list, sort list, lowercase values, truncate values) to each row."])}
    },
    "base64-string-converter": {
      "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Base64 string encoder/decoder"])},
      "description": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Simply encode and decode string into a their base64 representation."])}
    },
    "toml-to-yaml": {
      "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["TOML to YAML"])},
      "description": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Parse and convert TOML to YAML."])}
    },
    "math-evaluator": {
      "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Math evaluator"])},
      "description": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["A calculator for evaluating mathematical expressions. You can use functions like sqrt, cos, sin, abs, etc."])}
    },
    "json-to-yaml-converter": {
      "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["JSON to YAML converter"])},
      "description": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Simply convert JSON to YAML with this live online converter."])}
    },
    "url-parser": {
      "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Url parser"])},
      "description": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Parse an url string to get all the different parts (protocol, origin, params, port, username-password, ...)"])}
    },
    "iban-validator-and-parser": {
      "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["IBAN validator and parser"])},
      "description": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Validate and parse IBAN numbers. Check if IBAN is valid and get the country, BBAN, if it is a QR-IBAN and the IBAN friendly format."])}
    },
    "user-agent-parser": {
      "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["User-agent parser"])},
      "description": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Detect and parse Browser, Engine, OS, CPU, and Device type/model from an user-agent string."])}
    },
    "numeronym-generator": {
      "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Numeronym generator"])},
      "description": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["A numeronym is a word where a number is used to form an abbreviation. For example, \"i18n\" is a numeronym of \"internationalization\" where 18 stands for the number of letters between the first i and the last n in the word."])}
    },
    "case-converter": {
      "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Case converter"])},
      "description": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Change the case of a string and chose between different formats"])}
    },
    "html-entities": {
      "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Escape html entities"])},
      "description": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Escape or unescape html entities (replace <,>, &, \" and \\' to their html version)"])}
    },
    "json-prettify": {
      "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["JSON prettify and format"])},
      "description": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Prettify your JSON string to a human friendly readable format."])}
    },
    "docker-run-to-docker-compose-converter": {
      "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Docker run to Docker compose converter"])},
      "description": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Turns docker run commands into docker-compose files!"])}
    },
    "mac-address-lookup": {
      "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["MAC address lookup"])},
      "description": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Find the vendor and manufacturer of a device by its MAC address."])}
    },
    "mime-types": {
      "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Mime types"])},
      "description": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Convert mime types to extensions and vice-versa."])}
    },
    "toml-to-json": {
      "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["TOML to JSON"])},
      "description": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Parse and convert TOML to JSON."])}
    },
    "lorem-ipsum-generator": {
      "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Lorem ipsum generator"])},
      "description": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content"])}
    },
    "qrcode-generator": {
      "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["QR Code generator"])},
      "description": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Generate and download QR-code for an url or just a text and customize the background and foreground colors."])}
    },
    "wifi-qrcode-generator": {
      "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["WiFi QR Code generator"])},
      "description": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Generate and download QR-codes for quick connections to WiFi networks."])}
    },
    "xml-formatter": {
      "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["XML formatter"])},
      "description": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Prettify your XML string to a human friendly readable format."])}
    },
    "temperature-converter": {
      "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Temperature converter"])},
      "description": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Temperature degrees conversions for Kelvin, Celsius, Fahrenheit, Rankine, Delisle, Newton, Réaumur and Rømer."])}
    },
    "chmod-calculator": {
      "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Chmod calculator"])},
      "description": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Compute your chmod permissions and commands with this online chmod calculator."])}
    },
    "rsa-key-pair-generator": {
      "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["RSA key pair generator"])},
      "description": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Generate new random RSA private and public key pem certificates."])}
    },
    "html-wysiwyg-editor": {
      "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["HTML WYSIWYG editor"])},
      "description": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Online HTML editor with feature-rich WYSIWYG editor, get the source code of the content immediately."])}
    },
    "yaml-to-toml": {
      "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["YAML to TOML"])},
      "description": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Parse and convert YAML to TOML."])}
    },
    "mac-address-generator": {
      "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["MAC address generator"])},
      "description": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Enter the quantity and prefix. MAC addresses will be generated in your chosen case (uppercase or lowercase)"])}
    },
    "json-diff": {
      "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["JSON diff"])},
      "description": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Compare two JSON objects and get the differences between them."])}
    },
    "jwt-parser": {
      "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["JWT parser"])},
      "description": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Parse and decode your JSON Web Token (jwt) and display its content."])}
    },
    "date-converter": {
      "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Date-time converter"])},
      "description": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Convert date and time into the various different formats"])}
    },
    "phone-parser-and-formatter": {
      "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Phone parser and formatter"])},
      "description": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Parse, validate and format phone numbers. Get information about the phone number, like the country code, type, etc."])}
    },
    "ipv4-subnet-calculator": {
      "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["IPv4 subnet calculator"])},
      "description": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Parse your IPv4 CIDR blocks and get all the info you need about your sub network."])}
    },
    "og-meta-generator": {
      "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Open graph meta generator"])},
      "description": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Generate open-graph and socials html meta tags for your website."])}
    },
    "ipv6-ula-generator": {
      "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["IPv6 ULA generator"])},
      "description": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Generate your own local, non-routable IP addresses on your network according to RFC4193."])}
    },
    "hash-text": {
      "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Hash text"])},
      "description": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Hash a text string using the function you need : MD5, SHA1, SHA256, SHA224, SHA512, SHA384, SHA3 or RIPEMD160"])}
    },
    "json-to-toml": {
      "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["JSON to TOML"])},
      "description": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Parse and convert JSON to TOML."])}
    },
    "device-information": {
      "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Device information"])},
      "description": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Get information about your current device (screen size, pixel-ratio, user agent, ...)"])}
    },
    "pdf-signature-checker": {
      "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["PDF signature checker"])},
      "description": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Verify the signatures of a PDF file. A signed PDF file contains one or more signatures that may be used to determine whether the contents of the file have been altered since the file was signed."])}
    },
    "json-minify": {
      "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["JSON minify"])},
      "description": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Minify and compress your JSON by removing unnecessary white spaces."])}
    },
    "ulid-generator": {
      "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["ULID generator"])},
      "description": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Generate random Universally Unique Lexicographically Sortable Identifier (ULID)."])}
    },
    "string-obfuscator": {
      "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["String obfuscator"])},
      "description": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Obfuscate a string (like a secret, an IBAN, or a token) to make it shareable and identifiable without revealing its content."])}
    },
    "base-converter": {
      "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Integer base converter"])},
      "description": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Convert number between different bases (decimal, hexadecimal, binary, octal, base64, ...)"])}
    },
    "yaml-to-json-converter": {
      "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["YAML to JSON converter"])},
      "description": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Simply convert YAML to JSON with this live online converter."])}
    },
    "uuid-generator": {
      "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["UUIDs generator"])},
      "description": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["A Universally Unique Identifier (UUID) is a 128-bit number used to identify information in computer systems. The number of possible UUIDs is 16^32, which is 2^128 or about 3.4x10^38 (which is a lot!)."])}
    },
    "ipv4-address-converter": {
      "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Ipv4 address converter"])},
      "description": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Convert an ip address into decimal, binary, hexadecimal or event in ipv6"])}
    },
    "text-statistics": {
      "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Text statistics"])},
      "description": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Get information about a text, the amount of characters, the amount of words, it\\'s size, ..."])}
    },
    "text-to-nato-alphabet": {
      "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Text to NATO alphabet"])},
      "description": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Transform text into NATO phonetic alphabet for oral transmission."])}
    },
    "basic-auth-generator": {
      "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Basic auth generator"])},
      "description": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Generate a base64 basic auth header from an username and a password."])}
    },
    "text-to-unicode": {
      "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Text to Unicode"])},
      "description": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Parse and convert text to unicode and vice-versa"])}
    },
    "ipv4-range-expander": {
      "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["IPv4 range expander"])},
      "description": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Given a start and an end IPv4 address this tool calculates a valid IPv4 network with its CIDR notation."])}
    },
    "text-diff": {
      "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Text diff"])},
      "description": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Compare two texts and see the differences between them."])}
    },
    "otp-generator": {
      "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["OTP code generator"])},
      "description": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Generate and validate time-based OTP (one time password) for multi-factor authentication."])}
    },
    "url-encoder": {
      "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Encode/decode url formatted strings"])},
      "description": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Encode to url-encoded format (also known as \"percent-encoded\") or decode from it."])}
    },
    "text-to-binary": {
      "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Text to ASCII binary"])},
      "description": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Convert text to its ASCII binary representation and vice versa."])}
    }
  }
}},
{"es": {
  "home": {
    "categories": {
      "newestTools": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Nuevas herramientas"])},
      "favoriteTools": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Tus herramientas favoritas"])},
      "allTools": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Todas las herramientas"])}
    },
    "subtitle": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Herramientas practicas para desarrolladores"])},
    "toggleMenu": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Toggle menu"])},
    "home": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Home"])},
    "uiLib": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["UI Lib"])},
    "support": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Apoyar el desarrollo de IT-Tools"])},
    "buyMeACoffee": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Buy me a coffee"])},
    "follow": {
      "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Te gustan las it-tools?"])},
      "p1": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Danos una estrella en"])},
      "githubRepository": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Repositorio de IT-Tools en GitHub"])},
      "p2": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["o síguenos en"])},
      "twitterAccount": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Cuenta de twitter de IT-Tools"])},
      "thankYou": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Muchas gracias!"])}
    },
    "nav": {
      "github": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Repositorio en github"])},
      "githubRepository": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["IT-Tools GitHub repository"])},
      "twitter": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Cuenta de Twitter"])},
      "twitterAccount": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Cuenta de twitter de Zeeklog Online Tools"])},
      "about": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Sobre  IT-Tools"])},
      "aboutLabel": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Sobre"])},
      "darkMode": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Modo obscuro"])},
      "lightMode": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Modo claro"])},
      "mode": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Alternar modo oscuro/claro"])}
    }
  },
  "about": {
    "content": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["# Sobre IT-Tools\nEste maravilloso sitio web, hecho con ❤ por [Ne0inHK](https://github.com/zeeklog) , agrega herramientas útiles para desarrolladores y personas que trabajan en IT. Si lo encuentra útil, no dude en compartirlo con las personas que crea que también pueden encontrarlo útil y ¡no olvide marcarlo como favorito en su barra de accesos directos!\nZeeklog Online Tools es de código abierto (under the MIT license) y gratis, y siempre lo será, pero me cuesta dinero alojar y renovar el nombre de dominio. Si desea apoyar mi trabajo y animarme a agregar más herramientas, considere apoyarme a través de[sponsoring me](https://www.buymeacoffee.com/cthmsst).\n## Tecnologías\nZeeklog Online Tools está creado en Vue.js (Vue 3) con la biblioteca de componentes Naive UI y Vercel lo aloja y lo implementa continuamente. En algunas herramientas se utilizan bibliotecas de código abierto de terceros; puede encontrar la lista completa en [package.json](https://github.com/zeeklog/it-tools/blob/main/package.json) archivo del repositorio.\n## ¿Encontraste un error? ¿Falta una herramienta?\nSi necesita una herramienta que actualmente no está presente aquí y cree que puede ser útil, puede enviar una solicitud de función en el [issues section](https://github.com/zeeklog/it-tools/issues/new/choose) en el repositorio de GitHub.\nY si encontró un error o algo no funciona como se esperaba, presente un reporte de error en el [issues section](https://github.com/zeeklog/it-tools/issues/new/choose) en el repositorio de GitHub.\n"])}
  },
  404: {
    "notFound": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["404 Not Found"])},
    "sorry": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Lo sentimos, esta página no parece existir"])},
    "maybe": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Tal vez el caché esté haciendo cosas raras, ¿probamos a refrescar forzosamente?"])},
    "backHome": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Back home"])}
  },
  "favoriteButton": {
    "remove": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Quitar de favoritos"])},
    "add": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Añadir a favoritos"])}
  },
  "toolCard": {
    "new": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Nuevo"])}
  },
  "search": {
    "label": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Buscar"])}
  },
  "tools": {
    "categories": {
      "favorite-tools": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Tus herramientas favoritas"])},
      "crypto": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Crypto"])},
      "converter": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Converter"])},
      "web": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Web"])},
      "images and videos": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Images & Videos"])},
      "development": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Development"])},
      "network": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Network"])},
      "math": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Math"])},
      "measurement": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Measurement"])},
      "text": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Text"])},
      "data": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Data"])}
    }
  }
}},
{"fr": {
  "home": {
    "categories": {
      "newestTools": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Les nouveaux outils"])},
      "favoriteTools": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Vos outils favoris"])},
      "allTools": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Tous les outils"])}
    },
    "subtitle": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Outils pour les développeurs"])},
    "toggleMenu": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Menu"])},
    "home": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Accueil"])},
    "uiLib": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["UI Lib"])},
    "buyMeACoffee": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Soutenez IT-Tools"])},
    "follow": {
      "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Vous aimez it-tools ?"])},
      "p1": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Soutenez-nous avec une star sur"])},
      "githubRepository": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["le dépôt GitHub d'IT-Tools"])},
      "p2": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["ou suivez-nous sur"])},
      "twitterAccount": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["le compte Twitter d'IT-Tools"])},
      "thankYou": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Merci !"])}
    },
    "nav": {
      "github": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Dépôt GitHub"])},
      "githubRepository": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Dépôt GitHub d'IT-Tools"])},
      "twitter": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Compte Twitter"])},
      "twitterAccount": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Compte Twitter d'IT-Tools"])},
      "about": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["À propos d'IT-Tools"])},
      "aboutLabel": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["À propos"])},
      "darkMode": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Mode sombre"])},
      "lightMode": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Mode clair"])},
      "mode": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Basculer le mode sombre/clair"])}
    }
  },
  "about": {
    "content": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["# À propos de IT-Tools\nCe merveilleux site, fait avec ❤ par [Ne0inHK](https://github.com/zeeklog), regroupe des outils utiles pour les développeurs et les personnes travaillant dans l'informatique. Si vous le trouvez utile, n'hésitez pas à le partager et n'oubliez pas de le mettre dans vos favoris !\nZeeklog Online Tools est open-source (sous licence MIT) et gratuit, et le restera toujours, mais cela me coûte de l'argent pour l'héberger et renouveler le nom de domaine. Si vous voulez soutenir mon travail, et m'encourager à ajouter plus d'outils, n'hésitez pas à me [soutenir](https://www.buymeacoffee.com/cthmsst).\n## Technologies\nZeeklog Online Tools est fait en Vue.js (Vue 3) avec la bibliothèque de composants Naive UI et est hébergé et déployé en continu par Vercel. Des bibliothèques open-source tierces sont utilisées dans certains outils, vous pouvez trouver la liste complète dans le fichier [package.json](https://github.com/zeeklog/it-tools/blob/main/package.json) du dépôt.\n## Vous avez trouvé un bug ? Un outil manque ?\nSi vous avez besoin d'un outil qui n'est pas encore présent ici, et que vous pensez qu'il peut être utile, vous êtes invité à soumettre une demande de fonctionnalité dans la [section issue](https://github.com/zeeklog/it-tools/issues/new/choose) du dépôt GitHub.\n"])}
  },
  404: {
    "notFound": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["404 Not Found"])},
    "sorry": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Désolé, cette page n'existe pas"])},
    "maybe": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Peut-être que le cache fait des siennes, essayez de forcer le rafraîchissement ?"])},
    "backHome": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Retour à l'accueil"])}
  },
  "toolCard": {
    "new": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Nouveau"])}
  },
  "search": {
    "label": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Rechercher"])}
  },
  "tools": {
    "categories": {
      "favorite-tools": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Vos outils favoris"])},
      "crypto": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Cryptographie"])},
      "converter": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Convertisseur"])},
      "web": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Web"])},
      "images and videos": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Images & Vidéos"])},
      "development": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Développement"])},
      "network": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Réseau"])},
      "math": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Math"])},
      "measurement": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Mesure"])},
      "text": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Texte"])},
      "data": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Données"])}
    },
    "token-generator": {
      "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Générateur de token"])},
      "description": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Génère une chaîne aléatoire avec les caractères que vous voulez, lettres majuscules ou minuscules, chiffres et/ou symboles."])},
      "uppercase": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Majuscules (ABC...)"])},
      "lowercase": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Minuscules (abc...)"])},
      "numbers": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Chiffres (123...)"])},
      "symbols": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Symboles (!-;...)"])},
      "button": {
        "copy": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Copier"])},
        "refresh": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Rafraichir"])}
      },
      "copied": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Le token a été copié"])},
      "length": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Longueur"])},
      "tokenPlaceholder": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Le token..."])}
    }
  }
}},
{"pt": {
  "home": {
    "categories": {
      "newestTools": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Novas ferramentas"])},
      "favoriteTools": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Suas ferramentas favoritas"])},
      "allTools": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Todas as ferramentas"])}
    },
    "subtitle": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Ferraentas úteis para desenvolvedores"])},
    "toggleMenu": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Menu"])},
    "home": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Início"])},
    "uiLib": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Biblioteca de UI"])},
    "support": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Apoie o desenvolvimento do Zeeklog Online Tools"])},
    "buyMeACoffee": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Pague-me um café"])},
    "follow": {
      "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Gostou do it-tools?"])},
      "p1": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Dê uma estrela no"])},
      "githubRepository": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["repositório do IT-Tools no GitHub"])},
      "p2": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["ou siga nossa"])},
      "twitterAccount": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["conta IT-Tools no Twitter"])},
      "thankYou": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Obrigado !"])}
    },
    "nav": {
      "github": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Repositório no GitHub"])},
      "githubRepository": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["repositório do IT-Tools no GitHub"])},
      "twitter": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Conta no Twitter"])},
      "twitterAccount": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["conta do Zeeklog Online Tools no Twitter"])},
      "about": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Sobre o IT-Tools"])},
      "aboutLabel": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Sobre"])},
      "darkMode": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Modo Escuro"])},
      "lightMode": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Modo Claro"])},
      "mode": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Trocar modo escuro/claro"])}
    }
  },
  "about": {
    "content": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["# Sobre o IT-Tools\nEste site maravilhoso, feito com ❤ por [Ne0inHK](https://github.com/zeeklog), junta ferramentas úteis para desenvolvedores e outras pessoas que trabalham com TI. Se você achar o site útil, fique à vontade para compartilhar com quem também possa gostar e não esqueça de salvar o bookmark na sua barra de atalhos!\nO Zeeklog Online Tools é código aberto (sob a licença MIT), é gratuito, e sempre será, mas custa dinheiro para hospedar e renovar o domínio. Se quiser apoiar meu trabalho e me encorajar a adicionar mais ferramentas, por favor considere [ser patrocinador](https://www.buymeacoffee.com/cthmsst).\n## Tecnologias\nO Zeeklog Online Tools é feito em Vue.js (Vue 3) com a biblioteca de componentes Naive UI e é hospedado pela Vercel. Bibliotecas de código aberto de terceiros são usadas em algumas ferramentas e você pode encontrar a lista completa no arquivo [package.json](https://github.com/zeeklog/it-tools/blob/main/package.json) do repositório.\n## Achou um bug? Está faltando uma ferramenta?\nSe você precisa de uma ferramenta que ainda não existe aqui e acha que pode ser útil, seu pedido será bem vindo na [seção de issues](https://github.com/zeeklog/it-tools/issues/new/choose) no repositório do GitHub.\nE se você encontrar um bug ou se algo não funcionar como esperado, por favor registre um relato de bug na [seção de issues](https://github.com/zeeklog/it-tools/issues/new/choose) no GitHub.\n"])}
  },
  404: {
    "notFound": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["404 Não Encontrado"])},
    "sorry": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Desculpe, parece que essa página não existe"])},
    "maybe": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Talvez o cache esteja fazendo bobagem, que tal tentar forçar a atualização?"])},
    "backHome": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Voltar para o início"])}
  },
  "favoriteButton": {
    "remove": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Remover dos favoritos"])},
    "add": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Adicionar aos favoritos"])}
  },
  "toolCard": {
    "new": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Novo"])}
  },
  "search": {
    "label": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Pesquisar"])}
  },
  "tools": {
    "categories": {
      "favorite-tools": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Suas ferramentas favoritas"])},
      "crypto": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Cripto"])},
      "converter": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Conversores"])},
      "web": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Web"])},
      "images and videos": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Imagens & Vídeos"])},
      "development": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Desenvolvimento"])},
      "network": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Rede"])},
      "math": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Matemática"])},
      "measurement": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Medidas"])},
      "text": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Texto"])},
      "data": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Dados"])}
    }
  }
}},
{"uk": {
  "home": {
    "categories": {
      "newestTools": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Найновіші інструменти"])},
      "favoriteTools": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Ваші улюблені інструменти"])},
      "allTools": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Усі інструменти"])}
    },
    "subtitle": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Зручні інструменти для розробників"])},
    "toggleMenu": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Перемикання меню"])},
    "home": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Головна"])},
    "uiLib": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["UI Бібліотека"])},
    "support": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Підтримка розробки Zeeklog Online Tools"])},
    "buyMeACoffee": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Купи мені каву"])},
    "follow": {
      "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Вам подобаються інструменти IT?"])},
      "p1": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Додайте нам зірку на"])},
      "githubRepository": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["GitHub-репозиторій IT-Tools"])},
      "p2": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["або слідкуйте за нами на"])},
      "twitterAccount": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Твіттер-акаунт IT-Tools"])},
      "thankYou": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Дякуємо!"])}
    },
    "nav": {
      "github": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["GitHub-репозиторій"])},
      "githubRepository": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["GitHub-репозиторій IT-Tools"])},
      "twitter": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Твіттер"])},
      "twitterAccount": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Твіттер-акаунт IT-Tools"])},
      "about": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Про IT-Tools"])},
      "aboutLabel": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Про нас"])},
      "darkMode": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Темний режим"])},
      "lightMode": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Світлий режим"])},
      "mode": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Перемикання темного/світлого режиму"])}
    }
  },
  "about": {
    "content": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["# Про IT-Tools\nЦей чудовий вебсайт, створений з ❤ [Ne0inHK](https://github.com/zeeklog), агрегує корисні інструменти для розробників і людей, які працюють в сфері IT. Якщо вам це корисно, будь ласка, поділіться цим з людьми, які, на вашу думку, також можуть знайти його корисним, і не забудьте додати його до закладок у вашій панелі швидкого доступу!\nZeeklog Online Tools є відкритим програмним забезпеченням (під ліцензією MIT) і безкоштовним, і завжди буде таким, але мені коштує гроші для хостингу і продовження доменного імені. Якщо ви хочете підтримати мою роботу і підтримати мене у додаванні нових інструментів, розгляньте можливість підтримки, [спонсоруючи мене](https://www.buymeacoffee.com/cthmsst).\n## Технології\nZeeklog Online Tools виконаний на Vue.js (Vue 3) з використанням бібліотеки компонентів Naive UI і розгортаний за допомогою Vercel. У деяких інструментах використовуються сторонні відкриті бібліотеки, повний список яких ви можете знайти в файлі [package.json](https://github.com/zeeklog/it-tools/blob/main/package.json) репозиторію.\n## Знайшли баг? Відсутній інструмент?\nЯкщо вам потрібен інструмент, якого наразі немає тут, і ви вважаєте, що він може бути корисним, ви можете подати запит на додавання функції в [розділі проблем](https://github.com/zeeklog/it-tools/issues/new/choose) у репозиторії GitHub.\nА якщо ви знайшли баг або щось не працює, як очікувалося, будь ласка, подайте звіт про баг в [розділі проблем](https://github.com/zeeklog/it-tools/issues/new/choose) у репозиторії GitHub.\n"])}
  },
  404: {
    "notFound": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["404 Сторінка не знайдена"])},
    "sorry": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Вибачте, ця сторінка, схоже, не існує"])},
    "maybe": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Можливо, кеш робить хитрощі, спробуйте примусово оновити сторінку?"])},
    "backHome": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Повернутися на головну"])}
  },
  "favoriteButton": {
    "remove": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Вилучити з обраних"])},
    "add": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Додати до обраних"])}
  },
  "toolCard": {
    "new": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Новий"])}
  },
  "search": {
    "label": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Пошук"])}
  },
  "tools": {
    "categories": {
      "favorite-tools": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Ваші улюблені інструменти"])},
      "crypto": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Крипта"])},
      "converter": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Конвертер"])},
      "web": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Веб"])},
      "images and videos": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Зображення та відео"])},
      "development": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Розробка"])},
      "network": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Мережа"])},
      "math": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Математика"])},
      "measurement": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Вимірювання"])},
      "text": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Текст"])},
      "data": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Дані"])}
    }
  }
}},
{"vi": {
  "home": {
    "categories": {
      "newestTools": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Công cụ mới nhất"])},
      "favoriteTools": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Công cụ yêu thích của bạn"])},
      "allTools": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Tất cả công cụ"])}
    },
    "subtitle": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Công cụ cho nhà phát triển."])},
    "toggleMenu": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Chuyển đổi menu"])},
    "home": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Trang chủ"])},
    "uiLib": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Thư viện UI"])},
    "support": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Hỗ trợ phát triển Zeeklog Online Tools"])},
    "buyMeACoffee": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Ủng hộ tác giả"])},
    "follow": {
      "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Bạn thích IT-tools?"])},
      "p1": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Hãy cho chúng tôi một ngôi sao trên"])},
      "githubRepository": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Kho GitHub IT-Tools"])},
      "p2": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["hoặc theo dõi chúng tôi trên"])},
      "twitterAccount": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Tài khoản Twitter IT-Tools"])},
      "thankYou": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Cảm ơn bạn!"])}
    },
    "nav": {
      "github": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Kho GitHub"])},
      "githubRepository": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Kho GitHub IT-Tools"])},
      "twitter": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Tài khoản Twitter"])},
      "twitterAccount": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Tài khoản Twitter Zeeklog Online Tools"])},
      "about": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Về IT-Tools"])},
      "aboutLabel": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Giới thiệu"])},
      "darkMode": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Chế độ tối"])},
      "lightMode": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Chế độ sáng"])},
      "mode": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Chuyển đổi chế độ tối/sáng"])}
    }
  },
  "about": {
    "content": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["# Về IT-Tools\nWebsite tuyệt vời này, được tạo ra bằng ❤ bởi [Ne0inHK](https://github.com/zeeklog), tổng hợp các công cụ hữu ích cho nhà phát triển và những người làm việc trong lĩnh vực IT. Nếu bạn thấy nó hữu ích, xin đừng ngần ngại chia sẻ cho những người mà bạn nghĩ sẽ thấy nó hữu ích và đừng quên đánh dấu nó trong thanh lối tắt của bạn!\nZeeklog Online Tools là mã nguồn mở (dưới giấy phép MIT) và miễn phí, và sẽ luôn như vậy, nhưng tôi phải trả tiền để lưu trữ và gia hạn tên miền. Nếu bạn muốn hỗ trợ công việc của tôi, và khích lệ tôi thêm nhiều công cụ hơn, hãy xem xét hỗ trợ bằng cách [tài trợ cho tôi](https://www.buymeacoffee.com/cthmsst).\n## Công nghệ\nZeeklog Online Tools được tạo ra bằng Vue.js (Vue 3) với thư viện thành phần Naive UI và được lưu trữ và triển khai liên tục bởi Vercel. Các thư viện mã nguồn mở của bên thứ ba được sử dụng trong một số công cụ, bạn có thể tìm danh sách đầy đủ trong file [package.json](https://github.com/zeeklog/it-tools/blob/main/package.json) của kho lưu trữ.\n## Phát hiện lỗi? Một công cụ bị thiếu?\nNếu bạn cần một công cụ hiện không có ở đây, và bạn nghĩ rằng nó có thể hữu ích, bạn được chào đón để gửi một yêu cầu tính năng trong [phần vấn đề](https://github.com/zeeklog/it-tools/issues/new/choose) trong kho GitHub.\nVà nếu bạn phát hiện ra một lỗi, hoặc điều gì đó không hoạt động như mong đợi, xin vui lòng gửi báo cáo lỗi trong [phần vấn đề](https://github.com/zeeklog/it-tools/issues/new/choose) trong kho GitHub.\n"])}
  },
  404: {
    "notFound": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["404 Không Tìm Thấy"])},
    "sorry": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Xin lỗi, trang này dường như không tồn tại"])},
    "maybe": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Lỗi xảy ra có thể do bộ nhớ đệm, hãy (CTRL + F5) để tải lại trang?"])},
    "backHome": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Quay về trang chủ"])}
  },
  "favoriteButton": {
    "remove": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Xóa khỏi mục yêu thích"])},
    "add": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Thêm vào mục yêu thích"])}
  },
  "toolCard": {
    "new": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Mới"])}
  },
  "search": {
    "label": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Tìm kiếm"])}
  },
  "tools": {
    "categories": {
      "favorite-tools": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Công cụ yêu thích của bạn"])},
      "crypto": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Mã hóa"])},
      "converter": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Chuyển đổi"])},
      "web": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Web"])},
      "images and videos": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Hình ảnh & Video"])},
      "development": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Phát triển"])},
      "network": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Mạng"])},
      "math": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Toán học"])},
      "measurement": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Đo lường"])},
      "text": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Văn bản"])},
      "data": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Dữ liệu"])}
    },
    "password-strength-analyser": {
      "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Bộ phân tích độ mạnh mật khẩu"])},
      "description": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Khám phá độ mạnh của mật khẩu của bạn với công cụ phân tích độ mạnh mật khẩu chỉ chạy trên phía máy khách và ước tính thời gian phá mật khẩu."])}
    },
    "chronometer": {
      "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Đồng hồ bấm giờ"])},
      "description": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Giám sát thời gian của một sự việc. Cơ bản là một đồng hồ bấm giờ với các tính năng đơn giản."])}
    },
    "token-generator": {
      "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Trình tạo mã thông báo"])},
      "description": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Tạo chuỗi ngẫu nhiên với các ký tự bạn muốn, chữ hoa hoặc chữ thường, số và/hoặc ký tự đặc biệt."])},
      "uppercase": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Chữ hoa (ABC...)"])},
      "lowercase": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Chữ thường (abc...)"])},
      "numbers": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Số (123...)"])},
      "symbols": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Ký tự đặc biệt (!-;...)"])},
      "length": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Độ dài"])},
      "tokenPlaceholder": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Mã thông báo..."])},
      "copied": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Mã thông báo đã được sao chép vào clipboard"])},
      "button": {
        "copy": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Sao chép"])},
        "refresh": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Làm mới"])}
      }
    },
    "percentage-calculator": {
      "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Máy tính phần trăm"])},
      "description": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Dễ dàng tính toán phần trăm từ một giá trị đến giá trị khác, hoặc từ một phần trăm đến một giá trị."])}
    },
    "svg-placeholder-generator": {
      "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Trình tạo hình ảnh SVG giả định"])},
      "description": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Tạo hình ảnh svg để sử dụng làm giả định trong ứng dụng của bạn."])}
    },
    "json-to-csv": {
      "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Chuyển đổi JSON thành CSV"])},
      "description": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Chuyển đổi JSON thành CSV với việc tự động phát hiện tiêu đề."])}
    },
    "camera-recorder": {
      "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Ghi lại camera"])},
      "description": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Chụp ảnh hoặc quay video từ webcam hoặc máy ảnh của bạn."])}
    },
    "keycode-info": {
      "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Thông tin Keycode"])},
      "description": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Tìm mã keycode, mã, vị trí và các phím điều khiển của bất kỳ phím nào được nhấn."])}
    },
    "emoji-picker": {
      "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Bộ chọn biểu tượng cảm xúc"])},
      "description": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Sao chép và dán biểu tượng cảm xúc một cách dễ dàng và nhận giá trị unicode và mã điểm của mỗi biểu tượng cảm xúc."])}
    },
    "color-converter": {
      "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Trình chuyển đổi màu"])},
      "description": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Chuyển đổi màu giữa các định dạng khác nhau (hex, rgb, hsl và tên css)"])}
    },
    "bcrypt": {
      "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Bcrypt"])},
      "description": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Mã hóa và so sánh chuỗi văn bản sử dụng bcrypt. Bcrypt là một hàm mã hóa mật khẩu dựa trên thuật toán Blowfish."])}
    },
    "crontab-generator": {
      "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Trình tạo Crontab"])},
      "description": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Xác thực và tạo crontab và lấy mô tả đọc được của lịch trình cron."])}
    },
    "http-status-codes": {
      "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Mã trạng thái HTTP"])},
      "description": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Danh sách tất cả các mã trạng thái HTTP, tên và ý nghĩa của chúng."])}
    },
    "sql-prettify": {
      "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Định dạng và làm đẹp SQL"])},
      "description": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Định dạng và làm đẹp các truy vấn SQL của bạn trực tuyến (hỗ trợ nhiều ngôn ngữ SQL khác nhau)."])}
    },
    "benchmark-builder": {
      "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Trình tạo bảng đánh giá"])},
      "description": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Dễ dàng so sánh thời gian thực thi của các nhiệm vụ với trình tạo bảng đánh giá trực tuyến đơn giản này."])}
    },
    "git-memo": {
      "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Lệnh Git"])},
      "description": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Git là một phần mềm quản lý phiên bản phân tán. Với bảng ghi chú này, bạn sẽ có thể truy cập nhanh vào các lệnh Git phổ biến nhất."])}
    },
    "slugify-string": {
      "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Chuyển đổi chuỗi thành slug"])},
      "description": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Biến đổi chuỗi thành dạng an toàn để sử dụng trong URL, tên file và ID."])}
    },
    "encryption": {
      "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Mã hóa / giải mã văn bản"])},
      "description": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Mã hóa và giải mã văn bản rõ bằng cách sử dụng thuật toán mã hóa như AES, TripleDES, Rabbit hoặc RC4."])}
    },
    "random-port-generator": {
      "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Trình tạo số cổng ngẫu nhiên"])},
      "description": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Tạo số cổng ngẫu nhiên nằm ngoài phạm vi của các cổng \"biết được\" (0-1023)."])}
    },
    "yaml-prettify": {
      "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Định dạng và làm đẹp YAML"])},
      "description": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Định dạng chuỗi YAML của bạn thành một định dạng dễ đọc và thân thiện với con người."])}
    },
    "eta-calculator": {
      "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Máy tính ETA"])},
      "description": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Một máy tính ETA (Thời gian dự kiến đến) để biết thời gian kết thúc xấp xỉ của một nhiệm vụ, ví dụ như thời điểm kết thúc của một quá trình tải xuống."])}
    },
    "roman-numeral-converter": {
      "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Bộ chuyển đổi số La Mã"])},
      "description": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Chuyển đổi số La Mã thành số và chuyển đổi số thành số La Mã."])}
    },
    "hmac-generator": {
      "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Máy tạo HMAC"])},
      "description": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Tính toán mã xác thực thông điệp dựa trên hash (HMAC) sử dụng một khóa bí mật và hàm băm yêu thích của bạn."])}
    },
    "bip39-generator": {
      "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Trình tạo BIP39 passphrase"])},
      "description": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Tạo BIP39 passphrase từ mnemonic hiện có hoặc ngẫu nhiên, hoặc lấy mnemonic từ passphrase."])}
    },
    "base64-file-converter": {
      "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Trình chuyển đổi tệp Base64"])},
      "description": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Chuyển đổi chuỗi, tệp hoặc hình ảnh thành mã Base64."])}
    },
    "list-converter": {
      "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Trình chuyển đổi danh sách"])},
      "description": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Công cụ này có thể xử lý dữ liệu dựa trên cột và áp dụng các thay đổi khác nhau (đảo ngược, thêm tiền tố và hậu tố, đảo danh sách, sắp xếp danh sách, giảm giá trị thành chữ thường, cắt giá trị) cho mỗi hàng."])}
    },
    "base64-string-converter": {
      "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Trình mã hóa/giải mã chuỗi Base64"])},
      "description": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Đơn giản mã hóa và giải mã chuỗi thành mã Base64."])}
    },
    "toml-to-yaml": {
      "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Chuyển đổi TOML thành YAML"])},
      "description": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Phân tích và chuyển đổi TOML thành YAML."])}
    },
    "math-evaluator": {
      "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Trình đánh giá toán học"])},
      "description": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Một máy tính để tính toán biểu thức toán học. Bạn có thể sử dụng các hàm như sqrt, cos, sin, abs, v.v."])}
    },
    "json-to-yaml-converter": {
      "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Chuyển đổi JSON sang YAML"])},
      "description": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Chuyển đổi đơn giản JSON sang YAML với công cụ chuyển đổi trực tuyến này."])}
    },
    "url-parser": {
      "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Trình phân tích URL"])},
      "description": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Phân tích một chuỗi URL để lấy tất cả các phần khác nhau (giao thức, nguồn gốc, tham số, cổng, tên người dùng-mật khẩu, ...)"])}
    },
    "iban-validator-and-parser": {
      "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Kiểm tra và phân tích số IBAN"])},
      "description": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Xác thực và phân tích số IBAN. Kiểm tra tính hợp lệ của IBAN và lấy thông tin về quốc gia, BBAN, xem có phải là QR-IBAN và định dạng thân thiện của IBAN."])}
    },
    "user-agent-parser": {
      "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Trình phân tích User-agent"])},
      "description": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Phát hiện và phân tích trình duyệt, engine, hệ điều hành, CPU và kiểu/mô hình thiết bị từ chuỗi user-agent."])}
    },
    "numeronym-generator": {
      "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Trình tạo Numeronym"])},
      "description": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Numeronym là một từ mà một số được sử dụng để tạo thành một từ viết tắt. Ví dụ, \"i18n\" là một numeronym của \"internationalization\" trong đó số 18 đại diện cho số chữ cái giữa chữ i đầu tiên và chữ n cuối cùng trong từ."])}
    },
    "case-converter": {
      "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Chuyển đổi chữ hoa/chữ thường"])},
      "description": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Thay đổi kiểu chữ của một chuỗi và chọn giữa các định dạng khác nhau"])}
    },
    "html-entities": {
      "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Thay thế các ký tự HTML"])},
      "description": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Thay thế hoặc bỏ thẻ các ký tự HTML (thay thế <,>, &, \" và \\' thành phiên bản HTML tương ứng)"])}
    },
    "json-prettify": {
      "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Định dạng và làm đẹp JSON"])},
      "description": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Định dạng chuỗi JSON của bạn thành một định dạng dễ đọc và thân thiện với con người."])}
    },
    "docker-run-to-docker-compose-converter": {
      "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Chuyển đổi lệnh docker run thành tệp docker-compose"])},
      "description": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Chuyển đổi các lệnh docker run thành tệp docker-compose!"])}
    },
    "mac-address-lookup": {
      "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Tra cứu địa chỉ MAC"])},
      "description": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Tìm nhà sản xuất và nhà cung cấp của thiết bị dựa trên địa chỉ MAC."])}
    },
    "mime-types": {
      "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Loại Mime"])},
      "description": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Chuyển đổi loại mime thành phần mở rộng và ngược lại."])}
    },
    "toml-to-json": {
      "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Chuyển đổi TOML thành JSON"])},
      "description": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Phân tích và chuyển đổi TOML thành JSON."])}
    },
    "lorem-ipsum-generator": {
      "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Máy tạo văn bản Lorem ipsum"])},
      "description": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Lorem ipsum là một đoạn văn bản giả được sử dụng phổ biến để thể hiện hình thức của một tài liệu hoặc một kiểu chữ mà không cần dựa vào nội dung có ý nghĩa"])}
    },
    "qrcode-generator": {
      "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Tạo mã QR"])},
      "description": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Tạo và tải xuống mã QR cho một URL hoặc chỉ một đoạn văn bản và tùy chỉnh màu nền và màu chữ."])}
    },
    "wifi-qrcode-generator": {
      "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Tạo mã QR WiFi"])},
      "description": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Tạo và tải xuống mã QR để kết nối nhanh đến mạng WiFi."])}
    },
    "xml-formatter": {
      "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Định dạng XML"])},
      "description": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Định dạng chuỗi XML của bạn thành một định dạng dễ đọc và thân thiện với con người."])}
    },
    "temperature-converter": {
      "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Bộ chuyển đổi nhiệt độ"])},
      "description": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Chuyển đổi độ nhiệt độ cho Kelvin, Celsius, Fahrenheit, Rankine, Delisle, Newton, Réaumur và Rømer."])}
    },
    "chmod-calculator": {
      "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Máy tính Chmod"])},
      "description": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Tính toán quyền và lệnh chmod của bạn với máy tính Chmod trực tuyến này."])}
    },
    "rsa-key-pair-generator": {
      "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Trình tạo cặp khóa RSA"])},
      "description": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Tạo các chứng chỉ pem khóa riêng tư và khóa công khai RSA ngẫu nhiên mới."])}
    },
    "html-wysiwyg-editor": {
      "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Trình soạn thảo HTML WYSIWYG"])},
      "description": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Trình soạn thảo HTML trực tuyến với trình soạn thảo WYSIWYG đa chức năng, lấy mã nguồn của nội dung ngay lập tức."])}
    },
    "yaml-to-toml": {
      "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["YAML sang TOML"])},
      "description": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Phân tích và chuyển đổi YAML sang TOML."])}
    },
    "mac-address-generator": {
      "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Trình tạo địa chỉ MAC"])},
      "description": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Nhập số lượng và tiền tố. Địa chỉ MAC sẽ được tạo ra theo kiểu chữ hoa hoặc chữ thường theo lựa chọn của bạn"])}
    },
    "json-diff": {
      "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["So sánh JSON"])},
      "description": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["So sánh hai đối tượng JSON và lấy ra sự khác biệt giữa chúng."])}
    },
    "jwt-parser": {
      "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Giải mã JWT"])},
      "description": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Giải mã và hiển thị nội dung của JSON Web Token (jwt)."])}
    },
    "date-converter": {
      "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Chuyển đổi ngày-tháng"])},
      "description": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Chuyển đổi ngày và thời gian sang các định dạng khác nhau"])}
    },
    "phone-parser-and-formatter": {
      "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Trình phân tích và định dạng số điện thoại"])},
      "description": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Phân tích, xác thực và định dạng số điện thoại. Lấy thông tin về số điện thoại, như mã quốc gia, loại, v.v."])}
    },
    "ipv4-subnet-calculator": {
      "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Máy tính mạng con IPv4"])},
      "description": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Phân tích các khối CIDR IPv4 của bạn và nhận thông tin về mạng con của bạn."])}
    },
    "og-meta-generator": {
      "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Trình tạo meta Open Graph"])},
      "description": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Tạo các thẻ meta HTML Open Graph và mạng xã hội cho trang web của bạn."])}
    },
    "ipv6-ula-generator": {
      "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Trình tạo địa chỉ IPv6 ULA"])},
      "description": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Tạo địa chỉ IP cục bộ, không thể định tuyến trên mạng của bạn theo RFC4193."])}
    },
    "hash-text": {
      "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Mã hóa văn bản"])},
      "description": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Mã hóa một chuỗi văn bản bằng cách sử dụng các hàm bạn cần: MD5, SHA1, SHA256, SHA224, SHA512, SHA384, SHA3 hoặc RIPEMD160"])}
    },
    "json-to-toml": {
      "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Chuyển đổi JSON sang TOML"])},
      "description": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Phân tích và chuyển đổi JSON sang TOML."])}
    },
    "device-information": {
      "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Thông tin thiết bị"])},
      "description": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Lấy thông tin về thiết bị hiện tại của bạn (kích thước màn hình, tỷ lệ pixel, user agent, ...)"])}
    },
    "pdf-signature-checker": {
      "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Kiểm tra chữ ký PDF"])},
      "description": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Xác minh chữ ký của một tệp PDF. Một tệp PDF đã được ký có chứa một hoặc nhiều chữ ký có thể được sử dụng để xác định xem nội dung của tệp đã được thay đổi kể từ khi tệp được ký."])}
    },
    "json-minify": {
      "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Giảm kích thước JSON"])},
      "description": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Giảm kích thước và nén JSON của bạn bằng cách loại bỏ khoảng trắng không cần thiết."])}
    },
    "ulid-generator": {
      "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Tạo ULID"])},
      "description": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Tạo ngẫu nhiên mã định danh duy nhất có thể sắp xếp theo thứ tự từ điển (ULID)."])}
    },
    "string-obfuscator": {
      "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Mã hóa chuỗi"])},
      "description": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Mã hóa một chuỗi (như một bí mật, một IBAN hoặc một mã thông báo) để có thể chia sẻ và nhận dạng mà không tiết lộ nội dung."])}
    },
    "base-converter": {
      "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Chuyển đổi cơ số số nguyên"])},
      "description": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Chuyển đổi số giữa các cơ số khác nhau (thập phân, thập lục phân, nhị phân, bát phân, base64, ...)"])}
    },
    "yaml-to-json-converter": {
      "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Trình chuyển đổi YAML sang JSON"])},
      "description": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Chuyển đổi YAML sang JSON một cách đơn giản với công cụ chuyển đổi trực tuyến này."])}
    },
    "uuid-generator": {
      "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Trình tạo UUID"])},
      "description": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Một UUID (Universally Unique Identifier) là một số 128 bit được sử dụng để xác định thông tin trong hệ thống máy tính. Số lượng UUID có thể có là 16^32, tương đương với 2^128 hoặc khoảng 3.4x10^38 (rất lớn!)."])}
    },
    "ipv4-address-converter": {
      "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Chuyển đổi địa chỉ Ipv4"])},
      "description": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Chuyển đổi địa chỉ ip thành số thập phân, nhị phân, thập lục phân hoặc thậm chí thành ipv6"])}
    },
    "text-statistics": {
      "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Thống kê văn bản"])},
      "description": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Lấy thông tin về một văn bản, số ký tự, số từ, kích thước của nó, ..."])}
    },
    "text-to-nato-alphabet": {
      "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Chuyển đổi văn bản thành bảng chữ cái NATO"])},
      "description": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Chuyển đổi văn bản thành bảng chữ cái phiên âm NATO để truyền tải bằng miệng."])}
    },
    "basic-auth-generator": {
      "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Tạo mã xác thực cơ bản"])},
      "description": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Tạo một tiêu đề xác thực cơ bản base64 từ tên người dùng và mật khẩu."])}
    },
    "text-to-unicode": {
      "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Chuyển đổi văn bản thành Unicode"])},
      "description": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Phân tích và chuyển đổi văn bản thành Unicode và ngược lại"])}
    },
    "ipv4-range-expander": {
      "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Mở rộng dải IPv4"])},
      "description": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Cho một địa chỉ IPv4 bắt đầu và kết thúc, công cụ này tính toán một mạng IPv4 hợp lệ với ký hiệu CIDR của nó."])}
    },
    "text-diff": {
      "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["So sánh văn bản"])},
      "description": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["So sánh hai văn bản và xem sự khác biệt giữa chúng."])}
    },
    "otp-generator": {
      "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Tạo mã OTP"])},
      "description": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Tạo và xác thực mã OTP (mật khẩu một lần) dựa trên thời gian cho xác thực đa yếu tố."])}
    },
    "url-encoder": {
      "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Mã hóa/giải mã chuỗi định dạng URL"])},
      "description": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Mã hóa thành định dạng URL (còn được gọi là \"percent-encoded\") hoặc giải mã từ đó."])}
    },
    "text-to-binary": {
      "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Chuyển đổi văn bản thành nhị phân ASCII"])},
      "description": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Chuyển đổi văn bản thành biểu diễn nhị phân ASCII của nó và ngược lại."])}
    }
  }
}},
{"zh": {
  "home": {
    "categories": {
      "newestTools": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["最新工具"])},
      "favoriteTools": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["我的收藏"])},
      "allTools": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["全部工具"])}
    },
    "subtitle": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["助力开发人员和 IT 工作者"])},
    "toggleMenu": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["切换菜单"])},
    "home": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["主页"])},
    "uiLib": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["UI 库"])},
    "support": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["支持 IT 工具开发"])},
    "buyMeACoffee": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["赞助"])},
    "follow": {
      "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["关注我们"])},
      "p1": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["给我们 Star"])},
      "githubRepository": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["GitHub 仓库"])},
      "p2": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["关注我们的"])},
      "twitterAccount": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Twitter"])},
      "thankYou": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["感谢您的支持！"])}
    },
    "nav": {
      "github": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["GitHub 仓库"])},
      "githubRepository": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["GitHub 仓库"])},
      "twitter": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Twitter 账号"])},
      "twitterAccount": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Twitter 账号"])},
      "about": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["关于 IT-Tools"])},
      "aboutLabel": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["关于"])},
      "darkMode": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["深色模式"])},
      "lightMode": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["浅色模式"])},
      "mode": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["颜色模式"])}
    }
  },
  "about": {
    "content": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["# 关于 IT-Tools\nIT-Tools 由 [Ne0inHK](https://github.com/zeeklog) 用 ❤ 开发，汇集了对开发人员和 IT 从业者有用的工具。如果对您有帮助，请将其分享给您的朋友，并且添加到收藏夹中！\nIT-Tools 永久免费且开源（MIT 许可证），但需要资金用于托管和续订域名。如果您想支持我的工作，并鼓励我添加更多工具，请考虑通过 [赞助我](https://www.buymeacoffee.com/cthmsst) 进行支持。\n## 技术\nIT-Tools 采用 Vue.js（Vue 3）和 Naive UI 组件库开发，并由 Vercel 托管和持续部署。某些工具使用了第三方开源库，您可以在仓库的 [package.json](https://github.com/zeeklog/it-tools/blob/main/package.json) 文件中找到完整的列表。\n## 发现了 Bug？缺少工具？\n如果目前这里没有您需要的工具，并且您认为它可能有用，欢迎在 GitHub 仓库的 [issues](https://github.com/zeeklog/it-tools/issues/new/choose) 中提交新增功能的请求。\n如果您发现了 Bug，或者某些功能未能按预期工作，请在 GitHub 仓库的 [issues](https://github.com/zeeklog/it-tools/issues/new/choose) 中提交错误报告。\n"])}
  },
  404: {
    "notFound": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["404 页面不存在"])},
    "sorry": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["抱歉，该页面似乎不存在"])},
    "maybe": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["也许缓存出现了一些问题，试试强制刷新页面？"])},
    "backHome": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["返回主页"])}
  },
  "favoriteButton": {
    "remove": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["取消收藏"])},
    "add": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["加入收藏"])}
  },
  "toolCard": {
    "new": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["新"])}
  },
  "search": {
    "label": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["搜索"])}
  },
  "tools": {
    "categories": {
      "favorite-tools": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["我的收藏"])},
      "crypto": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["加密"])},
      "converter": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["转换器"])},
      "web": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Web"])},
      "images and videos": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["图片和视频"])},
      "development": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["开发"])},
      "network": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["网络"])},
      "math": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["数学"])},
      "measurement": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["测量"])},
      "text": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["文本"])},
      "data": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["数据"])}
    },
    "password-strength-analyser": {
      "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["密码强度分析仪"])},
      "description": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["使用此密码强度分析器和破解时间估计工具来发现密码的强度。"])}
    },
    "chronometer": {
      "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["计时器"])},
      "description": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["监控事物的持续时间。基本上是一种具有简单计时器功能的计时器。"])}
    },
    "token-generator": {
      "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Token 生成器"])},
      "description": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["使用您想要的字符、大写或小写字母、数字和/或符号生成随机字符串。"])},
      "uppercase": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["大写 (ABC...)"])},
      "lowercase": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["小写 (abc...)"])},
      "numbers": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["数字 (123...)"])},
      "symbols": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["符号 (!-;...)"])},
      "length": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["长度"])},
      "tokenPlaceholder": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["令牌..."])},
      "copied": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["复制到剪贴板"])},
      "button": {
        "copy": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["复制"])},
        "refresh": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["刷新"])}
      }
    },
    "percentage-calculator": {
      "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["百分比计算器"])},
      "description": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["轻松计算从一个值到另一个值的百分比，或从百分比到值的百分比。"])}
    },
    "svg-placeholder-generator": {
      "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["SVG 占位符生成器"])},
      "description": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["生成 svg 图像以用作应用程序中的占位符。"])}
    },
    "json-to-csv": {
      "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["JSON 转 CSV"])},
      "description": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["使用自动标头检测将JSON转换为CSV。"])}
    },
    "camera-recorder": {
      "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["摄像机记录器"])},
      "description": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["从网络摄像头或照相机拍摄照片或录制视频。"])}
    },
    "keycode-info": {
      "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Keycode 信息"])},
      "description": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["查找任何按下的键的javascript键代码、代码、位置和修饰符。"])}
    },
    "emoji-picker": {
      "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Emoji 选择器"])},
      "description": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["轻松复制和粘贴Emoji表情符号，并获得每个表情符号的unicode和code points值."])}
    },
    "color-converter": {
      "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Color 选择器"])},
      "description": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["在不同格式（十六进制、rgb、hsl和css名称）之间转换颜色"])}
    },
    "bcrypt": {
      "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["加密"])},
      "description": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["使用bcrypt对文本字符串进行哈希和比较。Bcrypt是一个基于Blowfish密码的密码哈希函数。"])}
    },
    "crontab-generator": {
      "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Crontab 表达式生成"])},
      "description": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["验证并生成crontab，并获取cron调度的可读描述。"])}
    },
    "http-status-codes": {
      "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["HTTP 状态码"])},
      "description": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["所有HTTP状态的列表对其名称和含义解释。"])}
    },
    "sql-prettify": {
      "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["SQL 美化和格式化"])},
      "description": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["在线格式化和美化您的 SQL 查询（它支持各种 SQL 方言）。"])}
    },
    "benchmark-builder": {
      "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["基准生成器"])},
      "description": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["简单的在线基准构建器可以轻松比较任务的执行时间。"])}
    },
    "git-memo": {
      "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Git 备忘录"])},
      "description": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Git是一种去中心化的版本管理软件。使用此备忘单，您可以快速访问最常见的git命令."])}
    },
    "slugify-string": {
      "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["打乱字符串"])},
      "description": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["确保字符串 url、文件名和 id 安全。"])}
    },
    "encryption": {
      "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["加密/解密文本"])},
      "description": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["使用加密算法（如AES、TripleDES、Rabbit或RC4）加密和解密文本明文。"])}
    },
    "random-port-generator": {
      "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["随机端口生成"])},
      "description": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["生成“已知”端口范围（0-1023）之外的随机端口号。"])}
    },
    "yaml-prettify": {
      "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["YAML美化和格式化"])},
      "description": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["将YAML字符串修饰为友好的可读格式。"])}
    },
    "eta-calculator": {
      "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["ETA 计算器"])},
      "description": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["ETA（估计到达时间）计算器，用于知道任务的近似结束时间，例如下载的结束时刻。"])}
    },
    "roman-numeral-converter": {
      "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["罗马数字转换器"])},
      "description": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["将罗马数字转换为数字，并将数字转换为罗马数字。"])}
    },
    "hmac-generator": {
      "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Hmac 生成器"])},
      "description": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["使用密钥和您喜欢的哈希函数计算基于哈希的消息身份验证代码（HMAC）。"])}
    },
    "bip39-generator": {
      "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["BIP39密码生成器"])},
      "description": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["从现有或随机助记符生成BIP39密码短语，或从密码短语获取助记符。"])}
    },
    "base64-file-converter": {
      "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Base64 文件转换器"])},
      "description": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["将字符串、文件或图像转换为其 Base64 表示形式。"])}
    },
    "list-converter": {
      "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["List 转换器"])},
      "description": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["该工具可以处理基于数组的数据，并将各种更改（转置、添加前缀和后缀、反向列表、排序列表、小写值、截断值）应用于每一行。"])}
    },
    "base64-string-converter": {
      "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Base64 字符串编码/解码"])},
      "description": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["将字符串编码和解码为其 Base64 格式表示形式即可。"])}
    },
    "toml-to-yaml": {
      "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["TOML 到 YAML"])},
      "description": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Parse and convert TOML to YAML."])}
    },
    "math-evaluator": {
      "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["数学计算器"])},
      "description": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["计算数学表达式的计算器。您可以使用sqrt、cos、sin、abs等函数。"])}
    },
    "json-to-yaml-converter": {
      "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["JSON到YAML转换器"])},
      "description": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["在线转换将JSON转换为YAML。"])}
    },
    "url-parser": {
      "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Url分析器"])},
      "description": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["解析url字符串以获取所有不同的部分（协议、来源、参数、端口、用户名密码…）"])}
    },
    "iban-validator-and-parser": {
      "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["IBAN验证器和解析器"])},
      "description": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["验证和分析IBAN编号。检查IBAN是否有效，并获取国家BBAN，如果它是QR-IBAN和IBAN友好格式。"])}
    },
    "user-agent-parser": {
      "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["用户代理分析器"])},
      "description": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["从用户代理字符串中检测和分析浏览器、引擎、操作系统、CPU和设备类型/型号。"])}
    },
    "numeronym-generator": {
      "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["数字名称生成器"])},
      "description": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["数字名是一个用数字构成缩写的词。例如，“i18n”是“国际化”的名词，其中18表示单词中第一个i和最后一个n之间的字母数。"])}
    },
    "case-converter": {
      "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["大小写转换"])},
      "description": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["更改字符串的大小写并在不同格式之间进行选择"])}
    },
    "html-entities": {
      "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["转义html实体"])},
      "description": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["转义或unescape html实体（将<、>、&、“和\\'替换为其html版本）"])}
    },
    "json-prettify": {
      "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["JSON美化和格式化"])},
      "description": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["将JSON字符串修饰为友好的可读格式。"])}
    },
    "docker-run-to-docker-compose-converter": {
      "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Docker Run 到 docker-compose 转换器"])},
      "description": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["将 docker run 命令行转换为 docker-compose 文件!"])}
    },
    "mac-address-lookup": {
      "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["MAC地址查找"])},
      "description": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["通过设备的MAC地址查找设备的供应商和制造商。"])}
    },
    "mime-types": {
      "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["mime类型"])},
      "description": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["将mime类型转换为扩展，反之亦然。"])}
    },
    "toml-to-json": {
      "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["TOML 到 JSON"])},
      "description": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["解析TOML并将其转换为JSON。"])}
    },
    "lorem-ipsum-generator": {
      "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Lorem ipsum生成器"])},
      "description": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Lorem ipsum是一种占位符文本，通常用于演示文档或字体的视觉形式，而不依赖于有意义的内容"])}
    },
    "qrcode-generator": {
      "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["二维码生成器"])},
      "description": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["生成并下载url或文本的QR代码，并自定义背景和前景颜色。"])}
    },
    "wifi-qrcode-generator": {
      "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["WiFi 二维码生成器"])},
      "description": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["生成和下载QR码以快速连接到WiFi网络。"])}
    },
    "xml-formatter": {
      "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["XML 格式化"])},
      "description": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["将XML字符串修饰为友好的可读格式。"])}
    },
    "temperature-converter": {
      "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["温度转换器"])},
      "description": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["开尔文、摄氏度、华氏度、兰金、德莱尔、牛顿、雷奥穆尔和罗默温度度数转换。"])}
    },
    "chmod-calculator": {
      "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Chmod 计算器"])},
      "description": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["使用此在线的chmod计算器计算chmod权限和命令。"])}
    },
    "rsa-key-pair-generator": {
      "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["RSA密钥对生成器"])},
      "description": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["生成新的随机RSA私钥和公钥pem证书。"])}
    },
    "html-wysiwyg-editor": {
      "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["HTML所见即所得编辑器"])},
      "description": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["在线HTML编辑器具有功能丰富的所见即所得编辑器，立即获得内容的源代码。"])}
    },
    "yaml-to-toml": {
      "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["YAML 到 TOML"])},
      "description": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["解析YAML并将其转换为TOML。"])}
    },
    "mac-address-generator": {
      "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["MAC 地址生成器"])},
      "description": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["输入数量和前缀。MAC地址将以您选择的大小写（大写或小写）生成"])}
    },
    "json-diff": {
      "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["JSON 差异比较"])},
      "description": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["比较两个JSON对象并获得它们之间的差异。"])}
    },
    "jwt-parser": {
      "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["JWT 解析器"])},
      "description": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["解析和解码JSON Web Token（jwt）并显示其内容。"])}
    },
    "date-converter": {
      "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["日期时间转换器"])},
      "description": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["将日期和时间转换为各种不同的格式"])}
    },
    "phone-parser-and-formatter": {
      "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["电话分析器和格式化程序"])},
      "description": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["解析、验证和格式化电话号码。获取有关电话号码的信息，如国家/地区代码、类型等。"])}
    },
    "ipv4-subnet-calculator": {
      "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["IPv4子网计算器"])},
      "description": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["解析IPv4 CIDR块，并获取有关子网络的所有所需信息。"])}
    },
    "og-meta-generator": {
      "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["开放式图形元生成器"])},
      "description": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["为您的网站生成开放式图形和社交html元标记。"])}
    },
    "ipv6-ula-generator": {
      "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["IPv6 ULA生成器"])},
      "description": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["根据RFC4193在网络上生成您自己的本地不可路由IP地址。"])}
    },
    "hash-text": {
      "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Hash 文本"])},
      "description": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["使用所需的函数哈希文本字符串：MD5、SHA1、SHA256、SHA224、SHA512、SHA384、SHA3或RIPEMD160"])}
    },
    "json-to-toml": {
      "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["JSON 转 TOML"])},
      "description": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["解析JSON并将其转换为TOML。"])}
    },
    "device-information": {
      "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["设备信息"])},
      "description": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["获取有关当前设备的信息（屏幕大小、像素比率、用户代理…）"])}
    },
    "pdf-signature-checker": {
      "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["PDF签名检查器"])},
      "description": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["验证PDF文件的签名。签名的PDF文件包含一个或多个签名，可用于确定文件的内容在签名后是否已被更改。"])}
    },
    "json-minify": {
      "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["JSON 压缩"])},
      "description": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["通过删除不必要的空白来缩小和压缩JSON。"])}
    },
    "ulid-generator": {
      "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["ULID 生成器"])},
      "description": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["生成随机的通用唯一词典可排序标识符（ULID）。"])}
    },
    "string-obfuscator": {
      "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["字符串混淆器"])},
      "description": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["混淆字符串（如秘密、IBAN 或令牌），使其可共享和可识别，而不泄露其内容。"])}
    },
    "base-converter": {
      "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["整数基转换器"])},
      "description": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["在不同的基数（十进制、十六进制、二进制、八进制、base64…）之间转换数字"])}
    },
    "yaml-to-json-converter": {
      "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["YAML到JSON转换器"])},
      "description": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["使用此在线转换器将YAML转换为JSON。"])}
    },
    "uuid-generator": {
      "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["UUIDs 生成器"])},
      "description": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["通用唯一标识符（UUID）是一个128位数字，用于标识计算机系统中的信息。可能的UUID数量为16^32，即2^128或约3.4x10^38（这是一个很大的数字！）。"])}
    },
    "ipv4-address-converter": {
      "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Ipv4地址转换器"])},
      "description": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["在ipv6中，将ip地址转换为十进制、二进制、十六进制或事件"])}
    },
    "text-statistics": {
      "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["文本统计"])},
      "description": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["获取有关文本、字符数、字数、大小等的信息"])}
    },
    "text-to-nato-alphabet": {
      "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["文本转北约字母表"])},
      "description": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["将文本转换为北约拼音字母以进行口头传播。"])}
    },
    "basic-auth-generator": {
      "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["基本身份验证生成器"])},
      "description": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["从用户名和密码生成 base64 基本身份验证标头。"])}
    },
    "text-to-unicode": {
      "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["文本转 Unicode"])},
      "description": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["解析文本并将其转换为 unicode，反之亦然"])}
    },
    "ipv4-range-expander": {
      "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["IPv4范围扩展器"])},
      "description": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["给定起始和结束IPv4地址，此工具使用其CIDR表示法计算有效的IPv4网络。"])}
    },
    "text-diff": {
      "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["文本比较"])},
      "description": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["比较两个文本并查看它们之间的差异。"])}
    },
    "otp-generator": {
      "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["OTP代码生成器"])},
      "description": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["为多因素身份验证生成和验证基于时间的OTP（一次性密码）。"])}
    },
    "url-encoder": {
      "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["编码/解码url格式的字符串"])},
      "description": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["编码为url编码格式（也称为“百分比编码”）或从中解码。"])}
    },
    "text-to-binary": {
      "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["文本到 ASCII 二进制"])},
      "description": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["将文本转换为其 ASCII 二进制表示形式，反之亦然。"])}
    }
  }
}}
);

const i18nPlugin = {
  install: (app) => {
    const i18n2 = createI18n({
      legacy: false,
      locale: "zh",
      messages
    });
    app.use(i18n2);
  }
};
const i18n = createI18n({
  legacy: false,
  locale: "zh",
  messages
});
const translate = function(localeKey) {
  const hasKey = i18n.global.te(localeKey, get(i18n.global.locale));
  return hasKey ? i18n.global.t(localeKey) : localeKey;
};

const tool$1f = defineTool({
  name: translate("tools.base64-file-converter.title"),
  path: "/base64-file-converter",
  description: translate("tools.base64-file-converter.description"),
  keywords: ["base64", "converter", "upload", "image", "file", "conversion", "web", "data", "format"],
  component: () => import('./assets/base64-file-converter-501df10a.js'),
  icon: FileDigit
});

const tool$1e = defineTool({
  name: translate("tools.base64-string-converter.title"),
  path: "/base64-string-converter",
  description: translate("tools.base64-string-converter.description"),
  keywords: ["base64", "converter", "conversion", "web", "data", "format", "atob", "btoa"],
  component: () => import('./assets/base64-string-converter-b322e6d1.js'),
  icon: FileDigit,
  redirectFrom: ["/file-to-base64", "/base64-converter"]
});

const tool$1d = defineTool({
  name: translate("tools.basic-auth-generator.title"),
  path: "/basic-auth-generator",
  description: translate("tools.basic-auth-generator.description"),
  keywords: [
    "basic",
    "auth",
    "generator",
    "username",
    "password",
    "base64",
    "authentication",
    "header",
    "authorization"
  ],
  component: () => import('./assets/basic-auth-generator-40fa71ae.js'),
  icon: PasswordRound
});

const tool$1c = defineTool({
  name: "ASCII Art Text Generator",
  path: "/ascii-text-drawer",
  description: "Create ASCII art text with many fonts and styles.",
  keywords: ["ascii", "asciiart", "text", "drawer"],
  component: () => import('./assets/ascii-text-drawer-8cd95b92.js'),
  icon: Artboard,
  createdAt: /* @__PURE__ */ new Date("2024-03-03")
});

const tool$1b = defineTool({
  name: translate("tools.text-to-unicode.title"),
  path: "/text-to-unicode",
  description: translate("tools.text-to-unicode.description"),
  keywords: ["text", "to", "unicode"],
  component: () => import('./assets/text-to-unicode-23b1504d.js'),
  icon: TextWrap,
  createdAt: /* @__PURE__ */ new Date("2024-01-31")
});

const tool$1a = defineTool({
  name: "Outlook Safelink decoder",
  path: "/safelink-decoder",
  description: "Decode Outlook SafeLink links",
  keywords: ["outlook", "safelink", "decoder"],
  component: () => import('./assets/safelink-decoder-0263335b.js'),
  icon: Mailbox,
  createdAt: /* @__PURE__ */ new Date("2024-03-11")
});

const _hoisted_1$i = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$i = /*#__PURE__*/createElementVNode("path", {
  fill: "currentColor",
  d: "M14 13v-2l-2 1l-2-1v2l-2 1l2 1v2l2-1l2 1v-2l2-1M14 2H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h1v-2H7V4h6v4h4v10h-1v2h1a2 2 0 0 0 2-2V7m-5 6v-2l-2 1l-2-1v2l-2 1l2 1v2l2-1l2 1v-2l2-1m-6 9l2-1l2 1v-5h-4m4-5v-2l-2 1l-2-1v2l-2 1l2 1v2l2-1l2 1v-2l2-1Z"
}, null, -1);
const _hoisted_3$i = [
  _hoisted_2$i
];

function render$j(_ctx, _cache) {
  return (openBlock(), createElementBlock("svg", _hoisted_1$i, _hoisted_3$i))
}

const FileCertIcon = { name: 'mdi-file-certificate-outline', render: render$j };
/* vite-plugin-components disabled */

const tool$19 = defineTool({
  name: translate("tools.pdf-signature-checker.title"),
  path: "/pdf-signature-checker",
  description: translate("tools.pdf-signature-checker.description"),
  keywords: ["pdf", "signature", "checker", "verify", "validate", "sign"],
  component: () => import('./assets/pdf-signature-checker-9a9d7fb1.js'),
  icon: FileCertIcon,
  createdAt: /* @__PURE__ */ new Date("2023-12-09")
});

const _hoisted_1$h = {
  xmlns: "http://www.w3.org/2000/svg",
  version: "1.2",
  viewBox: "0 0 50 50"
};
const _hoisted_2$h = /*#__PURE__*/createElementVNode("path", {
  fill: "currentColor",
  d: "M.7 35V18.3q1.1-.2 2.8-.5 1.7-.3 4-.3 2.1 0 3.4.6 1.4.5 2.2 1.6.8 1 1.1 2.5.4 1.4.4 3.2V35h-3.1v-9q0-1.6-.2-2.7t-.7-1.8q-.5-.7-1.4-1-.8-.3-2-.3h-1q-.6 0-1 .1-.5 0-.9.1t-.5.1V35zm18.8 0h-3.2q.2-2.6.9-5.5.8-3 1.9-5.7 1.1-2.8 2.4-5.1 1.3-2.4 2.5-3.9H12.9v-2.7h14.6v2.6q-1.1 1.2-2.4 3.4-1.4 2.2-2.6 5-1.1 2.7-2 5.8-.8 3-1 6.1zm6.6 0V18.3q1.1-.2 2.8-.5 1.8-.3 4-.3 1.7 0 2.8.4 1.1.5 1.9 1.3.2-.1.7-.4.5-.3 1.2-.6.8-.3 1.7-.5.8-.2 1.9-.2 1.9 0 3.2.6 1.3.5 2 1.6.7 1 .9 2.5.3 1.4.3 3.2V35h-3.1v-9q0-1.5-.2-2.6-.1-1.1-.5-1.8t-1.1-1.1q-.7-.3-1.9-.3-1.5 0-2.5.4t-1.4.7q.3.9.4 1.9.1 1 .1 2.2V35h-3v-9q0-1.5-.2-2.6t-.6-1.8q-.4-.7-1.1-1.1-.7-.3-1.8-.3h-1q-.5 0-1 .1-.5 0-.9.1t-.5.1V35z",
  "aria-label": "n7m"
}, null, -1);
const _hoisted_3$h = [
  _hoisted_2$h
];

function render$i(_ctx, _cache) {
  return (openBlock(), createElementBlock("svg", _hoisted_1$h, _hoisted_3$h))
}
const n7mIcon = { render: render$i };

const tool$18 = defineTool({
  name: translate("tools.numeronym-generator.title"),
  path: "/numeronym-generator",
  description: translate("tools.numeronym-generator.description"),
  keywords: ["numeronym", "generator", "abbreviation", "i18n", "a11y", "l10n"],
  component: () => import('./assets/numeronym-generator-761a8f1a.js'),
  icon: n7mIcon,
  createdAt: /* @__PURE__ */ new Date("2023-11-05")
});

const tool$17 = defineTool({
  name: translate("tools.mac-address-generator.title"),
  path: "/mac-address-generator",
  description: translate("tools.mac-address-generator.description"),
  keywords: ["mac", "address", "generator", "random", "prefix"],
  component: () => import('./assets/mac-address-generator-236d612b.js'),
  icon: Devices,
  createdAt: /* @__PURE__ */ new Date("2023-11-31")
});

const tool$16 = defineTool({
  name: translate("tools.text-to-binary.title"),
  path: "/text-to-binary",
  description: translate("tools.text-to-binary.description"),
  keywords: ["text", "to", "binary", "converter", "encode", "decode", "ascii"],
  component: () => import('./assets/text-to-binary-49eff7bc.js'),
  icon: Binary,
  createdAt: /* @__PURE__ */ new Date("2023-10-15")
});

const tool$15 = defineTool({
  name: translate("tools.ulid-generator.title"),
  path: "/ulid-generator",
  description: translate("tools.ulid-generator.description"),
  keywords: ["ulid", "generator", "random", "id", "alphanumeric", "identity", "token", "string", "identifier", "unique"],
  component: () => import('./assets/ulid-generator-df8ff5d9.js'),
  icon: SortDescendingNumbers,
  createdAt: /* @__PURE__ */ new Date("2023-09-11")
});

const _hoisted_1$g = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$g = /*#__PURE__*/createElementVNode("path", {
  fill: "currentColor",
  d: "M11.5 1L2 6v2h19V6m-5 4v7h3v-7M2 22h19v-3H2m8-9v7h3v-7m-9 0v7h3v-7H4Z"
}, null, -1);
const _hoisted_3$g = [
  _hoisted_2$g
];

function render$h(_ctx, _cache) {
  return (openBlock(), createElementBlock("svg", _hoisted_1$g, _hoisted_3$g))
}

const Bank = { name: 'mdi-bank', render: render$h };
/* vite-plugin-components disabled */

const tool$14 = defineTool({
  name: translate("tools.iban-validator-and-parser.title"),
  path: "/iban-validator-and-parser",
  description: translate("tools.iban-validator-and-parser.description"),
  keywords: ["iban", "validator", "and", "parser", "bic", "bank"],
  component: () => import('./assets/iban-validator-and-parser-8dd88427.js'),
  icon: Bank,
  createdAt: /* @__PURE__ */ new Date("2023-08-26")
});

const tool$13 = defineTool({
  name: translate("tools.string-obfuscator.title"),
  path: "/string-obfuscator",
  description: translate("tools.string-obfuscator.description"),
  keywords: ["string", "obfuscator", "secret", "token", "hide", "obscure", "mask", "masking"],
  component: () => import('./assets/string-obfuscator-de4520ca.js'),
  icon: EyeOff,
  createdAt: /* @__PURE__ */ new Date("2023-08-16")
});

const tool$12 = defineTool({
  name: translate("tools.text-diff.title"),
  path: "/text-diff",
  description: translate("tools.text-diff.description"),
  keywords: ["text", "diff", "compare", "string", "text diff", "code"],
  component: () => import('./assets/text-diff-20c36452.js'),
  icon: FileDiff,
  createdAt: /* @__PURE__ */ new Date("2023-08-16")
});

const tool$11 = defineTool({
  name: translate("tools.emoji-picker.title"),
  path: "/emoji-picker",
  description: translate("tools.emoji-picker.description"),
  keywords: ["emoji", "picker", "unicode", "copy", "paste"],
  component: () => import('./assets/emoji-picker-f109c7c5.js'),
  icon: MoodSmile,
  createdAt: /* @__PURE__ */ new Date("2023-08-07")
});

const _hoisted_1$f = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$f = /*#__PURE__*/createElementVNode("path", {
  fill: "currentColor",
  d: "M17 7h5v10h-5v2a1 1 0 0 0 1 1h2v2h-2.5c-.55 0-1.5-.45-1.5-1c0 .55-.95 1-1.5 1H12v-2h2a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-2V2h2.5c.55 0 1.5.45 1.5 1c0-.55.95-1 1.5-1H20v2h-2a1 1 0 0 0-1 1v2M2 7h11v2H4v6h9v2H2V7m18 8V9h-3v6h3M8.5 12A1.5 1.5 0 0 0 7 10.5A1.5 1.5 0 0 0 5.5 12A1.5 1.5 0 0 0 7 13.5A1.5 1.5 0 0 0 8.5 12m4.5-1.11c-.61-.56-1.56-.51-2.12.11c-.56.6-.51 1.55.12 2.11c.55.52 1.43.52 2 0v-2.22Z"
}, null, -1);
const _hoisted_3$f = [
  _hoisted_2$f
];

function render$g(_ctx, _cache) {
  return (openBlock(), createElementBlock("svg", _hoisted_1$f, _hoisted_3$f))
}

const PasswordIcon = { name: 'mdi-form-textbox-password', render: render$g };
/* vite-plugin-components disabled */

const tool$10 = defineTool({
  name: translate("tools.password-strength-analyser.title"),
  path: "/password-strength-analyser",
  description: translate("tools.password-strength-analyser.description"),
  keywords: ["password", "strength", "analyser", "and", "crack", "time", "estimation", "brute", "force", "attack", "entropy", "cracking", "hash", "hashing", "algorithm", "algorithms", "md5", "sha1", "sha256", "sha512", "bcrypt", "scrypt", "argon2", "argon2id", "argon2i", "argon2d"],
  component: () => import('./assets/password-strength-analyser-506014b5.js'),
  icon: PasswordIcon,
  createdAt: /* @__PURE__ */ new Date("2023-06-24")
});

const tool$$ = defineTool({
  name: translate("tools.yaml-to-toml.title"),
  path: "/yaml-to-toml",
  description: translate("tools.yaml-to-toml.description"),
  keywords: ["yaml", "to", "toml", "convert", "transform"],
  component: () => import('./assets/yaml-to-toml-ee5e0482.js'),
  icon: AlignJustified,
  createdAt: /* @__PURE__ */ new Date("2023-06-23")
});

const tool$_ = defineTool({
  name: translate("tools.json-to-toml.title"),
  path: "/json-to-toml",
  description: translate("tools.json-to-toml.description"),
  keywords: ["json", "parse", "toml", "convert", "transform"],
  component: () => import('./assets/json-to-toml-f402dd8a.js'),
  icon: Braces,
  createdAt: /* @__PURE__ */ new Date("2023-06-23")
});

const _hoisted_1$e = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$e = /*#__PURE__*/createElementVNode("path", {
  fill: "currentColor",
  d: "M15 4v2h3v12h-3v2h5V4M4 4v16h5v-2H6V6h3V4H4Z"
}, null, -1);
const _hoisted_3$e = [
  _hoisted_2$e
];

function render$f(_ctx, _cache) {
  return (openBlock(), createElementBlock("svg", _hoisted_1$e, _hoisted_3$e))
}

const BracketIcon = { name: 'mdi-code-brackets', render: render$f };
/* vite-plugin-components disabled */

const tool$Z = defineTool({
  name: translate("tools.toml-to-yaml.title"),
  path: "/toml-to-yaml",
  description: translate("tools.toml-to-yaml.description"),
  keywords: ["toml", "yaml", "convert", "online", "transform", "parse"],
  component: () => import('./assets/toml-to-yaml-ccf332cd.js'),
  icon: BracketIcon,
  createdAt: /* @__PURE__ */ new Date("2023-06-23")
});

const tool$Y = defineTool({
  name: translate("tools.toml-to-json.title"),
  path: "/toml-to-json",
  description: translate("tools.toml-to-json.description"),
  keywords: ["toml", "json", "convert", "online", "transform", "parser"],
  component: () => import('./assets/toml-to-json-6ed54fb3.js'),
  icon: BracketIcon,
  createdAt: /* @__PURE__ */ new Date("2023-06-23")
});

const tool$X = defineTool({
  name: translate("tools.json-to-csv.title"),
  path: "/json-to-csv",
  description: translate("tools.json-to-csv.description"),
  keywords: ["json", "to", "csv", "convert"],
  component: () => import('./assets/json-to-csv-ade26e70.js'),
  icon: List,
  createdAt: /* @__PURE__ */ new Date("2023-06-18")
});

const tool$W = defineTool({
  name: translate("tools.camera-recorder.title"),
  path: "/camera-recorder",
  description: translate("tools.camera-recorder.description"),
  keywords: ["camera", "recoder"],
  component: () => import('./assets/camera-recorder-714534b8.js'),
  icon: Camera,
  createdAt: /* @__PURE__ */ new Date("2023-05-15")
});

const tool$V = defineTool({
  name: translate("tools.list-converter.title"),
  path: "/list-converter",
  description: translate("tools.list-converter.description"),
  keywords: ["list", "converter", "sort", "reverse", "prefix", "suffix", "lowercase", "truncate"],
  component: () => import('./assets/list-converter-ac9af998.js'),
  icon: List,
  createdAt: /* @__PURE__ */ new Date("2023-05-07")
});

const tool$U = defineTool({
  name: translate("tools.phone-parser-and-formatter.title"),
  path: "/phone-parser-and-formatter",
  description: translate("tools.phone-parser-and-formatter.description"),
  keywords: [
    "phone",
    "parser",
    "formatter",
    "validate",
    "format",
    "number",
    "telephone",
    "mobile",
    "cell",
    "international",
    "national"
  ],
  component: () => import('./assets/phone-parser-and-formatter-51bd8c1b.js'),
  icon: Phone,
  createdAt: /* @__PURE__ */ new Date("2023-05-01")
});

const tool$T = defineTool({
  name: translate("tools.json-diff.title"),
  path: "/json-diff",
  description: translate("tools.json-diff.description"),
  keywords: ["json", "diff", "compare", "difference", "object", "data"],
  component: () => import('./assets/json-diff-81ec2154.js'),
  icon: CompareArrowsRound,
  createdAt: /* @__PURE__ */ new Date("2023-04-20")
});

const tool$S = defineTool({
  name: translate("tools.ipv4-range-expander.title"),
  path: "/ipv4-range-expander",
  description: translate("tools.ipv4-range-expander.description"),
  keywords: ["ipv4", "range", "expander", "subnet", "creator", "cidr"],
  component: () => import('./assets/ipv4-range-expander-d427bde9.js'),
  icon: UnfoldMoreOutlined,
  createdAt: /* @__PURE__ */ new Date("2023-04-19")
});

const codesByCategories = [
  {
    category: "1xx informational response",
    codes: [
      {
        code: 100,
        name: "Continue",
        description: "Waiting for the client to emit the body of the request.",
        type: "HTTP"
      },
      {
        code: 101,
        name: "Switching Protocols",
        description: "The server has agreed to change protocol.",
        type: "HTTP"
      },
      {
        code: 102,
        name: "Processing",
        description: "The server is processing the request, but no response is available yet.",
        type: "WebDav"
      },
      {
        code: 103,
        name: "Early Hints",
        description: "The server returns some response headers before final HTTP message.",
        type: "HTTP"
      }
    ]
  },
  {
    category: "2xx success",
    codes: [
      {
        code: 200,
        name: "OK",
        description: "Standard response for successful HTTP requests.",
        type: "HTTP"
      },
      {
        code: 201,
        name: "Created",
        description: "The request has been fulfilled, resulting in the creation of a new resource.",
        type: "HTTP"
      },
      {
        code: 202,
        name: "Accepted",
        description: "The request has been accepted for processing, but the processing has not been completed.",
        type: "HTTP"
      },
      {
        code: 203,
        name: "Non-Authoritative Information",
        description: "The request is successful but the content of the original request has been modified by a transforming proxy.",
        type: "HTTP"
      },
      {
        code: 204,
        name: "No Content",
        description: "The server successfully processed the request and is not returning any content.",
        type: "HTTP"
      },
      {
        code: 205,
        name: "Reset Content",
        description: "The server indicates to reinitialize the document view which sent this request.",
        type: "HTTP"
      },
      {
        code: 206,
        name: "Partial Content",
        description: "The server is delivering only part of the resource due to a range header sent by the client.",
        type: "HTTP"
      },
      {
        code: 207,
        name: "Multi-Status",
        description: "The message body that follows is an XML message and can contain a number of separate response codes.",
        type: "WebDav"
      },
      {
        code: 208,
        name: "Already Reported",
        description: "The members of a DAV binding have already been enumerated in a preceding part of the (multistatus) response.",
        type: "WebDav"
      },
      {
        code: 226,
        name: "IM Used",
        description: "The server has fulfilled a request for the resource, and the response is a representation of the result.",
        type: "HTTP"
      }
    ]
  },
  {
    category: "3xx redirection",
    codes: [
      {
        code: 300,
        name: "Multiple Choices",
        description: "Indicates multiple options for the resource that the client may follow.",
        type: "HTTP"
      },
      {
        code: 301,
        name: "Moved Permanently",
        description: "This and all future requests should be directed to the given URI.",
        type: "HTTP"
      },
      {
        code: 302,
        name: "Found",
        description: "Redirect to another URL. This is an example of industry practice contradicting the standard.",
        type: "HTTP"
      },
      {
        code: 303,
        name: "See Other",
        description: "The response to the request can be found under another URI using a GET method.",
        type: "HTTP"
      },
      {
        code: 304,
        name: "Not Modified",
        description: "Indicates that the resource has not been modified since the version specified by the request headers.",
        type: "HTTP"
      },
      {
        code: 305,
        name: "Use Proxy",
        description: "The requested resource is available only through a proxy, the address for which is provided in the response.",
        type: "HTTP"
      },
      {
        code: 306,
        name: "Switch Proxy",
        description: 'No longer used. Originally meant "Subsequent requests should use the specified proxy."',
        type: "HTTP"
      },
      {
        code: 307,
        name: "Temporary Redirect",
        description: "In this case, the request should be repeated with another URI; however, future requests should still use the original URI.",
        type: "HTTP"
      },
      {
        code: 308,
        name: "Permanent Redirect",
        description: "The request and all future requests should be repeated using another URI.",
        type: "HTTP"
      }
    ]
  },
  {
    category: "4xx client error",
    codes: [
      {
        code: 400,
        name: "Bad Request",
        description: "The server cannot or will not process the request due to an apparent client error.",
        type: "HTTP"
      },
      {
        code: 401,
        name: "Unauthorized",
        description: "Similar to 403 Forbidden, but specifically for use when authentication is required and has failed or has not yet been provided.",
        type: "HTTP"
      },
      {
        code: 402,
        name: "Payment Required",
        description: "Reserved for future use. The original intention was that this code might be used as part of some form of digital cash or micropayment scheme.",
        type: "HTTP"
      },
      {
        code: 403,
        name: "Forbidden",
        description: "The request was valid, but the server is refusing action. The user might not have the necessary permissions for a resource.",
        type: "HTTP"
      },
      {
        code: 404,
        name: "Not Found",
        description: "The requested resource could not be found but may be available in the future.",
        type: "HTTP"
      },
      {
        code: 405,
        name: "Method Not Allowed",
        description: "A request method is not supported for the requested resource.",
        type: "HTTP"
      },
      {
        code: 406,
        name: "Not Acceptable",
        description: "The requested resource is capable of generating only content not acceptable according to the Accept headers sent in the request.",
        type: "HTTP"
      },
      {
        code: 407,
        name: "Proxy Authentication Required",
        description: "The client must first authenticate itself with the proxy.",
        type: "HTTP"
      },
      {
        code: 408,
        name: "Request Timeout",
        description: "The server timed out waiting for the request.",
        type: "HTTP"
      },
      {
        code: 409,
        name: "Conflict",
        description: "Indicates that the request could not be processed because of conflict in the request, such as an edit conflict.",
        type: "HTTP"
      },
      {
        code: 410,
        name: "Gone",
        description: "Indicates that the resource requested is no longer available and will not be available again.",
        type: "HTTP"
      },
      {
        code: 411,
        name: "Length Required",
        description: "The request did not specify the length of its content, which is required by the requested resource.",
        type: "HTTP"
      },
      {
        code: 412,
        name: "Precondition Failed",
        description: "The server does not meet one of the preconditions that the requester put on the request.",
        type: "HTTP"
      },
      {
        code: 413,
        name: "Payload Too Large",
        description: "The request is larger than the server is willing or able to process.",
        type: "HTTP"
      },
      {
        code: 414,
        name: "URI Too Long",
        description: "The URI provided was too long for the server to process.",
        type: "HTTP"
      },
      {
        code: 415,
        name: "Unsupported Media Type",
        description: "The request entity has a media type which the server or resource does not support.",
        type: "HTTP"
      },
      {
        code: 416,
        name: "Range Not Satisfiable",
        description: "The client has asked for a portion of the file, but the server cannot supply that portion.",
        type: "HTTP"
      },
      {
        code: 417,
        name: "Expectation Failed",
        description: "The server cannot meet the requirements of the Expect request-header field.",
        type: "HTTP"
      },
      {
        code: 418,
        name: "I'm a teapot",
        description: "The server refuses the attempt to brew coffee with a teapot.",
        type: "HTTP"
      },
      {
        code: 421,
        name: "Misdirected Request",
        description: "The request was directed at a server that is not able to produce a response.",
        type: "HTTP"
      },
      {
        code: 422,
        name: "Unprocessable Entity",
        description: "The request was well-formed but was unable to be followed due to semantic errors.",
        type: "HTTP"
      },
      {
        code: 423,
        name: "Locked",
        description: "The resource that is being accessed is locked.",
        type: "HTTP"
      },
      {
        code: 424,
        name: "Failed Dependency",
        description: "The request failed due to failure of a previous request.",
        type: "HTTP"
      },
      {
        code: 425,
        name: "Too Early",
        description: "Indicates that the server is unwilling to risk processing a request that might be replayed.",
        type: "HTTP"
      },
      {
        code: 426,
        name: "Upgrade Required",
        description: "The client should switch to a different protocol such as TLS/1.0.",
        type: "HTTP"
      },
      {
        code: 428,
        name: "Precondition Required",
        description: "The origin server requires the request to be conditional.",
        type: "HTTP"
      },
      {
        code: 429,
        name: "Too Many Requests",
        description: "The user has sent too many requests in a given amount of time.",
        type: "HTTP"
      },
      {
        code: 431,
        name: "Request Header Fields Too Large",
        description: "The server is unwilling to process the request because either an individual header field, or all the header fields collectively, are too large.",
        type: "HTTP"
      },
      {
        code: 451,
        name: "Unavailable For Legal Reasons",
        description: "A server operator has received a legal demand to deny access to a resource or to a set of resources that includes the requested resource.",
        type: "HTTP"
      }
    ]
  },
  {
    category: "5xx server error",
    codes: [
      {
        code: 500,
        name: "Internal Server Error",
        description: "A generic error message, given when an unexpected condition was encountered and no more specific message is suitable.",
        type: "HTTP"
      },
      {
        code: 501,
        name: "Not Implemented",
        description: "The server either does not recognize the request method, or it lacks the ability to fulfill the request.",
        type: "HTTP"
      },
      {
        code: 502,
        name: "Bad Gateway",
        description: "The server was acting as a gateway or proxy and received an invalid response from the upstream server.",
        type: "HTTP"
      },
      {
        code: 503,
        name: "Service Unavailable",
        description: "The server is currently unavailable (because it is overloaded or down for maintenance).",
        type: "HTTP"
      },
      {
        code: 504,
        name: "Gateway Timeout",
        description: "The server was acting as a gateway or proxy and did not receive a timely response from the upstream server.",
        type: "HTTP"
      },
      {
        code: 505,
        name: "HTTP Version Not Supported",
        description: "The server does not support the HTTP protocol version used in the request.",
        type: "HTTP"
      },
      {
        code: 506,
        name: "Variant Also Negotiates",
        description: "Transparent content negotiation for the request results in a circular reference.",
        type: "HTTP"
      },
      {
        code: 507,
        name: "Insufficient Storage",
        description: "The server is unable to store the representation needed to complete the request.",
        type: "HTTP"
      },
      {
        code: 508,
        name: "Loop Detected",
        description: "The server detected an infinite loop while processing the request.",
        type: "HTTP"
      },
      {
        code: 510,
        name: "Not Extended",
        description: "Further extensions to the request are required for the server to fulfill it.",
        type: "HTTP"
      },
      {
        code: 511,
        name: "Network Authentication Required",
        description: "The client needs to authenticate to gain network access.",
        type: "HTTP"
      }
    ]
  }
];

const tool$R = defineTool({
  name: translate("tools.http-status-codes.title"),
  path: "/http-status-codes",
  description: translate("tools.http-status-codes.description"),
  keywords: [
    "http",
    "status",
    "codes",
    ...codesByCategories.flatMap(({ codes }) => codes.flatMap(({ code, name }) => [String(code), name]))
  ],
  component: () => import('./assets/http-status-codes-d974209a.js'),
  icon: HttpRound,
  createdAt: /* @__PURE__ */ new Date("2023-04-13")
});

const tool$Q = defineTool({
  name: translate("tools.yaml-to-json-converter.title"),
  path: "/yaml-to-json-converter",
  description: translate("tools.yaml-to-json-converter.description"),
  keywords: ["yaml", "to", "json"],
  component: () => import('./assets/yaml-to-json-517a83b4.js'),
  icon: AlignJustified,
  createdAt: /* @__PURE__ */ new Date("2023-04-10")
});

const tool$P = defineTool({
  name: translate("tools.json-to-yaml-converter.title"),
  path: "/json-to-yaml-converter",
  description: translate("tools.json-to-yaml-converter.description"),
  keywords: ["yaml", "to", "json"],
  component: () => import('./assets/json-to-yaml-7cdd26cf.js'),
  icon: Braces,
  createdAt: /* @__PURE__ */ new Date("2023-04-10")
});

const tool$O = defineTool({
  name: translate("tools.ipv6-ula-generator.title"),
  path: "/ipv6-ula-generator",
  description: translate("tools.ipv6-ula-generator.description"),
  keywords: ["ipv6", "ula", "generator", "rfc4193", "network", "private"],
  component: () => import('./assets/ipv6-ula-generator-874c956c.js'),
  icon: BuildingFactory,
  createdAt: /* @__PURE__ */ new Date("2023-04-09")
});

const tool$N = defineTool({
  name: translate("tools.ipv4-address-converter.title"),
  path: "/ipv4-address-converter",
  description: translate("tools.ipv4-address-converter.description"),
  keywords: ["ipv4", "address", "converter", "decimal", "hexadecimal", "binary", "ipv6"],
  component: () => import('./assets/ipv4-address-converter-fb4f8fc8.js'),
  icon: Binary,
  createdAt: /* @__PURE__ */ new Date("2023-04-08")
});

const tool$M = defineTool({
  name: translate("tools.benchmark-builder.title"),
  path: "/benchmark-builder",
  description: translate("tools.benchmark-builder.description"),
  keywords: ["benchmark", "builder", "execution", "duration", "mean", "variance"],
  component: () => import('./assets/benchmark-builder-acce55a1.js'),
  icon: SpeedFilled,
  createdAt: /* @__PURE__ */ new Date("2023-04-05")
});

const tool$L = defineTool({
  name: translate("tools.user-agent-parser.title"),
  path: "/user-agent-parser",
  description: translate("tools.user-agent-parser.description"),
  keywords: ["user", "agent", "parser", "browser", "engine", "os", "cpu", "device", "user-agent", "client"],
  component: () => import('./assets/user-agent-parser-3764d258.js'),
  icon: Browser,
  createdAt: /* @__PURE__ */ new Date("2023-04-06")
});

const tool$K = defineTool({
  name: translate("tools.ipv4-subnet-calculator.title"),
  path: "/ipv4-subnet-calculator",
  description: translate("tools.ipv4-subnet-calculator.description"),
  keywords: ["ipv4", "subnet", "calculator", "mask", "network", "cidr", "netmask", "bitmask", "broadcast", "address"],
  component: () => import('./assets/ipv4-subnet-calculator-dddf3da8.js'),
  icon: RouterOutlined
});

const tool$J = defineTool({
  name: translate("tools.docker-run-to-docker-compose-converter.title"),
  path: "/docker-run-to-docker-compose-converter",
  description: translate("tools.docker-run-to-docker-compose-converter.description"),
  keywords: ["docker", "run", "compose", "yaml", "yml", "convert", "deamon"],
  component: () => import('./assets/docker-run-to-docker-compose-converter-8415692a.js'),
  icon: BrandDocker
});

const tool$I = defineTool({
  name: translate("tools.html-wysiwyg-editor.title"),
  path: "/html-wysiwyg-editor",
  description: translate("tools.html-wysiwyg-editor.description"),
  keywords: ["html", "wysiwyg", "editor", "p", "ul", "ol", "converter", "live"],
  component: () => import('./assets/html-wysiwyg-editor-e1e067a4.js'),
  icon: Edit
});

const tool$H = defineTool({
  name: translate("tools.rsa-key-pair-generator.title"),
  path: "/rsa-key-pair-generator",
  description: translate("tools.rsa-key-pair-generator.description"),
  keywords: ["rsa", "key", "pair", "generator", "public", "private", "secret", "ssh", "pem"],
  component: () => import('./assets/rsa-key-pair-generator-4da28a92.js'),
  icon: Certificate
});

const tool$G = defineTool({
  name: translate("tools.text-to-nato-alphabet.title"),
  path: "/text-to-nato-alphabet",
  description: translate("tools.text-to-nato-alphabet.description"),
  keywords: ["string", "nato", "alphabet", "phonetic", "oral", "transmission"],
  component: () => import('./assets/text-to-nato-alphabet-3b452175.js'),
  icon: Speakerphone
});

const tool$F = defineTool({
  name: translate("tools.slugify-string.title"),
  path: "/slugify-string",
  description: translate("tools.slugify-string.description"),
  keywords: ["slugify", "string", "escape", "emoji", "special", "character", "space", "trim"],
  component: () => import('./assets/slugify-string-02fafccf.js'),
  icon: AbcRound
});

const tool$E = defineTool({
  name: translate("tools.keycode-info.title"),
  path: "/keycode-info",
  description: translate("tools.keycode-info.description"),
  keywords: [
    "keycode",
    "info",
    "code",
    "javascript",
    "event",
    "keycodes",
    "which",
    "keyboard",
    "press",
    "modifier",
    "alt",
    "ctrl",
    "meta",
    "shift"
  ],
  component: () => import('./assets/keycode-info-10d5a293.js'),
  icon: Keyboard
});

const tool$D = defineTool({
  name: translate("tools.json-minify.title"),
  path: "/json-minify",
  description: translate("tools.json-minify.description"),
  keywords: ["json", "minify", "format"],
  component: () => import('./assets/json-minify-3fc099f7.js'),
  icon: Braces
});

const tool$C = defineTool({
  name: translate("tools.bcrypt.title"),
  path: "/bcrypt",
  description: translate("tools.bcrypt.description"),
  keywords: ["bcrypt", "hash", "compare", "password", "salt", "round", "storage", "crypto"],
  component: () => import('./assets/bcrypt-e287957e.js'),
  icon: LockSquare
});

const tool$B = defineTool({
  name: translate("tools.bip39-generator.title"),
  path: "/bip39-generator",
  description: translate("tools.bip39-generator.description"),
  keywords: ["BIP39", "passphrase", "generator", "mnemonic", "entropy"],
  component: () => import('./assets/bip39-generator-b8761bf4.js'),
  icon: AlignJustified
});

const tool$A = defineTool({
  name: translate("tools.case-converter.title"),
  path: "/case-converter",
  description: translate("tools.case-converter.description"),
  keywords: [
    "case",
    "converter",
    "camelCase",
    "capitalCase",
    "constantCase",
    "dotCase",
    "headerCase",
    "noCase",
    "paramCase",
    "pascalCase",
    "pathCase",
    "sentenceCase",
    "snakeCase"
  ],
  component: () => import('./assets/case-converter-46b42321.js'),
  icon: LetterCaseToggle
});

const tool$z = defineTool({
  name: translate("tools.chmod-calculator.title"),
  path: "/chmod-calculator",
  description: translate("tools.chmod-calculator.description"),
  keywords: [
    "chmod",
    "calculator",
    "file",
    "permission",
    "files",
    "directory",
    "folder",
    "recursive",
    "generator",
    "octal"
  ],
  component: () => import('./assets/chmod-calculator-d5971eb6.js'),
  icon: FileInvoice
});

const tool$y = defineTool({
  name: translate("tools.chronometer.title"),
  path: "/chronometer",
  description: translate("tools.chronometer.description"),
  keywords: ["chronometer", "time", "lap", "duration", "measure", "pause", "resume", "stopwatch"],
  component: () => import('./assets/chronometer-df953a1c.js'),
  icon: TimerOutlined
});

const tool$x = defineTool({
  name: translate("tools.color-converter.title"),
  path: "/color-converter",
  description: translate("tools.color-converter.description"),
  keywords: ["color", "converter"],
  component: () => import('./assets/color-converter-66bc9b9e.js'),
  icon: Palette,
  redirectFrom: ["/color-picker-converter"]
});

const tool$w = defineTool({
  name: translate("tools.crontab-generator.title"),
  path: "/crontab-generator",
  description: translate("tools.crontab-generator.description"),
  keywords: [
    "crontab",
    "generator",
    "cronjob",
    "cron",
    "schedule",
    "parse",
    "expression",
    "year",
    "month",
    "week",
    "day",
    "minute",
    "second"
  ],
  component: () => import('./assets/crontab-generator-52f9eb2c.js'),
  icon: Alarm
});

const tool$v = defineTool({
  name: translate("tools.date-converter.title"),
  path: "/date-converter",
  description: translate("tools.date-converter.description"),
  keywords: ["date", "time", "converter", "iso", "utc", "timezone", "year", "month", "day", "minute", "seconde"],
  component: () => import('./assets/date-time-converter-e3ea2564.js'),
  icon: Calendar
});

const tool$u = defineTool({
  name: translate("tools.device-information.title"),
  path: "/device-information",
  description: translate("tools.device-information.description"),
  keywords: [
    "device",
    "information",
    "screen",
    "pixel",
    "ratio",
    "status",
    "data",
    "computer",
    "size",
    "user",
    "agent"
  ],
  component: () => import('./assets/device-information-a8ddc42e.js'),
  icon: DeviceDesktop
});

const tool$t = defineTool({
  name: translate("tools.encryption.title"),
  path: "/encryption",
  description: translate("tools.encryption.description"),
  keywords: ["cypher", "encipher", "text", "AES", "TripleDES", "Rabbit", "RC4"],
  component: () => import('./assets/encryption-ae629dd8.js'),
  icon: Lock,
  redirectFrom: ["/cypher"]
});

const tool$s = defineTool({
  name: translate("tools.eta-calculator.title"),
  path: "/eta-calculator",
  description: translate("tools.eta-calculator.description"),
  keywords: ["eta", "calculator", "estimated", "time", "arrival", "average"],
  component: () => import('./assets/eta-calculator-b78b530b.js'),
  icon: Hourglass
});

const tool$r = defineTool({
  name: translate("tools.percentage-calculator.title"),
  path: "/percentage-calculator",
  description: translate("tools.percentage-calculator.description"),
  keywords: ["percentage", "calculator", "calculate", "value", "number", "%"],
  component: () => import('./assets/percentage-calculator-e72743b1.js'),
  icon: Percentage,
  createdAt: /* @__PURE__ */ new Date("2023-06-18")
});

const tool$q = defineTool({
  name: translate("tools.git-memo.title"),
  path: "/git-memo",
  description: translate("tools.git-memo.description"),
  keywords: ["git", "push", "force", "pull", "commit", "amend", "rebase", "merge", "reset", "soft", "hard", "lease"],
  component: () => import('./assets/git-memo-98d325cf.js'),
  icon: BrandGit
});

const tool$p = defineTool({
  name: translate("tools.hash-text.title"),
  path: "/hash-text",
  description: translate("tools.hash-text.description"),
  keywords: [
    "hash",
    "digest",
    "crypto",
    "security",
    "text",
    "MD5",
    "SHA1",
    "SHA256",
    "SHA224",
    "SHA512",
    "SHA384",
    "SHA3",
    "RIPEMD160"
  ],
  component: () => import('./assets/hash-text-5df68807.js'),
  icon: EyeOff,
  redirectFrom: ["/hash"]
});

const tool$o = defineTool({
  name: translate("tools.hmac-generator.title"),
  path: "/hmac-generator",
  description: translate("tools.hmac-generator.description"),
  keywords: ["hmac", "generator", "MD5", "SHA1", "SHA256", "SHA224", "SHA512", "SHA384", "SHA3", "RIPEMD160"],
  component: () => import('./assets/hmac-generator-9885c228.js'),
  icon: ShortTextRound
});

const tool$n = defineTool({
  name: translate("tools.html-entities.title"),
  path: "/html-entities",
  description: translate("tools.html-entities.description"),
  keywords: ["html", "entities", "escape", "unescape", "special", "characters", "tags"],
  component: () => import('./assets/html-entities-54e010e8.js'),
  icon: Code
});

const tool$m = defineTool({
  name: translate("tools.base-converter.title"),
  path: "/base-converter",
  description: translate("tools.base-converter.description"),
  keywords: ["integer", "number", "base", "conversion", "decimal", "hexadecimal", "binary", "octal", "base64"],
  component: () => import('./assets/integer-base-converter-7626d8ff.js'),
  icon: ArrowsLeftRight
});

const tool$l = defineTool({
  name: translate("tools.json-prettify.title"),
  path: "/json-prettify",
  description: translate("tools.json-prettify.description"),
  keywords: ["json", "viewer", "prettify", "format"],
  component: () => import('./assets/json-viewer-861fd074.js'),
  icon: Braces,
  redirectFrom: ["/json-viewer"]
});

const tool$k = defineTool({
  name: translate("tools.jwt-parser.title"),
  path: "/jwt-parser",
  description: translate("tools.jwt-parser.description"),
  keywords: [
    "jwt",
    "parser",
    "decode",
    "typ",
    "alg",
    "iss",
    "sub",
    "aud",
    "exp",
    "nbf",
    "iat",
    "jti",
    "json",
    "web",
    "token"
  ],
  component: () => import('./assets/jwt-parser-e7b0ae60.js'),
  icon: Key
});

const tool$j = defineTool({
  name: translate("tools.lorem-ipsum-generator.title"),
  path: "/lorem-ipsum-generator",
  description: translate("tools.lorem-ipsum-generator.description"),
  keywords: ["lorem", "ipsum", "dolor", "sit", "amet", "placeholder", "text", "filler", "random", "generator"],
  component: () => import('./assets/lorem-ipsum-generator-314c3bf1.js'),
  icon: AlignJustified
});

const tool$i = defineTool({
  name: translate("tools.math-evaluator.title"),
  path: "/math-evaluator",
  description: translate("tools.math-evaluator.description"),
  keywords: [
    "math",
    "evaluator",
    "calculator",
    "expression",
    "abs",
    "acos",
    "acosh",
    "acot",
    "acoth",
    "acsc",
    "acsch",
    "asec",
    "asech",
    "asin",
    "asinh",
    "atan",
    "atan2",
    "atanh",
    "cos",
    "cosh",
    "cot",
    "coth",
    "csc",
    "csch",
    "sec",
    "sech",
    "sin",
    "sinh",
    "sqrt",
    "tan",
    "tanh"
  ],
  component: () => import('./assets/math-evaluator-b57812c0.js'),
  icon: Math$1
});

const tool$h = defineTool({
  name: translate("tools.og-meta-generator.title"),
  path: "/og-meta-generator",
  description: translate("tools.og-meta-generator.description"),
  keywords: [
    "meta",
    "tag",
    "generator",
    "social",
    "title",
    "description",
    "image",
    "share",
    "online",
    "website",
    "open",
    "graph",
    "og"
  ],
  component: () => import('./assets/meta-tag-generator-2243a430.js'),
  icon: Tags
});

const tool$g = defineTool({
  name: translate("tools.mime-types.title"),
  path: "/mime-types",
  description: translate("tools.mime-types.description"),
  keywords: ["mime", "types", "extension", "content", "type"],
  component: () => import('./assets/mime-types-bf98860a.js'),
  icon: World
});

const tool$f = defineTool({
  name: translate("tools.otp-generator.title"),
  path: "/otp-generator",
  description: translate("tools.otp-generator.description"),
  keywords: [
    "otp",
    "code",
    "generator",
    "validator",
    "one",
    "time",
    "password",
    "authentication",
    "MFA",
    "mobile",
    "device",
    "security",
    "TOTP",
    "Time",
    "HMAC"
  ],
  component: () => import('./assets/otp-code-generator-and-validator-d03e6968.js'),
  icon: DeviceMobile
});

const tool$e = defineTool({
  name: translate("tools.qrcode-generator.title"),
  path: "/qrcode-generator",
  description: translate("tools.qrcode-generator.description"),
  keywords: ["qr", "code", "generator", "square", "color", "link", "low", "medium", "quartile", "high", "transparent"],
  component: () => import('./assets/qr-code-generator-602177f3.js'),
  icon: Qrcode
});

const tool$d = defineTool({
  name: translate("tools.wifi-qrcode-generator.title"),
  path: "/wifi-qrcode-generator",
  description: translate("tools.wifi-qrcode-generator.description"),
  keywords: ["qr", "code", "generator", "square", "color", "link", "low", "medium", "quartile", "high", "transparent", "wifi"],
  component: () => import('./assets/wifi-qr-code-generator-784cb98e.js'),
  icon: Qrcode,
  createdAt: /* @__PURE__ */ new Date("2023-09-06")
});

const tool$c = defineTool({
  name: translate("tools.random-port-generator.title"),
  path: "/random-port-generator",
  description: translate("tools.random-port-generator.description"),
  keywords: ["system", "port", "lan", "generator", "random", "development", "computer"],
  component: () => import('./assets/random-port-generator-6532a99b.js'),
  icon: Server
});

const tool$b = defineTool({
  name: translate("tools.roman-numeral-converter.title"),
  path: "/roman-numeral-converter",
  description: translate("tools.roman-numeral-converter.description"),
  keywords: ["roman", "arabic", "converter", "X", "I", "V", "L", "C", "D", "M"],
  component: () => import('./assets/roman-numeral-converter-64cacd75.js'),
  icon: LetterX
});

const tool$a = defineTool({
  name: translate("tools.sql-prettify.title"),
  path: "/sql-prettify",
  description: translate("tools.sql-prettify.description"),
  keywords: [
    "sql",
    "prettify",
    "beautify",
    "GCP BigQuery",
    "IBM DB2",
    "Apache Hive",
    "MariaDB",
    "MySQL",
    "Couchbase N1QL",
    "Oracle PL/SQL",
    "PostgreSQL",
    "Amazon Redshift",
    "Spark",
    "SQL Server Transact-SQL"
  ],
  component: () => import('./assets/sql-prettify-57bbca63.js'),
  icon: Database
});

const tool$9 = defineTool({
  name: translate("tools.svg-placeholder-generator.title"),
  path: "/svg-placeholder-generator",
  description: translate("tools.svg-placeholder-generator.description"),
  keywords: ["svg", "placeholder", "generator", "image", "size", "mockup"],
  component: () => import('./assets/svg-placeholder-generator-06c21e41.js'),
  icon: ImageOutlined
});

const tool$8 = defineTool({
  name: translate("tools.temperature-converter.title"),
  path: "/temperature-converter",
  description: translate("tools.temperature-converter.description"),
  keywords: [
    "temperature",
    "converter",
    "degree",
    "Kelvin",
    "Celsius",
    "Fahrenheit",
    "Rankine",
    "Delisle",
    "Newton",
    "Réaumur",
    "Rømer"
  ],
  component: () => import('./assets/temperature-converter-5f7f0b39.js'),
  icon: Temperature
});

const tool$7 = defineTool({
  name: translate("tools.text-statistics.title"),
  path: "/text-statistics",
  description: translate("tools.text-statistics.description"),
  keywords: ["text", "statistics", "length", "characters", "count", "size", "bytes"],
  component: () => import('./assets/text-statistics-a66631ec.js'),
  icon: FileText,
  redirectFrom: ["/text-stats"]
});

const tool$6 = defineTool({
  name: translate("tools.token-generator.title"),
  path: "/token-generator",
  description: translate("tools.token-generator.description"),
  keywords: ["token", "random", "string", "alphanumeric", "symbols", "number", "letters", "lowercase", "uppercase", "password"],
  component: () => import('./assets/token-generator.tool-f19f20e0.js'),
  icon: ArrowsShuffle
});

const tool$5 = defineTool({
  name: translate("tools.url-encoder.title"),
  path: "/url-encoder",
  description: translate("tools.url-encoder.description"),
  keywords: ["url", "encode", "decode", "percent", "%20", "format"],
  component: () => import('./assets/url-encoder-15ce020e.js'),
  icon: Link
});

const tool$4 = defineTool({
  name: translate("tools.url-parser.title"),
  path: "/url-parser",
  description: translate("tools.url-parser.description"),
  keywords: ["url", "parser", "protocol", "origin", "params", "port", "username", "password", "href"],
  component: () => import('./assets/url-parser-bd5ab062.js'),
  icon: Unlink
});

const tool$3 = defineTool({
  name: translate("tools.uuid-generator.title"),
  path: "/uuid-generator",
  description: translate("tools.uuid-generator.description"),
  keywords: ["uuid", "v4", "random", "id", "alphanumeric", "identity", "token", "string", "identifier", "unique", "v1", "v3", "v5", "nil"],
  component: () => import('./assets/uuid-generator-d0265dc9.js'),
  icon: Fingerprint
});

const tool$2 = defineTool({
  name: translate("tools.mac-address-lookup.title"),
  path: "/mac-address-lookup",
  description: translate("tools.mac-address-lookup.description"),
  keywords: ["mac", "address", "lookup", "vendor", "parser", "manufacturer"],
  component: () => import('./assets/mac-address-lookup-78b28c3b.js'),
  icon: Devices,
  createdAt: /* @__PURE__ */ new Date("2023-04-06")
});

const tool$1 = defineTool({
  name: translate("tools.xml-formatter.title"),
  path: "/xml-formatter",
  description: translate("tools.xml-formatter.description"),
  keywords: ["xml", "prettify", "format"],
  component: () => import('./assets/xml-formatter-26bf1f57.js'),
  icon: Code,
  createdAt: /* @__PURE__ */ new Date("2023-06-17")
});

const tool = defineTool({
  name: translate("tools.yaml-prettify.title"),
  path: "/yaml-prettify",
  description: translate("tools.yaml-prettify.description"),
  keywords: ["yaml", "viewer", "prettify", "format"],
  component: () => import('./assets/yaml-viewer-5a91a5e2.js'),
  icon: AlignJustified,
  createdAt: /* @__PURE__ */ new Date("2024-01-31")
});

const toolsByCategory = [
  {
    name: "Crypto",
    components: [tool$6, tool$p, tool$C, tool$3, tool$15, tool$t, tool$B, tool$o, tool$H, tool$10, tool$19]
  },
  {
    name: "Converter",
    components: [
      tool$v,
      tool$m,
      tool$b,
      tool$1e,
      tool$1f,
      tool$x,
      tool$A,
      tool$G,
      tool$16,
      tool$1b,
      tool$Q,
      tool$$,
      tool$P,
      tool$_,
      tool$V,
      tool$Y,
      tool$Z
    ]
  },
  {
    name: "Web",
    components: [
      tool$5,
      tool$n,
      tool$4,
      tool$u,
      tool$1d,
      tool$h,
      tool$f,
      tool$g,
      tool$k,
      tool$E,
      tool$F,
      tool$I,
      tool$L,
      tool$R,
      tool$T,
      tool$1a
    ]
  },
  {
    name: "Images and videos",
    components: [tool$e, tool$d, tool$9, tool$W]
  },
  {
    name: "Development",
    components: [
      tool$q,
      tool$c,
      tool$w,
      tool$l,
      tool$D,
      tool$X,
      tool$a,
      tool$z,
      tool$J,
      tool$1,
      tool
    ]
  },
  {
    name: "Network",
    components: [tool$K, tool$N, tool$S, tool$2, tool$17, tool$O]
  },
  {
    name: "Math",
    components: [tool$i, tool$s, tool$r]
  },
  {
    name: "Measurement",
    components: [tool$y, tool$8, tool$M]
  },
  {
    name: "Text",
    components: [
      tool$j,
      tool$7,
      tool$11,
      tool$13,
      tool$12,
      tool$18,
      tool$1c
    ]
  },
  {
    name: "Data",
    components: [tool$U, tool$14]
  }
];
const tools = toolsByCategory.flatMap(({ components }) => components);
const toolsWithCategory = toolsByCategory.flatMap(
  ({ components, name }) => components.map((tool) => ({ category: name, ...tool }))
);

const useToolStore = defineStore("tools", () => {
  const favoriteToolsName = useStorage("favoriteToolsName", []);
  const { t } = useI18n();
  const tools = computed(() => toolsWithCategory.map((tool) => {
    const toolI18nKey = tool.path.replace(/\//g, "");
    return {
      ...tool,
      name: t(`tools.${toolI18nKey}.title`, tool.name),
      description: t(`tools.${toolI18nKey}.description`, tool.description),
      category: t(`tools.categories.${tool.category.toLowerCase()}`, tool.category)
    };
  }));
  const toolsByCategory = computed(() => {
    return _.chain(tools.value).groupBy("category").map((components, name) => ({
      name,
      components
    })).value();
  });
  const favoriteTools = computed(() => {
    return favoriteToolsName.value.map((favoriteName) => tools.value.find(({ name }) => name === favoriteName)).filter(Boolean);
  });
  return {
    tools,
    favoriteTools,
    toolsByCategory,
    newTools: computed(() => tools.value.filter(({ isNew }) => isNew)),
    addToolToFavorites({ tool }) {
      favoriteToolsName.value.push(get(tool).name);
    },
    removeToolFromFavorites({ tool }) {
      favoriteToolsName.value = favoriteToolsName.value.filter((name) => get(tool).name !== name);
    },
    isToolFavorite({ tool }) {
      return favoriteToolsName.value.includes(get(tool).name);
    }
  };
});

function useFuzzySearch({
  search,
  data,
  options = {}
}) {
  const fuse = new Fuse(data, options);
  const filterEmpty = options.filterEmpty ?? true;
  const searchResult = computed(() => {
    const query = get(search);
    if (!filterEmpty && query === "") {
      return data;
    }
    return fuse.search(query).map(({ item }) => item);
  });
  return { searchResult };
}

const _hoisted_1$d = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$d = /*#__PURE__*/createElementVNode("path", {
  fill: "currentColor",
  d: "m3.55 19.09l1.41 1.41l1.8-1.79l-1.42-1.42M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6s6-2.69 6-6c0-3.32-2.69-6-6-6m8 7h3v-2h-3m-2.76 7.71l1.8 1.79l1.41-1.41l-1.79-1.8M20.45 5l-1.41-1.4l-1.8 1.79l1.42 1.42M13 1h-2v3h2M6.76 5.39L4.96 3.6L3.55 5l1.79 1.81l1.42-1.42M1 13h3v-2H1m12 9h-2v3h2"
}, null, -1);
const _hoisted_3$d = [
  _hoisted_2$d
];

function render$e(_ctx, _cache) {
  return (openBlock(), createElementBlock("svg", _hoisted_1$d, _hoisted_3$d))
}

const SunIcon = { name: 'mdi-white-balance-sunny', render: render$e };
/* vite-plugin-components disabled */

const _hoisted_1$c = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$c = /*#__PURE__*/createElementVNode("path", {
  fill: "currentColor",
  d: "M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z"
}, null, -1);
const _hoisted_3$c = [
  _hoisted_2$c
];

function render$d(_ctx, _cache) {
  return (openBlock(), createElementBlock("svg", _hoisted_1$c, _hoisted_3$c))
}

const GithubIcon = { name: 'mdi-github', render: render$d };
/* vite-plugin-components disabled */

const _hoisted_1$b = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$b = /*#__PURE__*/createElementVNode("path", {
  fill: "currentColor",
  d: "M20 8h-2.81c-.45-.8-1.07-1.5-1.82-2L17 4.41L15.59 3l-2.17 2.17a6.002 6.002 0 0 0-2.83 0L8.41 3L7 4.41L8.62 6c-.75.5-1.36 1.21-1.81 2H4v2h2.09c-.06.33-.09.66-.09 1v1H4v2h2v1c0 .34.03.67.09 1H4v2h2.81A5.988 5.988 0 0 0 15 20.18c.91-.52 1.67-1.28 2.19-2.18H20v-2h-2.09c.06-.33.09-.66.09-1v-1h2v-2h-2v-1c0-.34-.03-.67-.09-1H20V8m-4 7a4 4 0 0 1-4 4a4 4 0 0 1-4-4v-4a4 4 0 0 1 4-4a4 4 0 0 1 4 4v4m-2-5v2h-4v-2h4m-4 4h4v2h-4v-2Z"
}, null, -1);
const _hoisted_3$b = [
  _hoisted_2$b
];

function render$c(_ctx, _cache) {
  return (openBlock(), createElementBlock("svg", _hoisted_1$b, _hoisted_3$b))
}

const BugIcon = { name: 'mdi-bug-outline', render: render$c };
/* vite-plugin-components disabled */

const _hoisted_1$a = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$a = /*#__PURE__*/createElementVNode("path", {
  fill: "currentColor",
  d: "M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m2 2a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2m10 10a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2m0-10a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2m-5 5a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2m-5 5a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2Z"
}, null, -1);
const _hoisted_3$a = [
  _hoisted_2$a
];

function render$b(_ctx, _cache) {
  return (openBlock(), createElementBlock("svg", _hoisted_1$a, _hoisted_3$a))
}

const DiceIcon = { name: 'mdi-dice-5', render: render$b };
/* vite-plugin-components disabled */

const _hoisted_1$9 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$9 = /*#__PURE__*/createElementVNode("path", {
  fill: "currentColor",
  d: "M11 9h2V7h-2m1 13c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8m0-18A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2m-1 15h2v-6h-2v6Z"
}, null, -1);
const _hoisted_3$9 = [
  _hoisted_2$9
];

function render$a(_ctx, _cache) {
  return (openBlock(), createElementBlock("svg", _hoisted_1$9, _hoisted_3$9))
}

const InfoIcon = { name: 'mdi-information-outline', render: render$a };
/* vite-plugin-components disabled */

const useCommandPaletteStore = defineStore("command-palette", () => {
  const toolStore = useToolStore();
  const styleStore = useStyleStore();
  const router = useRouter();
  const searchPrompt = ref("");
  const toolsOptions = toolStore.tools.map((tool) => ({
    ...tool,
    to: tool.path,
    toolCategory: tool.category,
    category: "Tools"
  }));
  const searchOptions = [
    ...toolsOptions,
    {
      name: "Random tool",
      description: "Get a random tool from the list.",
      action: () => {
        const { path } = _.sample(toolStore.tools);
        router.push(path);
      },
      icon: DiceIcon,
      category: "Tools",
      keywords: ["random", "tool", "pick", "choose", "select"],
      closeOnSelect: true
    },
    {
      name: "Toggle dark mode",
      description: "Toggle dark mode on or off.",
      action: () => styleStore.toggleDark(),
      icon: SunIcon,
      category: "Actions",
      keywords: ["dark", "theme", "toggle", "mode", "light", "system"]
    },
    {
      name: "Github repository",
      href: "https://github.com/zeeklog/it-tools",
      category: "External",
      description: "View the source code of it-tools on Github.",
      keywords: ["github", "repo", "repository", "source", "code"],
      icon: GithubIcon
    },
    {
      name: "Report a bug or an issue",
      description: "Report a bug or an issue to help improve it-tools.",
      href: "https://github.com/zeeklog/it-tools/issues/new/choose",
      category: "Actions",
      keywords: ["report", "issue", "bug", "problem", "error"],
      icon: BugIcon
    },
    {
      name: "About",
      description: "Learn more about IT-Tools.",
      to: "/about",
      category: "Pages",
      keywords: ["about", "learn", "more", "info", "information"],
      icon: InfoIcon
    }
  ];
  const { searchResult } = useFuzzySearch({
    search: searchPrompt,
    data: searchOptions,
    options: {
      keys: [{ name: "name", weight: 2 }, "description", "keywords", "category"],
      threshold: 0.3
    }
  });
  const filteredSearchResult = computed(() => _.chain(searchResult.value).groupBy("category").mapValues((categoryOptions) => _.take(categoryOptions, 5)).value());
  return {
    filteredSearchResult,
    searchPrompt
  };
});

const _sfc_main$C = /* @__PURE__ */ defineComponent({
  __name: "command-palette",
  __ssrInlineRender: true,
  setup(__props) {
    const isModalOpen = ref(false);
    const inputRef = ref();
    const router = useRouter();
    const isMac = computed(() => true);
    const commandPaletteStore = useCommandPaletteStore();
    const { searchPrompt, filteredSearchResult } = storeToRefs(commandPaletteStore);
    const keys = useMagicKeys({
      passive: false,
      onEventFired(e) {
        if (e.ctrlKey && e.key === "k" && e.type === "keydown") {
          e.preventDefault();
        }
        if (e.metaKey && e.key === "k" && e.type === "keydown") {
          e.preventDefault();
        }
      }
    });
    whenever(isModalOpen, () => inputRef.value?.focus());
    whenever(keys.ctrl_k, open);
    whenever(keys.meta_k, open);
    whenever(keys.escape, close);
    function open() {
      return isModalOpen.value = true;
    }
    function close() {
      isModalOpen.value = false;
      searchPrompt.value = "";
    }
    const selectedOptionIndex = ref(0);
    function handleKeydown(event) {
      const { key } = event;
      const isEnterPressed = key === "Enter";
      const isArrowUpOrDown = ["ArrowUp", "ArrowDown"].includes(key);
      const isArrowDown = key === "ArrowDown";
      if (isArrowUpOrDown) {
        const increment = isArrowDown ? 1 : -1;
        const maxIndex = Math.max(_.chain(filteredSearchResult.value).values().flatten().size().value() - 1, 0);
        selectedOptionIndex.value = Math.min(Math.max(selectedOptionIndex.value + increment, 0), maxIndex);
        return;
      }
      if (isEnterPressed) {
        const option = _.chain(filteredSearchResult.value).values().flatten().nth(selectedOptionIndex.value).value();
        activateOption(option);
      }
    }
    function getOptionIndex(option) {
      return _.chain(filteredSearchResult.value).values().flatten().findIndex((o) => o === option).value();
    }
    function activateOption(option) {
      const { closeOnSelect } = option;
      if (option.action) {
        option.action();
        if (closeOnSelect) {
          close();
        }
        return;
      }
      const closeAfterNavigation = closeOnSelect || _.isUndefined(closeOnSelect);
      if (option.to) {
        router.push(option.to);
        if (closeAfterNavigation) {
          close();
        }
        return;
      }
      if (option.href) {
        window.open(option.href, "_blank");
        if (closeAfterNavigation) {
          close();
        }
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_c_button = __unplugin_components_0$5;
      const _component_icon_mdi_search = __unplugin_components_1$2;
      const _component_c_modal = __unplugin_components_1$3;
      const _component_c_input_text = __unplugin_components_3$1;
      const _component_command_palette_option = _sfc_main$F;
      _push(`<div${ssrRenderAttrs(mergeProps({ "flex-1": "" }, _attrs))} data-v-b415a78e>`);
      _push(ssrRenderComponent(_component_c_button, {
        "w-full": "",
        "important:justify-start": "",
        onClick: ($event) => isModalOpen.value = true
      }, {
        default: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span flex items-center gap-3 op-40 data-v-b415a78e${_scopeId}>`);
            _push2(ssrRenderComponent(_component_icon_mdi_search, null, null, _parent2, _scopeId));
            _push2(` ${ssrInterpolate(_ctx.$t("search.label"))} <span hidden flex-1 border border-current border-op-40 rounded border-solid px-5px py-3px sm:inline data-v-b415a78e${_scopeId}>${ssrInterpolate(unref(isMac) ? "Cmd" : "Ctrl")} + K </span></span>`);
          } else {
            return [
              createVNode("span", {
                flex: "",
                "items-center": "",
                "gap-3": "",
                "op-40": ""
              }, [
                createVNode(_component_icon_mdi_search),
                createTextVNode(" " + toDisplayString(_ctx.$t("search.label")) + " ", 1),
                createVNode("span", {
                  hidden: "",
                  "flex-1": "",
                  border: "",
                  "border-current": "",
                  "border-op-40": "",
                  rounded: "",
                  "border-solid": "",
                  "px-5px": "",
                  "py-3px": "",
                  "sm:inline": ""
                }, toDisplayString(unref(isMac) ? "Cmd" : "Ctrl") + " + K ", 1)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_c_modal, {
        open: unref(isModalOpen),
        "onUpdate:open": ($event) => isRef(isModalOpen) ? isModalOpen.value = $event : null,
        class: "palette-modal",
        "shadow-xl": "",
        "important:max-w-650px": "",
        "important:pa-12px": "",
        onKeydown: handleKeydown
      }, {
        default: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_c_input_text, {
              ref_key: "inputRef",
              ref: inputRef,
              value: unref(searchPrompt),
              "onUpdate:value": ($event) => isRef(searchPrompt) ? searchPrompt.value = $event : null,
              "raw-text": "",
              placeholder: "Type to search a tool or a command...",
              autofocus: "",
              clearable: ""
            }, null, _parent2, _scopeId));
            _push2(`<!--[-->`);
            ssrRenderList(unref(filteredSearchResult), (options, category) => {
              _push2(`<div data-v-b415a78e${_scopeId}><div ml-3 mt-3 text-sm font-bold text-primary op-60 data-v-b415a78e${_scopeId}>${ssrInterpolate(category)}</div><!--[-->`);
              ssrRenderList(options, (option) => {
                _push2(ssrRenderComponent(_component_command_palette_option, {
                  key: option.name,
                  option,
                  selected: unref(selectedOptionIndex) === getOptionIndex(option),
                  onActivated: activateOption
                }, null, _parent2, _scopeId));
              });
              _push2(`<!--]--></div>`);
            });
            _push2(`<!--]-->`);
          } else {
            return [
              createVNode(_component_c_input_text, {
                ref_key: "inputRef",
                ref: inputRef,
                value: unref(searchPrompt),
                "onUpdate:value": ($event) => isRef(searchPrompt) ? searchPrompt.value = $event : null,
                "raw-text": "",
                placeholder: "Type to search a tool or a command...",
                autofocus: "",
                clearable: ""
              }, null, 8, ["value", "onUpdate:value"]),
              (openBlock(true), createBlock(Fragment, null, renderList(unref(filteredSearchResult), (options, category) => {
                return openBlock(), createBlock("div", { key: category }, [
                  createVNode("div", {
                    "ml-3": "",
                    "mt-3": "",
                    "text-sm": "",
                    "font-bold": "",
                    "text-primary": "",
                    "op-60": ""
                  }, toDisplayString(category), 1),
                  (openBlock(true), createBlock(Fragment, null, renderList(options, (option) => {
                    return openBlock(), createBlock(_component_command_palette_option, {
                      key: option.name,
                      option,
                      selected: unref(selectedOptionIndex) === getOptionIndex(option),
                      onActivated: activateOption
                    }, null, 8, ["option", "selected"]);
                  }), 128))
                ]);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});

/* unplugin-vue-components disabled */const commandPalette_vue_vue_type_style_index_0_scoped_b415a78e_lang = '';

const _sfc_setup$C = _sfc_main$C.setup;
_sfc_main$C.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/modules/command-palette/command-palette.vue");
  return _sfc_setup$C ? _sfc_setup$C(props, ctx) : void 0;
};
const CommandPalette = /* @__PURE__ */ _export_sfc(_sfc_main$C, [["__scopeId", "data-v-b415a78e"]]);

const _hoisted_1$8 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$8 = /*#__PURE__*/createElementVNode("path", {
  fill: "currentColor",
  d: "M7.41 8.58L12 13.17l4.59-4.59L18 10l-6 6l-6-6l1.41-1.42Z"
}, null, -1);
const _hoisted_3$8 = [
  _hoisted_2$8
];

function render$9(_ctx, _cache) {
  return (openBlock(), createElementBlock("svg", _hoisted_1$8, _hoisted_3$8))
}

const __unplugin_components_0$4 = { name: 'mdi-chevron-down', render: render$9 };
/* vite-plugin-components disabled */

const sizes = {
  small: {
    height: "28px",
    fontSize: "12px"
  },
  medium: {
    height: "34px",
    fontSize: "14px"
  },
  large: {
    height: "40px",
    fontSize: "16px"
  }
};
const { useTheme: useTheme$2 } = defineThemes({
  dark: {
    sizes,
    backgroundColor: "#333333",
    borderColor: "#333333",
    dropdownShadow: "rgba(0, 0, 0, 0.2) 0px 8px 24px",
    option: {
      hover: {
        backgroundColor: "#444444"
      },
      active: {
        textColor: appThemes.dark.primary.color
      }
    },
    focus: {
      backgroundColor: "#1ea54c1a"
    }
  },
  light: {
    sizes,
    backgroundColor: "#ffffff",
    borderColor: "#e0e0e69e",
    dropdownShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
    option: {
      hover: {
        backgroundColor: "#eee"
      },
      active: {
        textColor: appThemes.light.primary.color
      }
    },
    focus: {
      backgroundColor: "#ffffff"
    }
  }
});

const _sfc_main$B = /* @__PURE__ */ defineComponent({
  __name: "c-label",
  __ssrInlineRender: true,
  props: {
    label: { default: void 0 },
    labelFor: { default: void 0 },
    labelPosition: { default: "top" },
    labelWidth: { default: "auto" },
    labelAlign: { default: "left" }
  },
  setup(__props) {
    const props = __props;
    const { label, labelAlign, labelFor, labelPosition, labelWidth } = toRefs(props);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: {
          "flex-col": unref(labelPosition) === "top",
          "flex-row": unref(labelPosition) === "left"
        },
        flex: "",
        "items-baseline": ""
      }, _attrs))}>`);
      if (unref(label)) {
        _push(`<label${ssrRenderAttr("for", unref(labelFor))} style="${ssrRenderStyle({ flex: `0 0 ${unref(labelWidth)}` })}" mb-5px pr-12px class="${ssrRenderClass({
          "text-left": unref(labelAlign) === "left",
          "text-center": unref(labelAlign) === "center",
          "text-right": unref(labelAlign) === "right"
        })}">${ssrInterpolate(unref(label))}</label>`);
      } else {
        _push(`<!---->`);
      }
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});

const _sfc_setup$B = _sfc_main$B.setup;
_sfc_main$B.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/ui/c-label/c-label.vue");
  return _sfc_setup$B ? _sfc_setup$B(props, ctx) : void 0;
};

function clamp({ value, min = 0, max = 100 }) {
  return Math.min(Math.max(value, min), max);
}

const _sfc_main$A = /* @__PURE__ */ defineComponent({
  __name: "c-select",
  __ssrInlineRender: true,
  props: {
    options: { default: () => [] },
    value: { default: void 0 },
    placeholder: { default: void 0 },
    size: { default: "medium" },
    searchable: { type: Boolean, default: false },
    label: {},
    labelFor: {},
    labelPosition: {},
    labelWidth: {},
    labelAlign: {}
  },
  emits: ["update:value"],
  setup(__props, { emit: emits }) {
    const props = __props;
    const { options: rawOptions, placeholder, size: sizeName, searchable } = toRefs(props);
    const options = computed(() => {
      return rawOptions.value.map((option) => {
        if (typeof option === "string") {
          return { label: option, value: option };
        }
        return option;
      });
    });
    const keys = useMagicKeys();
    const value = useVModel(props, "value", emits);
    const theme = useTheme$2();
    const appTheme = useAppTheme();
    const isOpen = ref(false);
    const selectedOption = shallowRef(options.value.find((option) => option.value === value.value));
    const focusIndex = ref(0);
    const elementRef = ref(null);
    const size = computed(() => theme.value.sizes[sizeName.value]);
    const searchQuery = ref("");
    const searchInputRef = ref();
    whenever(() => !isOpen.value, () => {
      focusIndex.value = 0;
      searchQuery.value = "";
    });
    whenever(() => isOpen.value, () => {
      nextTick(() => searchInputRef.value?.focus());
    });
    onClickOutside(elementRef, close);
    whenever(keys.escape, close);
    watch(
      value,
      (newValue) => {
        const option = options.value.find((option2) => option2.value === newValue);
        if (option) {
          selectedOption.value = option;
        }
      }
    );
    const { searchResult: filteredOptions } = useFuzzySearch({
      search: searchQuery,
      data: options.value,
      options: {
        keys: ["label"],
        shouldSort: false,
        threshold: 0.3,
        filterEmpty: false
      }
    });
    function close() {
      isOpen.value = false;
    }
    function toggleOpen() {
      isOpen.value = !isOpen.value;
    }
    function selectOption({ option }) {
      selectedOption.value = option;
      value.value = option.value;
      isOpen.value = false;
    }
    function handleKeydown(event) {
      const { key } = event;
      const isEnter = ["Enter"].includes(key);
      const isArrowUpOrDown = ["ArrowUp", "ArrowDown"].includes(key);
      const isArrowDown = key === "ArrowDown";
      if (isEnter) {
        const valueCanBeSelected = isOpen.value && focusIndex.value !== -1;
        if (valueCanBeSelected) {
          selectOption({ option: filteredOptions.value[focusIndex.value] });
        } else {
          toggleOpen();
        }
        event.preventDefault();
        return;
      }
      if (isArrowUpOrDown) {
        const increment = isArrowDown ? 1 : -1;
        focusIndex.value = clamp({
          value: focusIndex.value + increment,
          min: 0,
          max: options.value.length - 1
        });
        event.preventDefault();
      }
    }
    function onSearchInput() {
      focusIndex.value = 0;
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_icon_mdi_chevron_down = __unplugin_components_0$4;
      const _cssVars = { style: {
        "--b681f728": unref(appTheme).text.mutedColor,
        "--24b10592": unref(theme).backgroundColor,
        "--7208e40e": unref(theme).borderColor,
        "--0e8b7fc4": unref(size).fontSize,
        "--3a8b14fb": unref(size).height,
        "--4f44bdef": unref(theme).dropdownShadow,
        "--094b2a09": unref(theme).option.active.textColor,
        "--9f7bab70": unref(theme).option.hover.backgroundColor
      } };
      _push(ssrRenderComponent(_sfc_main$B, mergeProps(props, _attrs, _cssVars), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div relative class="c-select" w-full data-v-350c641a${_scopeId}><div flex flex-nowrap cursor-pointer items-center class="${ssrRenderClass([{ "is-open": unref(isOpen), "important:border-primary": unref(isOpen) }, "c-select-input"])}" tabindex="0" hover:important:border-primary data-v-350c641a${_scopeId}><div flex-1 truncate data-v-350c641a${_scopeId}>`);
            ssrRenderSlot(_ctx.$slots, "displayed-value", {}, () => {
              if (unref(searchable) && unref(isOpen)) {
                _push2(`<input${ssrRenderAttr("value", unref(searchQuery))} type="text" placeholder="Search..." class="search-input" w-full lh-normal color-current data-v-350c641a${_scopeId}>`);
              } else if (unref(selectedOption)) {
                _push2(`<span lh-normal data-v-350c641a${_scopeId}>${ssrInterpolate(unref(selectedOption).label)}</span>`);
              } else {
                _push2(`<span class="placeholder" lh-normal data-v-350c641a${_scopeId}>${ssrInterpolate(unref(placeholder) ?? "Select an option")}</span>`);
              }
            }, _push2, _parent2, _scopeId);
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_icon_mdi_chevron_down, { class: "chevron" }, null, _parent2, _scopeId));
            _push2(`</div><div style="${ssrRenderStyle(unref(isOpen) ? null : { display: "none" })}" class="c-select-dropdown" absolute z-10 mt-1 max-h-312px w-full overflow-y-auto pretty-scrollbar data-v-350c641a${_scopeId}>`);
            if (!unref(filteredOptions).length) {
              ssrRenderSlot(_ctx.$slots, "empty", {}, () => {
                _push2(`<div px-4 py-1 opacity-70 data-v-350c641a${_scopeId}> No results found </div>`);
              }, _push2, _parent2, _scopeId);
            } else {
              _push2(`<!--[-->`);
              ssrRenderList(unref(filteredOptions), (option, index) => {
                _push2(`<div cursor-pointer px-4 py-1 class="${ssrRenderClass([{ active: unref(selectedOption)?.label === option.label, hover: unref(focusIndex) === index }, "c-select-dropdown-option"])}" data-v-350c641a${_scopeId}>${ssrInterpolate(option.label)}</div>`);
              });
              _push2(`<!--]-->`);
            }
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", {
                ref_key: "elementRef",
                ref: elementRef,
                relative: "",
                class: "c-select",
                "w-full": ""
              }, [
                createVNode("div", {
                  flex: "",
                  "flex-nowrap": "",
                  "cursor-pointer": "",
                  "items-center": "",
                  class: [{ "is-open": unref(isOpen), "important:border-primary": unref(isOpen) }, "c-select-input"],
                  tabindex: "0",
                  "hover:important:border-primary": "",
                  onClick: toggleOpen,
                  onKeydown: handleKeydown
                }, [
                  createVNode("div", {
                    "flex-1": "",
                    truncate: ""
                  }, [
                    renderSlot(_ctx.$slots, "displayed-value", {}, () => [
                      unref(searchable) && unref(isOpen) ? withDirectives((openBlock(), createBlock("input", {
                        key: 0,
                        ref_key: "searchInputRef",
                        ref: searchInputRef,
                        "onUpdate:modelValue": ($event) => isRef(searchQuery) ? searchQuery.value = $event : null,
                        type: "text",
                        placeholder: "Search...",
                        class: "search-input",
                        "w-full": "",
                        "lh-normal": "",
                        "color-current": "",
                        onInput: onSearchInput
                      }, null, 40, ["onUpdate:modelValue"])), [
                        [vModelText, unref(searchQuery)]
                      ]) : unref(selectedOption) ? (openBlock(), createBlock("span", {
                        key: 1,
                        "lh-normal": ""
                      }, toDisplayString(unref(selectedOption).label), 1)) : (openBlock(), createBlock("span", {
                        key: 2,
                        class: "placeholder",
                        "lh-normal": ""
                      }, toDisplayString(unref(placeholder) ?? "Select an option"), 1))
                    ], true)
                  ]),
                  createVNode(_component_icon_mdi_chevron_down, { class: "chevron" })
                ], 34),
                createVNode(Transition, { name: "dropdown" }, {
                  default: withCtx(() => [
                    withDirectives(createVNode("div", {
                      class: "c-select-dropdown",
                      absolute: "",
                      "z-10": "",
                      "mt-1": "",
                      "max-h-312px": "",
                      "w-full": "",
                      "overflow-y-auto": "",
                      "pretty-scrollbar": ""
                    }, [
                      !unref(filteredOptions).length ? renderSlot(_ctx.$slots, "empty", { key: 0 }, () => [
                        createVNode("div", {
                          "px-4": "",
                          "py-1": "",
                          "opacity-70": ""
                        }, " No results found ")
                      ], true) : (openBlock(true), createBlock(Fragment, { key: 1 }, renderList(unref(filteredOptions), (option, index) => {
                        return openBlock(), createBlock("div", {
                          key: option.label,
                          "cursor-pointer": "",
                          "px-4": "",
                          "py-1": "",
                          class: [{ active: unref(selectedOption)?.label === option.label, hover: unref(focusIndex) === index }, "c-select-dropdown-option"],
                          onClick: ($event) => selectOption({ option })
                        }, toDisplayString(option.label), 11, ["onClick"]);
                      }), 128))
                    ], 512), [
                      [vShow, unref(isOpen)]
                    ])
                  ]),
                  _: 3
                })
              ], 512)
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});

/* unplugin-vue-components disabled */const cSelect_vue_vue_type_style_index_0_scoped_350c641a_lang = '';

const _sfc_setup$A = _sfc_main$A.setup;
_sfc_main$A.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/ui/c-select/c-select.vue");
  return _sfc_setup$A ? _sfc_setup$A(props, ctx) : void 0;
};
const __unplugin_components_0$3 = /* @__PURE__ */ _export_sfc(_sfc_main$A, [["__scopeId", "data-v-350c641a"]]);

const _sfc_main$z = /* @__PURE__ */ defineComponent({
  __name: "locale-selector",
  __ssrInlineRender: true,
  setup(__props) {
    const { availableLocales, locale } = useI18n();
    const localesLong = {
      en: "English",
      es: "Español",
      fr: "Français",
      pt: "Português",
      ru: "Русский",
      uk: "Українська",
      zh: "中文",
      vi: "Tiếng Việt"
    };
    const localeOptions = computed(
      () => availableLocales.map((locale2) => ({
        label: localesLong[locale2] ?? locale2,
        value: locale2
      }))
    );
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(__unplugin_components_0$3, mergeProps({
        value: unref(locale),
        "onUpdate:value": ($event) => isRef(locale) ? locale.value = $event : null,
        options: unref(localeOptions),
        placeholder: "Select a language",
        "w-100px": ""
      }, _attrs), null, _parent));
    };
  }
});

const _sfc_setup$z = _sfc_main$z.setup;
_sfc_main$z.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/modules/i18n/components/locale-selector.vue");
  return _sfc_setup$z ? _sfc_setup$z(props, ctx) : void 0;
};

const _hoisted_1$7 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$7 = /*#__PURE__*/createElementVNode("path", {
  fill: "currentColor",
  d: "M8.59 16.58L13.17 12L8.59 7.41L10 6l6 6l-6 6l-1.41-1.42Z"
}, null, -1);
const _hoisted_3$7 = [
  _hoisted_2$7
];

function render$8(_ctx, _cache) {
  return (openBlock(), createElementBlock("svg", _hoisted_1$7, _hoisted_3$7))
}

const __unplugin_components_0$2 = { name: 'mdi-chevron-right', render: render$8 };
/* vite-plugin-components disabled */

const _sfc_main$y = /* @__PURE__ */ defineComponent({
  __name: "MenuIconItem",
  __ssrInlineRender: true,
  props: {
    tool: {}
  },
  setup(__props) {
    const props = __props;
    const { tool } = toRefs(props);
    const theme = useThemeVars();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_n_icon = NIcon;
      const _cssVars = { style: {
        "--c9671612": unref(theme).primaryColor
      } };
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "menu-icon-item" }, _attrs, _cssVars))} data-v-962461ab>`);
      _push(ssrRenderComponent(_component_n_icon, {
        component: unref(tool).icon
      }, null, _parent));
      if (unref(tool).isNew) {
        _push(`<div class="badge" data-v-962461ab></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});

/* unplugin-vue-components disabled */const MenuIconItem_vue_vue_type_style_index_0_scoped_962461ab_lang = '';

const _sfc_setup$y = _sfc_main$y.setup;
_sfc_main$y.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/MenuIconItem.vue");
  return _sfc_setup$y ? _sfc_setup$y(props, ctx) : void 0;
};
const MenuIconItem = /* @__PURE__ */ _export_sfc(_sfc_main$y, [["__scopeId", "data-v-962461ab"]]);

const _sfc_main$x = /* @__PURE__ */ defineComponent({
  __name: "CollapsibleToolMenu",
  __ssrInlineRender: true,
  props: {
    toolsByCategory: { default: () => [] }
  },
  setup(__props) {
    const props = __props;
    const { toolsByCategory } = toRefs(props);
    const route = useRoute();
    const makeLabel = (tool) => () => h(RouterLink, { to: tool.path }, { default: () => tool.name });
    const makeIcon = (tool) => () => h(MenuIconItem, { tool });
    const collapsedCategories = useStorage(
      "menu-tool-option:collapsed-categories",
      {},
      void 0,
      {
        deep: true,
        serializer: {
          read: (v) => v ? JSON.parse(v) : null,
          write: (v) => JSON.stringify(v)
        }
      }
    );
    function toggleCategoryCollapse({ name }) {
      collapsedCategories.value[name] = !collapsedCategories.value[name];
    }
    const menuOptions = computed(
      () => toolsByCategory.value.map(({ name, components }) => ({
        name,
        isCollapsed: collapsedCategories.value[name],
        tools: components.map((tool) => ({
          label: makeLabel(tool),
          icon: makeIcon(tool),
          key: tool.path
        }))
      }))
    );
    const themeVars = useThemeVars();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_icon_mdi_chevron_right = __unplugin_components_0$2;
      const _component_n_collapse_transition = NCollapseTransition;
      const _component_n_menu = NMenu;
      ({ style: {
        "--2adda884": unref(themeVars).textColor3
      } });
      _push(`<!--[-->`);
      ssrRenderList(unref(menuOptions), ({ name, tools, isCollapsed }) => {
        _push(`<div data-v-50838923><div ml-6px mt-12px flex cursor-pointer items-center op-60 data-v-50838923><span class="${ssrRenderClass({ "rotate-0": isCollapsed, "rotate-90": !isCollapsed })}" text-16px lh-1 op-50 transition-transform data-v-50838923>`);
        _push(ssrRenderComponent(_component_icon_mdi_chevron_right, null, null, _parent));
        _push(`</span><span ml-8px text-13px data-v-50838923>${ssrInterpolate(name)}</span></div>`);
        _push(ssrRenderComponent(_component_n_collapse_transition, {
          show: !isCollapsed
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="menu-wrapper" data-v-50838923${_scopeId}><div class="toggle-bar" data-v-50838923${_scopeId}></div>`);
              _push2(ssrRenderComponent(_component_n_menu, {
                class: "menu",
                value: unref(route).path,
                "collapsed-width": 64,
                "collapsed-icon-size": 22,
                options: tools,
                indent: 8,
                "default-expand-all": true
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              return [
                createVNode("div", { class: "menu-wrapper" }, [
                  createVNode("div", {
                    class: "toggle-bar",
                    onClick: ($event) => toggleCategoryCollapse({ name })
                  }, null, 8, ["onClick"]),
                  createVNode(_component_n_menu, {
                    class: "menu",
                    value: unref(route).path,
                    "collapsed-width": 64,
                    "collapsed-icon-size": 22,
                    options: tools,
                    indent: 8,
                    "default-expand-all": true
                  }, null, 8, ["value", "options"])
                ])
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div>`);
      });
      _push(`<!--]-->`);
    };
  }
});

/* unplugin-vue-components disabled */const CollapsibleToolMenu_vue_vue_type_style_index_0_scoped_50838923_lang = '';

const _sfc_setup$x = _sfc_main$x.setup;
_sfc_main$x.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/CollapsibleToolMenu.vue");
  return _sfc_setup$x ? _sfc_setup$x(props, ctx) : void 0;
};
const CollapsibleToolMenu = /* @__PURE__ */ _export_sfc(_sfc_main$x, [["__scopeId", "data-v-50838923"]]);

const _sfc_main$w = /* @__PURE__ */ defineComponent({
  __name: "base.layout",
  __ssrInlineRender: true,
  setup(__props) {
    const themeVars = useThemeVars();
    const styleStore = useStyleStore();
    const version = config.app.version;
    const commitSha = config.app.lastCommitSha.slice(0, 7);
    const { t } = useI18n();
    const toolStore = useToolStore();
    const { favoriteTools, toolsByCategory } = storeToRefs(toolStore);
    const tools = computed(() => [
      ...favoriteTools.value.length > 0 ? [{ name: t("tools.categories.favorite-tools"), components: favoriteTools.value }] : [],
      ...toolsByCategory.value
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_icon_mdi58brush_variant = __unplugin_components_0$6;
      const _cssVars = { style: {
        "--525f0447": unref(themeVars).primaryColor
      } };
      _push(ssrRenderComponent(MenuLayout, mergeProps({
        class: ["menu-layout", { isSmallScreen: unref(styleStore).isSmallScreen }]
      }, _attrs, _cssVars), {
        sider: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(RouterLink), {
              to: "/",
              class: "hero-wrapper"
            }, null, _parent2, _scopeId));
            _push2(`<div class="sider-content" data-v-311f4fa3${_scopeId}>`);
            if (unref(styleStore).isSmallScreen) {
              _push2(`<div flex flex-col items-center data-v-311f4fa3${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$z, { w: "90%" }, null, _parent2, _scopeId));
              _push2(`<div flex justify-center data-v-311f4fa3${_scopeId}>`);
              _push2(ssrRenderComponent(NavbarButtons, null, null, _parent2, _scopeId));
              _push2(`</div></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(CollapsibleToolMenu, { "tools-by-category": unref(tools) }, null, _parent2, _scopeId));
            _push2(`<div class="footer" data-v-311f4fa3${_scopeId}><div data-v-311f4fa3${_scopeId}> IT-Tools `);
            _push2(ssrRenderComponent(CLink, {
              target: "_blank",
              rel: "noopener",
              href: `https://github.com/zeeklog/it-tools/tree/v${unref(version)}`
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` v${ssrInterpolate(unref(version))}`);
                } else {
                  return [
                    createTextVNode(" v" + toDisplayString(unref(version)), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            if (unref(commitSha) && unref(commitSha).length > 0) {
              _push2(`<!--[--> - `);
              _push2(ssrRenderComponent(CLink, {
                target: "_blank",
                rel: "noopener",
                type: "primary",
                href: `https://github.com/zeeklog/it-tools/tree/${unref(commitSha)}`
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(unref(commitSha))}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(unref(commitSha)), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`<!--]-->`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div data-v-311f4fa3${_scopeId}> © ${ssrInterpolate(( new Date()).getFullYear())} `);
            _push2(ssrRenderComponent(CLink, {
              target: "_blank",
              rel: "noopener",
              href: "https://github.com/zeeklog"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Ne0inHK `);
                } else {
                  return [
                    createTextVNode(" Ne0inHK ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div></div>`);
          } else {
            return [
              createVNode(unref(RouterLink), {
                to: "/",
                class: "hero-wrapper"
              }),
              createVNode("div", { class: "sider-content" }, [
                unref(styleStore).isSmallScreen ? (openBlock(), createBlock("div", {
                  key: 0,
                  flex: "",
                  "flex-col": "",
                  "items-center": ""
                }, [
                  createVNode(_sfc_main$z, { w: "90%" }),
                  createVNode("div", {
                    flex: "",
                    "justify-center": ""
                  }, [
                    createVNode(NavbarButtons)
                  ])
                ])) : createCommentVNode("", true),
                createVNode(CollapsibleToolMenu, { "tools-by-category": unref(tools) }, null, 8, ["tools-by-category"]),
                createVNode("div", { class: "footer" }, [
                  createVNode("div", null, [
                    createTextVNode(" IT-Tools "),
                    createVNode(CLink, {
                      target: "_blank",
                      rel: "noopener",
                      href: `https://github.com/zeeklog/it-tools/tree/v${unref(version)}`
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" v" + toDisplayString(unref(version)), 1)
                      ]),
                      _: 1
                    }, 8, ["href"]),
                    unref(commitSha) && unref(commitSha).length > 0 ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                      createTextVNode(" - "),
                      createVNode(CLink, {
                        target: "_blank",
                        rel: "noopener",
                        type: "primary",
                        href: `https://github.com/zeeklog/it-tools/tree/${unref(commitSha)}`
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(unref(commitSha)), 1)
                        ]),
                        _: 1
                      }, 8, ["href"])
                    ], 64)) : createCommentVNode("", true)
                  ]),
                  createVNode("div", null, [
                    createTextVNode(" © " + toDisplayString((/* @__PURE__ */ new Date()).getFullYear()) + " ", 1),
                    createVNode(CLink, {
                      target: "_blank",
                      rel: "noopener",
                      href: "https://github.com/zeeklog"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Ne0inHK ")
                      ]),
                      _: 1
                    })
                  ])
                ])
              ])
            ];
          }
        }),
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div flex items-center justify-center gap-2 data-v-311f4fa3${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$I, {
              tooltip: _ctx.$t("home.home"),
              position: "bottom"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(__unplugin_components_0$5, {
                    to: "/",
                    circle: "",
                    variant: "text",
                    "aria-label": _ctx.$t("home.home")
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(NIcon), {
                          size: "25",
                          component: unref(Home2)
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(NIcon), {
                            size: "25",
                            component: unref(Home2)
                          }, null, 8, ["component"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(__unplugin_components_0$5, {
                      to: "/",
                      circle: "",
                      variant: "text",
                      "aria-label": _ctx.$t("home.home")
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(NIcon), {
                          size: "25",
                          component: unref(Home2)
                        }, null, 8, ["component"])
                      ]),
                      _: 1
                    }, 8, ["aria-label"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$I, {
              tooltip: _ctx.$t("home.uiLib"),
              position: "bottom"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (unref(config).app.env === "development") {
                    _push3(ssrRenderComponent(__unplugin_components_0$5, {
                      to: "/c-lib",
                      circle: "",
                      variant: "text",
                      "aria-label": _ctx.$t("home.uiLib")
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_icon_mdi58brush_variant, { "text-20px": "" }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_icon_mdi58brush_variant, { "text-20px": "" })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                } else {
                  return [
                    unref(config).app.env === "development" ? (openBlock(), createBlock(__unplugin_components_0$5, {
                      key: 0,
                      to: "/c-lib",
                      circle: "",
                      variant: "text",
                      "aria-label": _ctx.$t("home.uiLib")
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_icon_mdi58brush_variant, { "text-20px": "" })
                      ]),
                      _: 1
                    }, 8, ["aria-label"])) : createCommentVNode("", true)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(CommandPalette, null, null, _parent2, _scopeId));
            if (!unref(styleStore).isSmallScreen) {
              _push2(ssrRenderComponent(_sfc_main$z, null, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div data-v-311f4fa3${_scopeId}>`);
            if (!unref(styleStore).isSmallScreen) {
              _push2(ssrRenderComponent(NavbarButtons, null, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div>`);
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              createVNode("div", {
                flex: "",
                "items-center": "",
                "justify-center": "",
                "gap-2": ""
              }, [
                createVNode(_sfc_main$I, {
                  tooltip: _ctx.$t("home.home"),
                  position: "bottom"
                }, {
                  default: withCtx(() => [
                    createVNode(__unplugin_components_0$5, {
                      to: "/",
                      circle: "",
                      variant: "text",
                      "aria-label": _ctx.$t("home.home")
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(NIcon), {
                          size: "25",
                          component: unref(Home2)
                        }, null, 8, ["component"])
                      ]),
                      _: 1
                    }, 8, ["aria-label"])
                  ]),
                  _: 1
                }, 8, ["tooltip"]),
                createVNode(_sfc_main$I, {
                  tooltip: _ctx.$t("home.uiLib"),
                  position: "bottom"
                }, {
                  default: withCtx(() => [
                    unref(config).app.env === "development" ? (openBlock(), createBlock(__unplugin_components_0$5, {
                      key: 0,
                      to: "/c-lib",
                      circle: "",
                      variant: "text",
                      "aria-label": _ctx.$t("home.uiLib")
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_icon_mdi58brush_variant, { "text-20px": "" })
                      ]),
                      _: 1
                    }, 8, ["aria-label"])) : createCommentVNode("", true)
                  ]),
                  _: 1
                }, 8, ["tooltip"]),
                createVNode(CommandPalette),
                !unref(styleStore).isSmallScreen ? (openBlock(), createBlock(_sfc_main$z, { key: 0 })) : createCommentVNode("", true),
                createVNode("div", null, [
                  !unref(styleStore).isSmallScreen ? (openBlock(), createBlock(NavbarButtons, { key: 0 })) : createCommentVNode("", true)
                ])
              ]),
              renderSlot(_ctx.$slots, "default", {}, void 0, true)
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});

/* unplugin-vue-components disabled */const base_layout_vue_vue_type_style_index_0_scoped_311f4fa3_lang = '';

const _sfc_setup$w = _sfc_main$w.setup;
_sfc_main$w.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/layouts/base.layout.vue");
  return _sfc_setup$w ? _sfc_setup$w(props, ctx) : void 0;
};
const BaseLayout = /* @__PURE__ */ _export_sfc(_sfc_main$w, [["__scopeId", "data-v-311f4fa3"]]);

const _hoisted_1$6 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$6 = /*#__PURE__*/createElementVNode("path", {
  fill: "currentColor",
  d: "m12 21.35l-1.45-1.32C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5c0 3.77-3.4 6.86-8.55 11.53L12 21.35Z"
}, null, -1);
const _hoisted_3$6 = [
  _hoisted_2$6
];

function render$7(_ctx, _cache) {
  return (openBlock(), createElementBlock("svg", _hoisted_1$6, _hoisted_3$6))
}

const __unplugin_components_2 = { name: 'mdi-heart', render: render$7 };
/* vite-plugin-components disabled */

const _sfc_main$v = /* @__PURE__ */ defineComponent({
  __name: "FavoriteButton",
  __ssrInlineRender: true,
  props: {
    tool: {}
  },
  setup(__props) {
    const props = __props;
    const toolStore = useToolStore();
    const { tool } = toRefs(props);
    const isFavorite = computed(() => toolStore.isToolFavorite({ tool }));
    const buttonType = computed(() => isFavorite.value ? "primary" : "default");
    function toggleFavorite(event) {
      event.preventDefault();
      if (toolStore.isToolFavorite({ tool })) {
        toolStore.removeToolFromFavorites({ tool });
        return;
      }
      toolStore.addToolToFavorites({ tool });
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_c_tooltip = _sfc_main$I;
      const _component_c_button = __unplugin_components_0$5;
      const _component_icon_mdi_heart = __unplugin_components_2;
      _push(ssrRenderComponent(_component_c_tooltip, mergeProps({
        tooltip: unref(isFavorite) ? _ctx.$t("favoriteButton.remove") : _ctx.$t("favoriteButton.add")
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_c_button, {
              variant: "text",
              circle: "",
              type: unref(buttonType),
              style: { opacity: unref(isFavorite) ? 1 : 0.2 },
              onClick: toggleFavorite
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_icon_mdi_heart, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_icon_mdi_heart)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_c_button, {
                variant: "text",
                circle: "",
                type: unref(buttonType),
                style: { opacity: unref(isFavorite) ? 1 : 0.2 },
                onClick: toggleFavorite
              }, {
                default: withCtx(() => [
                  createVNode(_component_icon_mdi_heart)
                ]),
                _: 1
              }, 8, ["type", "style"])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});

const _sfc_setup$v = _sfc_main$v.setup;
_sfc_main$v.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/FavoriteButton.vue");
  return _sfc_setup$v ? _sfc_setup$v(props, ctx) : void 0;
};

const _sfc_main$u = /* @__PURE__ */ defineComponent({
  __name: "tool.layout",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const head = computed(() => ({
      title: `${route.meta.name} - Zeeklog Online Tools`,
      meta: [
        {
          name: "description",
          content: route.meta?.description
        },
        {
          name: "keywords",
          content: (route.meta.keywords ?? []).join(",")
        }
      ]
    }));
    useHead(head);
    const { t } = useI18n();
    const i18nKey = computed(() => route.path.trim().replace("/", ""));
    const toolTitle = computed(() => t(`tools.${i18nKey.value}.title`, String(route.meta.name)));
    const toolDescription = computed(() => t(`tools.${i18nKey.value}.description`, String(route.meta.description)));
    return (_ctx, _push, _parent, _attrs) => {
      const _component_n_h1 = NH1;
      _push(ssrRenderComponent(BaseLayout, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="tool-layout" data-v-bc13a56b${_scopeId}><div class="tool-header" data-v-bc13a56b${_scopeId}><div flex flex-nowrap items-center justify-between data-v-bc13a56b${_scopeId}>`);
            _push2(ssrRenderComponent(_component_n_h1, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(unref(toolTitle))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(unref(toolTitle)), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div data-v-bc13a56b${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$v, {
              tool: { name: unref(route).meta.name }
            }, null, _parent2, _scopeId));
            _push2(`</div></div><div class="separator" data-v-bc13a56b${_scopeId}></div><div class="description" data-v-bc13a56b${_scopeId}>${ssrInterpolate(unref(toolDescription))}</div></div></div><div class="tool-content" data-v-bc13a56b${_scopeId}>`);
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "tool-layout" }, [
                createVNode("div", { class: "tool-header" }, [
                  createVNode("div", {
                    flex: "",
                    "flex-nowrap": "",
                    "items-center": "",
                    "justify-between": ""
                  }, [
                    createVNode(_component_n_h1, null, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(unref(toolTitle)), 1)
                      ]),
                      _: 1
                    }),
                    createVNode("div", null, [
                      createVNode(_sfc_main$v, {
                        tool: { name: unref(route).meta.name }
                      }, null, 8, ["tool"])
                    ])
                  ]),
                  createVNode("div", { class: "separator" }),
                  createVNode("div", { class: "description" }, toDisplayString(unref(toolDescription)), 1)
                ])
              ]),
              createVNode("div", { class: "tool-content" }, [
                renderSlot(_ctx.$slots, "default", {}, void 0, true)
              ])
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});

/* unplugin-vue-components disabled */const tool_layout_vue_vue_type_style_index_0_scoped_bc13a56b_lang = '';

const _sfc_setup$u = _sfc_main$u.setup;
_sfc_main$u.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/layouts/tool.layout.vue");
  return _sfc_setup$u ? _sfc_setup$u(props, ctx) : void 0;
};
const ToolLayout = /* @__PURE__ */ _export_sfc(_sfc_main$u, [["__scopeId", "data-v-bc13a56b"]]);

const layouts = {
  base: BaseLayout,
  toolLayout: ToolLayout
};

const _sfc_main$t = /* @__PURE__ */ defineComponent({
  __name: "App",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const layout = computed(() => route?.meta?.layout ?? layouts.base);
    const styleStore = useStyleStore();
    const theme = computed(() => styleStore.isDarkTheme ? darkTheme : null);
    const themeOverrides = computed(() => styleStore.isDarkTheme ? darkThemeOverrides : lightThemeOverrides);
    const { locale } = useI18n();
    syncRef(
      locale,
      useStorage("locale", locale)
    );
    onMounted(() => {
      console.log("APP MOUNTED");
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_n_config_provider = NConfigProvider;
      _push(ssrRenderComponent(_component_n_config_provider, mergeProps({
        theme: unref(theme),
        "theme-overrides": unref(themeOverrides)
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(NGlobalStyle), null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(NMessageProvider), { placement: "bottom" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(NNotificationProvider), { placement: "bottom-right" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        ssrRenderVNode(_push4, createVNode(resolveDynamicComponent(unref(layout)), null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(unref(RouterView), null, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(unref(RouterView))
                              ];
                            }
                          }),
                          _: 1
                        }), _parent4, _scopeId3);
                      } else {
                        return [
                          (openBlock(), createBlock(resolveDynamicComponent(unref(layout)), null, {
                            default: withCtx(() => [
                              createVNode(unref(RouterView))
                            ]),
                            _: 1
                          }))
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(NNotificationProvider), { placement: "bottom-right" }, {
                      default: withCtx(() => [
                        (openBlock(), createBlock(resolveDynamicComponent(unref(layout)), null, {
                          default: withCtx(() => [
                            createVNode(unref(RouterView))
                          ]),
                          _: 1
                        }))
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(NGlobalStyle)),
              createVNode(unref(NMessageProvider), { placement: "bottom" }, {
                default: withCtx(() => [
                  createVNode(unref(NNotificationProvider), { placement: "bottom-right" }, {
                    default: withCtx(() => [
                      (openBlock(), createBlock(resolveDynamicComponent(unref(layout)), null, {
                        default: withCtx(() => [
                          createVNode(unref(RouterView))
                        ]),
                        _: 1
                      }))
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});

/* unplugin-vue-components disabled */const App_vue_vue_type_style_index_0_lang = '';

const _sfc_setup$t = _sfc_main$t.setup;
_sfc_main$t.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/App.vue");
  return _sfc_setup$t ? _sfc_setup$t(props, ctx) : void 0;
};

const { useTheme: useTheme$1 } = defineThemes({
  dark: {
    backgroundColor: "#232323",
    borderColor: "#282828"
  },
  light: {
    backgroundColor: "#ffffff",
    borderColor: "#efeff5"
  }
});

const _sfc_main$s = /* @__PURE__ */ defineComponent({
  __name: "c-card",
  __ssrInlineRender: true,
  props: {
    title: {}
  },
  setup(__props) {
    const props = __props;
    const { title } = toRefs(props);
    const theme = useTheme$1();
    return (_ctx, _push, _parent, _attrs) => {
      const _cssVars = { style: {
        "--51386d66": unref(theme).backgroundColor,
        "--1d9c24b0": unref(theme).borderColor
      } };
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "c-card" }, _attrs, _cssVars))} data-v-236d2dc6>`);
      if (unref(title)) {
        _push(`<div class="c-card-title" data-v-236d2dc6>${ssrInterpolate(unref(title))}</div>`);
      } else {
        _push(`<!---->`);
      }
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});

/* unplugin-vue-components disabled */const cCard_vue_vue_type_style_index_0_scoped_236d2dc6_lang = '';

const _sfc_setup$s = _sfc_main$s.setup;
_sfc_main$s.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/ui/c-card/c-card.vue");
  return _sfc_setup$s ? _sfc_setup$s(props, ctx) : void 0;
};
const __unplugin_components_1$1 = /* @__PURE__ */ _export_sfc(_sfc_main$s, [["__scopeId", "data-v-236d2dc6"]]);

const _sfc_main$r = /* @__PURE__ */ defineComponent({
  __name: "ColoredCard",
  __ssrInlineRender: true,
  props: {
    icon: {},
    title: {}
  },
  setup(__props) {
    const props = __props;
    const { icon, title } = toRefs(props);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_c_card = __unplugin_components_1$1;
      const _component_n_icon = NIcon;
      const _component_n_h3 = NH3;
      const _component_n_ellipsis = NEllipsis;
      _push(ssrRenderComponent(_component_c_card, mergeProps({ class: "colored-card" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_n_icon, {
              class: "icon",
              size: "40",
              component: unref(icon)
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_n_h3, { class: "title" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_n_ellipsis, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(unref(title))}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(unref(title)), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_n_ellipsis, null, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(unref(title)), 1)
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="description" data-v-966d1647${_scopeId}>`);
            _push2(ssrRenderComponent(_component_n_ellipsis, {
              "line-clamp": 2,
              tooltip: false
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push3, _parent3, _scopeId2);
                } else {
                  return [
                    renderSlot(_ctx.$slots, "default", {}, void 0, true)
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode(_component_n_icon, {
                class: "icon",
                size: "40",
                component: unref(icon)
              }, null, 8, ["component"]),
              createVNode(_component_n_h3, { class: "title" }, {
                default: withCtx(() => [
                  createVNode(_component_n_ellipsis, null, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(title)), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode("div", { class: "description" }, [
                createVNode(_component_n_ellipsis, {
                  "line-clamp": 2,
                  tooltip: false
                }, {
                  default: withCtx(() => [
                    renderSlot(_ctx.$slots, "default", {}, void 0, true)
                  ]),
                  _: 3
                })
              ])
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});

/* unplugin-vue-components disabled */const ColoredCard_vue_vue_type_style_index_0_scoped_966d1647_lang = '';

const _sfc_setup$r = _sfc_main$r.setup;
_sfc_main$r.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/ColoredCard.vue");
  return _sfc_setup$r ? _sfc_setup$r(props, ctx) : void 0;
};
const ColoredCard = /* @__PURE__ */ _export_sfc(_sfc_main$r, [["__scopeId", "data-v-966d1647"]]);

const _sfc_main$q = /* @__PURE__ */ defineComponent({
  __name: "ToolCard",
  __ssrInlineRender: true,
  props: {
    tool: {}
  },
  setup(__props) {
    const props = __props;
    const { tool } = toRefs(props);
    const theme = useThemeVars();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_link = resolveComponent("router-link");
      const _component_c_card = __unplugin_components_1$1;
      const _component_n_icon = NIcon;
      _push(ssrRenderComponent(_component_router_link, mergeProps({
        to: unref(tool).path,
        class: "decoration-none"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_c_card, { class: "h-full transition transition-duration-0.5s !border-2px !hover:border-primary" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div flex items-center justify-between${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_n_icon, {
                    class: "text-neutral-400 dark:text-neutral-600",
                    size: "40",
                    component: unref(tool).icon
                  }, null, _parent3, _scopeId2));
                  _push3(`<div flex items-center gap-8px${_scopeId2}>`);
                  if (unref(tool).isNew) {
                    _push3(`<div class="rounded-full px-8px py-3px text-xs text-white dark:text-neutral-800" style="${ssrRenderStyle({
                      "background-color": unref(theme).primaryColor
                    })}"${_scopeId2}>${ssrInterpolate(_ctx.$t("toolCard.new"))}</div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(ssrRenderComponent(_sfc_main$v, { tool: unref(tool) }, null, _parent3, _scopeId2));
                  _push3(`</div></div><div class="truncat my-5px text-lg text-black dark:text-white"${_scopeId2}>${ssrInterpolate(unref(tool).name)}</div><div class="line-clamp-2 text-neutral-500 dark:text-neutral-400"${_scopeId2}>${ssrInterpolate(unref(tool).description)}</div>`);
                } else {
                  return [
                    createVNode("div", {
                      flex: "",
                      "items-center": "",
                      "justify-between": ""
                    }, [
                      createVNode(_component_n_icon, {
                        class: "text-neutral-400 dark:text-neutral-600",
                        size: "40",
                        component: unref(tool).icon
                      }, null, 8, ["component"]),
                      createVNode("div", {
                        flex: "",
                        "items-center": "",
                        "gap-8px": ""
                      }, [
                        unref(tool).isNew ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "rounded-full px-8px py-3px text-xs text-white dark:text-neutral-800",
                          style: {
                            "background-color": unref(theme).primaryColor
                          }
                        }, toDisplayString(_ctx.$t("toolCard.new")), 5)) : createCommentVNode("", true),
                        createVNode(_sfc_main$v, { tool: unref(tool) }, null, 8, ["tool"])
                      ])
                    ]),
                    createVNode("div", { class: "truncat my-5px text-lg text-black dark:text-white" }, toDisplayString(unref(tool).name), 1),
                    createVNode("div", { class: "line-clamp-2 text-neutral-500 dark:text-neutral-400" }, toDisplayString(unref(tool).description), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_c_card, { class: "h-full transition transition-duration-0.5s !border-2px !hover:border-primary" }, {
                default: withCtx(() => [
                  createVNode("div", {
                    flex: "",
                    "items-center": "",
                    "justify-between": ""
                  }, [
                    createVNode(_component_n_icon, {
                      class: "text-neutral-400 dark:text-neutral-600",
                      size: "40",
                      component: unref(tool).icon
                    }, null, 8, ["component"]),
                    createVNode("div", {
                      flex: "",
                      "items-center": "",
                      "gap-8px": ""
                    }, [
                      unref(tool).isNew ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "rounded-full px-8px py-3px text-xs text-white dark:text-neutral-800",
                        style: {
                          "background-color": unref(theme).primaryColor
                        }
                      }, toDisplayString(_ctx.$t("toolCard.new")), 5)) : createCommentVNode("", true),
                      createVNode(_sfc_main$v, { tool: unref(tool) }, null, 8, ["tool"])
                    ])
                  ]),
                  createVNode("div", { class: "truncat my-5px text-lg text-black dark:text-white" }, toDisplayString(unref(tool).name), 1),
                  createVNode("div", { class: "line-clamp-2 text-neutral-500 dark:text-neutral-400" }, toDisplayString(unref(tool).description), 1)
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});

const _sfc_setup$q = _sfc_main$q.setup;
_sfc_main$q.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/ToolCard.vue");
  return _sfc_setup$q ? _sfc_setup$q(props, ctx) : void 0;
};

const _sfc_main$p = /* @__PURE__ */ defineComponent({
  __name: "Home.page",
  __ssrInlineRender: true,
  setup(__props) {
    const toolStore = useToolStore();
    useHead({ title: "Zeeklog Online Tools - Handy online tools for developers" });
    const { t } = useI18n();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_n_icon = NIcon;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "pt-50px" }, _attrs))} data-v-2af54eaf><div class="grid-wrapper" data-v-2af54eaf>`);
      if (unref(config).showBanner) {
        _push(`<div class="grid grid-cols-1 gap-12px lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 xl:grid-cols-4" data-v-2af54eaf>`);
        _push(ssrRenderComponent(ColoredCard, {
          title: _ctx.$t("home.follow.title"),
          icon: unref(Heart)
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(_ctx.$t("home.follow.p1"))} <a href="https://github.com/zeeklog/it-tools" rel="noopener" target="_blank"${ssrRenderAttr("aria-label", _ctx.$t("home.follow.githubRepository"))} data-v-2af54eaf${_scopeId}>GitHub</a> ${ssrInterpolate(_ctx.$t("home.follow.p2"))} <a href="https://twitter.com/ittoolsdottech" rel="noopener" target="_blank"${ssrRenderAttr("aria-label", _ctx.$t("home.follow.twitterAccount"))} data-v-2af54eaf${_scopeId}>Twitter</a>. ${ssrInterpolate(_ctx.$t("home.follow.thankYou"))} `);
              _push2(ssrRenderComponent(_component_n_icon, { component: unref(Heart) }, null, _parent2, _scopeId));
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.$t("home.follow.p1")) + " ", 1),
                createVNode("a", {
                  href: "https://github.com/zeeklog/it-tools",
                  rel: "noopener",
                  target: "_blank",
                  "aria-label": _ctx.$t("home.follow.githubRepository")
                }, "GitHub", 8, ["aria-label"]),
                createTextVNode(" " + toDisplayString(_ctx.$t("home.follow.p2")) + " ", 1),
                createVNode("a", {
                  href: "https://twitter.com/ittoolsdottech",
                  rel: "noopener",
                  target: "_blank",
                  "aria-label": _ctx.$t("home.follow.twitterAccount")
                }, "Twitter", 8, ["aria-label"]),
                createTextVNode(". " + toDisplayString(_ctx.$t("home.follow.thankYou")) + " ", 1),
                createVNode(_component_n_icon, { component: unref(Heart) }, null, 8, ["component"])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(toolStore).favoriteTools.length > 0) {
        _push(`<div data-v-2af54eaf><h3 class="mb-5px mt-25px font-500 text-neutral-400" data-v-2af54eaf>${ssrInterpolate(_ctx.$t("home.categories.favoriteTools"))}</h3><div class="grid grid-cols-1 gap-12px lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 xl:grid-cols-4" data-v-2af54eaf><!--[-->`);
        ssrRenderList(unref(toolStore).favoriteTools, (tool) => {
          _push(ssrRenderComponent(_sfc_main$q, {
            key: tool.name,
            tool
          }, null, _parent));
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(toolStore).newTools.length > 0) {
        _push(`<div data-v-2af54eaf><h3 class="mb-5px mt-25px font-500 text-neutral-400" data-v-2af54eaf>${ssrInterpolate(unref(t)("home.categories.newestTools"))}</h3><div class="grid grid-cols-1 gap-12px lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 xl:grid-cols-4" data-v-2af54eaf><!--[-->`);
        ssrRenderList(unref(toolStore).newTools, (tool) => {
          _push(ssrRenderComponent(_sfc_main$q, {
            key: tool.name,
            tool
          }, null, _parent));
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<h3 class="mb-5px mt-25px font-500 text-neutral-400" data-v-2af54eaf>${ssrInterpolate(_ctx.$t("home.categories.allTools"))}</h3><div class="grid grid-cols-1 gap-12px lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 xl:grid-cols-4" data-v-2af54eaf><!--[-->`);
      ssrRenderList(unref(toolStore).tools, (tool) => {
        _push(ssrRenderComponent(_sfc_main$q, {
          key: tool.name,
          tool
        }, null, _parent));
      });
      _push(`<!--]--></div></div></div>`);
    };
  }
});

/* unplugin-vue-components disabled */const Home_page_vue_vue_type_style_index_0_scoped_2af54eaf_lang = '';

const _sfc_setup$p = _sfc_main$p.setup;
_sfc_main$p.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/Home.page.vue");
  return _sfc_setup$p ? _sfc_setup$p(props, ctx) : void 0;
};
const HomePage = /* @__PURE__ */ _export_sfc(_sfc_main$p, [["__scopeId", "data-v-2af54eaf"]]);

const _hoisted_1$5 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$5 = /*#__PURE__*/createElementVNode("path", {
  fill: "currentColor",
  d: "M9.5 3C4.8 3 1 5.7 1 9c0 1.2.5 2.3 1.4 3.3C1.5 13.5.985 15 1 16.5V20c0 1.1.9 2 2 2h13c1.11 0 2-.89 2-2v-3.5c0-1.2-.3-2.4-1-3.5l2-2l-3-3l-2.1 2.1a9.191 9.191 0 0 0-9.3.3C4.22 10.03 4 9.53 4 9c0-1.8 2.5-3.3 5.5-3.3c1.4 0 2.8.4 3.8 1l2-2A10.05 10.05 0 0 0 9.5 3m0 8c3.5 0 6.5 3 6.5 5.5V20H3v-3.5C3 14 6 11 9.5 11m.5 1.5c-3 0-5 1.5-5 4.5v1h2v-1c0-1 0-3.5 3-4.5m13-5.2c0 1.63-1.09 3.3-2.62 3.67l-.67-.68L19 9.6h.75c1 0 1.75-1.38 1.75-2.4s-.85-2.06-1.85-2.06v-1.5C21.5 3.64 23 5.45 23 7.3m-5.35-.57c-.62-.61-1-1.45-1-2.38C16.65 2.5 18.15 1 20 1v1.5c-1 0-1.85.83-1.85 1.85S19 6.2 20 6.2v1.5c-.82 0-1.58.25-2.21.68l-1.07-1.07c.28-.22.6-.42.93-.58Z"
}, null, -1);
const _hoisted_3$5 = [
  _hoisted_2$5
];

function render$6(_ctx, _cache) {
  return (openBlock(), createElementBlock("svg", _hoisted_1$5, _hoisted_3$5))
}

const __unplugin_components_0$1 = { name: 'mdi-kettle-steam-outline', render: render$6 };
/* vite-plugin-components disabled */

const _sfc_main$o = /* @__PURE__ */ defineComponent({
  __name: "404.page",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({ title: "Page not found - Zeeklog Online Tools" });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_icon_mdi58kettle_steam_outline = __unplugin_components_0$1;
      const _component_c_button = __unplugin_components_0$5;
      _push(`<div${ssrRenderAttrs(mergeProps({
        "mt-20": "",
        flex: "",
        "flex-col": "",
        "items-center": ""
      }, _attrs))}><span text-90px lh-1 op-50>`);
      _push(ssrRenderComponent(_component_icon_mdi58kettle_steam_outline, null, null, _parent));
      _push(`</span><h1 m-0 mt-3>${ssrInterpolate(_ctx.$t("404.notFound"))}</h1><div mt-4 op-60>${ssrInterpolate(_ctx.$t("404.sorry"))}</div><div mb-8 op-60>${ssrInterpolate(_ctx.$t("404.maybe"))}</div>`);
      _push(ssrRenderComponent(_component_c_button, { to: "/" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("404.backHome"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("404.backHome")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});

const _sfc_setup$o = _sfc_main$o.setup;
_sfc_main$o.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/404.page.vue");
  return _sfc_setup$o ? _sfc_setup$o(props, ctx) : void 0;
};

const _hoisted_1$4 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$4 = /*#__PURE__*/createElementVNode("path", {
  fill: "currentColor",
  d: "M11 15h2v2h-2v-2m0-8h2v6h-2V7m1-5C6.47 2 2 6.5 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2m0 18a8 8 0 0 1-8-8a8 8 0 0 1 8-8a8 8 0 0 1 8 8a8 8 0 0 1-8 8Z"
}, null, -1);
const _hoisted_3$4 = [
  _hoisted_2$4
];

function render$5(_ctx, _cache) {
  return (openBlock(), createElementBlock("svg", _hoisted_1$4, _hoisted_3$4))
}

const WarningIcon = { name: 'mdi-alert-circle-outline', render: render$5 };
/* vite-plugin-components disabled */

const _hoisted_1$3 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$3 = /*#__PURE__*/createElementVNode("path", {
  fill: "currentColor",
  d: "M12 20c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8m0-18C6.47 2 2 6.47 2 12s4.47 10 10 10s10-4.47 10-10S17.53 2 12 2m2.59 6L12 10.59L9.41 8L8 9.41L10.59 12L8 14.59L9.41 16L12 13.41L14.59 16L16 14.59L13.41 12L16 9.41L14.59 8Z"
}, null, -1);
const _hoisted_3$3 = [
  _hoisted_2$3
];

function render$4(_ctx, _cache) {
  return (openBlock(), createElementBlock("svg", _hoisted_1$3, _hoisted_3$3))
}

const ErrorIcon = { name: 'mdi-close-circle-outline', render: render$4 };
/* vite-plugin-components disabled */

const { useTheme } = defineThemes({
  dark: {
    warning: {
      backgroundColor: appThemes.dark.warning.colorFaded,
      borderColor: appThemes.dark.warning.color,
      textColor: appThemes.dark.warning.color,
      icon: WarningIcon
    },
    error: {
      backgroundColor: appThemes.dark.error.colorFaded,
      borderColor: appThemes.dark.error.color,
      textColor: appThemes.dark.error.color,
      icon: ErrorIcon
    }
  },
  light: {
    warning: {
      backgroundColor: appThemes.light.warning.colorFaded,
      borderColor: appThemes.light.warning.color,
      textColor: darken(appThemes.light.warning.color, 40),
      icon: WarningIcon
    },
    error: {
      backgroundColor: appThemes.light.error.colorFaded,
      borderColor: appThemes.light.error.color,
      textColor: darken(appThemes.light.error.color, 40),
      icon: ErrorIcon
    }
  }
});

const _sfc_main$n = /* @__PURE__ */ defineComponent({
  __name: "c-alert",
  __ssrInlineRender: true,
  props: {
    type: { default: "warning" },
    title: { default: void 0 }
  },
  setup(__props) {
    const props = __props;
    const { type, title } = toRefs(props);
    const theme = useTheme();
    const variantTheme = computed(() => theme.value[type.value]);
    return (_ctx, _push, _parent, _attrs) => {
      const _cssVars = { style: {
        "--2d6e05b1": unref(variantTheme).backgroundColor,
        "--a966dbdc": unref(variantTheme).textColor
      } };
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "c-alert",
        flex: "",
        "items-center": "",
        "b-rd-4px": "",
        "pa-5": ""
      }, _attrs, _cssVars))} data-v-d1c7f863><div class="c-alert--icon" mr-4 text-40px op-60 data-v-d1c7f863>`);
      ssrRenderSlot(_ctx.$slots, "icon", {}, () => {
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(variantTheme).icon), null, null), _parent);
      }, _push, _parent);
      _push(`</div><div class="c-alert--content" data-v-d1c7f863>`);
      if (unref(title)) {
        _push(`<div class="c-alert--title" text-15px fw-600 data-v-d1c7f863>${ssrInterpolate(unref(title))}</div>`);
      } else {
        _push(`<!---->`);
      }
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></div>`);
    };
  }
});

/* unplugin-vue-components disabled */const cAlert_vue_vue_type_style_index_0_scoped_d1c7f863_lang = '';

const _sfc_setup$n = _sfc_main$n.setup;
_sfc_main$n.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/ui/c-alert/c-alert.vue");
  return _sfc_setup$n ? _sfc_setup$n(props, ctx) : void 0;
};
const __unplugin_components_3 = /* @__PURE__ */ _export_sfc(_sfc_main$n, [["__scopeId", "data-v-d1c7f863"]]);

const _sfc_main$m = /* @__PURE__ */ defineComponent({
  __name: "c-alert.demo",
  __ssrInlineRender: true,
  setup(__props) {
    const variants = ["warning", "error"];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_c_alert = __unplugin_components_3;
      _push(`<!--[--><h2>Basic</h2><!--[-->`);
      ssrRenderList(variants, (variant) => {
        _push(ssrRenderComponent(_component_c_alert, {
          key: variant,
          type: variant,
          "mb-4": ""
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni reprehenderit itaque enim? Suscipit magni optio velit quia, eveniet repellat pariatur quaerat laudantium dignissimos natus, beatae deleniti adipisci, atque necessitatibus odio! `);
            } else {
              return [
                createTextVNode(" Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni reprehenderit itaque enim? Suscipit magni optio velit quia, eveniet repellat pariatur quaerat laudantium dignissimos natus, beatae deleniti adipisci, atque necessitatibus odio! ")
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--><h2>With title</h2><!--[-->`);
      ssrRenderList(variants, (variant) => {
        _push(ssrRenderComponent(_component_c_alert, {
          key: variant,
          type: variant,
          title: "This is the title",
          "mb-4": ""
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni reprehenderit itaque enim? Suscipit magni optio velit quia, eveniet repellat pariatur quaerat laudantium dignissimos natus, beatae deleniti adipisci, atque necessitatibus odio! `);
            } else {
              return [
                createTextVNode(" Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni reprehenderit itaque enim? Suscipit magni optio velit quia, eveniet repellat pariatur quaerat laudantium dignissimos natus, beatae deleniti adipisci, atque necessitatibus odio! ")
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--><!--]-->`);
    };
  }
});

const _sfc_setup$m = _sfc_main$m.setup;
_sfc_main$m.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/ui/c-alert/c-alert.demo.vue");
  return _sfc_setup$m ? _sfc_setup$m(props, ctx) : void 0;
};

const __vite_glob_0_0 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: _sfc_main$m
}, Symbol.toStringTag, { value: 'Module' }));

const _hoisted_1$2 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$2 = /*#__PURE__*/createElementVNode("path", {
  fill: "currentColor",
  d: "M19 21H8V7h11m0-2H8a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2m-3-4H4a2 2 0 0 0-2 2v14h2V3h12V1Z"
}, null, -1);
const _hoisted_3$2 = [
  _hoisted_2$2
];

function render$3(_ctx, _cache) {
  return (openBlock(), createElementBlock("svg", _hoisted_1$2, _hoisted_3$2))
}

const __unplugin_components_5 = { name: 'mdi-content-copy', render: render$3 };
/* vite-plugin-components disabled */

const _sfc_main$l = /* @__PURE__ */ defineComponent({
  __name: "c-button.demo",
  __ssrInlineRender: true,
  setup(__props) {
    const buttonVariants = ["basic", "text"];
    const buttonTypes = ["default", "primary", "warning", "error"];
    const buttonSizes = ["small", "medium", "large"];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_c_button = __unplugin_components_0$5;
      const _component_icon_mdi_content_copy = __unplugin_components_5;
      _push(`<!--[-->`);
      ssrRenderList(buttonVariants, (buttonVariant) => {
        _push(`<div><h2>${ssrInterpolate(unref(_).capitalize(buttonVariant))}</h2><!--[-->`);
        ssrRenderList(buttonSizes, (buttonSize) => {
          _push(`<div mb-2><!--[-->`);
          ssrRenderList(buttonTypes, (buttonType) => {
            _push(ssrRenderComponent(_component_c_button, {
              key: buttonType,
              variant: buttonVariant,
              type: buttonType,
              size: buttonSize,
              "mx-1": ""
            }, {
              default: withCtx((_2, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(` Button `);
                } else {
                  return [
                    createTextVNode(" Button ")
                  ];
                }
              }),
              _: 2
            }, _parent));
          });
          _push(`<!--]--><!--[-->`);
          ssrRenderList(buttonTypes, (buttonType) => {
            _push(ssrRenderComponent(_component_c_button, {
              key: buttonType,
              variant: buttonVariant,
              type: buttonType,
              size: buttonSize,
              circle: "",
              "mx-1": ""
            }, {
              default: withCtx((_2, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(` A `);
                } else {
                  return [
                    createTextVNode(" A ")
                  ];
                }
              }),
              _: 2
            }, _parent));
          });
          _push(`<!--]--><!--[-->`);
          ssrRenderList(buttonTypes, (buttonType) => {
            _push(ssrRenderComponent(_component_c_button, {
              key: buttonType,
              variant: buttonVariant,
              type: buttonType,
              size: buttonSize,
              circle: "",
              "mx-1": ""
            }, {
              default: withCtx((_2, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(ssrRenderComponent(_component_icon_mdi_content_copy, null, null, _parent2, _scopeId));
                } else {
                  return [
                    createVNode(_component_icon_mdi_content_copy)
                  ];
                }
              }),
              _: 2
            }, _parent));
          });
          _push(`<!--]--></div>`);
        });
        _push(`<!--]--></div>`);
      });
      _push(`<!--]-->`);
    };
  }
});

const _sfc_setup$l = _sfc_main$l.setup;
_sfc_main$l.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/ui/c-button/c-button.demo.vue");
  return _sfc_setup$l ? _sfc_setup$l(props, ctx) : void 0;
};

const __vite_glob_0_1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: _sfc_main$l
}, Symbol.toStringTag, { value: 'Module' }));

const _sfc_main$k = /* @__PURE__ */ defineComponent({
  __name: "c-buttons-select",
  __ssrInlineRender: true,
  props: {
    options: { default: () => [] },
    value: { default: void 0 },
    size: { default: "medium" },
    label: {},
    labelFor: {},
    labelPosition: { default: "left" },
    labelWidth: {},
    labelAlign: {}
  },
  emits: ["update:value"],
  setup(__props, { emit: emits }) {
    const props = __props;
    const { options: rawOptions, size } = toRefs(props);
    const options = computed(() => {
      if (_.isArray(rawOptions.value)) {
        return rawOptions.value.map((option) => {
          if (typeof option === "string") {
            return { label: option, value: option };
          }
          return option;
        });
      }
      return _.map(rawOptions.value, (value2, label) => ({ label, value: value2 }));
    });
    const value = useVModel(props, "value", emits);
    function selectOption(option) {
      value.value = option.value;
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_c_label = _sfc_main$B;
      const _component_c_tooltip = _sfc_main$I;
      const _component_c_button = __unplugin_components_0$5;
      _push(ssrRenderComponent(_component_c_label, mergeProps(props, _attrs), {
        default: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex gap-2"${_scopeId}><!--[-->`);
            ssrRenderList(unref(options), (option) => {
              _push2(ssrRenderComponent(_component_c_tooltip, {
                key: option.value,
                tooltip: option.tooltip
              }, {
                default: withCtx((_3, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_c_button, {
                      "test-id": option.value,
                      size: unref(size),
                      type: option.value === unref(value) ? "primary" : "default",
                      onClick: ($event) => selectOption(option)
                    }, {
                      default: withCtx((_4, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(option.label)}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(option.label), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_c_button, {
                        "test-id": option.value,
                        size: unref(size),
                        type: option.value === unref(value) ? "primary" : "default",
                        onClick: ($event) => selectOption(option)
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(option.label), 1)
                        ]),
                        _: 2
                      }, 1032, ["test-id", "size", "type", "onClick"])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]--></div>`);
          } else {
            return [
              createVNode("div", { class: "flex gap-2" }, [
                (openBlock(true), createBlock(Fragment, null, renderList(unref(options), (option) => {
                  return openBlock(), createBlock(_component_c_tooltip, {
                    key: option.value,
                    tooltip: option.tooltip
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_c_button, {
                        "test-id": option.value,
                        size: unref(size),
                        type: option.value === unref(value) ? "primary" : "default",
                        onClick: ($event) => selectOption(option)
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(option.label), 1)
                        ]),
                        _: 2
                      }, 1032, ["test-id", "size", "type", "onClick"])
                    ]),
                    _: 2
                  }, 1032, ["tooltip"]);
                }), 128))
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});

const _sfc_setup$k = _sfc_main$k.setup;
_sfc_main$k.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/ui/c-buttons-select/c-buttons-select.vue");
  return _sfc_setup$k ? _sfc_setup$k(props, ctx) : void 0;
};

const _sfc_main$j = /* @__PURE__ */ defineComponent({
  __name: "c-buttons-select.demo",
  __ssrInlineRender: true,
  setup(__props) {
    const optionsA = [
      { label: "Option A", value: "a" },
      { label: "Option B", value: "b", tooltip: "This is a tooltip" },
      { label: "Option C", value: "c" }
    ];
    const optionB = {
      "Option A": "a",
      "Option B": "b",
      "Option C": "c"
    };
    const valueA = ref("a");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_c_buttons_select = _sfc_main$k;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_c_buttons_select, {
        value: unref(valueA),
        "onUpdate:value": ($event) => isRef(valueA) ? valueA.value = $event : null,
        options: optionsA,
        label: "Label: "
      }, null, _parent));
      _push(ssrRenderComponent(_component_c_buttons_select, {
        value: unref(valueA),
        "onUpdate:value": ($event) => isRef(valueA) ? valueA.value = $event : null,
        options: optionsA,
        label: "Label: ",
        "label-position": "left",
        "mt-2": ""
      }, null, _parent));
      _push(ssrRenderComponent(_component_c_buttons_select, {
        value: unref(valueA),
        "onUpdate:value": ($event) => isRef(valueA) ? valueA.value = $event : null,
        options: optionB,
        label: "Options object: "
      }, null, _parent));
      _push(`<!--]-->`);
    };
  }
});

const _sfc_setup$j = _sfc_main$j.setup;
_sfc_main$j.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/ui/c-buttons-select/c-buttons-select.demo.vue");
  return _sfc_setup$j ? _sfc_setup$j(props, ctx) : void 0;
};

const __vite_glob_0_2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: _sfc_main$j
}, Symbol.toStringTag, { value: 'Module' }));

const _sfc_main$i = {};

function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs) {
  const _component_c_card = __unplugin_components_1$1;

  _push(`<div${ssrRenderAttrs(_attrs)}><h2>Default</h2>`);
  _push(ssrRenderComponent(_component_c_card, { title: "Title" }, {
    default: withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(` Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae ipsa reiciendis facilis officia nulla. Laboriosam cumque molestias excepturi doloribus nulla nemo quod ratione rerum possimus. Excepturi nihil possimus error itaque. `);
      } else {
        return [
          createTextVNode(" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae ipsa reiciendis facilis officia nulla. Laboriosam cumque molestias excepturi doloribus nulla nemo quod ratione rerum possimus. Excepturi nihil possimus error itaque. ")
        ]
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup$i = _sfc_main$i.setup;
_sfc_main$i.setup = (props, ctx) => {
  const ssrContext = useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("src/ui/c-card/c-card.demo.vue");
  return _sfc_setup$i ? _sfc_setup$i(props, ctx) : undefined
};
const cCard_demo = /*#__PURE__*/_export_sfc(_sfc_main$i, [['ssrRender',_sfc_ssrRender$4]]);

const __vite_glob_0_3 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: cCard_demo
}, Symbol.toStringTag, { value: 'Module' }));

const _hoisted_1$1 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$1 = /*#__PURE__*/createElementVNode("path", {
  fill: "currentColor",
  d: "M1 3h22L12 22"
}, null, -1);
const _hoisted_3$1 = [
  _hoisted_2$1
];

function render$2(_ctx, _cache) {
  return (openBlock(), createElementBlock("svg", _hoisted_1$1, _hoisted_3$1))
}

const __unplugin_components_0 = { name: 'mdi-triangle-down', render: render$2 };
/* vite-plugin-components disabled */

const _sfc_main$h = /* @__PURE__ */ defineComponent({
  __name: "c-collapse",
  __ssrInlineRender: true,
  props: {
    title: { default: "" }
  },
  setup(__props) {
    const props = __props;
    const { title } = toRefs(props);
    const isCollapsed = ref(true);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_icon_mdi_triangle_down = __unplugin_components_0;
      _push(`<div${ssrRenderAttrs(_attrs)}><div flex cursor-pointer items-center>`);
      _push(ssrRenderComponent(_component_icon_mdi_triangle_down, {
        class: { "transform-rotate--90": unref(isCollapsed) },
        "op-50": "",
        transition: ""
      }, null, _parent));
      ssrRenderSlot(_ctx.$slots, "title", {}, () => {
        _push(`<span class="ml-2" font-bold>${ssrInterpolate(unref(title))}</span>`);
      }, _push, _parent);
      _push(`</div><div style="${ssrRenderStyle(!unref(isCollapsed) ? null : { display: "none" })}" mt-2>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></div>`);
    };
  }
});

const _sfc_setup$h = _sfc_main$h.setup;
_sfc_main$h.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/ui/c-collapse/c-collapse.vue");
  return _sfc_setup$h ? _sfc_setup$h(props, ctx) : void 0;
};

const _sfc_main$g = {};

function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  const _component_c_collapse = _sfc_main$h;

  _push(ssrRenderComponent(_component_c_collapse, mergeProps({ title: "Collapse title" }, _attrs), {
    default: withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet iaculis class cubilia metus per nullam gravida ad venenatis. Id elementum elementum enim orci elementum justo facilisi habitant consequat. Justo eget ligula purus laoreet penatibus eros quisque fusce sociis. In eget amet sagittis dignissim eleifend proin lacinia potenti tellus. Interdum vulputate condimentum molestie pulvinar praesent accumsan quisque venenatis imperdiet. `);
      } else {
        return [
          createTextVNode(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet iaculis class cubilia metus per nullam gravida ad venenatis. Id elementum elementum enim orci elementum justo facilisi habitant consequat. Justo eget ligula purus laoreet penatibus eros quisque fusce sociis. In eget amet sagittis dignissim eleifend proin lacinia potenti tellus. Interdum vulputate condimentum molestie pulvinar praesent accumsan quisque venenatis imperdiet. ")
        ]
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$g = _sfc_main$g.setup;
_sfc_main$g.setup = (props, ctx) => {
  const ssrContext = useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("src/ui/c-collapse/c-collapse.demo.vue");
  return _sfc_setup$g ? _sfc_setup$g(props, ctx) : undefined
};
const cCollapse_demo = /*#__PURE__*/_export_sfc(_sfc_main$g, [['ssrRender',_sfc_ssrRender$3]]);

const __vite_glob_0_4 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: cCollapse_demo
}, Symbol.toStringTag, { value: 'Module' }));

const _sfc_main$f = /* @__PURE__ */ defineComponent({
  __name: "c-file-upload",
  __ssrInlineRender: true,
  props: {
    multiple: { type: Boolean, default: false },
    accept: { default: void 0 },
    title: { default: "Drag and drop files here, or click to select files" }
  },
  emits: ["filesUpload", "fileUpload"],
  setup(__props, { emit }) {
    const props = __props;
    const { multiple } = toRefs(props);
    const isOverDropZone = ref(false);
    ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_c_button = __unplugin_components_0$5;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["flex flex-col cursor-pointer items-center justify-center border-2px border-gray-300 border-opacity-50 rounded-lg border-dashed p-8 transition-colors", {
          "border-primary border-opacity-100": unref(isOverDropZone)
        }]
      }, _attrs))}><input type="file" class="hidden"${ssrIncludeBooleanAttr(unref(multiple)) ? " multiple" : ""}${ssrRenderAttr("accept", _ctx.accept)}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, () => {
        _push(`<span op-70>${ssrInterpolate(_ctx.title)}</span><div my-4 w-full flex items-center justify-center op-70><div class="h-1px max-w-100px flex-1 bg-gray-300 op-50"></div><div class="mx-2 text-gray-400"> or </div><div class="h-1px max-w-100px flex-1 bg-gray-300 op-50"></div></div>`);
        _push(ssrRenderComponent(_component_c_button, null, {
          default: withCtx((_2, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Browse files `);
            } else {
              return [
                createTextVNode(" Browse files ")
              ];
            }
          }),
          _: 1
        }, _parent));
      }, _push, _parent);
      _push(`</div>`);
    };
  }
});

const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/ui/c-file-upload/c-file-upload.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};

const _sfc_main$e = {};

function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  const _component_c_file_upload = _sfc_main$f;

  _push(ssrRenderComponent(_component_c_file_upload, _attrs, null, _parent));
}
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("src/ui/c-file-upload/c-file-upload.demo.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : undefined
};
const cFileUpload_demo = /*#__PURE__*/_export_sfc(_sfc_main$e, [['ssrRender',_sfc_ssrRender$2]]);

const __vite_glob_0_5 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: cFileUpload_demo
}, Symbol.toStringTag, { value: 'Module' }));

const _sfc_main$d = /* @__PURE__ */ defineComponent({
  __name: "c-input-text.demo",
  __ssrInlineRender: true,
  setup(__props) {
    const value = ref("value");
    const valueLong = ref(
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, est modi iusto repellendus fuga accusantium atque at magnam aliquam eum explicabo vero quia, nobis quasi quis! Earum amet quam a?"
    );
    const validationRules = [{ message: "Length must be > 10", validator: (value2) => value2.length > 10 }];
    const validation = useValidation({
      source: value,
      rules: validationRules
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_c_input_text = __unplugin_components_3$1;
      _push(`<!--[--><h2>Default</h2>`);
      _push(ssrRenderComponent(_component_c_input_text, { value: "qsd" }, null, _parent));
      _push(ssrRenderComponent(_component_c_input_text, { value: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, est modi iusto repellendus fuga accusantium atque at magnam aliquam eum explicabo vero quia, nobis quasi quis! Earum amet quam a?" }, null, _parent));
      _push(`<h2>With placeholder</h2>`);
      _push(ssrRenderComponent(_component_c_input_text, { placeholder: "Placeholder" }, null, _parent));
      _push(`<h2>With label</h2>`);
      _push(ssrRenderComponent(_component_c_input_text, {
        label: "Label",
        "mb-2": ""
      }, null, _parent));
      _push(ssrRenderComponent(_component_c_input_text, {
        label: "Label",
        "mb-2": "",
        "label-position": "left"
      }, null, _parent));
      _push(ssrRenderComponent(_component_c_input_text, {
        label: "Label",
        "mb-2": "",
        "label-position": "left",
        "label-width": "100px"
      }, null, _parent));
      _push(ssrRenderComponent(_component_c_input_text, {
        label: "Label",
        "mb-2": "",
        "label-position": "left",
        "label-width": "100px",
        "label-align": "right"
      }, null, _parent));
      _push(`<h2>Readonly</h2>`);
      _push(ssrRenderComponent(_component_c_input_text, {
        value: "value",
        readonly: ""
      }, null, _parent));
      _push(`<h2>Disabled</h2>`);
      _push(ssrRenderComponent(_component_c_input_text, {
        value: "value",
        disabled: ""
      }, null, _parent));
      _push(`<h2>Validation</h2>`);
      _push(ssrRenderComponent(_component_c_input_text, {
        value: unref(value),
        "onUpdate:value": ($event) => isRef(value) ? value.value = $event : null,
        "validation-rules": validationRules,
        "mb-2": ""
      }, null, _parent));
      _push(ssrRenderComponent(_component_c_input_text, {
        value: unref(value),
        "onUpdate:value": ($event) => isRef(value) ? value.value = $event : null,
        "validation-rules": validationRules,
        "mb-2": "",
        "label-position": "left",
        label: "Yo "
      }, null, _parent));
      _push(ssrRenderComponent(_component_c_input_text, {
        value: unref(value),
        "onUpdate:value": ($event) => isRef(value) ? value.value = $event : null,
        validation: unref(validation)
      }, null, _parent));
      _push(ssrRenderComponent(_component_c_input_text, {
        value: unref(value),
        "onUpdate:value": ($event) => isRef(value) ? value.value = $event : null,
        validation: unref(validation),
        multiline: "",
        rows: "3"
      }, null, _parent));
      _push(`<h2>Clearable</h2>`);
      _push(ssrRenderComponent(_component_c_input_text, {
        value: unref(value),
        "onUpdate:value": ($event) => isRef(value) ? value.value = $event : null,
        clearable: ""
      }, null, _parent));
      _push(`<h2>Type password</h2>`);
      _push(ssrRenderComponent(_component_c_input_text, {
        value: "value",
        type: "password"
      }, null, _parent));
      _push(`<h2>Multiline</h2>`);
      _push(ssrRenderComponent(_component_c_input_text, {
        value: "value",
        multiline: "",
        label: "Label",
        "mb-2": "",
        rows: "1"
      }, null, _parent));
      _push(ssrRenderComponent(_component_c_input_text, {
        value: "value",
        multiline: "",
        label: "Label",
        "mb-2": ""
      }, null, _parent));
      _push(ssrRenderComponent(_component_c_input_text, {
        value: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, est modi iusto repellendus fuga accusantium atque at magnam aliquam eum explicabo vero quia, nobis quasi quis! Earum amet quam a?",
        multiline: "",
        "mb-2": ""
      }, null, _parent));
      _push(ssrRenderComponent(_component_c_input_text, {
        value: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, est modi iusto repellendus fuga accusantium atque at magnam aliquam eum explicabo vero quia, nobis quasi quis! Earum amet quam a?",
        multiline: "",
        clearable: ""
      }, null, _parent));
      _push(`<h2>Autosize</h2>`);
      _push(ssrRenderComponent(_component_c_input_text, {
        value: unref(value),
        "onUpdate:value": ($event) => isRef(value) ? value.value = $event : null,
        label: "Autosize",
        rows: "1",
        multiline: "",
        autosize: "",
        "mb-2": ""
      }, null, _parent));
      _push(ssrRenderComponent(_component_c_input_text, {
        value: unref(valueLong),
        "onUpdate:value": ($event) => isRef(valueLong) ? valueLong.value = $event : null,
        label: "Autosize monospace",
        rows: "1",
        multiline: "",
        autosize: "",
        monospace: "",
        "mb-2": ""
      }, null, _parent));
      _push(`<!--]-->`);
    };
  }
});

const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/ui/c-input-text/c-input-text.demo.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};

const __vite_glob_0_6 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: _sfc_main$d
}, Symbol.toStringTag, { value: 'Module' }));

const _sfc_main$c = /* @__PURE__ */ defineComponent({
  __name: "c-link.demo",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><h2>Default</h2>`);
      _push(ssrRenderComponent(CLink, { "mx-1": "" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Link `);
          } else {
            return [
              createTextVNode(" Link ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});

const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/ui/c-link/c-link.demo.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};

const __vite_glob_0_7 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: _sfc_main$c
}, Symbol.toStringTag, { value: 'Module' }));

const _sfc_main$b = /* @__PURE__ */ defineComponent({
  __name: "c-markdown",
  __ssrInlineRender: true,
  props: {
    markdown: { default: "" }
  },
  setup(__props) {
    const props = __props;
    const { markdown } = toRefs(props);
    marked.use({
      renderer: {
        link(href, title, text) {
          return `<a class="text-primary transition decoration-none hover:underline" href="${href}" target="_blank" rel="noopener">${text}</a>`;
        }
      }
    });
    const html = computed(() => DomPurify.sanitize(marked(markdown.value), { ADD_ATTR: ["target"] }));
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>${unref(html)}</div>`);
    };
  }
});

const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/ui/c-markdown/c-markdown.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};

const md = `
# Zeeklog Online Tools

## About
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl quis
mollis blandit, nunc nisl aliquam nunc, vitae aliquam nisl nunc vitae nisl.

- Lorem ipsum dolor sit amet, consectetur adipiscing elit.
- Sed euismod, nisl quis mollis blandit, nunc nisl aliquam nunc, vitae aliquam nisl nunc vitae nisl.

[it-tools](https://it-tools.tech)
`;
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: "c-markdown.demo",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_c_markdown = _sfc_main$b;
      _push(ssrRenderComponent(_component_c_markdown, mergeProps({ markdown: md }, _attrs), null, _parent));
    };
  }
});

const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/ui/c-markdown/c-markdown.demo.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};

const __vite_glob_0_8 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: _sfc_main$a
}, Symbol.toStringTag, { value: 'Module' }));

function useCopy({ source, text = "Copied to the clipboard", createToast = true } = {}) {
  const { copy, copied, ...rest } = useClipboard({
    source,
    legacy: true
  });
  const message = useMessage();
  return {
    ...rest,
    isJustCopied: copied,
    async copy(content, { notificationMessage } = {}) {
      if (source) {
        await copy();
      } else {
        await copy(content);
      }
      if (createToast) {
        message.success(notificationMessage ?? text);
      }
    }
  };
}

const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "c-modal-value",
  __ssrInlineRender: true,
  props: {
    value: {},
    label: { default: void 0 },
    copyable: { type: Boolean, default: true }
  },
  setup(__props) {
    const props = __props;
    const { value, label } = toRefs(props);
    const { copy, isJustCopied } = useCopy({ source: value });
    const isModalOpen = ref(false);
    const toggleModal = useToggle(isModalOpen);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_c_button = __unplugin_components_0$5;
      const _component_c_modal = __unplugin_components_1$3;
      _push(`<!--[-->`);
      ssrRenderSlot(_ctx.$slots, "label", {
        value: unref(value),
        toggleModal: unref(toggleModal),
        isModalOpen: unref(isModalOpen)
      }, () => {
        _push(ssrRenderComponent(_component_c_button, {
          class: "text-left",
          onClick: ($event) => isModalOpen.value = true
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(unref(label))}`);
            } else {
              return [
                createTextVNode(toDisplayString(unref(label)), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
      }, _push, _parent);
      _push(ssrRenderComponent(_component_c_modal, {
        open: unref(isModalOpen),
        "onUpdate:open": ($event) => isRef(isModalOpen) ? isModalOpen.value = $event : null
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "value", {
              value: unref(value),
              toggleModal: unref(toggleModal),
              isModalOpen: unref(isModalOpen)
            }, () => {
              _push2(`${ssrInterpolate(unref(value))}`);
            }, _push2, _parent2, _scopeId);
            _push2(`<div mt-4 flex justify-center${_scopeId}>`);
            _push2(ssrRenderComponent(_component_c_button, {
              class: "w-full",
              onClick: unref(copy)
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(unref(isJustCopied) ? "Copied!" : "Copy")}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(unref(isJustCopied) ? "Copied!" : "Copy"), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              renderSlot(_ctx.$slots, "value", {
                value: unref(value),
                toggleModal: unref(toggleModal),
                isModalOpen: unref(isModalOpen)
              }, () => [
                createTextVNode(toDisplayString(unref(value)), 1)
              ]),
              createVNode("div", {
                "mt-4": "",
                flex: "",
                "justify-center": ""
              }, [
                createVNode(_component_c_button, {
                  class: "w-full",
                  onClick: unref(copy)
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(unref(isJustCopied) ? "Copied!" : "Copy"), 1)
                  ]),
                  _: 1
                }, 8, ["onClick"])
              ])
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(`<!--]-->`);
    };
  }
});

const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/ui/c-modal-value/c-modal-value.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};

const _sfc_main$8 = {};

function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_c_modal_value = _sfc_main$9;
  const _component_c_button = __unplugin_components_0$5;

  _push(`<div${ssrRenderAttrs(mergeProps({
    flex: "",
    "gap-2": ""
  }, _attrs))}>`);
  _push(ssrRenderComponent(_component_c_modal_value, {
    value: "lorem ipsum",
    label: "test"
  }, null, _parent));
  _push(ssrRenderComponent(_component_c_modal_value, null, {
    label: withCtx(({ toggleModal }, _push, _parent, _scopeId) => {
      if (_push) {
        _push(ssrRenderComponent(_component_c_button, {
          class: "text-left",
          size: "small",
          onClick: toggleModal
        }, {
          default: withCtx((_, _push, _parent, _scopeId) => {
            if (_push) {
              _push(` Bonjour `);
            } else {
              return [
                createTextVNode(" Bonjour ")
              ]
            }
          }),
          _: 2
        }, _parent, _scopeId));
      } else {
        return [
          createVNode(_component_c_button, {
            class: "text-left",
            size: "small",
            onClick: toggleModal
          }, {
            default: withCtx(() => [
              createTextVNode(" Bonjour ")
            ]),
            _: 2
          }, 1032, ["onClick"])
        ]
      }
    }),
    value: withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<pre${_scopeId}>          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Molestias, quisquam vitae saepe dolores quas debitis ab r
          ecusandae suscipit ex dignissimos minus quam repellat sunt.
          Molestiae culpa blanditiis totam sapiente dignissimos.
        </pre>`);
      } else {
        return [
          createVNode("pre", null, "          Lorem ipsum dolor sit amet consectetur adipisicing elit.\n          Molestias, quisquam vitae saepe dolores quas debitis ab r\n          ecusandae suscipit ex dignissimos minus quam repellat sunt.\n          Molestiae culpa blanditiis totam sapiente dignissimos.\n        ")
        ]
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("src/ui/c-modal-value/c-modal-value.demo.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : undefined
};
const cModalValue_demo = /*#__PURE__*/_export_sfc(_sfc_main$8, [['ssrRender',_sfc_ssrRender$1]]);

const __vite_glob_0_9 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: cModalValue_demo
}, Symbol.toStringTag, { value: 'Module' }));

const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "c-modal.demo",
  __ssrInlineRender: true,
  setup(__props) {
    const modal1 = ref();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_c_button = __unplugin_components_0$5;
      const _component_c_modal = __unplugin_components_1$3;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_c_button, {
        onClick: () => unref(modal1)?.open()
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Open Modal `);
          } else {
            return [
              createTextVNode(" Open Modal ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_c_modal, {
        ref_key: "modal1",
        ref: modal1
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Content `);
          } else {
            return [
              createTextVNode(" Content ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});

const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/ui/c-modal/c-modal.demo.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};

const __vite_glob_0_10 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: _sfc_main$7
}, Symbol.toStringTag, { value: 'Module' }));

const _hoisted_1 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2 = /*#__PURE__*/createElementVNode("path", {
  fill: "currentColor",
  d: "m12.87 15.07l-2.54-2.51l.03-.03A17.52 17.52 0 0 0 14.07 6H17V4h-7V2H8v2H1v2h11.17C11.5 7.92 10.44 9.75 9 11.35C8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5l3.11 3.11l.76-2.04M18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12m-2.62 7l1.62-4.33L19.12 17h-3.24Z"
}, null, -1);
const _hoisted_3 = [
  _hoisted_2
];

function render$1(_ctx, _cache) {
  return (openBlock(), createElementBlock("svg", _hoisted_1, _hoisted_3))
}

const __unplugin_components_1 = { name: 'mdi-translate', render: render$1 };
/* vite-plugin-components disabled */

const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "c-select.demo",
  __ssrInlineRender: true,
  setup(__props) {
    const optionsA = [
      { label: "Option A", value: "a" },
      { label: "Option B", value: "b" },
      { label: "Option C", value: "c" }
    ];
    const optionsBig = Array.from({ length: 1e3 }, (_, i) => ({ label: `Option ${i}`, value: i }));
    const sizes = ["small", "medium", "large"];
    const value = ref("");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_c_select = __unplugin_components_0$3;
      const _component_icon_mdi_translate = __unplugin_components_1;
      _push(`<!--[--><h2>Sizes</h2><!--[-->`);
      ssrRenderList(sizes, (size) => {
        _push(ssrRenderComponent(_component_c_select, {
          key: size,
          value: unref(value),
          "onUpdate:value": ($event) => isRef(value) ? value.value = $event : null,
          options: optionsA,
          size,
          "mb-2": ""
        }, null, _parent));
      });
      _push(`<!--]--><h2>Searchable</h2><!--[-->`);
      ssrRenderList(sizes, (size) => {
        _push(ssrRenderComponent(_component_c_select, {
          key: size,
          value: unref(value),
          "onUpdate:value": ($event) => isRef(value) ? value.value = $event : null,
          options: optionsA,
          size,
          searchable: "",
          "mb-2": ""
        }, null, _parent));
      });
      _push(`<!--]--><h2>Big list</h2>`);
      _push(ssrRenderComponent(_component_c_select, {
        value: unref(value),
        "onUpdate:value": ($event) => isRef(value) ? value.value = $event : null,
        options: unref(optionsBig),
        searchable: ""
      }, null, _parent));
      _push(`<h2>Empty</h2>`);
      _push(ssrRenderComponent(_component_c_select, { options: [] }, null, _parent));
      _push(`<h2>String array as options</h2>`);
      _push(ssrRenderComponent(_component_c_select, {
        value: unref(value),
        "onUpdate:value": ($event) => isRef(value) ? value.value = $event : null,
        options: ["a", "Option B", "Option C"]
      }, null, _parent));
      _push(`<h2>Labels</h2>`);
      _push(ssrRenderComponent(_component_c_select, {
        label: "Label",
        "mb-2": ""
      }, null, _parent));
      _push(ssrRenderComponent(_component_c_select, {
        label: "Label",
        "label-position": "left",
        "mb-2": ""
      }, null, _parent));
      _push(ssrRenderComponent(_component_c_select, {
        label: "Label",
        "label-position": "left",
        "label-align": "left",
        "mb-2": "",
        "label-width": "200px"
      }, null, _parent));
      _push(ssrRenderComponent(_component_c_select, {
        label: "Label",
        "label-position": "left",
        "label-align": "center",
        "mb-2": "",
        "label-width": "200px"
      }, null, _parent));
      _push(ssrRenderComponent(_component_c_select, {
        label: "Label",
        "label-position": "left",
        "label-align": "right",
        "mb-2": "",
        "label-width": "200px"
      }, null, _parent));
      _push(`<h2>Custom displayed value</h2>`);
      _push(ssrRenderComponent(_component_c_select, {
        value: unref(value),
        "onUpdate:value": ($event) => isRef(value) ? value.value = $event : null,
        options: optionsA,
        "mb-2": ""
      }, {
        "displayed-value": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="font-bold lh-normal"${_scopeId}>Hello</span>`);
          } else {
            return [
              createVNode("span", { class: "font-bold lh-normal" }, "Hello")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_c_select, {
        value: unref(value),
        "onUpdate:value": ($event) => isRef(value) ? value.value = $event : null,
        options: optionsA
      }, {
        "displayed-value": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span lh-normal${_scopeId}>`);
            _push2(ssrRenderComponent(_component_icon_mdi_translate, null, null, _parent2, _scopeId));
            _push2(`</span>`);
          } else {
            return [
              createVNode("span", { "lh-normal": "" }, [
                createVNode(_component_icon_mdi_translate)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
});

const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/ui/c-select/c-select.demo.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};

const __vite_glob_0_11 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: _sfc_main$6
}, Symbol.toStringTag, { value: 'Module' }));

const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "c-table",
  __ssrInlineRender: true,
  props: {
    data: { default: () => [] },
    headers: { default: void 0 },
    hideHeaders: { type: Boolean, default: false },
    description: { default: "Data table" }
  },
  setup(__props) {
    const props = __props;
    const { data, headers: rawHeaders, hideHeaders } = toRefs(props);
    const headers = computed(() => {
      if (rawHeaders.value) {
        if (Array.isArray(rawHeaders.value)) {
          return rawHeaders.value.map((value) => {
            if (typeof value === "string") {
              return { key: value, label: value };
            }
            const { key, label } = value;
            return {
              key,
              label: label ?? key
            };
          });
        }
        return _.map(rawHeaders.value, (value, key) => ({
          key,
          label: value
        }));
      }
      return _.chain(data.value).map((row) => Object.keys(row)).flatten().uniq().map((key) => ({ key, label: key })).value();
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative overflow-x-auto rounded" }, _attrs))}><table class="w-full border-collapse text-left text-sm text-gray-500 dark:text-gray-400" role="table"${ssrRenderAttr("aria-label", _ctx.description)}>`);
      if (!unref(hideHeaders)) {
        _push(`<thead class="bg-#ffffff uppercase text-gray-700 dark:bg-#333333 dark:text-gray-400" border-b="1px solid dark:transparent #efeff5"><tr><!--[-->`);
        ssrRenderList(unref(headers), (header) => {
          _push(`<th scope="col" class="px-6 py-3 text-xs">${ssrInterpolate(header.label)}</th>`);
        });
        _push(`<!--]--></tr></thead>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<tbody><!--[-->`);
      ssrRenderList(unref(data), (row, i) => {
        _push(`<tr border-b="1px solid dark:#282828 #efeff5" class="${ssrRenderClass([{
          "important:border-b-none": i === unref(data).length - 1
        }, "bg-white dark:bg-#232323"])}"><!--[-->`);
        ssrRenderList(unref(headers), (header) => {
          _push(`<td class="px-6 py-4">`);
          ssrRenderSlot(_ctx.$slots, header.key, {
            row,
            headers: unref(headers),
            value: row[header.key]
          }, () => {
            _push(`${ssrInterpolate(row[header.key])}`);
          }, _push, _parent);
          _push(`</td>`);
        });
        _push(`<!--]--></tr>`);
      });
      _push(`<!--]--></tbody></table></div>`);
    };
  }
});

const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/ui/c-table/c-table.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};

const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "c-table.demo",
  __ssrInlineRender: true,
  setup(__props) {
    const data = ref([
      { name: "John", age: 20 },
      { name: "Jane", age: 24 },
      { name: "Joe", age: 30 }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_c_table = _sfc_main$5;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_c_table, {
        data: unref(data),
        "mb-2": ""
      }, null, _parent));
      _push(ssrRenderComponent(_component_c_table, {
        data: unref(data),
        "hide-headers": "",
        "mb-2": ""
      }, null, _parent));
      _push(ssrRenderComponent(_component_c_table, {
        data: unref(data),
        headers: ["age", "name"],
        "mb-2": ""
      }, null, _parent));
      _push(ssrRenderComponent(_component_c_table, {
        data: unref(data),
        headers: ["age", { key: "name", label: "Full name" }],
        "mb-2": ""
      }, null, _parent));
      _push(ssrRenderComponent(_component_c_table, {
        data: unref(data),
        headers: { name: "full name" },
        "mb-2": ""
      }, null, _parent));
      _push(ssrRenderComponent(_component_c_table, {
        data: unref(data),
        headers: ["age", "name"]
      }, {
        age: withCtx(({ value }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(value)}yo `);
          } else {
            return [
              createTextVNode(toDisplayString(value) + "yo ", 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
});

const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/ui/c-table/c-table.demo.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};

const __vite_glob_0_12 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: _sfc_main$4
}, Symbol.toStringTag, { value: 'Module' }));

const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "c-text-copyable",
  __ssrInlineRender: true,
  props: {
    value: { default: "" },
    displayedValue: { default: void 0 },
    showIcon: { type: Boolean, default: true }
  },
  setup(__props) {
    const props = __props;
    const { value, displayedValue, showIcon } = toRefs(props);
    const { copy, isJustCopied } = useCopy({ source: value, createToast: false });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_c_tooltip = _sfc_main$I;
      const _component_icon_mdi_content_copy = __unplugin_components_5;
      _push(ssrRenderComponent(_component_c_tooltip, mergeProps({
        tooltip: unref(isJustCopied) ? "Copied!" : "Copy to clipboard",
        "cursor-pointer": "",
        onClick: unref(copy)
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span flex items-center gap-2${_scopeId}>${ssrInterpolate(unref(displayedValue) ?? unref(value))} `);
            if (unref(showIcon)) {
              _push2(ssrRenderComponent(_component_icon_mdi_content_copy, { "op-40": "" }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`</span>`);
          } else {
            return [
              createVNode("span", {
                flex: "",
                "items-center": "",
                "gap-2": ""
              }, [
                createTextVNode(toDisplayString(unref(displayedValue) ?? unref(value)) + " ", 1),
                unref(showIcon) ? (openBlock(), createBlock(_component_icon_mdi_content_copy, {
                  key: 0,
                  "op-40": ""
                })) : createCommentVNode("", true)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});

const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/ui/c-text-copyable/c-text-copyable.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};

const _sfc_main$2 = {};

function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_c_text_copyable = _sfc_main$3;

  _push(ssrRenderComponent(_component_c_text_copyable, mergeProps({
    value: "value",
    "displayed-value": "displayedValue"
  }, _attrs), null, _parent));
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("src/ui/c-text-copyable/c-text-copyable.demo.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : undefined
};
const cTextCopyable_demo = /*#__PURE__*/_export_sfc(_sfc_main$2, [['ssrRender',_sfc_ssrRender]]);

const __vite_glob_0_13 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: cTextCopyable_demo
}, Symbol.toStringTag, { value: 'Module' }));

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "c-tooltip.demo",
  __ssrInlineRender: true,
  setup(__props) {
    const positions = ["top", "bottom", "left", "right"];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_c_tooltip = _sfc_main$I;
      const _component_c_button = __unplugin_components_0$5;
      _push(`<!--[--><div>`);
      _push(ssrRenderComponent(_component_c_tooltip, null, {
        tooltip: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Tooltip content `);
          } else {
            return [
              createTextVNode(" Tooltip content ")
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Hover me `);
          } else {
            return [
              createTextVNode(" Hover me ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div mt-5>`);
      _push(ssrRenderComponent(_component_c_tooltip, { tooltip: "Tooltip content" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Hover me `);
          } else {
            return [
              createTextVNode(" Hover me ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div mt-5><h2>Tooltip positions</h2><div class="flex flex-wrap gap-4"><!--[-->`);
      ssrRenderList(positions, (position) => {
        _push(`<div>`);
        _push(ssrRenderComponent(_component_c_tooltip, {
          position,
          tooltip: `Tooltip ${position}`
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_c_button, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(position)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(position), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_c_button, null, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(position), 1)
                  ]),
                  _: 2
                }, 1024)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div></div><!--]-->`);
    };
  }
});

const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/ui/c-tooltip/c-tooltip.demo.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};

const __vite_glob_0_14 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: _sfc_main$1
}, Symbol.toStringTag, { value: 'Module' }));

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "demo-home.page",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_c_button = __unplugin_components_0$5;
      _push(`<div${ssrRenderAttrs(mergeProps({
        grid: "",
        "grid-cols-5": "",
        "gap-2": ""
      }, _attrs))}><!--[-->`);
      ssrRenderList(unref(demoRoutes), ({ name }) => {
        _push(ssrRenderComponent(_component_c_button, {
          key: name,
          to: { name }
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(name)}`);
            } else {
              return [
                createTextVNode(toDisplayString(name), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div>`);
    };
  }
});

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/ui/demo/demo-home.page.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

const demoPages = /* #__PURE__ */ Object.assign({"../c-alert/c-alert.demo.vue": __vite_glob_0_0,"../c-button/c-button.demo.vue": __vite_glob_0_1,"../c-buttons-select/c-buttons-select.demo.vue": __vite_glob_0_2,"../c-card/c-card.demo.vue": __vite_glob_0_3,"../c-collapse/c-collapse.demo.vue": __vite_glob_0_4,"../c-file-upload/c-file-upload.demo.vue": __vite_glob_0_5,"../c-input-text/c-input-text.demo.vue": __vite_glob_0_6,"../c-link/c-link.demo.vue": __vite_glob_0_7,"../c-markdown/c-markdown.demo.vue": __vite_glob_0_8,"../c-modal-value/c-modal-value.demo.vue": __vite_glob_0_9,"../c-modal/c-modal.demo.vue": __vite_glob_0_10,"../c-select/c-select.demo.vue": __vite_glob_0_11,"../c-table/c-table.demo.vue": __vite_glob_0_12,"../c-text-copyable/c-text-copyable.demo.vue": __vite_glob_0_13,"../c-tooltip/c-tooltip.demo.vue": __vite_glob_0_14});
const demoRoutes = Object.keys(demoPages).map((demoComponentPath) => {
  const [, , fileName] = demoComponentPath.split("/");
  const demoComponentName = fileName.split(".").shift();
  return {
    path: demoComponentName,
    name: demoComponentName,
    component: () => import(
      /* @vite-ignore */
      demoComponentPath
    )
  };
});
const routes = [
  {
    path: "/c-lib",
    name: "c-lib",
    children: [
      {
        path: "",
        name: "c-lib-index",
        component: _sfc_main
      },
      ...demoRoutes
    ],
    component: () => import('./assets/demo-wrapper-f22e7a9f.js')
  }
];

const toolsRoutes = tools.map(({ path, name, component, ...config2 }) => ({
  path,
  name,
  component,
  meta: { isTool: true, layout: layouts.toolLayout, name, ...config2 }
}));
const toolsRedirectRoutes = tools.filter(({ redirectFrom }) => redirectFrom && redirectFrom.length > 0).flatMap(
  ({ path, redirectFrom }) => redirectFrom?.map((redirectSource) => ({ path: redirectSource, redirect: path })) ?? []
);
const router = createRouter({
  history: createMemoryHistory(config.app.baseUrl),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage
    },
    {
      path: "/about",
      name: "about",
      component: () => import('./assets/About-1e10153d.js')
    },
    ...toolsRoutes,
    ...toolsRedirectRoutes,
    ...config.app.env === "development" ? routes : [],
    { path: "/:pathMatch(.*)*", name: "NotFound", component: _sfc_main$o }
  ]
});

function createApp() {
  const app = createSSRApp(_sfc_main$t);
  const pinia = createPinia();
  app.use(pinia);
  app.use(createHead());
  app.use(i18nPlugin);
  app.use(router);
  app.use(plausible);
  app.use(naive);
  return { app, router, pinia, i18n: i18nPlugin };
}

const __uno = '';

async function render() {
  const { app, router, pinia, i18n } = createApp();
  const { collect } = setup(app);
  const appHtml = await renderToString(app);
  const cssHtml = collect();
  return {
    cssHtml,
    appHtml,
    app,
    router,
    pinia,
    i18n
  };
}

export { _sfc_main$b as _, __unplugin_components_0$5 as a, useCopy as b, __unplugin_components_1$1 as c, demoRoutes as d, __unplugin_components_3$1 as e, _sfc_main$f as f, _export_sfc as g, __unplugin_components_0$3 as h, __unplugin_components_3 as i, _sfc_main$5 as j, _sfc_main$9 as k, _sfc_main$k as l, _sfc_main$3 as m, __unplugin_components_5 as n, useStyleStore as o, useFuzzySearch as p, __unplugin_components_1$2 as q, useAppTheme as r, render, codesByCategories as s, _sfc_main$I as t, useValidation as u, randFromArray as v, randIntFromInterval as w, shuffleString as x };
