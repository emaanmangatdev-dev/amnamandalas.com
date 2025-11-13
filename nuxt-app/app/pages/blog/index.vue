<template>
  <div class="min-h-screen bg-pink-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 transition">
    <Header />
    <section class="max-w-6xl mx-auto py-16 px-6 text-center">
      <h2 class="text-4xl font-bold text-pink-600 dark:text-pink-300 mb-10">Explore Our Healing Topics</h2>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <NuxtLink
          v-for="(topic, i) in topics"
          :key="i"
          :to="topic.link"
          class="bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-lg hover:shadow-2xl transition group"
        >
          <img :src="topic.img" :alt="topic.title" class="rounded-2xl mb-4 h-56 w-full object-cover group-hover:scale-105 transition" />
          <h3 class="text-2xl font-semibold text-pink-600 dark:text-pink-300 mb-2">{{ topic.title }}</h3>
          <p>{{ topic.text }}</p>
        </NuxtLink>
      </div>
    </section>
    <Footer />
  </div>
</template>

<script setup lang="ts">



const topics = [
  { title: 'Mental & Emotional Wellness', link: '/blogs/mental-emotional', img: 'https://images.unsplash.com/photo-1603052875638-4f3e4d9a3f90?w=800', text: 'Find your emotional balance through awareness and meditation.' },
  { title: 'Hormonal Health', link: '/blogs/hormonal-health', img: 'https://images.unsplash.com/photo-1601987077651-58d9e7d17a59?w=800', text: 'Understand and harmonize your body naturally.' },
  { title: 'Relationships & Friendships', link: '/blogs/relationships', img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800', text: 'Build empathy, connection, and boundaries.' },
  { title: 'Everyday Intimate Health', link: '/blogs/everyday-intimate', img: 'https://images.unsplash.com/photo-1611926653453-7c6e1f244f8f?w=800', text: 'Gentle tips for daily wellness & comfort.' },
  { title: 'Everyday Healing', link: '/blogs/everyday-healing', img: 'https://images.unsplash.com/photo-1582719471137-c3967ffb1c1c?w=800', text: 'Simple rituals to bring calm in your everyday life.' },
  { title: 'Mini Topics', link: '/blogs/mini-topics', img: 'https://images.unsplash.com/photo-1584467735815-f778f274e274?w=800', text: 'Short reflections and quick self-love reminders.' },
]
</script>
