import path from 'path'
import { defineConfig } from 'vite'
import vueJsx from '@vitejs/plugin-vue-jsx'
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { TDesignResolver } from 'unplugin-vue-components/resolvers';

export default defineConfig({
  base: '.',
  resolve: {
    alias: [
      { find: '@components', replacement: path.resolve(__dirname, '../components') },
    ]
  },
  plugins: [
    vueJsx({}),
    AutoImport({
      resolvers: [TDesignResolver({
        library: 'vue-next'
      })],
    }),
    Components({
      resolvers: [TDesignResolver({
        library: 'vue-next'
      })],
    }),
  ],
})
