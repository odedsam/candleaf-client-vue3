<script setup lang="ts">
import { computed} from 'vue'

// Define Props
const props = defineProps<{
  modelValue: string | number
  placeholder: string
  icon?: string // Optional icon (emoji or image path)
  size?: 'full' | 'half' // Default: full-width
  id?: string //  Optional
  invalid?: boolean | string // Optional
}>()

const emit = defineEmits(['update:modelValue'])

// Generate a unique ID if none is provided
const uniqueId = computed(() => props.id || `input-${crypto.randomUUID()}`)
</script>

<template>
  <div :class="['relative', size === 'half' ? 'w-1/2' : 'w-full']">
    <input
      :id="uniqueId"
      :value="modelValue"
      @input="emit('update:modelValue', ($event.target as HTMLInputElement).value)"
      :placeholder="placeholder"
      :class="[
        'w-full p-2 border rounded-md focus:ring-2 focus:ring-[#56b280]/50 focus:border-[#56b280] outline-none transition ease-in-out duration-200',
        props.invalid ? 'border-red-500' : 'border-gray-300',
      ]"
    />

    <!-- Optional Icon -->
    <span v-if="icon" class="absolute right-3 top-2.5 text-gray-400">
      <img v-if="icon.startsWith('/')" :src="icon" alt="icon" class="w-5 h-5" />
      <span v-else>{{ icon }}</span>
      <!-- Emoji Support -->
    </span>
  </div>
</template>
