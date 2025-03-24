<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import { useAuthStore } from '@/stores/authStore'
import { storeToRefs } from 'pinia'
import ProfileIcon from '@/assets/icons/userProfile.svg'
import CartIcon from './CartIcon.vue'
import { useCartStore } from '@/stores/cartStore'

const authStore = useAuthStore()
const cartStore = useCartStore()
const { isAuthenticated, user } = storeToRefs(authStore)
const firstName = computed(()=>user?.value?.name.split(' ')[0] ?? 'User')
const profileImage = computed(() => user?.value.avatar ?? ProfileIcon)

</script>

<template>
  <div class="order-3 flex justify-center items-center space-x-4">

    <div v-if="isAuthenticated">
      <RouterLink :to="`/user/${user?._id}`" class="flex justify-center items-center gap-x-2">
        <span class="text-xs font-medium text-gray-800 dark:text-white">Hey,</span>
        <span class="text-md font-sans text-gray-800 dark:text-white hover:underline">{{ firstName }}</span>
        <img  :src="profileImage" class="w-8 h-8 rounded-full cursor-pointer" alt="User Profile" />
        <span class="text-red-500 text-xs"  @click="authStore.handleLogout">Logout</span>
      </RouterLink>
    </div>
    <RouterLink v-else :to="'/auth/login'">
      <img :src="ProfileIcon" class="w-6 h-6 cursor-pointer" alt="profile-icon" />
    </RouterLink>

    
    <div @click="cartStore.toggleCart()">
      <CartIcon />
    </div>
  </div>
</template>
