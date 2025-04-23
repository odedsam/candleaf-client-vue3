<script setup lang="ts">
import { computed } from 'vue';
import type { Component } from 'vue';

const props = defineProps<{
  modelValue: string | number;
  placeholder: string;
  icon?: string | Component;
  size?: 'full' | 'half';
  id?: string;
  invalid?: boolean | string;
}>();

const emit = defineEmits(['update:modelValue']);

const uniqueId = computed(() => props.id || `input-${crypto.randomUUID()}`);
</script>

<template>
  <div :class="['relative', size === 'half' ? 'w-1/2' : 'w-full']">
    <input
      :id="uniqueId"
      :value="modelValue"
      @input="emit('update:modelValue', ($event.target as HTMLInputElement).value)"
      :placeholder="placeholder"
      :class="['form-input', props.invalid ? 'border-red-500' : 'border-gray-300']" />
    <span v-if="icon" class="absolute right-3 top-2.5 text-[#3d8d61]">
      <component :is="icon" class="w-5 h-5" />
    </span>
  </div>
</template>
