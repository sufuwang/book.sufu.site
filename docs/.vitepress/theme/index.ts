import Theme from 'vitepress/dist/client/theme-default'
import Components from '@components/index'
import 'tdesign-vue-next/es/style/index.css'

export default {
  ...Theme,
  enhanceApp({ app }: any) {
    Components.forEach(({ name, component }) => app.component(name, component))
  }
}  
