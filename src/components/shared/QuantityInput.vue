<script lang="ts" setup>
const props = defineProps<{
  quantity: number
  increaseQty: (quantity: number) => void
  decreaseQty: (quantity: number) => void
  wrapperClass?: string
}>()

const increase = () => props.increaseQty(props.quantity)
const decrease = () => props.decreaseQty(props.quantity)
</script>

<template>
    <div :class="`w-fit ${props.wrapperClass ?? ''}`">
    <div
      class="flex items-center rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 shadow-sm overflow-hidden">
      <button
        @click="decrease"
        class="w-6 h-7 cursor-pointer text-sm font-bold text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition">
        &minus;
      </button>

      <span class="px-4 text-sm sm:text-base font-semibold text-gray-800 dark:text-white">
        {{ quantity }}
      </span>

      <button
        @click="increase"
        class="w-6 h-7 cursor-pointer text-sm font-bold text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition">
        &plus;
      </button>
    </div>
  </div>
</template>
