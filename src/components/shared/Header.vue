<script lang="ts" setup>
import HeaderLogo from '@/assets/icons/HeaderLogo.svg'
import Profile from '@/assets/icons/Profile.svg'
import CartBlack from '@/assets/icons/cartBlack.svg'
</script>
<template>
  <div class="flex justify-between items-center bg-white p-4">
    <div class="inline-flex justify-center items-center">
      <img :src="HeaderLogo" alt="header-logo" />
      <p class="text-[#56B280] pl-2 text-xl text-semibold">Candleaf</p>
    </div>

    <div class="flex justify-center items-center gap-4">
      <p>Discovery</p>
      <p>About</p>
      <p>Contact us</p>
    </div>

    <div class="flex justify-center items-center gap-2">
      <img :src="Profile" class="w-6 h-6" alt="profile-icon" />
      <img :src="CartBlack" class="w-6 h-6" alt="cart-icon" />
    </div>
  </div>
</template>

<style lang="css" scoped></style>
