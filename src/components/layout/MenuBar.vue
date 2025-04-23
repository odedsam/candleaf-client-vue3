<script lang="ts" setup>
import { computed, ref, onMounted, onUnmounted } from 'vue'
import { RouterLink } from 'vue-router'
import { useUIStore } from '@/stores/uiStore'
import { storeToRefs } from 'pinia'
import MobileMenu from '@/components/layout/MobileMenu.vue'
import CiMenuAlt04 from '~icons/ci/menu-alt-04'
import CiHamburgerLg from '~icons/ci/hamburger-lg'

const windowSize = ref(window.innerWidth)
const updateWindowSize = () => { windowSize.value = window.innerWidth }
onMounted(() => { window.addEventListener('resize', updateWindowSize) })
onUnmounted(() => { window.removeEventListener('resize', updateWindowSize) })

const isMobileWidth = computed(() => windowSize.value < 768)
const uiStore = useUIStore()
const { isMenuOpen } = storeToRefs(uiStore)
const imageSrc = computed(() => (isMenuOpen.value ? CiMenuAlt04 : CiHamburgerLg))
</script>

<template>
  <div v-if="isMobileWidth">
    <component :is="imageSrc" alt="menu-icon" class="size-6 cursor-pointer" @click="uiStore.toggleMenu()" />
    <MobileMenu :isOpen="isMenuOpen" :close="uiStore.toggleMenu" />
  </div>

  <div v-else class="flex justify-center items-center space-x-4">
    <RouterLink to="/products" class="hover:underline max-md:text-sm font-poppins font-medium">Discovery</RouterLink>
    <RouterLink to="/about" class="hover:underline max-md:text-sm font-poppins font-medium">About</RouterLink>
    <RouterLink to="/contact" class="hover:underline max-md:text-sm text-nowrap font-poppins font-medium">Contact us</RouterLink>


  </div>
</template>
