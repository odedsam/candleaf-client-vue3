<script lang="ts" setup>
import NavBar from '@/components/ui/NavBar.vue';
import CartModal from './CartModal.vue';
</script>

<template>
  <header>
    <NavBar />
    <div class="absolute"><CartModal /></div>
  </header>
</template>
