<script setup lang="ts">
import { ref } from 'vue'
const options = ref([
  { label: '2 weeks', value: '2w' },
  { label: '4 weeks', value: '4w' },
  { label: '6 weeks', value: '6w' }
])

const emit = defineEmits<{
update: [id: number];
}>();
const selectedOption = ref(options.value[1].value) // Default: 4 weeks
</script>

<template>
  <select v-model="selectedOption" class="border border-gray-300 rounded px-2 py-1 text-gray-700">
    <option v-for="option in options" :key="option.value" :value="option.value">
      {{ option.label }}
    </option>
  </select>
</template>

<style scoped>
select {
  appearance: none;
  background-color: white;
  padding-right: 1.5rem;
  cursor: pointer;
  border-radius: 6px;
}
</style>
