import { defineConfig } from 'umi';
const { ModuleFederationPlugin } = require("webpack").container;
export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
  ],
  manifest: {
    basePath: '/',
  },
  fastRefresh: {},
  webpack5: {},
  dynamicImport: {},
  chainWebpack(memo) {
    memo
      .plugin('mf')
      .use(ModuleFederationPlugin, [{
        name: "mf2",
        remotes: {
          'core': 'core@http://192.168.11.34:3000/remoteEntry.js',
        },
        shared: { react: { eager: true }, "react-dom": { eager: true } },
      }])
  },
});
