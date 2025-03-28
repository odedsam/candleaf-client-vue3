<script setup lang="ts">
import { useAuthStore } from '@/stores/authStore';
import { storeToRefs } from 'pinia';

const authStore = useAuthStore();
const { isAuthenticated,user } = storeToRefs(authStore)



</script>

<template>
  <div class="user-profile">
    <h2>User Profile</h2>
    <div v-if="isAuthenticated">
      <p>Name: {{ user?.name?.split(' ')[0] }}</p>
      <p>Email: {{ user?.email }}</p>
      <button @click="authStore.handleLogout">Logout</button>
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
