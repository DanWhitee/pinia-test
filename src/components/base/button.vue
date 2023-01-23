<template>
  <button
    class="base-button"
    @click="$emit('onClick')"
  >
    <slot />
  </button>
</template>

<script setup>
import { defineComponent } from 'vue'

defineComponent({
  name: 'BButton'
})
</script>

<style scoped lang="scss">
.base-button {
  width: 100%;

  padding: 19px;

  background: $blue;
  color: $white;
  border-radius: $border-md;
}
</style>