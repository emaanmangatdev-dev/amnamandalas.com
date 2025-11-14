<template>
  <header class="w-full bg-pink-100 dark:bg-gray-900 transition-all duration-300 shadow-sm py-3 sticky top-0 z-50">
    <div class="max-w-6xl mx-auto flex justify-between items-center px-6">
      
      <h1 class="text-2xl font-bold text-pink-600 dark:text-pink-300">AmnaMandalas</h1>

      <nav class="flex items-center gap-20 relative text-purple-400 mr-20">
        <NuxtLink to="/" class="hover:text-pink-500 transition">Home</NuxtLink>

        <div class="relative group">
          <button
            @click="toggleDropdown"
            class="hover:text-pink-500 transition focus:outline-none flex items-center"
          >
            Blogs ▾
          </button>
          <div
            v-if="isOpen"
            class="absolute hover:bg-orange-300- bg-white dark:bg-gray-800 shadow-md rounded-lg p-2 mt-2 w-56"
          >
            <NuxtLink
              v-for="(item, i) in categories"
              :key="i"
              :to="`/blog/${item.slug}`"
              class="block py-1.5 px-3 text-sm hover:bg-orange-200 dark:hover:bg-gray-700 rounded"
              @click="closeDropdown"
            >
              {{ item.name }}
            </NuxtLink>
          </div>
        </div>

        <NuxtLink to="/contact" class="hover:text-pink-500 transition">Contact</NuxtLink>

    

        <!-- Theme toggle -->
        <button
          @click="toggleTheme"
          class="ml-20 text-xl text-pink-600 dark:text-pink-300 transition"
          title="Toggle Theme"
        >
          <span v-if="isDark">🌙</span>
          <span v-else>☀️</span>
        </button>
      </nav>
    </div>
  </header>
</template>
<script setup lang="ts">
import { ref, watch } from 'vue'

const categories = [
  { name: 'Mental & Emotional Wellness',link: '/blogs/mental-emotional'  ,slug: 'mental-emotional' },
  { name: 'Hormonal Health',  link: '/blogs/hormonal-health',slug: 'hormonal-health' },
  { name: 'Relationships & Friendships', link: '/blogs/relationships', slug: 'relationships' },
  { name: 'Everyday Healing', link: '/blogs/everyday-healing', slug: 'everyday-healing' },
  { name: 'Everyday Intimate Health',link: '/blogs/everyday-intimate', slug: 'everyday-intimate' },
  { name: 'Mini Topics', link: '/blogs/mini-topics',  slug: 'mini-topics' },
]

const isDark = ref(false)
const isOpen = ref(false)

function toggleTheme() {
  isDark.value = !isDark.value
  document.documentElement.classList.toggle('dark', isDark.value)
}
function toggleDropdown() {
  isOpen.value = !isOpen.value
}
function closeDropdown() {
  isOpen.value = false
}

watch(() => isDark.value, (val) => {
  localStorage.setItem('theme', val ? 'dark' : 'light')
})
</script>
