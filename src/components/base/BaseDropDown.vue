<script lang="ts" setup>
import { ref } from 'vue';

const props = defineProps<{ iconPlaceHolder?: any }>();
const open = ref(false);
</script>

<template>
  <div class="relative inline-block text-left">
    <button
      @click="open = !open"
      class="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 transition dark:bg-gray-400 cursor-pointer">
      <img :src="props.iconPlaceHolder" alt="holder-icon" draggable="false" />
    </button>

    <Transition
      enter-active-class="transition ease-out duration-100"
      enter-from-class="transform opacity-0 scale-95"
      enter-to-class="transform opacity-100 scale-100"
      leave-active-class="transition ease-in duration-75"
      leave-from-class="transform opacity-100 scale-100"
      leave-to-class="transform opacity-0 scale-95">
      <div
        v-if="open"
        class="origin-top-right cursor-pointer absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white dark:bg-gray-600 ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
        <div class="py-1">
          <slot />
        </div>
      </div>
    </Transition>
  </div>
</template>
