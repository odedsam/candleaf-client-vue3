<script lang="ts" setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import HeaderLogo from '@/assets/icons/HeaderLogo.svg'
import Profile from '@/assets/icons/userProfile.svg'
import CartIcon from '@/components/ui/CartIcon.vue'

const isLoggedIn = ref(false)
const userHaveItems = ref(true)
</script>

<template>
  <nav class="flex justify-between items-center bg-white py-6 px-24">
    <RouterLink :to="'/'">
      <div class="inline-flex justify-center items-center">
        <img :src="HeaderLogo" alt="header-logo" />
        <p class="text-[#56B280] pl-2 text-xl text-semibold">Candleaf</p>
      </div>
    </RouterLink>

    <div class="flex justify-center items-center gap-4">
      <RouterLink to="/products" class="hover:underline">Discovery</RouterLink>
      <RouterLink to="/about" class="hover:underline">About</RouterLink>
      <RouterLink to="/contact" class="hover:underline">Contact us</RouterLink>
    </div>

    <div class="flex justify-center items-center gap-4">
      <RouterLink :to="isLoggedIn ? '/login' : '/user/${id}'">
        <img :src="Profile" class="w-6 h-6 cursor-pointer" alt="profile-icon" />
      </RouterLink>

      <RouterLink v-if="userHaveItems" to="/cart">
        <CartIcon />
      </RouterLink>
    </div>
  </nav>
</template>
