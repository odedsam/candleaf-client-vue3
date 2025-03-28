<script setup lang="ts">
import { computed} from 'vue'
import { storeToRefs } from 'pinia'
import {useCartStore} from '@/stores/cartStore'
import SubscriptionSelector from '@/components/features/products/SubscriptionSelector.vue'
import QuantitySelector from '@/components/shared/QuantitySelector.vue'
import IngredientsComp from '@/components/features/products/IngredientsComp.vue'
import BaseButton from '@/components/base/BaseButton.vue'

const props = defineProps<{
  selectedProduct: {
    id: number
    title: string
    image: string
    price: number
    quantity?: number
    basePrice?: number
  }
  ingredients: {
    wax: string
    fragrance: string
    burningTime: string
    dimensions: string
    weight: string
  }
  description: string
}>()


const cartStore = useCartStore()
const {increaseQuantity, decreaseQuantity} = useCartStore()
const {cartItems} = storeToRefs(cartStore)

const quantity = computed(() => {
  const productInCart = cartItems.value.find(item => item.id === props.selectedProduct.id);
  return productInCart ? productInCart.quantity : 1;
});

const totalPrice = computed(() => {
  return ((quantity.value || 0) * (props.selectedProduct?.price || 0)).toFixed(2);
});


const handleClick = () => {
  const productToAdd = {
    id: props.selectedProduct.id,
    title: props.selectedProduct.title,
    image: props.selectedProduct.image ?? '/placeholder-image.png',
    price: props.selectedProduct.price ?? 0,
    quantity: quantity.value,
  }
  console.log('Adding to cart:', productToAdd)
  cartStore.addToCart(productToAdd)
}
</script>

<template>
  <div class="grid grid-cols-1 lg:gap-x-12 md:grid-cols-2 py-12 max-md:gap-12 items-strech">
    <!-- Left Section (Product-Image)  -->
    <div class="w-full h-full flex items-stretch">
      <div class="mx-auto h-full flex flex-col">
        <img :src="selectedProduct.image" alt="prod-image" class="w-full h-full object-contain"  draggable="false" />
        <div class="flex flex-col justify-center items-center max-md:mt-12 gap-3">
          <p class="text-black text-base font-roboto font-semibold text-center">
            {{ description }}
          </p>
          <p class="text-green text-base font-roboto font-semibold text-center text-[#56B280]">
            🚚 FREE SHIPPING
          </p>
        </div>
      </div>
    </div>

    <div class="inline-flex flex-col  gap-12 max-md:mt-12">
      <div class="flex flex-col h-full">
        <p class="text-2xl text-black max-md:mt-4 max-sm:text-break max-lg:text-center md:text-start">
          {{ selectedProduct.title }}
        </p>
        <p class="text-semibold font-roboto max-md:mt-4 text-[1.625rem] text-[#56B280] max-md:text-center">
          $ {{ totalPrice }}
        </p>
      </div>

      <div class="flex flex-col gap-12">
        <div class="inline-flex max-md:justify-center max-md:items-center">
          <QuantitySelector
            :product-id="props.selectedProduct.id"
            :quantity="cartStore.cartItems.find(item => item.id === selectedProduct.id)?.quantity ?? 1"
            :addQuantity="increaseQuantity"
            :removeQuantity="decreaseQuantity"
            :add-class="'px-6 md:text-start'"
          />
        </div>

        <div class="flex flex-col justify-center items-center gap-12 md:justify-start p-8 h-full">
          <SubscriptionSelector />
          <BaseButton
            :btn-icon="'/cart-white.svg'"
            label="+ Add To Cart"
            :btn-class="'max-md:self-start'"
            :grow="true"
            :disabled="false"
            @click="handleClick"
          />
          <IngredientsComp :ingredients="ingredients" />
        </div>
      </div>
    </div>
  </div>
</template>
