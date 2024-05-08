import { b as useCopy, e as __unplugin_components_3, t as _sfc_main$1, a as __unplugin_components_0, n as __unplugin_components_5 } from '../entry-server.js';
import { defineComponent, computed, mergeProps, unref, isRef, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { useVModel } from '@vueuse/core';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "InputCopyable",
  __ssrInlineRender: true,
  props: {
    value: {}
  },
  emits: ["update:value"],
  setup(__props, { emit }) {
    const props = __props;
    const value = useVModel(props, "value", emit);
    const { copy, isJustCopied } = useCopy({ source: value, createToast: false });
    const tooltipText = computed(() => isJustCopied.value ? "Copied!" : "Copy to clipboard");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_c_input_text = __unplugin_components_3;
      const _component_c_tooltip = _sfc_main$1;
      const _component_c_button = __unplugin_components_0;
      const _component_icon_mdi_content_copy = __unplugin_components_5;
      _push(ssrRenderComponent(_component_c_input_text, mergeProps({
        value: unref(value),
        "onUpdate:value": ($event) => isRef(value) ? value.value = $event : null
      }, _attrs), {
        suffix: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_c_tooltip, { tooltip: unref(tooltipText) }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_c_button, {
                    circle: "",
                    variant: "text",
                    size: "small",
                    onClick: ($event) => unref(copy)()
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_icon_mdi_content_copy, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_icon_mdi_content_copy)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_c_button, {
                      circle: "",
                      variant: "text",
                      size: "small",
                      onClick: ($event) => unref(copy)()
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_icon_mdi_content_copy)
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
              createVNode(_component_c_tooltip, { tooltip: unref(tooltipText) }, {
                default: withCtx(() => [
                  createVNode(_component_c_button, {
                    circle: "",
                    variant: "text",
                    size: "small",
                    onClick: ($event) => unref(copy)()
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_icon_mdi_content_copy)
                    ]),
                    _: 1
                  }, 8, ["onClick"])
                ]),
                _: 1
              }, 8, ["tooltip"])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/InputCopyable.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
