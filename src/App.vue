<script setup lang="ts">
import {RouterLink, RouterView} from 'vue-router'
import Footer from './components/shared/Footer.vue'
import Header from './components/shared/Header.vue'
</script>

<template>
  <div>
    <Header />
    <main class="min-h-screen flex flex-col"><RouterView /></main>
    <Footer />
  </div>
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
