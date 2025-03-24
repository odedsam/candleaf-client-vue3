<script lang="ts" setup>
import { computed } from 'vue'

const props = defineProps<{
  modelValue: string | number | null
  options: { label: string; value: string | number }[]
  placeholder?: string
  disabled?: boolean
  error?: string
  className?: string
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: string | number): void
}>()

const isInvalid = computed(() => !!props.error)
</script>

<template>
  <div class="w-full">
    <select
      :value="modelValue"
      :disabled="disabled"
      @change="e => emit('update:modelValue', (e.target as HTMLSelectElement).value)"
      :class="[
        'w-full rounded-md border px-3 py-2 text-sm bg-white',
        isInvalid ? 'border-red-500 text-red-600' : 'border-gray-300',
        disabled ? 'bg-gray-100 cursor-not-allowed' : '',
        className
      ]"
    >
      <option disabled value="">{{ placeholder ?? 'בחר אפשרות' }}</option>
      <option
        v-for="option in options"
        :key="option.value"
        :value="option.value"
      >
        {{ option.label }}
      </option>
    </select>

    <p v-if="isInvalid" class="text-xs text-red-500 mt-1">
      {{ error }}
    </p>
  </div>
</template>
