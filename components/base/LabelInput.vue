<template>
  <label class="flex flex-grow relative" for="name">
    <span class="absolute flex ml-3 mt-2 text-gray-500 text-sm">
      <slot name="label" />
    </span>
    <input
      id="name"
      class="border border-gray-500 p-2 pt-8 rounded truncate w-full"
      :class="{
        'bg-white': !disabled,
        'bg-gray-200 pointer-events-none': disabled
      }"
      :disabled="disabled"
      name="name"
      type="text"
    />
  </label>
</template>

<script>
export default {
  name: 'LevelInput',
  props: {
    disabled: {
      default: false,
      type: Boolean
    },
    name: {
      required: true,
      type: String
    }
  }
}
</script>
