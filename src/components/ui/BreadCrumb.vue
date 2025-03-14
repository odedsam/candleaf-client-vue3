<script setup lang="ts">
import { useRoute } from 'vue-router';
import { computed } from 'vue';

const props = defineProps<{ steps: { name: string; path: string }[] }>();

const route = useRoute();

//  get the current step index
const currentStepIndex = computed(() => {
  return props.steps.findIndex(step => route.path.includes(step.path));
});

// define step classes for visual indication only
const stepClass = (index: number) => {
  return {
    'font-bold text-green-600': index <= currentStepIndex.value, //  highlight completed & current step
    'text-gray-500': index > currentStepIndex.value // future steps in gray
  };
};
</script>

<template>
  <div class="flex justify-center items-center space-x-4 py-4 text-gray-600">
    <template v-for="(step, index) in steps" :key="index">
      <span :class="stepClass(index)">
        {{ step.name }}
      </span>

      <svg
        v-if="index < steps.length - 1"
        class="mx-2 w-4 h-4 text-gray-400"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"></path>
      </svg>
    </template>
  </div>
</template>