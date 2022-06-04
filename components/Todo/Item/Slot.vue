<template>
  <div class="slotContainer">
    <span class="slot"><slot></slot></span>
    <span>
      <StarFilledIcon v-for="_ in startCount" :key="_" class="startIcon" style="color: red" />
    </span>
  </div>
</template>
<script lang="ts" setup>
import { computed } from 'vue'
import { StarFilledIcon } from 'tdesign-icons-vue-next';

interface TypeItemProps {
  isBold?: boolean
  textDecoration?: 'underline' | 'line-through'
  popupContent?: string
  popupDirection?: 'top' | 'left' | 'right' | 'bottom' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'left-top' | 'left-bottom' | 'right-top' | 'right-bottom'
  startCount?: 0 | 1 | 2 | 3 | 4 | 5
}

const props = defineProps<TypeItemProps>()
const fontWeight = computed(() => props.isBold ? 900 : 400)
const maxItemWidth = computed(() => props.startCount ? `calc(100% - ${props.startCount * 20}px)` : '100%')

</script>
<style lang="less" scoped>
.slotContainer {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  word-wrap: break-word;
  color: black;
  font-weight: v-bind(fontWeight);
  text-decoration: v-bind(textDecoration);
  .slot {
      max-width: v-bind(maxItemWidth);
  }
  .startIcon {
      line-height: 100%;
  }
}
</style>