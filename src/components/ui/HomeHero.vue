<script lang="ts" setup>
import {RouterLink} from 'vue-router'

</script>
<template>
  <div class="hero-container">
    <div class="filtered p-24 flex  flex-col justify-center items-center">
      <small class="text-[3rem]">🌱</small>
      <h1 class="text-[2rem]">The nature candle</h1>
      <p class="text-xl mt-2 mb-6 text-center">All handmade with natural soy wax, <br /> Candleaf is a companion for all your pleasure moments</p>

      <RouterLink to="/products">
        <button class="bg-[#56B280] text-center font-roboto font-medium text-xl py-4 rounded-lg text-white px-16">Discovery our Collection</button>
      </RouterLink>
    </div>
  </div>
</template>

<style lang="css" scoped>
.hero-container {
  width: 100%;
  height: 600px;
  background-image: url('@/assets/images/hero-image.svg');
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
}

.filtered {
    background: rgba(255, 255, 255, 0.3); 
    backdrop-filter: blur(86px);
}
</style>
