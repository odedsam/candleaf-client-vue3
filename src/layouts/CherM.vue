<script setup lang="ts">
import { ref } from 'vue'

const isOpen = ref(false)
const toggleCart = () => {
  isOpen.value = !isOpen.value
}
</script>

<template>
  <!-- כפתור פתיחה -->

  <button
    class="fixed bottom-3 left-3 z-50 bg-blue-600 text-white px-4 py-2 rounded-full shadow-lg hover:bg-blue-700 transition"
    @click="toggleCart">
   Cart 
  </button>

  <!-- עגלה נשלפת מהצד -->
  <div>
    <div
      v-show="isOpen"
      class="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
      @click="toggleCart"
    />

    <div
      class="fixed top-0 right-0 h-full w-80 max-w-full bg-white dark:bg-zinc-800 text-black dark:text-white shadow-lg z-50 transform transition-transform duration-300"
      :class="isOpen ? 'translate-x-0' : 'translate-x-full'"
    >
      <div class="p-4 h-full flex flex-col">
        <div class="flex justify-between items-center mb-4">
          <h2 class="text-xl font-bold">העגלה שלך</h2>
          <button @click="toggleCart" class="text-gray-400 hover:text-red-500 text-2xl">&times;</button>
        </div>

        <div class="flex-1 overflow-y-auto space-y-4">
          <div v-for="item in [1,2,3]" :key="item" class="flex justify-between items-center py-2 border-b">
            <div>
              <p class="font-semibold">שם מוצר</p>
              <p class="text-sm text-gray-500">כמות: 1</p>
            </div>
            <p>100 ₪</p>
          </div>
        </div>

        <div class="mt-4 font-bold flex justify-between">
          <span>סה״כ:</span>
          <span>300 ₪</span>
        </div>

        <button class="mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
          לתשלום
        </button>
      </div>
    </div>
  </div>
</template>
