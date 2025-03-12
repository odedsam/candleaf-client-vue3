<script setup lang="ts">
import { computed, onMounted } from 'vue';
import { RouterLink } from 'vue-router';
import ProfileIcon from '@/assets/icons/userProfile.svg';
import CartIcon from '@/components/ui/CartIcon.vue';
import MenuBar from '@/components/ui/MenuBar.vue';
import LogoIcon from '@/components/ui/LogoIcon.vue';
import { useCartStore } from '@/stores/cartStore';
import { useAuthStore } from '@/stores/authStore';
import { storeToRefs } from 'pinia';

const authStore = useAuthStore();
const cartStore = useCartStore();
const { isAuthenticated} = storeToRefs(authStore)




// onMounted(async () => {
//   try {
//     const res = await fetch("http://localhost:5001/api/user", {
//       credentials: "include",
//     });

//     if (res.ok) {
//       authStore.user.value = await res.json();
//     }
//   } catch (err) {
//     console.error(err);
//   }
// });

const logout = async () => {
  await fetch("http://localhost:5001/api/logout", { credentials: "include" });
  authStore.user.value = null;
};

const profileImage = computed(() => authStore.user?.image || ProfileIcon);
</script>

<template>
  <nav class="flex justify-between items-center bg-white py-6 max-md:px-2 px-8">
    <LogoIcon class="order-2 md:order-1" />
    <MenuBar class="order-1 md:order-2" />

    <div class="order-3 flex justify-center items-center space-x-4">
      <!-- If user is logged in, show profile info -->
      <div v-if="authStore.isAuthenticated" class="flex items-center space-x-2">
        <RouterLink :to="`/user/${authStore.user?.id}`" class="flex items-center space-x-2">
          <span class="text-sm font-bold text-gray-800">{{ authStore.user?.name }}</span>
          <img :src="profileImage" class="w-8 h-8 rounded-full cursor-pointer" alt="User Profile" />
        </RouterLink>
      </div>

      <!-- If user is not logged in, show login link -->
      <RouterLink v-else :to="'/auth/login'">
        <img :src="ProfileIcon" class="w-6 h-6 cursor-pointer" alt="profile-icon" />
      </RouterLink>

      <!-- Cart Icon -->
      <div @click="cartStore.toggleCart()">
        <CartIcon />
      </div>
    </div>
  </nav>
</template>