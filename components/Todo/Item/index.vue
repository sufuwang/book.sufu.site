<template>
  <t-checkbox class="item_container">
    <t-popup
      v-if="popupContent"
      class="placement right-full align"
      :content="popupContent"
      :placement="popupDirection || 'right'"
      show-arrow
      destroy-on-close
    >
      <div class="slot">
        <Slot :isBold="isBold" :textDecoration="textDecoration" :startCount="startCount">
          <slot></slot>
        </Slot>
      </div>
    </t-popup>
    <template v-else>
      <Slot :isBold="isBold" :textDecoration="textDecoration" :startCount="startCount">
        <slot></slot>
      </Slot>
    </template>
  </t-checkbox>
</template>
<script lang="ts" setup>
import Slot from './Slot.vue'

interface TypeItemProps {
  isBold?: boolean
  textDecoration?: 'underline' | 'line-through'
  popupContent?: string
  popupDirection?: 'top' | 'left' | 'right' | 'bottom' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'left-top' | 'left-bottom' | 'right-top' | 'right-bottom'
  startCount?: 0 | 1 | 2 | 3 | 4 | 5
}
const props = defineProps<TypeItemProps>()

</script>
<style lang="less" scoped>
.item_container {
  width: 100%;
  padding: 4px 0px 4px 4px;
  :deep(.t-checkbox__label) {
    width: calc(100% - 34px);
  }
  :deep(.t-popup__reference) {
    width: 100%;
  }
}
</style>
