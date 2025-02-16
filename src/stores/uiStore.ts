import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUIStore = defineStore('ui', () => {


  const isSidebarOpen = ref<boolean>(false)
  const isLoading = ref<boolean>(false)
  const modal = ref<string | null>(null)

  const toggleSidebar = () => {
    isSidebarOpen.value = !isSidebarOpen.value
  }
  const setLoading = (state: boolean) => {
    isLoading.value = state
  }

  const openModal = (modalName: string) => {
    modal.value = modalName
  }

  const closeModal = () => {
    modal.value = null
  }

  return { isSidebarOpen, isLoading, modal, toggleSidebar, setLoading, openModal, closeModal }
})
