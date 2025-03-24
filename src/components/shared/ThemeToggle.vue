<script setup lang="ts">
import { watch } from 'vue'
import { useLocalStorage } from '@vueuse/core'

const darkMode = useLocalStorage('theme.dark', false)

watch(darkMode, (enabled) => {
  document.documentElement.classList.toggle('dark', enabled)
}, { immediate: true }) 


</script>


<template>

  <button
    @click="darkMode = !darkMode"
    class="fixed bottom-6 right-6 w-10 h-10 flex items-center justify-center rounded-full 
    shadow-md transition-all bg-zinc-800 hover:bg-zinc-700 text-white">
  
    <i-tabler-sun v-if="!darkMode" class="w-6 h-6" />
    <i-tabler-moon-stars v-else class="w-6 h-6" />

  </button>

</template>
