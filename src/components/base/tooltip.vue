<template>
  <div class="wrapper">
    <div class="tooltip-wrapper">
      <template v-if="switchTooltip">
        <div class="tooltip">
          <img
            class="tooltip__arrow"
            src="@/assets/images/arrow-tooltip.svg"
            alt="arrow-tooltip"
          >
          <slot name="tooltip" />
        </div>
      </template>
    </div>
    <div
      @click="toggle"
      class="content"
      ref="content"
    >
      <slot name="content" />
    </div>
  </div>
</template>

<script setup>
import { defineComponent, watch, ref } from 'vue'

defineComponent({
  name: 'BTolltip'
})

const switchTooltip = ref(false)
const content = ref()

const toggle = () => {
  switchTooltip.value = true
}

const windowClick = e => {
  const el = e.target.closest(`.${content.value.classList.value}`)

  if (!el) {
    switchTooltip.value = false
  }
}

watch(switchTooltip, value => {
  if (value === true) {
    document.addEventListener('click', windowClick)
  } else if (value === false) {
    document.removeEventListener('click', windowClick)
  }
})
</script>

<style scoped lang="scss">
.wrapper {
  position: relative;
}

.tooltip-wrapper {
  position: absolute;
  top: calc(100% + 11px);

  background: $black;
  border-radius: $border-sm;
  color: $white;
}

.tooltip {
  position: relative;

  padding: 10px 12px;

  &__arrow {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, -60%);
  }
}
</style>