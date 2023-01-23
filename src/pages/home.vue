<template>
  <b-full-screen
    align-items="center"
    justify-content="center"
  > 
    <b-tolltip>
      <template #tooltip>
        <p class="description">
          {{ store.tooltipText }}
        </p>    
      </template>
      <template #content>
        <b-button
          @onClick="store.increment"
          class="tooltip-button"
        >
          {{ store.amountClick }}
        </b-button>    
      </template>
    </b-tolltip>
  </b-full-screen>
</template>

<script setup>
import BButton from '@/components/base/button.vue'
import BFullScreen from '@/components/base/full-screen.vue'
import BTolltip from '@/components/base/tooltip.vue'

import { defineComponent } from 'vue'
import { useHome } from '@/store/home'

defineComponent({
  name: 'HomePage'
})

const store = useHome()

</script>

<style scoped lang="scss">
.tooltip-button {
  min-width: 200px;
}

.description {
  text-align: center;
}
</style>