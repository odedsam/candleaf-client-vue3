
import {useRouter} from 'vue-router'
import {type Item, useProductStore} from '@/stores/productStore'

export function useNavigateToProduct() {
  const router = useRouter()
  const productStore = useProductStore()

  const navigateToProduct = (product: any) => {
    productStore.setSelectedProduct(product.id)
    router.push({
      name: 'product-id-view',
      params: {id: product.id.toString()},
    })
  }

  return {navigateToProduct}
}
