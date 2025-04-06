// composables/useNavigateToProduct.ts
import { useRouter } from 'vue-router';
import { useProductStore } from '@/stores/productStore';
export function useNavigateToProduct() {
    var router = useRouter();
    var productStore = useProductStore();
    var navigateToProduct = function (product) {
        productStore.setSelectedProduct(product.id);
        router.push({
            name: 'product-id-view',
            params: { id: product.id.toString() },
        });
    };
    return { navigateToProduct: navigateToProduct };
}
