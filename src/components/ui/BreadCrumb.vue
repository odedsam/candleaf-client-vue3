<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';

defineProps<{
  steps: { name: string; path: string }[];
}>();

const route = useRoute();
const router = useRouter();

const stepClass = (stepPath: string, index: number) => {
  const isCheckoutPage = route.path.startsWith('/checkout');
  const isDetailsActive = isCheckoutPage && index <= 1; 
  return {
    'font-bold text-green-600': route.fullPath.includes(stepPath) || isDetailsActive,
    'text-gray-500 cursor-pointer hover:text-green-500 transition-all': !route.fullPath.includes(stepPath) && !isDetailsActive
  };
};

const navigateTo = (stepPath: string) => {
  router.push(stepPath);
};
</script>

<template>
  <div class="flex justify-center items-center space-x-4 py-4 text-gray-600">
    <template v-for="(step, index) in steps" :key="index">
      <span :class="stepClass(step.path, index)" @click="navigateTo(step.path)">
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