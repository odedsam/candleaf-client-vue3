<script setup lang="ts">
import { RouterView } from 'vue-router'
import { Toaster } from 'vue-sonner'
import ThemeToggle from './components/shared/ThemeToggle.vue';




const apper = document.querySelector("#app");
const elementsWithOverflow = apper.querySelectorAll("*");
const notVisibleOverflowElements = Array.from(elementsWithOverflow).filter(
  el => getComputedStyle(el).overflow !== "visible"
);
console.log(notVisibleOverflowElements);


</script>

<template>
  <Toaster position="top-right" />
  <ThemeToggle />
  <RouterView />
</template>


