<script setup lang="ts">
const props = defineProps<{
  label: string;
  price: number | string;
  selected: boolean;
}>();

const emit = defineEmits(['update:selected']);
</script>

<template>
  <label
    class="flex items-center justify-between border border-gray-300 font-poppins rounded-md p-3 cursor-pointer hover:border-green-500"
    :class="{ 'border-green-500 bg-green-50 dark:text-black': selected }">
    <div class="flex items-center" :class="{ 'text-black': selected }">
      <input
        type="radio"
        class="w-5 h-5 text-green-600 border-gray-100 focus:ring-green-500"
        :checked="selected"
        @change="emit('update:selected', true)" />
      <span
        class="ml-3 text-gray-800 font-poppins"
        :class="{
          'dark:text-black': selected,
          'dark:text-white': !selected,
        }">
        {{ label }}
      </span>
    </div>
    <span
      class="font-semibold text-gray-800 font-poppins"
      :class="{
          'dark:text-black': selected,
          'dark:text-white': !selected,
        }"
      >
      {{ price }}
    </span>
  </label>
</template>

<style scoped>
input[type='radio'] {
  width: 20px;
  height: 20px;
  border: 1.5px solid #e5e7eb;
  accent-color: #56b280;
}

input[type='radio']:checked {
  border-color: #56b280;
}
</style>
