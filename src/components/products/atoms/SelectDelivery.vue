<script lang="ts" setup>
import { ref } from 'vue'

defineProps<{
  modelValue: string
  options: string[]
  defaultValue?: string
}>()

const emit = defineEmits(['update:modelValue'])

const updateValue = (value: string) => {
  emit('update:modelValue', value)
}
</script>

<template>
  <div class="custom-select">
    <span class="text-sm p-1">{{ modelValue || defaultValue }}</span>
    <ul>
      <li
        v-for="option in options"
        :key="option"
        @click="updateValue(option)"
        class="option-item"
      >
        {{ option }}
      </li>
    </ul>
  </div>
</template>

<style scoped>
.custom-select {
  border: 1px solid #ccc;
  border-radius: 5px;
  display: inline-flex;
  cursor: pointer;
  flex-direction: column;
  position: relative;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
  position: absolute;
  background: white;
  border: 1px solid #ccc;
  width: 100%;
  display: none;
}

.custom-select:hover ul {
  display: block;
}

.option-item {
  cursor: pointer;
  text-align:center;
  font-size:14px;
}

.option-item:hover {
  background:  rgb(146, 207, 173,.4);
}
</style>
