import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import { getProducts } from '@/services/productService';

export type Item = {
  id: number;
  title: string;
  image: string;
  price: number;
  quantity: number;
  basePrice: number;
};

export const useProductStore = defineStore('ProductStore', () => {
  const products = ref<Item[]>([]);
  const isLoading = ref<boolean | null>(false);
  const error = ref<boolean | null>(null);
  const selectedProduct = ref<Item | null>(null);

  const fetchProducts = async () => {
    isLoading.value = true;
    try {
      products.value = await getProducts();
    } catch (err: any) {
      error.value = err.message || 'Failed to fetch products';
    } finally {
      isLoading.value = false;
      error.value = false;
    }
  };

  const setSelectedProduct = (id: number) => {
    if (!products.value || products.value.length === 0) {
      console.log('Products not loaded yet!');
      return;
    }
    const findId = products.value.find((p) => p.id === id) || null;

    if (!findId) {
      console.log('Product Not Found for ID:', id);
    } else {
      selectedProduct.value = findId;
      console.log('Selected Product:', selectedProduct.value);
    }
  };

  const catalogProducts = computed(() => {
    return products.value.filter((product) => product.id > 20);
  });
  const popularProducts = computed(() => {
    return products.value.filter((product) => product.id > 24);
  });
  const priceNormalizer = computed(() => {
    return selectedProduct.value?.price ? parseFloat(selectedProduct.value.price.toFixed(2)) : 0;
  });

  const addQuantity = () => {
    if (selectedProduct.value) {
      selectedProduct.value.quantity += 1;
      selectedProduct.value.price = selectedProduct.value.basePrice * selectedProduct.value.quantity;
    }
  };

  const removeQuantity = () => {
    if (selectedProduct.value && selectedProduct.value.quantity > 1) {
      selectedProduct.value.quantity -= 1;
      selectedProduct.value.price = selectedProduct.value.basePrice * selectedProduct.value.quantity;
    }
  };

  return {
    fetchProducts,
    products,
    isLoading,
    error,
    setSelectedProduct,
    priceNormalizer,
    catalogProducts,
    popularProducts,
    selectedProduct,
    addQuantity,
    removeQuantity,
  };
});
