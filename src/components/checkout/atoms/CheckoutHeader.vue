<script lang="ts" setup>
import LogoIcon from '@/components/ui/LogoIcon.vue'
import {useCartStore} from '@/stores/cartStore'
import {storeToRefs} from 'pinia'
import BreadCrumb from '@/components/ui/BreadCrumb.vue'
import OrderDetails from './OrderDetails.vue'

const cartStore = useCartStore()
const {subTotal} = storeToRefs(cartStore)
const steps = [
  { name: 'Cart', path: '/checkout/cart' },
  { name: 'Details', path: '/checkout/details' },
  { name: 'Shipping', path: '/checkout/shipping' },
  { name: 'Payment', path: '/checkout/payment' },
  { name: 'Confirmation', path: '/checkout/confirmation' }
];


</script>
<template>
  <div>
    <div class="flex flex-col">
      <LogoIcon :grow="true" :disable-route="true"/>
      <OrderDetails />
      <BreadCrumb :steps="steps" />
    </div>
   
  </div>
</template>

<style lang="css" scoped></style>
