<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Footer from './components/shared/Footer.vue';
import Header from './components/shared/Header.vue';
</script>

<template>
  
  <header>
    <!-- <nav class="app-nav flex justify-evenly items-center py-8">
      <RouterLink to="/" class="text-3xl font-semibold underline text-green-800">Home</RouterLink>
      <RouterLink to="/products" class="text-3xl font-semibold underline text-green-800">Products</RouterLink>
      <RouterLink to="/cart" class="text-3xl font-semibold underline text-green-800">Cart</RouterLink>
      <RouterLink to="/orderList" class="text-3xl font-semibold underline text-green-800">Order-List</RouterLink>
      <RouterLink to="/wish" class="text-3xl font-semibold underline text-green-800">Wish-list</RouterLink>
      <RouterLink to="/user" class="text-3xl font-semibold underline text-green-800">UserProfile</RouterLink>
    </nav> -->
   <div class="px-24"> <Header /></div>
  </header>
  <RouterView />
  <footer>
    <Footer />
  </footer>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@200;300;400;500;600;700;800;900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap');
.app-nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}
</style>
