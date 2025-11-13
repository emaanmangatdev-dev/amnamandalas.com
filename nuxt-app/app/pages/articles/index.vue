<template>
  <div class="min-h-screen bg-pink-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
    <section class="py-10 text-center">
      <h1 class="text-4xl font-bold text-pink-600 dark:text-pink-300 mb-6">
        Explore Articles 🪷
      </h1>

      <SearchBar :query="query" />

      <SearchResults :items="items" :loading="loading" :error="error" />
    </section>
  </div>
</template>

<script setup>
import SearchBar from '~/components/SearchBar.vue'
import SearchResults from '~/components/SearchResults.vue'
import { useSearch } from '~/composables/useSearch'

const { query, items, loading, error } = useSearch()
</script>
