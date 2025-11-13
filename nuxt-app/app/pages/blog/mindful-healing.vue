<template>
  <div class="min-h-screen bg-pink-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
   
    <section class="max-w-5xl mx-auto py-16 px-6 animate-fadeIn">
      <img src="https://images.unsplash.com/photo-1603052875638-4f3e4d9a3f90?w=1000&q=80" class="rounded-3xl mb-6 shadow-lg" />
      <h1 class="text-4xl font-bold text-pink-600 dark:text-pink-300 mb-4">Mindful Healing</h1>
      <p class="text-lg leading-relaxed  font-bold">
        Healing starts from awareness. Mindfulness teaches us to notice emotions without judgment, breathe deeply,
        and ground our hearts. Every woman carries the power to reset her emotional energy. Through calm breathing,
        journaling, and moments of silence, you bloom again.
      </p>
    </section>
  
  </div>
</template>

<script setup>

</script>

<style scoped>
.animate-fadeIn {
  animation: fadeIn 1s ease-in-out;
}
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(15px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
