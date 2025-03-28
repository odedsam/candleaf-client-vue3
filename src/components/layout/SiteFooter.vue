<script lang="ts" setup>
import footerIcon from '@/assets/icons/FooterIcon.svg'
import UiCredit from "@/components/shared/UiCredit.vue"
</script>
<template>
  <main class="px-8 py-16 flex flex-wrap w-full bg-[#272727]">
    <div class="left w-[50%] inline-flex flex-col justify-start items-start">
      <div class="flex items-center justify-center">
        <img :src="footerIcon" alt="footer-icon" />
        <p class="pl-3 text-white text-xl text-semibold">Candleaf</p>
      </div>
      <p class="text-white text-xl text-semibold break-words">Your natural candle made for your home and for your wellness.</p>
    </div>

    <div class="w-[50%] right inline-grid grid-cols-3 items-center justify-center gap-x-4">
      <div class="discovery">
        <p class="text-[#56B280]">Discovery</p>
        <p class="text-[#E1E1E1]">New Season</p>
        <p class="text-[#E1E1E1]">Most Searched</p>
        <p class="text-[#E1E1E1]">Most Selled</p>
      </div>

      <div class="about">
        <p class="text-[#56B280]">About</p>
        <p class="text-[#E1E1E1]">Help</p>
        <p class="text-[#E1E1E1]">Shipping</p>
        <p class="text-[#E1E1E1]">Affiliate</p>
      </div>

      <div class="info">
        <p class="text-[#56B280]">Info</p>
        <p class="text-[#E1E1E1]">Contanct Us</p>
        <p class="text-[#E1E1E1]">Privacy Policies</p>
        <p class="text-[#E1E1E1]">Terms & Conditions</p>
      </div>
    </div>
  </main>
  <footer class="w-full text-center text-sm text-gray-500 py-4">
    <UiCredit />
  </footer>
</template>

<style lang="css" scoped></style>
