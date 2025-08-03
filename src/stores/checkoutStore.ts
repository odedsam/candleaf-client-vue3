import { defineStore, storeToRefs } from 'pinia'
import { computed, ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'

import { PURCHASE_FAILED, PURCHASE_SUCCUES } from '@/utils/feedBack'
import { createShippingValidationSchema, type ShippingInfo, type PaymentInfo, ShippingOptions } from '@/utils/formValidations'
import { formatShippingAddress } from '@/utils/formatters'
import { CartItem, CheckoutStepRoutes } from '@/types/index'
import { showToast } from '@/utils'
import { useCartStore } from './cartStore'
import { useAuthStore } from '@/stores/authStore'
import { useCustomStorage } from '@/composables/useCustomStorage'

const DEFAULT_SHIPPING_OPTIONS: ShippingOptions[] = [
  { id: 'standard', label: 'Standard Shipping', price: 0, hasChecked: true },
  { id: 'express', label: 'Express Shipping', price: 10, hasChecked: false },
]

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
  shippingMethod: 'standard',
}

export const useCheckoutStore = defineStore('checkout', () => {
  const router = useRouter()
  const cartStore = useCartStore()
  const authStore = useAuthStore()

  const { cartItems, subTotal } = storeToRefs(cartStore)
  const { isAuthenticated, user } = storeToRefs(authStore)
  const items = ref({ cartItems, subTotal });

  const shipping = useCustomStorage<ShippingInfo>('checkout_shipping', DEFAULT_SHIPPING, localStorage, { mergeDefaults: true })
  const shippingOptions = ref<ShippingOptions[]>([...DEFAULT_SHIPPING_OPTIONS])
  const orderConfirmation = ref<Record<string, any>>({})

  watch(
    () => shipping.value.shippingMethod,
    (newMethod) => {
      shippingOptions.value.forEach((opt) => {
        opt.hasChecked = opt.id === newMethod
      })
    },
    { immediate: true }
  )

  const selectShippingMethod = (id: string) => {
    shipping.value.shippingMethod = id
  }

  const formattedShippingAddress = computed(() => formatShippingAddress(shipping.value))

  const paymentData = ref<PaymentInfo>({
    cardNumber: '',
    holderName: '',
    expiration: '',
    cvv: '',
    shippingMethod: shipping.value.shippingMethod,
  })

  const aggregateFormData = computed(() => ({
    userId:user.value._id,
    isGuest: !isAuthenticated.value ? true : false ,
    shipping: { ...shipping.value, },
     cartItems: items.value,
      payment: paymentData.value,

  }))

  const shippingErrors = ref<Partial<Record<keyof ShippingInfo, string>>>({})



  const validateDetails = () => {
    const schema = createShippingValidationSchema(shippingOptions.value.map((o) => o.id))
    const result = schema.safeParse(shipping.value)
    shippingErrors.value = result.success
      ? {}
      : Object.fromEntries(
          Object.entries(result.error.format()).map(([k, v]) => [
            k,
            (v as { _errors?: string[] })?._errors?.[0] ?? 'Invalid value',
          ])
        )
    return result.success
  }

  const stepValidations = ref<Record<string, boolean>>({
    '/checkout/details': false,
    '/checkout/payment': false,
  })

  const isCurrentStepValid = (path: string) => stepValidations.value[path] ?? true


  const submitFormData = async () => {
      const formData = aggregateFormData.value;
    try {
      const response = await axios.post('http://localhost:5001/api/v1/checkout', formData);
      console.log('Success:', response.data);

      if (response.data) {
        orderConfirmation.value = response.data;
        setTimeout(() => {
          return router.push('/checkout/confirmation');
        }, 600);
       cartStore.cleanAllCart()
      useCustomStorage<CartItem[]>('cart-items', null)
      showToast(PURCHASE_SUCCUES)
      }


      setTimeout(() => router.push('/checkout/confirmation'), 600)
    } catch (err) {
      console.error('Checkout Error:', err)
      showToast(PURCHASE_FAILED)

    }
  }

  return {
    shipping,
    shippingOptions,
    formattedShippingAddress,
    paymentData,
    shippingErrors,
    orderConfirmation,
    validateDetails,
    isCurrentStepValid,
    selectShippingMethod,
    submitFormData,
  }
})
