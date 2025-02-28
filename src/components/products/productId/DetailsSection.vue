<script setup lang="ts">
import { ref, computed } from 'vue'
import SubscriptionSelector from '@/components/products/atoms/SubscriptionSelector.vue'
import QuantitySelector from '@/components/shared/QuantitySelector.vue'
import IngredientsComp from '@/components/products/productId/IngredientsComp.vue'
import ImageSection from '@/components/products/productId/ImageSection.vue'

const props = defineProps<{ 
  selectedProduct: { 
    id: number; 
    title: string; 
    image: string; 
    price: number; 
    quantity?: number; 
    basePrice?: number; 
  };
  priceNormalizer: number;
  ingredients: { 
    wax: string; 
    fragrance: string; 
    burningTime: string; 
    dimensions: string; 
    weight: string; 
  };
  description: string;
}>()

//  make quantity reactive
const quantity = ref(props.selectedProduct.quantity || 1)

const totalPrice = computed(() => {
  return ((quantity.value || 0) * (props.selectedProduct?.price || 0)).toFixed(2);
});

const addQuantity = () => quantity.value++
const removeQuantity = () => {
  if (quantity.value > 1) quantity.value--
}


</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-2 h-full w-full py-12 gap-8">
    
    <!--  #left-section takes full width on small screens, 50% on md+ -->
    <div class="w-full h-full">
      <ImageSection :image="selectedProduct.image" :description="description" />
    </div>

    <!--  right-section takes full width on small screens, 50% on md+ -->
    <div class="flex flex-col">
      <p class="text-2xl text-black block max-sm:my-4 max-sm:text-break max-lg:text-center md:text-start">
        {{ selectedProduct.title }}
      </p>
      <p class="text-semibold font-roboto text-[1.625rem] text-[#56B280] max-md:text-center mt-3">
        $ {{ totalPrice }}
      </p>

      <div class="grid grid-cols-1 lg:grid-cols-[30%_70%] mt-6 max-md:justify-center max-md:items-center ">
        <div class="flex max-md:justify-center max-md:items-center">
          <QuantitySelector 
            :quantity="quantity" 
            :addQuantity="addQuantity" 
            :removeQuantity="removeQuantity" 
            :add-class="'max-md:px-6 max-md:py-0'"
            
          />
        </div>
        <div class="max-md:flex justify-center items-center">
          <SubscriptionSelector />
        </div>
      </div>

      <IngredientsComp :ingredients="ingredients" />
    </div>
  </div>
</template>
