// stores/checkoutStore.ts
import { defineStore, storeToRefs } from 'pinia'
import { computed, ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'

import { PURCHASE_FAILED, PURCHASE_SUCCUES } from '@/utils/feedBack'
import {
  type PaymentInfo,
  type ShippingInfo,
  ShippingOptions,
  shippingValidationSchema,
} from '@/utils/formValidations'
import { formatShippingAddress } from '@/utils/formatters'
import { CartItem, CheckoutStepRoutes } from '@/types/index'
import { showToast } from '@/utils'
import { useCartStore } from './cartStore'
import { useAuthStore } from '@/stores/authStore'
import { useCustomStorage } from '@/composables/useCustomStorage'

// ----- Default Values -----
const DEFAULT_SHIPPING: ShippingInfo = {
  email: '',
  subscribe: false,
  name: '',
  lastName: '',
  address: '',
  shippingNote: '',
  postalCode: '',
  city: '',
  province: '',
  country: 'Italy',
  saveInfo: false,
}

const DEFAULT_SHIPPING_OPTIONS: ShippingOptions[] = [
  { id: 'standard', label: 'Standard Shipping', price: 0, hasChecked: true },
  { id: 'express', label: 'Express Shipping', price: 10, hasChecked: false },
]

export const useCheckoutStore = defineStore('checkout', () => {
  const router = useRouter()
  const cartStore = useCartStore()
  const authStore = useAuthStore()

  const { cartItems, subTotal } = storeToRefs(cartStore)
  const { isAuthenticated, user } = storeToRefs(authStore)

  // ----- Step Management -----
  const step = useCustomStorage<number>('checkout_step', 0).value
  const stepRoutes = Object.values(CheckoutStepRoutes)

  const updateStep = (direction: 1 | -1) => {
    const newStep = step + direction
    if (newStep >= 0 && newStep < stepRoutes.length) {
      router.push(stepRoutes[newStep])
    } else if (direction === -1) {
      router.push('/products')
    }
  }
  const nextStep = () => updateStep(1)
  const prevStep = () => updateStep(-1)
  watch(() => step, v => localStorage.setItem('checkout_step', JSON.stringify(v)))

  // ----- Shipping -----
  const shipping = useCustomStorage<ShippingInfo>('checkout_shipping', DEFAULT_SHIPPING, localStorage, { mergeDefaults: true })
  const shippingOptions = ref<ShippingOptions[]>(DEFAULT_SHIPPING_OPTIONS)
  const formattedShippingAddress = computed(() => formatShippingAddress(shipping.value))
  const shippingMethod = ref(shippingOptions.value[0].id)

  // ----- Payment -----
  const paymentData = ref<PaymentInfo>({
    cardNumber: '',
    holderName: '',
    expiration: '',
    cvv: '',
    shippingMethod: shippingMethod.value,
  })

  // ----- Validation -----
  const shippingErrors = ref<Partial<Record<keyof ShippingInfo, string>>>({})
  const validateDetails = () => {
    const result = shippingValidationSchema.safeParse(shipping.value)
    shippingErrors.value = result.success
      ? {}
      : Object.fromEntries(
          Object.entries(result.error.format()).map(([k, v]) => [
            k,
            (v as { _errors?: string[] })?._errors?.[0] ?? 'Invalid value',
          ]),
        )
  }

  // ----- Step Validation -----
  const stepValidations = ref<Record<string, boolean>>({
    '/checkout/details': false,
    '/checkout/payment': false,
  })
  const isCurrentStepValid = (path: string) => stepValidations.value[path] ?? true

  // ----- Aggregate Data -----
  const aggregateFormData = computed(() => ({
    shipping: { ...shipping.value },
    cartItems: { cartItems: cartItems.value, subTotal: subTotal.value },
    user: user.value,
    isGuest: !isAuthenticated.value,
    payment: paymentData.value,
  }))

  // ----- Submit -----
  const orderConfirmation = ref<Record<string, any>>({})
  const submitFormData = async () => {
    try {
      const { data } = await axios.post('http://localhost:5001/api/v1/checkout', aggregateFormData.value)
      orderConfirmation.value = data
      cartStore.cleanAllCart()
      useCustomStorage<CartItem[]>('cart-items', null)
      showToast(PURCHASE_SUCCUES)
      setTimeout(() => router.push('/checkout/confirmation'), 600)
    } catch (err) {
      console.error('Checkout Error:', err)
      showToast(PURCHASE_FAILED)
    }
  }

  return {
    // state
    step,
    stepRoutes,
    shipping,
    shippingOptions,
    formattedShippingAddress,
    paymentData,
    shippingErrors,
    orderConfirmation,
    // actions
    nextStep,
    prevStep,
    validateDetails,
    submitFormData,
    isCurrentStepValid,
  }
})
