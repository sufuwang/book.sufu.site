declare module 'vitepress/dist/client/theme-default' {
  const Theme: any
  export default Theme
}

declare module '*.vue' {
  import { defineComponent } from 'vue'
  const Component: ReturnType<typeof defineComponent>
  export default Component
}
