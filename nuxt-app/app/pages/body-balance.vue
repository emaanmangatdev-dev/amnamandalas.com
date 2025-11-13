<template>
  <section class="min-h-screen bg-gradient-to-b from-pink-100 to-pink-200  dark:from-gray-900 dark:to-pink-900 px-6 py-20 text-gray-900 dark:text-gray-100">
    <div class="max-w-5xl mx-auto flex flex-col md:flex-row gap-12 items-center">
      <img src="https://images.unsplash.com/photo-1524253482453-3fed8d2fe12b?w=800"
           class="rounded-3xl shadow-xl md:w-1/2 hover:scale-105 transition" alt="Balance Image" />
      <div class="md:w-1/2">
        <h1 class="text-5xl font-extrabold text-pink-600 mb-6">Body & Balance</h1>
        <p class="text-lg mb-8 leading-relaxed">Reconnect with your body’s rhythm — find harmony through nurturing rituals and mindful care.</p>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div v-for="(item, i) in balanceTips" :key="i" class="bg-white/50 dark:bg-pink-700/30 rounded-xl p-5 shadow hover:shadow-lg transition">
            <h3 class="text-xl font-semibold text-pink-500 mb-2">{{ item.title }}</h3>
            <p>{{ item.text }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const balanceTips = [
  { title: "Listen to Your Body", text: "Your body communicates through sensations — rest, move, and eat intuitively." },
  { title: "Cycle Syncing", text: "Adapt your routines according to hormonal phases for improved energy and focus." },
  { title: "Gentle Nutrition", text: "Opt for warm, whole meals that ground your energy and calm your hormones." },
  { title: "Soothing Rituals", text: "Light candles, stretch slowly, or meditate to balance inner rhythms." },
]
</script>
