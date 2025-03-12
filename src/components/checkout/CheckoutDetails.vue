<script setup lang="ts">
import {ref, computed} from 'vue'
import {storeToRefs} from 'pinia'
import CustomSelect from '@/components/ui/CustomSelect.vue'
import {useCheckoutStore} from '@/stores/checkoutStore'
import {useCartStore} from '@/stores/cartStore'
import {shippingSchema} from '@/validations/checkout'
import CheckoutNewsLetter from "@/components/checkout/atoms/CheckoutNewsLetter.vue"

// Stores
const checkoutStore = useCheckoutStore()
const cartStore = useCartStore()
const {cartItems, subTotal} = storeToRefs(cartStore)

// Form Data
const formData = ref({
  email: '',
  name: '',
  secondName: '',
  address: '',
  shippingNote: '',
  postalCode: '',
  city: '',
  province: '',
  country: 'Italy',
})

// Dropdown Options
const provinces = ['Rome', 'Milan', 'Naples', 'Turin', 'Florence']
const countries = ['Italy', 'France', 'Germany', 'Spain']

// Validation Errors
const errors = ref<Record<string, string | null>>({})

// Computed Properties for Select Inputs
const selectedProvince = computed({
  get: () => formData.value.province,
  set: (value) => (formData.value.province = value),
})

const selectedCountry = computed({
  get: () => formData.value.country,
  set: (value) => (formData.value.country = value),
})

// Shipping Fields Array
const shippingFields = ref([
  {id: 'email', type: 'email', placeholder: 'Enter your email or phone'},
  {id: 'name', type: 'text', placeholder: 'Enter your first name'},
  {id: 'secondName', type: 'text', placeholder: 'Enter your last name'},
  {id: 'address', type: 'text', placeholder: 'Enter your address'},
  {id: 'shippingNote', type: 'text', placeholder: 'Any special instructions'},
  {id: 'postalCode', type: 'text', placeholder: 'Enter postal code'},
  {id: 'city', type: 'text', placeholder: 'Enter city'},
])

// Handle Form Submission
const handleSubmit = () => {
  const validationResult = shippingSchema.safeParse(formData.value)

  if (!validationResult.success) {
    errors.value = Object.fromEntries(
      Object.entries(validationResult.error.format()).map(([key, value]) => {
        return [key, Array.isArray(value) ? value[0] : value._errors?.[0] || 'Invalid input']
      }),
    )
    return
  }

  errors.value = {} // Clear errors if validation passes
  // checkoutStore.setCheckoutDetails(formData.value)
  checkoutStore.nextStep()
}
</script>

<template>
  <div class="p-6 bg-white shadow-md rounded-lg">
    <CheckoutNewsLetter />

    <h2 class="text-lg font-semibold mb-3">Shipping Address</h2>

    <form @submit.prevent="handleSubmit">
      <!-- Input Fields -->
      <div v-for="field in shippingFields" :key="field.id" class="mb-4">
        <input
          v-model="formData[field.id]"
          :id="field.id"
          :type="field.type"
          :placeholder="field.placeholder"
          class="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
        />
        <p v-if="errors[field.id]" class="text-red-500 text-sm mt-1">
          {{ errors[field.id] }}
        </p>
      </div>

      <!-- Dropdowns -->
      <div class="mb-4">
        <CustomSelect v-model="selectedProvince" :options="provinces" label="Province" />
        <p v-if="errors.province" class="text-red-500 text-sm mt-1">
          {{ errors.province }}
        </p>
      </div>

      <div class="mb-4">
        <CustomSelect v-model="selectedCountry" :options="countries" label="Country/Region" />
        <p v-if="errors.country" class="text-red-500 text-sm mt-1">
          {{ errors.country }}
        </p>
      </div>

      <!-- Save Info Checkbox -->
      <div class="flex items-center gap-2 mt-4 py-1">
        <input
          type="checkbox"
          id="saveInfo"
          class="w-5 h-5 text-green-600 border-gray-300 rounded focus:ring-green-500"
        />
        <label for="saveInfo" class="text-gray-700 max-md:text-sm">
          Save this information for a future fast checkout
        </label>
      </div>
    </form>
  </div>
</template>

<style scoped>
input {
  outline: none;
  transition: 0.2s ease-in-out;
}

input:focus {
  border-color: #56b280;
  box-shadow: 0 0 4px rgba(86, 178, 128, 0.5);
}
</style>
