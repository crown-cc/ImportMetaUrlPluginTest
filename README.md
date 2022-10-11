# ImportMetaUrlPluginDemo

It's a demo plugin, that shows if we inject some string codes includes `import.meta.url` into some modules, it may behaves different in Vite v2 and v3 server.

```bash

pnpm install

pnpm run dev2

pnpm run dev3

```

The performance is related to [a issue in Vite v2](https://github.com/vitejs/vite/pull/7846).
