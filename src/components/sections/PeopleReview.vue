<script setup lang="ts">
import { faces } from '@/utils/constants'
</script>

<template>
  <div class="flex flex-col justify-center items-center bg-white rounded-lg p-12 shadow-lg" 
    v-for="(face, index) in faces" :key="index">
    <img :src="face.personFace" alt="face" />
    <img src="@/assets/images/Stars.svg" alt="stars-svg" />
    <p>{{ face.reviewText }}</p>
    <p>{{ face.name }}</p>
  </div>
</template>
ƒ

<style scoped></style>
