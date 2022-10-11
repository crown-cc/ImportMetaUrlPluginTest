import { defineConfig } from "vite";
import vitePluginInspect from 'vite-plugin-inspect'
import vitePluginInsert from '../../index'

/**
 * It behaves differently if import plugin from package,
 * uncomment line 10 and comment line 3,
 * then try it.
 */
// import vitePluginInsert from 'vite-plugin-insert'

export default defineConfig({
  plugins: [
    vitePluginInspect(),
    vitePluginInsert()
  ]
})