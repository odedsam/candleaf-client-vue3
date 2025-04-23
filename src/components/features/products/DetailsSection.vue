<script setup lang="ts">
import { computed } from 'vue';
import { storeToRefs } from 'pinia';
import { useCartStore } from '@/stores/cartStore';
import { normalizeTitleId } from '@/utils';
import SubscriptionSelector from '@/components/features/products/SubscriptionSelector.vue';
import IngredientsComp from '@/components/features/products/IngredientsComp.vue';
import QuantityInput from '@/components/shared/QuantityInput.vue';
import ProductImage from '@/components/features/products/ProductImage.vue';


const props = defineProps<{
  selectedProduct: {
    id: number;
    title: string;
    image: string;
    price: number;
    quantity?: number;
    basePrice?: number;
  };
  ingredients: {
    wax: string;
    fragrance: string;
    burningTime: string;
    dimensions: string;
    weight: string;
  };
  description: string;
}>();





const cartStore = useCartStore();
const increase = () => cartStore.increaseQuantity(props.selectedProduct.id as number);
const decrease = () => cartStore.decreaseQuantity(props.selectedProduct.id as number);
const { cartItems } = storeToRefs(cartStore);

const quantity = computed(() => {
  const productInCart = cartItems.value.find((item) => item.id === props.selectedProduct.id);
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
  };
  cartStore.addToCart(productToAdd);
};
</script>

<template>
  <div class="grid grid-cols-1 lg:gap-x-12 md:grid-cols-2 py-12 max-md:gap-12 items-strech">
    <!-- <div class="w-full flex items-stretch">
      <div class="mx-auto flex flex-col">
        <div class="flex flex-col justify-center items-center gap-3">
          <img :src="selectedProduct.image" alt="prod-image" class="w-[90%] h-[90%] object-cover rounded-lg md:w-full md:h-full md:object-contain" draggable="false" />
          <p class="text-black text-base font-sans font-semibold text-center dark:text-white">
            {{ description }}
          </p>
          <p class="text-green text-base font-sans font-semibold text-center text-[#56B280]">🚚 FREE SHIPPING</p>
        </div>
      </div>
    </div> -->
    <ProductImage :image="selectedProduct.image" :description="description" />


    <div class="flex flex-col h-full px-4 md:px-8 gap-12 xl:min-h-[1000px] xl:max-h-[1000px]">
      <div class="flex flex-col">
        <p class="text-xl md:text-2xl text-black font-poppins font-semibold max-md:mt-4 max-sm:text-break max-lg:text-center md:text-start dark:text-white">
          {{ normalizeTitleId(selectedProduct.title) }}
        </p>
        <p class="text-semibold font-roboto font-bold mt-4 text-xl md:text-2xl text-[#56B280] max-md:text-center">$ {{ totalPrice }}</p>
        <p class="text-semibold font-roboto text-xl text-black dark:text-white max-md:text-center text-start mt-4 md:self-start">
          Quantity
        </p>
        <div class="mt-4 flex items-center md:items-start max-md:mx-auto">
          <QuantityInput :quantity="quantity" :increaseQty="increase" :decreaseQty="decrease" />
        </div>
      </div>

      <div class="flex flex-col gap-12">
        <div class="flex flex-col justify-center items-center gap-12 max-md:px-8 md:justify-start h-full">
          <SubscriptionSelector />
          <div class="flex justify-start items-start">
            <button @click="handleClick"
              class="relative overflow-hidden group flex gap-2 px-6 py-3 rounded-xl cursor-pointer bg-[#56B280] text-white font-semibold shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out active:scale-95 items-center justify-center md:items-start md:justify-start">

              <span class="absolute inset-0 bg-white opacity-10 group-hover:scale-125 scale-100 transition-transform duration-500 rounded-xl" />
              <i-tabler-shopping-cart class="z-10 w-5 h-5 transition-transform duration-300 group-hover:rotate-[15deg] group-hover:scale-125" />
              <span class="z-10 text-sm uppercase tracking-wide transition-all duration-300 group-hover:tracking-widest">Add to Cart</span>
              <span class="absolute pointer-events-none rounded-full bg-white opacity-30 scale-0 group-active:scale-150 group-active:opacity-0 transition duration-500" />

            </button>
          </div>
          <IngredientsComp :ingredients="ingredients" />
        </div>
      </div>
    </div>
  </div>
</template>
