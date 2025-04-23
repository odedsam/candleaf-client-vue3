<script setup lang="ts">

const props = defineProps<{
  label: string
  value: string
}>()

const emit = defineEmits(["edit"])
</script>

<template>
  <div class="flex justify-between items-center py-2">
    <p class="text-gray-500">
      <span class="font-poppins dark:text-gray-400 text-[#818181]">{{ label }}</span>
      <span class="ml-2 font-poppins font-semibold text-black dark:text-gray-200 block">{{ value }}</span>
    </p>
    <button @click="emit('edit')" class="text-green-600 font-poppins cursor-pointer font-sm hover:underline">Edit</button>
  </div>
</template>

