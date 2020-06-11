<template>
  <span
    :aria-level="level"
    :class="{
      'text-2xl': level === 1,
      'text-xl': level === 2,
      'text-lg': level === 3,
      'text-md': level === 4,
      'text-sm': level === 5,
      'text-xs': level === 6
    }"
    class="font-semibold"
    role="heading"
  >
    <slot name="default" />
  </span>
</template>

<script>
export default {
  name: 'Heading',
  props: {
    level: {
      default: 1,
      type: Number
    }
  }
}
</script>
