<script setup lang="ts">
import { computed } from 'vue';
import { useUserStore } from '@/stores/userStore';

const userStore = useUserStore();

const isLoggedIn = computed(() => !!userStore.user);

function logout() {
  userStore.logout();
}
</script>

<template>
  <div class="user-profile">
    <h2>User Profile</h2>
    <div v-if="isLoggedIn">
      <p>Name: {{ userStore.user?.name }}</p>
      <p>Email: {{ userStore.user?.email }}</p>
      <button @click="logout">Logout</button>
    </div>
    <p v-else>Please log in.</p>
  </div>
</template>

<style scoped>
.user-profile {
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
}
button {
  margin-top: 10px;
  background: red;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
}
</style>
