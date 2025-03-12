<script setup lang="ts">
import {ref, computed} from 'vue'
import SubscriptionSelector from '@/components/products/atoms/SubscriptionSelector.vue'
import QuantitySelector from '@/components/shared/QuantitySelector.vue'
import IngredientsComp from '@/components/products/productId/IngredientsComp.vue'
import BaseButton from '@/components/shared/BaseButton.vue'
import {useCartStore} from '@/stores/cartStore'
import { storeToRefs } from 'pinia'

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

/* Track Overflow */

/* CartStore */
const cartStore = useCartStore()

/* CartStore Action */
const {increaseQuantity, decreaseQuantity} =useCartStore()
const {cartItems,cartAmount }  =storeToRefs(cartStore)

//  make quantity reactive

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

  console.log('🛒 Adding to cart:', productToAdd)
  cartStore.addToCart(productToAdd)
}
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-2 py-12 max-md:gap-12 items-strech">
    <!-- Left Section (Product-Image)  -->
    <div class="w-full h-full flex items-stretch">
      <div class="mx-auto h-full flex flex-col">
        <img
          :src="selectedProduct.image"
          alt="prod-image"
          class="w-full h-full object-contain"
          draggable="false"
        />
        <div class="flex flex-col justify-center items-center gap-3">
          <p class="text-black text-base font-roboto font-semibold text-center">
            {{ description }}
          </p>
          <p
            class="text-green text-base font-roboto font-semibold text-center text-[#56B280]"
          >
            🚚 FREE SHIPPING
          </p>
        </div>
      </div>
    </div>

    <div class="inline-flex flex-col h-full gap-12">
      <div class="flex flex-col h-full">
        <p class="text-2xl text-black max-sm:text-break max-lg:text-center md:text-start">
          {{ selectedProduct.title }}
        </p>
        <p class="text-semibold font-roboto text-[1.625rem] text-[#56B280] max-md:text-center">
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
            :btn-class="'max-md:self-center'"
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
