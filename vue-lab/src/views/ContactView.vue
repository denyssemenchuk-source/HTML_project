<script setup lang="ts">
 // 1. Імпортуємо компонент
import UserCard from '@/components/UserCard.vue';
</script>

<template>
  div class="p-5">
  <h1 class="text-2xl font-bold mb-4 text-gray-800">Сторінка контактів</h1>
  <p class="mb-6 text-gray-600">Це наша нова сторінка контактів!</p>

  <div class="grid gap-4 max-w-md">

    <UserCard username="Student_1" :isActive="true" />
    <UserCard username="Student_2" :isActive="false" />

  </div>
</template>

<style scoped>
.contact-page {
  padding: 20px;
}
</style>
