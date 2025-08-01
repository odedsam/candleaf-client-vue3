<script lang="ts" setup>
import { ref, watch } from 'vue';

const props = defineProps<{ iconPlaceHolder?: any }>();
const open = ref(false);
const icon = ref(props.iconPlaceHolder || '');

watch( () => props.iconPlaceHolder,(newIcon) => {
    icon.value = newIcon || '';
  });

</script>

<template>
  <div class="relative inline-block text-left rounded-full">
    <button
      @click="open = !open"
      class="inline-flex justify-center w-full rounded-full border border-gray-300 shadow-sm  bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 transition dark:bg-gray-400 cursor-pointer">
      <img :src="icon" alt="holder-icon" draggable="false" class="size-7 rounded-full" />
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
        class="origin-top-right cursor-pointer absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white dark:bg-zinc-800 ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
        <div class="py-1">
          <slot />
        </div>
      </div>
    </Transition>
  </div>
</template>
