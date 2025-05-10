<script setup lang="ts">
import { type PropType } from 'vue';

const props = defineProps({
  message: {
    type: [String, Array] as PropType<string | string[] | null | undefined>,
    default: null,
  },
});
</script>

<template>
  <p v-if="props.message" class="text-red-500 text-sm mt-1 font-poppins space-y-2 transition-all duration-200">
    <template v-if="Array.isArray(props.message)">
      <div v-for="(error, index) in message" :key="index" class="font-poppins">{{ error }}</div>
    </template>
    <template v-else>
      {{ message }}
    </template>
  </p>
</template>
