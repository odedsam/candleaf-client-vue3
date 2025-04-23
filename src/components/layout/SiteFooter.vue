<script lang="ts" setup>
import footerIcon from '@/assets/icons/FooterIcon.svg'
import UiCredit from '@/components/shared/UiCredit.vue'
import DividerFooter from '../ui/DividerFooter.vue'
const isProd = import.meta.env.PROD
</script>
<template>
  <main class="footer-container">

    <section class="px-4 md:px-0 md:w-[90%] md:mx-auto">
      <DividerFooter />
      <div class="w-full gap-6 md:w-[50%] inline-flex flex-col justify-start items-start">
        <div class="flex items-center justify-center">
          <img :src="footerIcon" alt="footer-icon" class="w-[2.375rem] h-[2.375rem]" />
          <p class="pl-3 font-sans font-semibold text-white text-2xl md:text-4xl">Candleaf</p>
        </div>
        <p class="text-white text-base  break-words">
          Your natural candle made for<br class="hidden md:block"> your home and for your wellness.
        </p>
      </div>

      <div class="pt-[3.25rem] w-full md:w-[50%] inline-grid grid-cols-2 md:grid-cols-3 max-md:grid-rows-2 gap-y-10 items-center justify-center gap-x-8">
        <div class="footer-links-cnt">
          <h1 class="text-[#56B280]">Discovery</h1>
          <p class="text-[#E1E1E1]">New Season</p>
          <p class="text-[#E1E1E1]">Most Searched</p>
          <p class="text-[#E1E1E1]">Most Selled</p>
        </div>

        <div class="footer-links-cnt">
          <p class="text-[#56B280]">About</p>
          <p class="text-[#E1E1E1]">Help</p>
          <p class="text-[#E1E1E1]">Shipping</p>
          <p class="text-[#E1E1E1]">Affiliate</p>
        </div>

        <div class="footer-links-cnt">
          <p class="text-[#56B280]">Info</p>
          <p class="text-[#E1E1E1]">Contanct Us</p>
          <p class="text-[#E1E1E1]">Privacy Policies</p>
          <p class="text-[#E1E1E1]">Terms & Conditions</p>
        </div>
      </div>
    </section>
  </main>
  <footer v-if="isProd" class="w-full text-center text-sm text-gray-500 py-4">
    <UiCredit />
  </footer>
</template>
