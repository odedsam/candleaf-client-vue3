<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import { useProductStore } from '@/stores/productStore'

const { addQuantity, removeQuantity } = useProductStore()
const { selectedProduct } = storeToRefs(useProductStore())
</script>

<template>
  <div class="wraper">
    <div class="inline-grid grid-rows-2 justify-center items-center">
      <div class="flex flex-col items-center gap-2">
        <p class="text-semibold font-roboto text-xl text-black text-start">Quantity</p>
        <div class="bg-white border-3 border-[#56b280] flex justify-center items-center gap-2 rounded-sm py-3 px-3 lg:px-6">
          <button @click="addQuantity" class="text-base cursor-pointer font-bold text-[#56b280] font-mono">+</button>
          <p class="text-black text-lg font-bold">{{ selectedProduct.quantity.toString() }}</p>
          <button @click="removeQuantity" class="cursor-pointer text-gray-400 text-base font-bold font-mono">-</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped></style>
