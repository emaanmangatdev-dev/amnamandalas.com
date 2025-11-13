<template>
  <div v-if="loading" class="text-center py-6 text-pink-500 animate-pulse">Loading...</div>

  <div v-else-if="error" class="text-center text-red-500">{{ error }}</div>

  <div v-else-if="items.length === 0" class="text-center text-gray-500 dark:text-gray-400">
    No matching articles found 😔
  </div>

  <div v-else class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 pb-20">
    <NuxtLink
      v-for="(item, i) in items"
      :key="i"
      :to="item._path"
      class="block p-5 rounded-xl bg-white dark:bg-gray-800 shadow hover:shadow-lg transition"
    >
      <h3 class="text-xl font-semibold text-pink-600 dark:text-pink-300">{{ item.title }}</h3>
      <p class="text-sm text-gray-600 dark:text-gray-400 mt-1">{{ item.description }}</p>
      <div class="mt-3 text-xs text-gray-500 dark:text-gray-400">
        Tags: {{ (item.tags || []).join(', ') }}
      </div>
    </NuxtLink>
  </div>
</template>

<script setup>
defineProps({
  items: { type: Array, default: () => [] },
  loading: Boolean,
  error: String,
})
</script>
