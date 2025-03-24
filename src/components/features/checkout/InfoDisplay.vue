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
      <span class="font-medium text-gray-700">{{ label }}</span>
      <span class="ml-2 text-gray-800 block">{{ value }}</span>
    </p>
    <button @click="emit('edit')" class="text-green-600 hover:underline">Edit</button>
  </div>
</template>

<style scoped>
button {
  font-size: 14px;
}
</style>