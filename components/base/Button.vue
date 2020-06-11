<template>
  <button
    class="border border-gray-500 flex items-center justify-center rounded px-4 py-2"
    :class="{
      'bg-gray-800 text-white': !disabled,
      'bg-gray-200 pointer-events-none text-gray-500': disabled
    }"
  >
    <slot name="before" />
    <slot name="default" />
    <slot name="after" />
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    disabled: {
      default: false,
      type: Boolean
    }
  }
}
</script>
