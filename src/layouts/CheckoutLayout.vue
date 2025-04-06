<script setup lang="ts">
import {RouterView} from "vue-router";
import CheckoutHeader from "@/components/features/checkout/CheckoutHeader.vue";

</script>

<template>
  <div>
    <CheckoutHeader />
    <main class="flex-1 px-4 md:px-6 lg:px-8 pb-8">
      <RouterView />
    </main>
  </div>
</template>
