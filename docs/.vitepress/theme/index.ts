import Theme from 'vitepress/dist/client/theme-default'
import Components from '@components/index'

export default {
  ...Theme,
  enhanceApp({ app }: any) {
    Components.forEach(({ name, component }) => app.component(name, component))
  }
}  
