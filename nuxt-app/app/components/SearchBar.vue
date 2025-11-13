<template>
  <div class="flex justify-center my-6">
    <input
      v-model="query"
      type="text"
      placeholder="Search articles..."
      class="w-full max-w-xl p-3 rounded-2xl shadow-md border border-pink-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-400 bg-white dark:bg-gray-900"
    />
  </div>
</template>

<script setup>
const { query } = defineProps(['query'])
</script>
