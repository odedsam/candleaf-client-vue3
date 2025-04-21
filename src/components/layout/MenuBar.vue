<script lang="ts" setup>
import {computed, ref, onMounted, onUnmounted} from 'vue'
import {RouterLink} from 'vue-router'
import {useUIStore} from '@/stores/uiStore'
import {storeToRefs} from 'pinia'
import OpenIcon from '@/assets/icons/menu-open.svg'
import ClosedIcon from '@/assets/icons/menu-closed.svg'
import MobileMenu from '@/components/layout/MobileMenu.vue'

const isOpen = ref(false)
const windowSize = ref(window.innerWidth)
const updateWindowSize = () => {windowSize.value = window.innerWidth}
onMounted(() => {window.addEventListener('resize', updateWindowSize)})
onUnmounted(() => { window.removeEventListener('resize', updateWindowSize)})

const isMobileWidth = computed(() => windowSize.value < 768)
const uiStore = useUIStore()
const {isMenuOpen} = storeToRefs(uiStore)
const imageSrc = computed(() => (isMenuOpen.value ? OpenIcon : ClosedIcon))


</script>

<template>
  <div v-if="isMobileWidth">
    <img :src="imageSrc" alt="menu-icon" class="w-[34px] h-[34px]" @click="uiStore.toggleMenu()" />
    <MobileMenu  :isOpen="isMenuOpen" :close="uiStore.toggleMenu"  />
  </div>

  <div v-else class="flex justify-center items-center space-x-4">
    <RouterLink to="/products" class="hover:underline max-md:text-sm font-poppins font-medium">Discovery</RouterLink>
    <RouterLink to="/about" class="hover:underline max-md:text-sm font-poppins font-medium">About</RouterLink>
    <RouterLink to="/contact" class="hover:underline max-md:text-sm text-nowrap font-poppins font-medium">
      Contact us
    </RouterLink>
  </div>
</template>

