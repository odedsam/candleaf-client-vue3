<script setup lang="ts">
import type { NavItem } from '@/types';
import { computed, ref, watch } from 'vue';
import { RouterLink } from 'vue-router';
import { useAuthStore } from '@/stores/authStore';
import { storeToRefs } from 'pinia';
import { useCartStore } from '@/stores/cartStore';
import ProfileIcon from '@/assets/icons/userProfile.svg';
import CartIcon from './CartIcon.vue';
import BaseDropDown from '../base/BaseDropDown.vue';

const authStore = useAuthStore();
const cartStore = useCartStore();
const { isAuthenticated, user } = storeToRefs(authStore);
const userImage = ref('');
const firstName = computed(() => user?.value?.name.split(' ')[0] ?? 'Guest');
const profileImage = computed(() => user?.value?.avatar ?? ProfileIcon);
const profileLink = ref<string>('/auth/login');

const navItems = computed<NavItem[]>(() => [
  { name: 'View Profile', to: profileLink.value },
  { name: 'Settings', to: `${profileLink.value}/settings` },
  { name: 'Preferences', to: `${profileLink.value}/preferences` },
  { name: 'Support', to: `${profileLink.value}/support` },
  { name: 'Help', to: `${profileLink.value}/help` },
  { name: 'Notifications', to: `${profileLink.value}/notifications` },
]);

watch([isAuthenticated, user], () => {
    profileLink.value = isAuthenticated.value && user.value?._id ? `/user/${user.value._id}` : '/auth/login';},
  { immediate: true },
);
</script>

<template>
  <div class="order-3 flex justify-center items-center space-x-4">
    <BaseDropDown :icon-place-holder="profileImage">
      <RouterLink v-if="!isAuthenticated" :to="profileLink" class="flex pl-7 gap-x-2 dark:text-gray-100">Login</RouterLink>

      <div v-if="isAuthenticated">
        <RouterLink v-for="item in navItems" :key="item.name" :to="item.to" class="flex pl-7 gap-x-2 dark:text-gray-100">
          {{ item.name }}
        </RouterLink>

        <span v-if="isAuthenticated" class="text-red-500 flex pl-7 gap-x-2 dark:text-red-400" @click="authStore.handleLogout">Logout</span>
      </div>
    </BaseDropDown>

    <div class="cart-btn max-md:pr-4" @click="cartStore.toggleCart()">
      <CartIcon />
    </div>
  </div>
</template>
