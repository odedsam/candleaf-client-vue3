<script setup lang="ts">
import { faces } from '@/utils/constants'
</script>

<template>
  <div class="flex flex-col justify-center bg-white dark:bg-gray-600   items-center rounded-lg p-12 shadow-lg" 
    v-for="(face, index) in faces" :key="index">
    <img :src="face.personFace" alt="face" />
    <img src="@/assets/images/Stars.svg" alt="stars-svg" />
   <div class="pt-5 pb-2 text-center">
      <p class="font-poppins font-medium text-xl">{{ face.reviewText }}</p>
      <p class="font-helvetica font-normal text-lg pt-2 text-mgr">{{ face.name }}</p>
   </div>
  </div>
</template>
ƒ

<style scoped></style>
