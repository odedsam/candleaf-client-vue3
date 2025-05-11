<script setup lang="ts">
import { onMounted, ref } from 'vue';
import PaymentConfirmation from '@/components/features/checkout/PaymentConfirmation.vue';
import { useCheckoutStore } from '@/stores/checkoutStore';
import { storeToRefs } from 'pinia';

const store = useCheckoutStore();
const { orderConfirmation } = storeToRefs(store);
const isPaymentConfirmed = ref(false);
const userOrderId = ref('');
const userName = ref('');

onMounted(async () => {
  if (orderConfirmation.value.success ) {
    isPaymentConfirmed.value = true;
    userOrderId.value = orderConfirmation.value.orderId;
    userName.value = orderConfirmation.value.name;
  }
});

console.log(orderConfirmation.value.orderId);
type Order = {
  name: string
  lastName: string
  address: string
  shippingNote: string
  postalCode: string
  province: string
  country: string
  shippingMethod: string
}

type OrderItem = {
  title: string
  image: string
  price: number
  quantity: number
  subTotal: number
}

const order: Order = {
  name: 'John',
  lastName: 'Doe',
  address: '123 Example St, Apt 4B',
  shippingNote: 'Leave at front door',
  postalCode: '12345',
  province: 'California',
  country: 'USA',
  shippingMethod: 'Express Delivery'
}

const orderItems: OrderItem[] = [
  {
    title: 'Green Tea Soap',
    image: 'https://via.placeholder.com/100',
    price: 12.99,
    quantity: 2,
    subTotal: 25.98
  },
  {
    title: 'Aloe Vera Lotion',
    image: 'https://via.placeholder.com/100',
    price: 15.49,
    quantity: 1,
    subTotal: 15.49
  }
]
</script>

<template>
  <PaymentConfirmation :isConfirmed="isPaymentConfirmed" :orderId="userOrderId" :userName="userName" />
   <div class="p-6 bg-[#f9f9f9] min-h-screen">
    <div class="max-w-4xl mx-auto">
      <div class="bg-white rounded-2xl shadow-md p-6 mb-8">
        <h2 class="text-2xl font-semibold text-[#56B280] mb-4">Order Confirmation</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p><span class="font-semibold text-gray-700">Name:</span> {{ order.name }} {{ order.lastName }}</p>
            <p><span class="font-semibold text-gray-700">Address:</span> {{ order.address }}</p>
            <p><span class="font-semibold text-gray-700">Shipping Note:</span> {{ order.shippingNote }}</p>
          </div>
          <div>
            <p><span class="font-semibold text-gray-700">Postal Code:</span> {{ order.postalCode }}</p>
            <p><span class="font-semibold text-gray-700">Province:</span> {{ order.province }}</p>
            <p><span class="font-semibold text-gray-700">Country:</span> {{ order.country }}</p>
            <p><span class="font-semibold text-gray-700">Shipping Method:</span> {{ order.shippingMethod }}</p>
          </div>
        </div>
      </div>

      <div class="bg-white rounded-2xl shadow-md p-6">
        <h3 class="text-xl font-semibold text-[#56B280] mb-4">Order Items</h3>
        <div v-for="(item, index) in orderItems" :key="index" class="flex items-center justify-between border-b border-gray-200 py-4">
          <div class="flex items-center gap-4">
            <img :src="item.image" alt="Product Image" class="w-20 h-20 object-cover rounded-xl border" />
            <div>
              <p class="font-medium text-gray-800">{{ item.title }}</p>
              <p class="text-sm text-gray-500">Quantity: {{ item.quantity }}</p>
            </div>
          </div>
          <div class="text-right">
            <p class="text-base font-semibold text-[#2D6A4F]">
              ${{ item.price.toFixed(2) }}
            </p>
            <p class="text-sm text-gray-500">Subtotal: ${{ item.subTotal.toFixed(2) }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>




