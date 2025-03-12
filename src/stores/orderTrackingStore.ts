import { defineStore } from 'pinia';
import { ref } from 'vue';

type OrderStatus = 'Processing' | 'Shipped' | 'Out for Delivery' | 'Delivered' | 'Cancelled';

interface OrderTracking {
  orderId: string;
  status: OrderStatus;
  estimatedDelivery: string;
  lastUpdated: string;
}

export const useOrderTrackingStore = defineStore('orderTracking', () => {
  const trackingData = ref<OrderTracking | null>(null);
  const loading = ref(false);
  const error = ref<string | null>(null);

  // Simulated API Fetch
  const fetchOrderStatus = async (orderId: string) => {
    loading.value = true;
    error.value = null;

    setTimeout(() => {
      // Fake response (replace with real API call)
      const statuses: OrderStatus[] = ['Processing', 'Shipped', 'Out for Delivery', 'Delivered'];
      const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];

      trackingData.value = {
        orderId,
        status: randomStatus,
        estimatedDelivery: '2024-03-15',
        lastUpdated: new Date().toLocaleString(),
      };
      loading.value = false;
    }, 1500);
  };

  return {
    trackingData,
    loading,
    error,
    fetchOrderStatus,
  };
});