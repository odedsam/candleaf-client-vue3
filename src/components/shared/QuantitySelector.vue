<script lang="ts" setup>
import { computed } from 'vue';
const props = defineProps<{
  productId: number;
  quantity: number;
  addQuantity: (id:number) => void;
  removeQuantity: (id:number) => void;
  addClass?: string;
}>();


const baseClass=`bg-white border-3 border-[#56b280] flex justify-center items-center gap-2 rounded-sm py-3 px-3 lg:px-6 dark:bg-slate-500`
const classes = computed(()=>[
  baseClass,
  props.addClass,
])
</script>


<template>
    <div class="inline-grid grid-rows-1 justify-center items-center">
      <div class="flex flex-col items-center gap-2">
        <p class="text-semibold font-roboto text-xl text-black dark:text-white text-start md:self-start">Quantity</p>
        <div :class="classes">
          <button @click="addQuantity(props.productId)" class="text-base cursor-pointer font-bold text-[#56b280] font-mono">+</button>
          <p class="text-black text-lg font-bold">{{ quantity.toString() }}</p>
          <button @click="removeQuantity(props.productId)" class="cursor-pointer text-gray-400 text-base font-bold font-mono">-</button>
        </div>
      </div>
    </div>
</template>

<style lang="css" scoped></style>
