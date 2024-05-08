import { d as demoRoutes, a as __unplugin_components_0 } from '../entry-server.js';
import { defineComponent, computed, resolveComponent, mergeProps, unref, withCtx, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import _ from 'lodash';
import { useRoute } from 'vue-router';
import '@vue/server-renderer';
import '@css-render/vue3-ssr';
import 'pinia';
import '@vueuse/head';
import 'figue';
import 'naive-ui';
import '@vicons/tabler';
import '@vueuse/core';
import 'date-fns';
import 'vue-i18n/dist/vue-i18n.runtime.esm-bundler.js';
import '@vicons/material';
import 'fuse.js';
import 'marked';
import 'dompurify';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "demo-wrapper",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const componentName = computed(() => _.startCase(String(route.name).replace(/^c-/, "")));
    return (_ctx, _push, _parent, _attrs) => {
      const _component_c_button = __unplugin_components_0;
      const _component_router_view = resolveComponent("router-view");
      _push(`<div${ssrRenderAttrs(mergeProps({
        "mt-2": "",
        "w-full": "",
        "p-8": ""
      }, _attrs))}><h1>c-lib components</h1><div flex><div w-200px b-r b-gray b-op-10 b-r-solid pr-4><!--[-->`);
      ssrRenderList(unref(demoRoutes), ({ name }) => {
        _push(ssrRenderComponent(_component_c_button, {
          key: name,
          variant: "text",
          to: { name },
          "w-full": "",
          "important:justify-start": "",
          "important:text-left": "",
          type: unref(route).name === name ? "primary" : "default"
        }, {
          default: withCtx((_2, _push2, _parent2, _scopeId) => {
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
      _push(`<!--]--></div><div flex-1 pl-4><h1>${ssrInterpolate(unref(componentName))}</h1>`);
      _push(ssrRenderComponent(_component_router_view, null, null, _parent));
      _push(`</div></div></div>`);
    };
  }
});

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/ui/demo/demo-wrapper.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
