<template>
  <section class="min-h-screen bg-pink-300  dark:from-gray-900 text-gray-800 dark:text-pink-100 px-6 py-20">
    <div class="max-w-5xl mx-auto text-center animate-fade-in">
      <h1 class="text-5xl font-extrabold mb-4 text-pink-600">Mindful Healing</h1>
      <p class="text-lg font-bold opacity-80 mb-10">Discover peace within through mindful awareness and gentle emotional balance.</p>

      <img src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800" 
           class="rounded-3xl mx-auto mb-12 shadow-lg hover:scale-105 transition" alt="Healing Aesthetic" />

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
        <div v-for="(tip, i) in tips" :key="i" class="bg-white/60 dark:bg-pink-800/40 rounded-2xl p-6 shadow-md hover:shadow-lg transition">
          <h3 class="text-2xl font-semibold mb-3 text-pink-500">{{ tip.title }}</h3>
          <p class="text-base leading-relaxed">{{ tip.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const tips = [
  { title: "Prioritize Quality Sleep 😴", desc: "Restorative sleep helps emotional regulation and stress relief..." },
  { title: "Embrace Mindful Movement 🏃", desc: "Gentle yoga, walking, or dancing releases endorphins and balances your mind..." },
  { title: "Practice Mindful Awareness 🌬️", desc: "Use breathing techniques like 4-7-8 to calm your nervous system..." },
  { title: "Cultivate Healthy Connections 🤝", desc: "Spend time with supportive people who bring calm and comfort to your life..." },
  { title: "Set Boundaries ✋", desc: "Protect your energy by saying no without guilt when you need rest..." },
  { title: "Nourish Your Body 🍎", desc: "Eat fresh, colorful foods and hydrate well to support your mood..." },
  { title: "Creative Hobby 🎨", desc: "Engage in joyful activities that bring peace and inspiration..." },
  { title: "Emotional Literacy ✍️", desc: "Write or talk about feelings openly — healing starts with awareness." },
]
</script>

<style scoped>
.animate-fade-in {
  animation: fadeIn 1.5s ease-in;
}
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
