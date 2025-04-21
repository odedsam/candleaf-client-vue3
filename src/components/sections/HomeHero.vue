<script lang="ts" setup>
import { RouterLink } from 'vue-router'
import HeroSummary from './HeroSummary.vue'
</script>
<template>
  <div class="hero-container">
    <div class="hero-wrapper">
      <HeroSummary />
      <RouterLink to="/products" class="pb-11">
        <button  class="text-white px-6 py-3 rounded-lg transition duration-200 hover:translate-y-[-2px] [background-color:var(--color-primary)] [box-shadow:0_0_8px_rgba(86,178,128,0.6),0_0_16px_rgba(86,178,128,0.5),0_0_24px_rgba(86,178,128,0.4)] hover:[box-shadow:0_0_12px_rgba(86,178,128,0.8),0_0_24px_rgba(86,178,128,0.6),0_0_36px_rgba(86,178,128,0.5)] cursor-pointer text-center font-roboto font-medium text-xl">
          Discovery our Collection
        </button>
      </RouterLink>
    </div>
  </div>
</template>
