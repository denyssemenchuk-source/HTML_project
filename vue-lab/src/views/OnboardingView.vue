<script setup lang="ts">
import { useRouter } from 'vue-router';
const router = useRouter();
</script>

<template>
  <div class="bg-gray-50 flex items-center justify-center min-h-screen p-4 font-roboto">
    <div class="w-full max-w-md h-screen flex flex-col p-5 bg-white md:h-auto md:max-w-2xl md:rounded-2xl md:shadow-xl md:p-10">

      <div class="flex-grow flex flex-col items-center justify-center text-center px-4">
        <img src="/images/Second_page_logo.webp" alt="Intro" class="w-4/5 max-w-xs mb-10 md:max-w-sm object-contain">
        <h1 class="bg-red-600 text-white text-lg font-bold py-2 px-5 border-4 border-red-800 mb-5 md:text-2xl">
          MEET NEW PEOPLE
        </h1>
        <p class="text-gray-600 text-sm max-w-xs md:text-base md:max-w-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lacinia
          bibendum nisl, eget pharetra neque imperdiet eu.
        </p>
      </div>

      <div class="flex justify-center gap-2 mb-8">
        <span class="w-2.5 h-2.5 bg-red-600 rounded-full"></span>
        <span class="w-2.5 h-2.5 bg-gray-300 rounded-full"></span>
        <span class="w-2.5 h-2.5 bg-gray-300 rounded-full"></span>
      </div>

      <footer class="flex justify-between items-center w-full">
        <button @click="router.push('/')" class="bg-gray-200 text-gray-600 font-bold py-3 px-8 rounded-lg hover:bg-gray-300 transition">SKIP</button>
        <button @click="router.push('/')" class="bg-red-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-red-700 transition">NEXT</button>
      </footer>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
.font-roboto { font-family: 'Roboto', sans-serif; }
</style>
