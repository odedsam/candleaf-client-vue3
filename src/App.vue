<script setup lang="ts">
import { RouterView } from 'vue-router'
import { Toaster } from 'vue-sonner'





const apper = document.querySelector("#app");
const elementsWithOverflow = apper.querySelectorAll("*");
const notVisibleOverflowElements = Array.from(elementsWithOverflow).filter(
  el => getComputedStyle(el).overflow !== "visible"
);
console.log(notVisibleOverflowElements);


</script>

<template>
  <Toaster position="top-right" />
  <RouterView />
</template>

<!-- <style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@200;300;400;500;600;700;800;900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap');
</style> -->
