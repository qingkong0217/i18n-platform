import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
// @ts-ignore
import proxy from './config/proxy'
import react from '@vitejs/plugin-react'

// 由于express代理配置与vite代理不一致，所以需要转换
// FAT PROD
const env = 'DEV'
let convertProxyConfig: any = {}
const proxyConfig = proxy[env]

for (const proxyConfigKey in proxyConfig) {
  const rewriteKey = Object.keys(proxyConfig[proxyConfigKey].pathRewrite)[0]
  const rewriteValue = String(
    Object.values(proxyConfig[proxyConfigKey].pathRewrite)[0]
  )
  convertProxyConfig[proxyConfigKey] = {}
  convertProxyConfig[proxyConfigKey].target = proxyConfig[proxyConfigKey].target
  convertProxyConfig[proxyConfigKey].changeOrigin =
    proxyConfig[proxyConfigKey].changeOrigin
  convertProxyConfig[proxyConfigKey].rewrite = (path: string) =>
    path.replace(rewriteKey, rewriteValue)
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    reactRefresh(),
    react({
    }),
  ],
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        modifyVars: {
          'root-entry-name': 'default'
        }
      },
    },
  },
  resolve: {
    alias: [
      // fix less import by: @import ~
      // less import no support webpack alias '~' · Issue #2185 · vitejs/vite
      { find: /^~/, replacement: '' },
    ],
  },
  server: {
    proxy: convertProxyConfig,
    host: '0.0.0.0',
    port: 8000,
  },
})
