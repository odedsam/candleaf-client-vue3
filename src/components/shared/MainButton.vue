<script setup lang="ts">
import { ref, computed } from "vue";

interface Props {
  btnIcon?: string;
  label?: string;
  grow?: boolean;
  disabled?: boolean;
  btnClass?: string;
}

const props = defineProps<Props>();
const emit = defineEmits<{
  (e: "click", event: MouseEvent): void;
}>();

const baseClasses = `
  relative overflow-hidden flex items-center justify-center cursor-pointer gap-2 px-4 py-2 rounded-lg 
  bg-[#56B280] text-white font-medium transition-all
  hover:bg-[#4ca372] disabled:opacity-50 disabled:cursor-not-allowed
  min-w-[120px] max-w-md
`;

const classes = computed(() => [
  baseClasses,
  props.grow ? "w-full flex-grow" : "",
  props.btnClass,
]);

// ripple animation effect
const ripples = ref<{ id: number; x: number; y: number }[]>([]);

const createRipple = (event: MouseEvent) => {
  if (props.disabled) return;

  const button = event.currentTarget as HTMLElement;
  const rect = button.getBoundingClientRect();
  const size = Math.max(rect.width, rect.height);
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;

  const id = Date.now();
  ripples.value.push({ id, x, y });

  setTimeout(() => {
    ripples.value = ripples.value.filter((r) => r.id !== id);
  }, 600);
};

const handleClick = (event: MouseEvent) => {
  createRipple(event);
  emit("click", event);
};
</script>

<template>
  <button :class="classes" :disabled="disabled" @click="handleClick">
    <img v-if="btnIcon" :src="btnIcon" alt="btn" class="w-5 h-5" />
    <span>{{ label }}</span>
 
    <!-- ripple animation effect -->
    <span
      v-for="ripple in ripples"
      :key="ripple.id"
      class="absolute bg-white opacity-50 rounded-full transform scale-0 animate-ripple"
      :style="{
        top: `${ripple.y}px`,
        left: `${ripple.x}px`,
        width: '80px',
        height: '80px'
      }"
    />
  </button>
</template>

<style>
@keyframes ripple {
  0% {
    transform: scale(0);
    opacity: 0.5;
  }
  100% {
    transform: scale(3);
    opacity: 0;
  }
}
.animate-ripple {
  animation: ripple 0.6s linear;
}
</style>
