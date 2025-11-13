<template>
  <footer class="bg-[#1a1a3d] text-gray-200 py-10 px-8">
    <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
      <div>
        <div class="flex items-center space-x-2">
     
          <h2 class="text-2xl font-semibold text-white">AmnaMandala</h2>
        </div>
        <p class="mt-4 text-sm text-gray-300">
          AmnaMandala is a space built for women, by women — to talk, share, and heal through
          everyday stories and honest conversations.
        </p>
        <div class="flex space-x-3 mt-4">
          <a href="#" class="text-gray-400 hover:text-pink-400"><i class="fab fa-facebook"></i></a>
          <a href="#" class="text-gray-400 hover:text-pink-400"><i class="fab fa-instagram"></i></a>
        </div>
      </div>

      <div>
        <h3 class="text-lg font-semibold text-pink-400 mb-3">Categories</h3>
        <ul class="space-y-2 text-sm">
          <li>Mental & Emotional Wellness</li>
          <li>Hormonal Health</li>
          <li>Relationships</li>
          <li>Everyday Healing</li>
          <li>Everyday Intimate Health</li>
          <li>Mini Topics</li>
        </ul>
      </div>

      <div>
        <h3 class="text-lg font-semibold text-pink-400 mb-3">Links</h3>
        <ul class="space-y-2 text-sm">
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <li><NuxtLink to="/blogs">Blogs</NuxtLink></li>
          <li><NuxtLink to="/contact">Contact Us</NuxtLink></li>
        </ul>
      </div>
    </div>

    <div class="text-center text-gray-400 text-xs mt-8 border-t border-gray-600 pt-4">
      Copyright © 2025 AmnaMandala. All rights reserved.
    </div>
  </footer>
</template>

<script setup>
// koi logic nahi chahiye abhi
</script>

<style>
@import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css";
</style>
