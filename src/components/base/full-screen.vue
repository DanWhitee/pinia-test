<template>
  <section
    class="full-screen"
    :style="style"
  >
    <div class="content">
      <slot />
    </div>
  </section>
</template>

<script>
const JUSTIFY_CONTENT = ['center']
const ALIGN_ITEMS = ['center']
</script>

<script setup>
import { defineComponent, defineProps, computed } from 'vue'

defineComponent({
  name: 'BFullScreen'
})

const props = defineProps({
  justifyContent: {
    type: String,
    default: 'baseline',
    validator: position => JUSTIFY_CONTENT.includes(position),
  },
  alignItems: {
    type: String,
    default: 'baseline',
    validator: position => ALIGN_ITEMS.includes(position),
  }
})

const style = computed(() => {
  return `
    justify-content: ${props.justifyContent};
    align-items: ${props.alignItems};
  `
})
</script>

<style lang="scss" scoped>
.full-screen {
  min-height: 100vh;

  display: flex;
}
</style>