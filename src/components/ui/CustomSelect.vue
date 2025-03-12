<script setup lang="ts">
import {ref} from 'vue'

const props = defineProps<{
  options: string[]
  modelValue: string
  label: string
}>()

const emit = defineEmits(['update:modelValue'])

const isOpen = ref(false)

const selectOption = (option: string) => {
  emit('update:modelValue', option)
  isOpen.value = false
}
</script>

<template>
  <div class="relative w-full">
    <p class="text-gray-700 font-medium mb-1">{{ label }}</p>

    <div
      class="border border-gray-300 bg-white rounded-md p-2 cursor-pointer flex justify-between items-center hover:border-green-500"
      @click="isOpen = !isOpen"
    >
      <span>{{ modelValue || 'Select an option' }}</span>
      <img
        src="/green-chevron-down.svg"
        alt="Arrow"
        class="w-4 h-4 transition-transform duration-200"
        :class="{'rotate-180': isOpen}"
      />
    </div>

    <ul
      v-if="isOpen"
      class="absolute left-0 right-0 bg-white border border-gray-300 rounded-md mt-1 shadow-lg max-h-40 overflow-y-auto z-50"
    >
      <li
        v-for="option in options"
        :key="option"
        class="p-2 hover:bg-green-100 cursor-pointer"
        @click="selectOption(option)"
      >
        {{ option }}
      </li>
    </ul>
  </div>
</template>

<style scoped>
.rotate-180 {
  transform: rotate(180deg);
}
</style>
