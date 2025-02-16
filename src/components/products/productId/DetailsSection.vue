<script setup lang="ts">
import SubscriptionSelector from '@/components/products/atoms/SubscriptionSelector.vue'
import QuantitySelector from '@/components/shared/QuantitySelector.vue'
import IngredientsComp from '@/components/products/productId/IngredientsComp.vue'
import ButtonIcon from '@/components/buttons/ButtonIcon.vue'
defineProps<{ 
	selectedProduct: { id: number; title: string; image: string; price: number; quantity: number; basePrice: number; };
	priceNormalizer: number;
	ingredients: { wax: string; fragrance: string; burningTime: string; dimensions: string; weight: string; };
}>()
</script>

<template>
	<div class="grid grid-flow-row h-full w-full max-sm:py-12 items-center">
	      <div class="flex flex-col items-start">
	        <p class="text-2xl text-black block max-sm:my-4 max-sm:text-break max-lg:text-center">
	          {{ selectedProduct.title }}
	        </p>
	        <p class="text-semibold font-roboto text-[1.625rem] text-[#56B280] mt-3">$ {{ priceNormalizer }}</p>
	      </div>
	      <div class="grid grid-cols-[30%_70%] gap">
	        <div class="flex">
	          <QuantitySelector  />
	        </div>
	        <div>
	          <SubscriptionSelector />
	          <ButtonIcon
	            class="bg-[#56B280] text-white gap-2 rounded-sm py-2 my-12 cursor-pointer"
	            :btn-icon="'/cart-white.svg'"
	            :btn-text="' + Add To Cart'"
	          />
	        </div>
	      </div>
	      <ingredientsComp :ingredients="ingredients" />
	    </div>
</template>

<!-- <div class="grid grid-flow-row h-full w-full max-sm:py-12 items-center"></div> -->