<script lang="ts" setup>
import { RouterLink } from 'vue-router'
</script>
<template>
  <div class="hero-container">
    <div
      class="bg-[#ffffff4d] backdrop-blur-[86px] dark:bg-black/50 p-24 flex flex-col justify-center items-center rounded-3xl"
    >
      <small class="text-[3rem]">🌱</small>
      <h1 class="text-[2rem] font-roboto font-normal dark:text-[#cbd7ec]">The nature candle</h1>
      <p class="text-xl mt-2 mb-6 text-center font-normal font-helvetica dark:text-[#cbd7ec]">
        All handmade with natural soy wax,
        <br />
        Candleaf is a companion for all your pleasure moments
      </p>
      <RouterLink to="/products">
        <button
          class="text-white px-6 py-4 rounded-lg transition duration-200 hover:translate-y-[-2px] [background-color:var(--color-primary)] [box-shadow:0_0_8px_rgba(86,178,128,0.6),0_0_16px_rgba(86,178,128,0.5),0_0_24px_rgba(86,178,128,0.4)] hover:[box-shadow:0_0_12px_rgba(86,178,128,0.8),0_0_24px_rgba(86,178,128,0.6),0_0_36px_rgba(86,178,128,0.5)] cursor-pointer text-center font-roboto font-medium text-xl"
        >
          <span>Discovery our Collection</span>
        </button>
      </RouterLink>

      <!-- <RouterLink to="/products">
        <button
          class="bg-primary hover:bg-emerald-600 transition cursor-pointer text-center font-roboto font-medium text-xl max-md:text-base py-4 rounded-lg text-white max-md:px-4 px-16"
        >
          Discovery our Collection
        </button>
      </RouterLink> -->
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

/* .try {
  background-color: var(--color-primary);
  box-shadow:
    0 0 8px rgba(86, 178, 128, 0.6),
    0 0 16px rgba(86, 178, 128, 0.5),
    0 0 24px rgba(86, 178, 128, 0.4);
  color: white;
  padding: 1rem 1.5rem;
  border-radius: 8px;
  transition: box-shadow 0.3s ease, transform 0.2s ease;
}

.try:hover {
  box-shadow:
    0 0 12px rgba(86, 178, 128, 0.8),
    0 0 24px rgba(86, 178, 128, 0.6),
    0 0 36px rgba(86, 178, 128, 0.5);
  transform: translateY(-2px);
} */

/* .filtered {
    background: rgba(255, 255, 255, 0.3); 
    backdrop-filter: blur(86px);
} */
</style>
