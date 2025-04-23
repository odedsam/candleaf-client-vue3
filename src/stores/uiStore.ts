import { defineStore } from 'pinia';
import { ref } from 'vue';

type ToastType = 'success' | 'error' | 'info' | 'warning';

interface ToastState {
  id: number;
  message: string;
  type: ToastType;
}

export const useUIStore = defineStore('ui', () => {
  const isMenuOpen = ref<boolean>(false);
  const toasts = ref<ToastState[]>([]);

  const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
  };

  const closeMenu = () => {
    isMenuOpen.value = false;
  };
  const openMenu = () => {
    isMenuOpen.value = true;
  };

  const showToast = (message: string, type: ToastType = 'success', duration = 3000) => {
    const id = Date.now(); // Unique ID for each toast
    toasts.value.push({ id, message, type });

    // Auto-remove toast after duration
    setTimeout(() => {
      removeToast(id);
    }, duration);
  };

  // Remove Toast by ID
  const removeToast = (id: number) => {
    toasts.value = toasts.value.filter((toast) => toast.id !== id);
  };

  return {
    isMenuOpen,
    toggleMenu,
    toasts,
    showToast,
    removeToast,
  };
});
