<template>
  <div class="min-h-screen bg-pink-200 dark:bg-gray-900 text-gray-800 dark:text-gray-100 transition-all duration-500">
   

    <!-- Hero / Welcome -->
    <section class="text-center py-16 px-4">
      <img
        src="https://heymandala.com/wp-content/uploads/2025/08/blog-image-1755372175.jpg"
        alt="Welcome"
        class="rounded-3xl shadow-lg mx-auto mb-8 h-100 w-200 size-full max-w-2xl h-110 w-100 animate-fadeIn "
      />
      <h1 class="text-4xl font-bold text-pink-600 dark:text-pink-300 mb-3">Welcome to Amna Mandalas</h1>
      <p class="max-w-2xl mx-auto text-lg leading-relaxed">
        A space made for every woman’s healing journey — mind, body & soul. 🌷
      </p>
    </section>

    <!-- 3 Main Cards -->
    <section class="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto px-6 pb-20">
      <NuxtLink
        v-for="(card, i) in cards"
        :key="i"
        :to="card.link"
        class="group bg-white dark:bg-gray-800 rounded-3xl shadow-xl hover:shadow-2xl overflow-hidden transition transform hover:-translate-y-2"
      >
        <img :src="card.img" :alt="card.title" class="h-80 w-full object-cover group-hover:scale-105 transition" />
        <div class="p-6">
          <h3 class="text-3xl font-semibold mb-3 text-pink-600 dark:text-pink-300">{{ card.title }}</h3>
          <p class="text-lg mb-4">{{ card.text }}</p>
          <UButton color="primary" variant="solid" size="lg" 
     
          class="animate-fadeIn bg-pink-400 hover:bg-pink-200 cursor-pointer transion" >Read More</UButton>
        </div>
      </NuxtLink>
    </section>

    
  </div>
</template>

<script setup lang="ts">
import { card } from '#build/ui';



const cards = [
  {
    title: 'Mindful Healing',
    text: 'Balance your emotions and find calm through mindfulness.',
    img: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800',
    link: '/mindfuls-healing',
  },
  {
    title: 'Body & Balance',
    text: 'Nurture your hormonal health naturally and gracefully.',
    img: 'https://cdn.pixabay.com/photo/2016/12/11/00/37/women-1898499_640.jpg',
    link: '/body-balance',
  },
  {
    title: 'Relationship Energy',
    text: 'Grow emotional connection & healthy boundaries in love.',
    img: 'https://q6j6d8r6.delivery.rocketcdn.me/wp-content/uploads/2022/05/energy-woman-insight.jpg',
    link: '/relationship-energy',
  },
]
</script>

<style scoped>
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
.animate-fadeIn { animation: fadeIn 1s ease-in-out; }
</style>
