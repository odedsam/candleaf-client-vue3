<script setup lang="ts">
import LogoIcon from '@/components/ui/LogoIcon.vue'
import UserAvatar from '@/components/ui/UserAvatar.vue'
import MenuBar from '@/components/layout/MenuBar.vue'
</script>

<template>
  <nav class="flex justify-between items-center bg-white dark:bg-zinc-800 py-6 max-md:px-2 px-8 transition-colors duration-300">
    <LogoIcon class="order-2 md:order-1 cursor-pointer" />
    <MenuBar class="order-1 md:order-2" />
    <UserAvatar />
  </nav>
</template>
