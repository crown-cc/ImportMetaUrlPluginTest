import { defineConfig } from "vite";
import vitePluginInspect from 'vite-plugin-inspect'
import vitePluginInsert from '../../index'

export default defineConfig({
  plugins: [
    vitePluginInspect(),
    vitePluginInsert()
  ]
})