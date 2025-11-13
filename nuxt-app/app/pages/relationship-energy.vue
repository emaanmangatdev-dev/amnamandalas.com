<template>
  <section class="min-h-screen bg-pink-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100 px-8 py-24">
    <div class="max-w-4xl mx-auto text-center animate-fade-in">
      <h1 class="text-5xl font-bold text-pink-600 mb-4">Relationship Energy</h1>
      <p class="text-lg opacity-80 mb-10">Love begins with self-awareness. Strengthen your bonds through empathy, honesty, and calm connection.</p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div v-for="(rel, i) in relations" :key="i" class="bg-white/60 dark:bg-pink-800/40 rounded-3xl p-6 shadow-lg hover:-translate-y-1 transition">
          <img :src="rel.img" class="rounded-2xl mb-4 shadow-md" alt="Relationship tip" />
          <h3 class="text-2xl text-pink-500 font-semibold mb-2">{{ rel.title }}</h3>
          <p>{{ rel.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const relations = [
  { img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800", title: "Empathy & Listening", desc: "Practice truly hearing others without rushing to respond. Empathy deepens connection." },
  { img: "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=800", title: "Healthy Space", desc: "Allow independence in relationships — balance closeness with personal growth." },
  { img: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=800", title: "Gentle Communication", desc: "Speak from calm emotions, not reactions. Kindness sustains love’s warmth." },
  { img: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=800", title: "Gratitude Moments", desc: "Say thank you often. Small appreciation multiplies emotional connection." },
]
</script>

<style scoped>
.animate-fade-in {
  animation: fadeIn 1.4s ease;
}
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
