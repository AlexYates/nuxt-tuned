<template>
  <svg
    fill="none"
    height="24"
    stroke="currentcolor"
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-width="2"
    viewBox="0 0 32 32"
    width="24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <slot name="default" />
  </svg>
</template>

<script>
export default {
  name: 'Icon'
}
</script>
