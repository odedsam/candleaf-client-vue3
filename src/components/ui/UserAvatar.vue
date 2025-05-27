<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import { RouterLink } from 'vue-router';
import { useAuthStore } from '@/stores/authStore';
import { storeToRefs } from 'pinia';
import { useCartStore } from '@/stores/cartStore';
import { getCookiesByKeys, getCookiesByKeysAndNames, showCookiesTable, findCookie } from '@/utils';
import ProfileIcon from '@/assets/icons/userProfile.svg';
import CartIcon from './CartIcon.vue';
import BaseDropDown from '../base/BaseDropDown.vue';
const authStore = useAuthStore();
const cartStore = useCartStore();
const { isAuthenticated, user } = storeToRefs(authStore);
const firstName = computed(() => user?.value?.name.split(' ')[0] ?? 'User');
const profileImage = computed(() => user?.value?.avatar ?? ProfileIcon);
const profileLink = ref('/auth/login');
const userImage = ref('');
console.log(' userImage:', userImage.value);

watch(
  [isAuthenticated, user],
  () => {
    profileLink.value = isAuthenticated.value && user.value?._id ? `/user/${user.value._id}` : '/auth/login';
  },
  { immediate: true },
);

showCookiesTable();
// See all cookies
findCookie('token'); // Search for cookies containing "token"
findCookie('session'); // Search for cookies containing "session"
</script>

<template>
  <div class="order-3 flex justify-center items-center space-x-4">
    <BaseDropDown :icon-place-holder="profileImage">
      <RouterLink :to="profileLink" class="flex pl-7 gap-x-2 dark:text-gray-100" />
      <RouterLink :to="profileLink" class="flex pl-7 gap-x-2 dark:text-gray-100">View Profile</RouterLink>
      <RouterLink :to="profileLink" class="flex pl-7 gap-x-2 dark:text-gray-100">Settings</RouterLink>
      <RouterLink :to="profileLink" class="flex pl-7 gap-x-2 dark:text-gray-100">Preferences</RouterLink>
      <RouterLink :to="profileLink" class="flex pl-7 gap-x-2 dark:text-gray-100">Support</RouterLink>
      <RouterLink :to="profileLink" class="flex pl-7 gap-x-2 dark:text-gray-100">Help</RouterLink>
      <RouterLink :to="profileLink" class="flex pl-7 gap-x-2 dark:text-gray-100">Notifications</RouterLink>

      <span v-if="isAuthenticated" class="text-red-500 flex pl-7 gap-x-2 dark:text-red-400" @click="authStore.handleLogout">Logout</span>
    </BaseDropDown>

    <div class="cart-btn max-md:pr-4" @click="cartStore.toggleCart()">
      <CartIcon />
    </div>
  </div>
</template>
