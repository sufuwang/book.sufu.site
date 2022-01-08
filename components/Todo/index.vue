<template>
  <Item
    v-for="(item, index) in dataSource"
    :key="index"
    :isBold="item.isBold"
    :textDecoration="item.textDecoration"
    :popupContent="item.popupContent"
    :popupDirection="item.popupDirection"
    :startCount="item.startCount"
  >
    {{ item.content }}
  </Item>
</template>
<script lang="ts" setup>
import Item from './Item/index.vue'

interface TypeDataSource {
  isBold?: boolean
  textDecoration?: 'underline' | 'line-through'
  content: string
  popupContent?: string
  popupDirection?: 'top' | 'left' | 'right' | 'bottom' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'left-top' | 'left-bottom' | 'right-top' | 'right-bottom'
  startCount?: 0 | 1 | 2 | 3 | 4 | 5
}
interface TypeProps {
  dataSource: Array<TypeDataSource>
}
const props = defineProps<TypeProps>()

</script>
