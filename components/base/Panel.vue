<template>
  <section
    class="bg-gray-100 border border-gray-500 flex flex-col rounded shadow"
  >
    <header class="flex items-center px-4 pt-4 pb-2">
      <slot name="header" />
    </header>
    <main class="flex flex-col px-4 py-2">
      <slot name="main" />
    </main>
    <footer class="flex items-center px-4 pb-4 pt-2">
      <slot name="footer" />
    </footer>
  </section>
</template>

<script>
export default {
  name: 'Panel',
  props: {}
}
</script>
