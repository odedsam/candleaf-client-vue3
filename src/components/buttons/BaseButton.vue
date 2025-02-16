<script setup lang="ts">
import { computed } from "vue";

defineOptions({ name: "BaseButton" });

const props = defineProps<{
  btnIcon?: string; // Optional icon
  btnText?: string; // Optional text
  clickAction?: () => void; // Function callback for click
  type?: "button" | "submit" | "reset"; // Button type
  variant?: "primary" | "secondary" | "danger" | "outline"; // Button style
  size?: "sm" | "md" | "lg"; // Button size
}>();

const emit = defineEmits<{
  (e: "click", event: MouseEvent): void;
}>();

// 🖌️ Dynamic classes for styling
const buttonClasses = computed(() => ({
  "bg-blue-500 text-white hover:bg-blue-600": props.variant === "primary",
  "bg-gray-500 text-white hover:bg-gray-600": props.variant === "secondary",
  "bg-red-500 text-white hover:bg-red-600": props.variant === "danger",
  "border border-gray-500 text-gray-700 hover:bg-gray-100": props.variant === "outline",
  "px-2 py-1 text-sm": props.size === "sm",
  "px-4 py-2 text-md": props.size === "md",
  "px-6 py-3 text-lg": props.size === "lg",
}));
</script>

<template>
  <button
    :type="type"
    :class="['flex items-center gap-2 rounded-md transition-all', buttonClasses]"
    @click="clickAction ? clickAction() : emit('click', $event)"
    v-bind="$attrs"
  >
    <img v-if="btnIcon" :src="btnIcon" alt="icon" class="w-5 h-5" />
    <span v-if="btnText">{{ btnText }}</span>
  </button>
</template>

<style scoped></style>
