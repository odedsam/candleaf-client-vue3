
<script setup lang="ts">
defineProps<{
  message: string;
  type: 'success' | 'error' | 'info' | 'warning';
  id: number;
}>();

const emit = defineEmits(['close']);

const closeToast = () => {
  emit('close');
};

const toastStyles = {
  success: 'bg-green-500',
  error: 'bg-red-500',
  info: 'bg-blue-500',
  warning: 'bg-yellow-500 text-black',
};
</script>

<template>
  <div
    class="flex items-center justify-between px-4 py-3 rounded-lg text-white shadow-lg w-80"
    :class="toastStyles"
  >
    <span>{{ message }}</span>
    <button class="text-white hover:opacity-70" @click="closeToast">✖</button>
  </div>
</template>

