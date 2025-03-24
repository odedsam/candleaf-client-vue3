<script setup lang="ts">
const props = defineProps<{
  modelValue?: boolean
  id: string
  label: string
}>()

const emit = defineEmits(['update:modelValue'])
</script>

<template>
  <div class="flex items-center gap-2">
    <input
      :checked="modelValue"
      @change="emit('update:modelValue', ($event.target as HTMLInputElement).checked)"
      type="checkbox"
      :id="id"
      class="w-4 h-4 text-green-600 border-gray-300 pl-2 rounded focus:ring-green-500"
    />
    <label :for="id" class="text-gray-700">{{ label }}</label>
  </div>
</template>