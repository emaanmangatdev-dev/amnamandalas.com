<template>
  <div class="min-h-screen bg-pink-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100 transition-all duration-500">
    

    <section class="flex flex-col md:flex-row items-center justify-center py-16 max-w-6xl mx-auto px-6 gap-10">
      <!-- Left Side Image -->
      <div class="md:w-1/2 flex justify-center">
        <img
          src="https://i.pinimg.com/originals/e0/f8/72/e0f872578348f6ecf7a9dbedaff534b0.png"
          alt="Woman contact"
          class="rounded-2xl shadow-lg w-full max-w-sm"
        />
      </div>

      <!-- Right Side Form -->
      <div class="md:w-1/2 bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg animate-fadeIn">
        <h2 class="text-3xl font-bold mb-4 text-pink-800 dark:text-pink-300">Contact Us</h2>
        <form class="flex flex-col gap-4">
          <input type="text" placeholder="Your Name" class="p-3 rounded-lg border dark:bg-gray-700" />
          <input type="email" placeholder="Email" class="p-3 rounded-lg border dark:bg-gray-700" />
          <textarea rows="4" placeholder="Message" class="p-3 rounded-lg border dark:bg-gray-700"></textarea>
          <button
            type="submit"
            class="bg-pink-500 hover:bg-pink-700 cursor-pointer text-white rounded-lg py-2 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>

  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(15px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.animate-fadeIn {
  animation: fadeIn 0.8s ease-in-out;
}
</style>
