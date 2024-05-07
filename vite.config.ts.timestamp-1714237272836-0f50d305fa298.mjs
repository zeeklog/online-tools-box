// vite.config.ts
import { resolve } from "node:path";
import { URL, fileURLToPath } from "node:url";
import VueI18n from "file:///root/it-tools/node_modules/.pnpm/@intlify+unplugin-vue-i18n@2.0.0_rollup@3.28.0_vue-i18n@9.9.1_vue@3.3.4_/node_modules/@intlify/unplugin-vue-i18n/lib/vite.mjs";
import vue from "file:///root/it-tools/node_modules/.pnpm/@vitejs+plugin-vue@4.3.2_vite@4.4.9_@types+node@18.15.11_less@4.1.3_terser@5.24.0__vue@3.3.4/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import vueJsx from "file:///root/it-tools/node_modules/.pnpm/@vitejs+plugin-vue-jsx@3.0.2_vite@4.4.9_@types+node@18.15.11_less@4.1.3_terser@5.24.0__vue@3.3.4/node_modules/@vitejs/plugin-vue-jsx/dist/index.mjs";
import Unocss from "file:///root/it-tools/node_modules/.pnpm/unocss@0.57.1_postcss@8.4.31_rollup@3.28.0_vite@4.4.9_@types+node@18.15.11_less@4.1.3_terser@5.24.0_/node_modules/unocss/dist/vite.mjs";
import AutoImport from "file:///root/it-tools/node_modules/.pnpm/unplugin-auto-import@0.16.4_@vueuse+core@10.3.0_vue@3.3.4__rollup@3.28.0/node_modules/unplugin-auto-import/dist/vite.js";
import IconsResolver from "file:///root/it-tools/node_modules/.pnpm/unplugin-icons@0.17.0_@vue+compiler-sfc@3.2.47_vue-template-compiler@2.7.14/node_modules/unplugin-icons/dist/resolver.mjs";
import Icons from "file:///root/it-tools/node_modules/.pnpm/unplugin-icons@0.17.0_@vue+compiler-sfc@3.2.47_vue-template-compiler@2.7.14/node_modules/unplugin-icons/dist/vite.mjs";
import { NaiveUiResolver } from "file:///root/it-tools/node_modules/.pnpm/unplugin-vue-components@0.25.0_@babel+parser@7.24.4_rollup@3.28.0_vue@3.3.4/node_modules/unplugin-vue-components/dist/resolvers.mjs";
import Components from "file:///root/it-tools/node_modules/.pnpm/unplugin-vue-components@0.25.0_@babel+parser@7.24.4_rollup@3.28.0_vue@3.3.4/node_modules/unplugin-vue-components/dist/vite.mjs";
import { defineConfig } from "file:///root/it-tools/node_modules/.pnpm/vite@4.4.9_@types+node@18.15.11_less@4.1.3_terser@5.24.0/node_modules/vite/dist/node/index.js";
import markdown from "file:///root/it-tools/node_modules/.pnpm/vite-plugin-vue-markdown@0.23.5_rollup@3.28.0_vite@4.4.9_@types+node@18.15.11_less@4.1.3_terser@5.24.0_/node_modules/vite-plugin-vue-markdown/dist/index.mjs";
import svgLoader from "file:///root/it-tools/node_modules/.pnpm/vite-svg-loader@4.0.0/node_modules/vite-svg-loader/index.js";
import { configDefaults } from "file:///root/it-tools/node_modules/.pnpm/vitest@0.34.0_jsdom@22.0.0_less@4.1.3_terser@5.24.0/node_modules/vitest/dist/config.js";
import { ssr } from "file:///root/it-tools/node_modules/.pnpm/vite-plugin-ssr@0.4.142_vite@4.4.9_@types+node@18.15.11_less@4.1.3_terser@5.24.0_/node_modules/vite-plugin-ssr/dist/esm/node/plugin/index.js";
var __vite_injected_original_dirname = "/root/it-tools";
var __vite_injected_original_import_meta_url = "file:///root/it-tools/vite.config.ts";
var baseUrl = process.env.BASE_URL ?? "/";
var vite_config_default = defineConfig({
  plugins: [
    VueI18n({
      runtimeOnly: true,
      jitCompilation: true,
      compositionOnly: true,
      fullInstall: true,
      strictMessage: false,
      include: [
        resolve(__vite_injected_original_dirname, "locales/**")
      ]
    }),
    AutoImport({
      imports: [
        "vue",
        "vue-router",
        "@vueuse/core",
        "vue-i18n",
        {
          "naive-ui": ["useDialog", "useMessage", "useNotification", "useLoadingBar"]
        }
      ],
      vueTemplate: true,
      eslintrc: {
        enabled: true
      }
    }),
    Icons({ compiler: "vue3" }),
    vue({
      include: [/\.vue$/, /\.md$/]
    }),
    vueJsx(),
    markdown(),
    svgLoader(),
    // VitePWA({
    //   registerType: 'autoUpdate',
    //   strategies: 'generateSW',
    //   manifest: {
    //     name: 'Zeeklog Online Tools',
    //     description: 'Aggregated set of useful tools for developers.',
    //     display: 'standalone',
    //     lang: 'fr-FR',
    //     start_url: `${baseUrl}?utm_source=pwa&utm_medium=pwa`,
    //     orientation: 'any',
    //     theme_color: '#18a058',
    //     background_color: '#f1f5f9',
    //     icons: [
    //       {
    //         src: '/favicon-16x16.png',
    //         type: 'image/png',
    //         sizes: '16x16',
    //       },
    //       {
    //         src: '/favicon-32x32.png',
    //         type: 'image/png',
    //         sizes: '32x32',
    //       },
    //       {
    //         src: '/android-chrome-192x192.png',
    //         sizes: '192x192',
    //         type: 'image/png',
    //       },
    //       {
    //         src: '/android-chrome-512x512.png',
    //         sizes: '512x512',
    //         type: 'image/png',
    //         purpose: 'any maskable',
    //       },
    //     ],
    //   },
    // }),
    Components({
      dirs: ["src/"],
      extensions: ["vue", "md"],
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      resolvers: [NaiveUiResolver(), IconsResolver({ prefix: "icon" })]
    }),
    Unocss(),
    ssr()
  ],
  base: baseUrl,
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", __vite_injected_original_import_meta_url))
    }
  },
  define: {
    "import.meta.env.PACKAGE_VERSION": JSON.stringify(process.env.npm_package_version)
  },
  test: {
    exclude: [...configDefaults.exclude, "**/*.e2e.spec.ts"]
  },
  build: {
    target: "esnext",
    rollupOptions: {
      // 指定入口文件
      input: {
        main: "./src/entry-client.ts",
        // 你也可以在这里指定服务器端入口，例如：
        server: "./src/entry-server.ts"
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvcm9vdC9pdC10b29sc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL3Jvb3QvaXQtdG9vbHMvdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL3Jvb3QvaXQtdG9vbHMvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyByZXNvbHZlIH0gZnJvbSAnbm9kZTpwYXRoJztcbmltcG9ydCB7IFVSTCwgZmlsZVVSTFRvUGF0aCB9IGZyb20gJ25vZGU6dXJsJztcblxuaW1wb3J0IFZ1ZUkxOG4gZnJvbSAnQGludGxpZnkvdW5wbHVnaW4tdnVlLWkxOG4vdml0ZSc7XG5pbXBvcnQgdnVlIGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZSc7XG5pbXBvcnQgdnVlSnN4IGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZS1qc3gnO1xuaW1wb3J0IFVub2NzcyBmcm9tICd1bm9jc3Mvdml0ZSc7XG5pbXBvcnQgQXV0b0ltcG9ydCBmcm9tICd1bnBsdWdpbi1hdXRvLWltcG9ydC92aXRlJztcbmltcG9ydCBJY29uc1Jlc29sdmVyIGZyb20gJ3VucGx1Z2luLWljb25zL3Jlc29sdmVyJztcbmltcG9ydCBJY29ucyBmcm9tICd1bnBsdWdpbi1pY29ucy92aXRlJztcbmltcG9ydCB7IE5haXZlVWlSZXNvbHZlciB9IGZyb20gJ3VucGx1Z2luLXZ1ZS1jb21wb25lbnRzL3Jlc29sdmVycyc7XG5pbXBvcnQgQ29tcG9uZW50cyBmcm9tICd1bnBsdWdpbi12dWUtY29tcG9uZW50cy92aXRlJztcbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnO1xuXG4vLyBpbXBvcnQgeyBWaXRlUFdBIH0gZnJvbSAndml0ZS1wbHVnaW4tcHdhJztcbmltcG9ydCBtYXJrZG93biBmcm9tICd2aXRlLXBsdWdpbi12dWUtbWFya2Rvd24nO1xuaW1wb3J0IHN2Z0xvYWRlciBmcm9tICd2aXRlLXN2Zy1sb2FkZXInO1xuaW1wb3J0IHsgY29uZmlnRGVmYXVsdHMgfSBmcm9tICd2aXRlc3QvY29uZmlnJztcblxuaW1wb3J0IHsgc3NyIH0gZnJvbSAndml0ZS1wbHVnaW4tc3NyL3BsdWdpbic7XG5cbmNvbnN0IGJhc2VVcmwgPSBwcm9jZXNzLmVudi5CQVNFX1VSTCA/PyAnLyc7XG5cbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBwbHVnaW5zOiBbXG4gICAgVnVlSTE4bih7XG4gICAgICBydW50aW1lT25seTogdHJ1ZSxcbiAgICAgIGppdENvbXBpbGF0aW9uOiB0cnVlLFxuICAgICAgY29tcG9zaXRpb25Pbmx5OiB0cnVlLFxuICAgICAgZnVsbEluc3RhbGw6IHRydWUsXG4gICAgICBzdHJpY3RNZXNzYWdlOiBmYWxzZSxcbiAgICAgIGluY2x1ZGU6IFtcbiAgICAgICAgcmVzb2x2ZShfX2Rpcm5hbWUsICdsb2NhbGVzLyoqJyksXG4gICAgICBdLFxuICAgIH0pLFxuICAgIEF1dG9JbXBvcnQoe1xuICAgICAgaW1wb3J0czogW1xuICAgICAgICAndnVlJyxcbiAgICAgICAgJ3Z1ZS1yb3V0ZXInLFxuICAgICAgICAnQHZ1ZXVzZS9jb3JlJyxcbiAgICAgICAgJ3Z1ZS1pMThuJyxcbiAgICAgICAge1xuICAgICAgICAgICduYWl2ZS11aSc6IFsndXNlRGlhbG9nJywgJ3VzZU1lc3NhZ2UnLCAndXNlTm90aWZpY2F0aW9uJywgJ3VzZUxvYWRpbmdCYXInXSxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgICB2dWVUZW1wbGF0ZTogdHJ1ZSxcbiAgICAgIGVzbGludHJjOiB7XG4gICAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICB9LFxuICAgIH0pLFxuICAgIEljb25zKHsgY29tcGlsZXI6ICd2dWUzJyB9KSxcbiAgICB2dWUoe1xuICAgICAgaW5jbHVkZTogWy9cXC52dWUkLywgL1xcLm1kJC9dLFxuICAgIH0pLFxuICAgIHZ1ZUpzeCgpLFxuICAgIG1hcmtkb3duKCksXG4gICAgc3ZnTG9hZGVyKCksXG4gICAgLy8gVml0ZVBXQSh7XG4gICAgLy8gICByZWdpc3RlclR5cGU6ICdhdXRvVXBkYXRlJyxcbiAgICAvLyAgIHN0cmF0ZWdpZXM6ICdnZW5lcmF0ZVNXJyxcbiAgICAvLyAgIG1hbmlmZXN0OiB7XG4gICAgLy8gICAgIG5hbWU6ICdaZWVrbG9nIE9ubGluZSBUb29scycsXG4gICAgLy8gICAgIGRlc2NyaXB0aW9uOiAnQWdncmVnYXRlZCBzZXQgb2YgdXNlZnVsIHRvb2xzIGZvciBkZXZlbG9wZXJzLicsXG4gICAgLy8gICAgIGRpc3BsYXk6ICdzdGFuZGFsb25lJyxcbiAgICAvLyAgICAgbGFuZzogJ2ZyLUZSJyxcbiAgICAvLyAgICAgc3RhcnRfdXJsOiBgJHtiYXNlVXJsfT91dG1fc291cmNlPXB3YSZ1dG1fbWVkaXVtPXB3YWAsXG4gICAgLy8gICAgIG9yaWVudGF0aW9uOiAnYW55JyxcbiAgICAvLyAgICAgdGhlbWVfY29sb3I6ICcjMThhMDU4JyxcbiAgICAvLyAgICAgYmFja2dyb3VuZF9jb2xvcjogJyNmMWY1ZjknLFxuICAgIC8vICAgICBpY29uczogW1xuICAgIC8vICAgICAgIHtcbiAgICAvLyAgICAgICAgIHNyYzogJy9mYXZpY29uLTE2eDE2LnBuZycsXG4gICAgLy8gICAgICAgICB0eXBlOiAnaW1hZ2UvcG5nJyxcbiAgICAvLyAgICAgICAgIHNpemVzOiAnMTZ4MTYnLFxuICAgIC8vICAgICAgIH0sXG4gICAgLy8gICAgICAge1xuICAgIC8vICAgICAgICAgc3JjOiAnL2Zhdmljb24tMzJ4MzIucG5nJyxcbiAgICAvLyAgICAgICAgIHR5cGU6ICdpbWFnZS9wbmcnLFxuICAgIC8vICAgICAgICAgc2l6ZXM6ICczMngzMicsXG4gICAgLy8gICAgICAgfSxcbiAgICAvLyAgICAgICB7XG4gICAgLy8gICAgICAgICBzcmM6ICcvYW5kcm9pZC1jaHJvbWUtMTkyeDE5Mi5wbmcnLFxuICAgIC8vICAgICAgICAgc2l6ZXM6ICcxOTJ4MTkyJyxcbiAgICAvLyAgICAgICAgIHR5cGU6ICdpbWFnZS9wbmcnLFxuICAgIC8vICAgICAgIH0sXG4gICAgLy8gICAgICAge1xuICAgIC8vICAgICAgICAgc3JjOiAnL2FuZHJvaWQtY2hyb21lLTUxMng1MTIucG5nJyxcbiAgICAvLyAgICAgICAgIHNpemVzOiAnNTEyeDUxMicsXG4gICAgLy8gICAgICAgICB0eXBlOiAnaW1hZ2UvcG5nJyxcbiAgICAvLyAgICAgICAgIHB1cnBvc2U6ICdhbnkgbWFza2FibGUnLFxuICAgIC8vICAgICAgIH0sXG4gICAgLy8gICAgIF0sXG4gICAgLy8gICB9LFxuICAgIC8vIH0pLFxuICAgIENvbXBvbmVudHMoe1xuICAgICAgZGlyczogWydzcmMvJ10sXG4gICAgICBleHRlbnNpb25zOiBbJ3Z1ZScsICdtZCddLFxuICAgICAgaW5jbHVkZTogWy9cXC52dWUkLywgL1xcLnZ1ZVxcP3Z1ZS8sIC9cXC5tZCQvXSxcbiAgICAgIHJlc29sdmVyczogW05haXZlVWlSZXNvbHZlcigpLCBJY29uc1Jlc29sdmVyKHsgcHJlZml4OiAnaWNvbicgfSldLFxuICAgIH0pLFxuICAgIFVub2NzcygpLFxuICAgIHNzcigpLFxuICBdLFxuICBiYXNlOiBiYXNlVXJsLFxuICByZXNvbHZlOiB7XG4gICAgYWxpYXM6IHtcbiAgICAgICdAJzogZmlsZVVSTFRvUGF0aChuZXcgVVJMKCcuL3NyYycsIGltcG9ydC5tZXRhLnVybCkpLFxuICAgIH0sXG4gIH0sXG4gIGRlZmluZToge1xuICAgICdpbXBvcnQubWV0YS5lbnYuUEFDS0FHRV9WRVJTSU9OJzogSlNPTi5zdHJpbmdpZnkocHJvY2Vzcy5lbnYubnBtX3BhY2thZ2VfdmVyc2lvbiksXG4gIH0sXG4gIHRlc3Q6IHtcbiAgICBleGNsdWRlOiBbLi4uY29uZmlnRGVmYXVsdHMuZXhjbHVkZSwgJyoqLyouZTJlLnNwZWMudHMnXSxcbiAgfSxcbiAgYnVpbGQ6IHtcbiAgICB0YXJnZXQ6ICdlc25leHQnLFxuICAgIHJvbGx1cE9wdGlvbnM6IHtcbiAgICAgIC8vIFx1NjMwN1x1NUI5QVx1NTE2NVx1NTNFM1x1NjU4N1x1NEVGNlxuICAgICAgaW5wdXQ6IHtcbiAgICAgICAgbWFpbjogJy4vc3JjL2VudHJ5LWNsaWVudC50cycsXG4gICAgICAgIC8vIFx1NEY2MFx1NEU1Rlx1NTNFRlx1NEVFNVx1NTcyOFx1OEZEOVx1OTFDQ1x1NjMwN1x1NUI5QVx1NjcwRFx1NTJBMVx1NTY2OFx1N0FFRlx1NTE2NVx1NTNFM1x1RkYwQ1x1NEY4Qlx1NTk4Mlx1RkYxQVxuICAgICAgICBzZXJ2ZXI6ICcuL3NyYy9lbnRyeS1zZXJ2ZXIudHMnLFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQTROLFNBQVMsZUFBZTtBQUNwUCxTQUFTLEtBQUsscUJBQXFCO0FBRW5DLE9BQU8sYUFBYTtBQUNwQixPQUFPLFNBQVM7QUFDaEIsT0FBTyxZQUFZO0FBQ25CLE9BQU8sWUFBWTtBQUNuQixPQUFPLGdCQUFnQjtBQUN2QixPQUFPLG1CQUFtQjtBQUMxQixPQUFPLFdBQVc7QUFDbEIsU0FBUyx1QkFBdUI7QUFDaEMsT0FBTyxnQkFBZ0I7QUFDdkIsU0FBUyxvQkFBb0I7QUFHN0IsT0FBTyxjQUFjO0FBQ3JCLE9BQU8sZUFBZTtBQUN0QixTQUFTLHNCQUFzQjtBQUUvQixTQUFTLFdBQVc7QUFuQnBCLElBQU0sbUNBQW1DO0FBQTJGLElBQU0sMkNBQTJDO0FBcUJyTCxJQUFNLFVBQVUsUUFBUSxJQUFJLFlBQVk7QUFHeEMsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUztBQUFBLElBQ1AsUUFBUTtBQUFBLE1BQ04sYUFBYTtBQUFBLE1BQ2IsZ0JBQWdCO0FBQUEsTUFDaEIsaUJBQWlCO0FBQUEsTUFDakIsYUFBYTtBQUFBLE1BQ2IsZUFBZTtBQUFBLE1BQ2YsU0FBUztBQUFBLFFBQ1AsUUFBUSxrQ0FBVyxZQUFZO0FBQUEsTUFDakM7QUFBQSxJQUNGLENBQUM7QUFBQSxJQUNELFdBQVc7QUFBQSxNQUNULFNBQVM7QUFBQSxRQUNQO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFVBQ0UsWUFBWSxDQUFDLGFBQWEsY0FBYyxtQkFBbUIsZUFBZTtBQUFBLFFBQzVFO0FBQUEsTUFDRjtBQUFBLE1BQ0EsYUFBYTtBQUFBLE1BQ2IsVUFBVTtBQUFBLFFBQ1IsU0FBUztBQUFBLE1BQ1g7QUFBQSxJQUNGLENBQUM7QUFBQSxJQUNELE1BQU0sRUFBRSxVQUFVLE9BQU8sQ0FBQztBQUFBLElBQzFCLElBQUk7QUFBQSxNQUNGLFNBQVMsQ0FBQyxVQUFVLE9BQU87QUFBQSxJQUM3QixDQUFDO0FBQUEsSUFDRCxPQUFPO0FBQUEsSUFDUCxTQUFTO0FBQUEsSUFDVCxVQUFVO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXNDVixXQUFXO0FBQUEsTUFDVCxNQUFNLENBQUMsTUFBTTtBQUFBLE1BQ2IsWUFBWSxDQUFDLE9BQU8sSUFBSTtBQUFBLE1BQ3hCLFNBQVMsQ0FBQyxVQUFVLGNBQWMsT0FBTztBQUFBLE1BQ3pDLFdBQVcsQ0FBQyxnQkFBZ0IsR0FBRyxjQUFjLEVBQUUsUUFBUSxPQUFPLENBQUMsQ0FBQztBQUFBLElBQ2xFLENBQUM7QUFBQSxJQUNELE9BQU87QUFBQSxJQUNQLElBQUk7QUFBQSxFQUNOO0FBQUEsRUFDQSxNQUFNO0FBQUEsRUFDTixTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTCxLQUFLLGNBQWMsSUFBSSxJQUFJLFNBQVMsd0NBQWUsQ0FBQztBQUFBLElBQ3REO0FBQUEsRUFDRjtBQUFBLEVBQ0EsUUFBUTtBQUFBLElBQ04sbUNBQW1DLEtBQUssVUFBVSxRQUFRLElBQUksbUJBQW1CO0FBQUEsRUFDbkY7QUFBQSxFQUNBLE1BQU07QUFBQSxJQUNKLFNBQVMsQ0FBQyxHQUFHLGVBQWUsU0FBUyxrQkFBa0I7QUFBQSxFQUN6RDtBQUFBLEVBQ0EsT0FBTztBQUFBLElBQ0wsUUFBUTtBQUFBLElBQ1IsZUFBZTtBQUFBO0FBQUEsTUFFYixPQUFPO0FBQUEsUUFDTCxNQUFNO0FBQUE7QUFBQSxRQUVOLFFBQVE7QUFBQSxNQUNWO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
