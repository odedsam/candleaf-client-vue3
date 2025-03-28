<script lang="ts" setup>
import {computed, ref, onMounted, onUnmounted} from 'vue'
import {RouterLink} from 'vue-router'
import {useUIStore} from '@/stores/uiStore'
import {storeToRefs} from 'pinia'
import OpenIcon from '@/assets/icons/menu-open.svg'
import ClosedIcon from '@/assets/icons/menu-closed.svg'
import TablerMenu2 from '~icons/tabler/menu-2';
import TablerMenuOrder from '~icons/tabler/menu-order';

const windowSize = ref(window.innerWidth)
const updateWindowSize = () => {windowSize.value = window.innerWidth}
  
onMounted(() => {window.addEventListener('resize', updateWindowSize)})
onUnmounted(() => { window.removeEventListener('resize', updateWindowSize)})

const isMobileWidth = computed(() => windowSize.value < 768)
const uiStore = useUIStore()
const {isMenuOpen} = storeToRefs(uiStore)
const imageSrc = computed(() => (isMenuOpen.value ? OpenIcon : ClosedIcon))
const Menu = computed(() => (isMenuOpen.value ? TablerMenuOrder : TablerMenu2))


</script>

<template>
  <div v-if="isMobileWidth">
    <img :src="imageSrc" alt="menu-icon" class="w-[34px] h-[34px]" @click="uiStore.toggleMenu()" />
    <component :is="Menu" class="text-black dark:text-white w-8 h-8"
     @click="uiStore.toggleMenu"
      />
    <ul class="relative w-full" v-show="isMenuOpen">
      <li class="absolute flex flex-col justify-center items-center top-6 left-0 z-50 gap-5 bg-[#ccc]">
        <RouterLink to="/products" class="hover:underline max-md:text-sm">Discovery</RouterLink>
        <RouterLink to="/about" class="hover:underline max-md:text-sm">About</RouterLink>
        <RouterLink to="/contact" class="hover:underline max-md:text-sm text-nowrap">
          Contact us
        </RouterLink>
      </li>
    </ul>
  </div>

  <div v-else class="flex justify-center items-center space-x-4">
    <RouterLink to="/products" class="hover:underline max-md:text-sm">Discovery</RouterLink>
    <RouterLink to="/about" class="hover:underline max-md:text-sm">About</RouterLink>
    <RouterLink to="/contact" class="hover:underline max-md:text-sm text-nowrap">
      Contact us
    </RouterLink>
  </div>
</template>

