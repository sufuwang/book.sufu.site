import path from 'path'
import { defineConfig } from 'vite'
import vueJsx from '@vitejs/plugin-vue-jsx'
import autoImport from 'unplugin-auto-import/vite';
import components from 'unplugin-vue-components/vite';
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
    autoImport({
      resolvers: [TDesignResolver({
        library: 'vue-next',
      })],
      dts: false
    }),
    components({
      resolvers: [TDesignResolver({
        library: 'vue-next',
      })],
    }),
  ],
})
