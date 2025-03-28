<script lang="ts" setup>
import fragrantSoy from '@/assets/catalog/fragrantSoy.svg'
import {RouterLink} from 'vue-router'
import { features } from '@/utils';
</script>

<template>
  <section class="flex flex-col lg:flex-row items-center justify-between bg-gray-100 dark:bg-gray-600 py-16 px-12 rounded-lg">
    <div class="lg:w-1/2 space-y-4">
      <h2 class="text-4xl font-poppins font-medium text-gray-900">  Clean and <br />  fragrant soy wax  </h2>
      <p class="font-poppins font-normal text-base text-primary"> Made for your home and for your wellness </p>
      <ul class="space-y-3">
        <li v-for="feature in features"
          :key="feature.id"
          class="flex items-start gap-2">
          <img src="/checkmark-frag.svg" alt="check-mark-icon" class="w-4 h-4 mt-1" draggable="false" />
          <p class="font-poppins dark:text-black">
            <span class="font-medium text-sm">{{ feature.title }}:</span>
            <span class="font-normal text-sm">{{ feature.description }}</span>
          </p>
        </li>
      </ul>

      <RouterLink to="/products">
        <button class="mt-6 font-roboto font-medium text-xl px-14 py-2 cursor-pointer bg-[#56B280] text-white rounded-lg shadow-md hover:bg-[#88edb6] transition">
          Learn more
        </button>
      </RouterLink>
    </div>

    <div class="lg:w-1/2 mt-6 lg:mt-0 flex justify-center">
      <img :src="fragrantSoy" alt="Candles" class="max-w-md w-full" />
    </div>
  </section>
</template>

<style scoped></style>
