<template>
  <NuxtLink :to="to" class="block transform transition-all duration-400 hover:scale-102">
    <div class="rounded-2xl overflow-hidden bg-white dark:bg-gray-800 shadow-lg">
      <div class="h-44 overflow-hidden">
        <img :src="img" :alt="title" class="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
      </div>
      <div class="p-4">
        <h3 class="text-lg font-semibold text-purple-700 mb-1">{{ title }}</h3>
        <p class="text-sm text-gray-600 dark:text-gray-300 line-clamp-3">{{ excerpt }}</p>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
defineProps({
  title: { type: String, required: true },
  img: { type: String, required: true },
  excerpt: { type: String, default: '' },
  to: { type: String, default: '/' }
})
</script>

<style scoped>
.scale-102 { transform: scale(1.02); }
</style>
