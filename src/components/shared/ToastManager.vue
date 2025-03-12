<script setup lang="ts">
import { useUIStore } from '@/stores/uiStore';
import Toast from './Toast.vue';

const uiStore = useUIStore();
</script>

<template>
  <div class="fixed bottom-5 left-1/2 transform -translate-x-1/2 flex flex-col gap-2">
    <Toast
      v-for="toast in uiStore.toasts"
      :key="toast.id"
      :id="toast.id"
      :message="toast.message"
      :type="toast.type"
      @close="uiStore.removeToast(toast.id)"
    />
  </div>
</template>



<!-- // usage
<script setup lang="ts">
import { useUIStore } from '@/stores/uiStore';

const uiStore = useUIStore();

const showSuccess = () => uiStore.showToast('Success!', 'success');
const showError = () => uiStore.showToast('Something went wrong!', 'error');
</script>

<template>
  <button class="px-4 py-2 bg-green-600 text-white rounded" @click="showSuccess">Show Success</button>
  <button class="px-4 py-2 bg-red-600 text-white rounded ml-2" @click="showError">Show Error</button>
</template>
  -->