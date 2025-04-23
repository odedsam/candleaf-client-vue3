<script setup lang="ts">
import { ref, computed } from "vue";

interface Props {
  btnIconClr?: string;
  label?: string;
  grow?: boolean;
  disabled?: boolean;
  btnClass?: string;
  ripple?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  ripple: true,
  disabled:false
});

const emit = defineEmits<{
  (e: "click", event: MouseEvent): void;
}>();

const baseClasses = `
  relative overflow-hidden flex items-center justify-center cursor-pointer gap-2 px-4 py-2 rounded-lg
  bg-white border border-[#56B280] transition-all text-[#56B280] hover:bg-[#56B280] hover:text-white
  disabled:opacity-50 disabled:cursor-not-allowed min-w-[120px] max-w-md
`;

const classes = computed(() => [
  baseClasses,
  props.grow ? "w-full flex-grow" : "",
  props.btnClass,
]);

// ripple effect
const ripples = ref<{ id: number; x: number; y: number }[]>([]);

const createRipple = (event: MouseEvent) => {
  if (!props.ripple || props.disabled) return;

  const button = event.currentTarget as HTMLElement;
  const rect = button.getBoundingClientRect();
  const size = Math.max(rect.width, rect.height);
  const x = event.clientX - rect.left - size / 2;
  const y = event.clientY - rect.top - size / 2;

  const id = Date.now();
  ripples.value.push({ id, x, y });

  requestAnimationFrame(() => {
    setTimeout(() => {
      ripples.value = ripples.value.filter((r) => r.id !== id);
    }, 600);
  });
};

const handleClick = (event: MouseEvent) => {
  createRipple(event);
  emit("click", event);
};
</script>

<template>
  <button :class="classes" :disabled="disabled" @click="handleClick">
  <div class="group flex items-center gap-2">
      <i-tabler-shopping-cart
        class="w-5 h-5 text-[#56B280] group-hover:text-white group-hover:bg-[#56B280]"
        :class="props.btnIconClr"
      />
      <span class="text-[#56B280] group-hover:text-white group-hover:bg-[#56B280]">{{ label }}</span>
    </div>
    <span
      v-for="ripple in ripples"
      :key="ripple.id"
      class="absolute bg-white opacity-50 rounded-full transform scale-0 animate-ripple"
      :style="{
        top: `${ripple.y}px`,
        left: `${ripple.x}px`,
        width: '80px',
        height: '80px',
      }"
    />
  </button>
</template>


