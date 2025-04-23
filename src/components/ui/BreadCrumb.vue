<script setup lang="ts">
import { useRoute } from 'vue-router';
import { computed } from 'vue';
import CiChevronRightMd from '~icons/ci/chevron-right-md';

const props = defineProps<{ steps: { name: string; path: string }[] }>();
const route = useRoute();

const currentStepIndex = computed(() => {
  return props.steps.findIndex(step => route.path.includes(step.path));
});

const stepClass = (index: number) => {
  return {
    'font-poppins font-semibold text-green-600': index <= currentStepIndex.value,
    'font-poppins-text-gray-500': index > currentStepIndex.value
  };
};
</script>

<template>
  <div class="inline-flex justify-center items-center p-4 text-gray-600">
    <template v-for="(step, index) in steps" :key="index">
      <p :class="stepClass(index)" class="font-poppins text-xs md:text-base">
        {{ step.name }}
      </p>

      <CiChevronRightMd
        v-if="index < steps.length - 1"
        class="w-4 h-4 md:h-6 md:w-6 mx-1 md:mx-2 text-gray-400" />

    </template>
    </div>
</template>
