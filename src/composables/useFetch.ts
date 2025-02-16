import { ref, computed } from 'vue'
import axios from 'axios'


export const useFetch = <T>(url: string) => {
  const data = ref<T | null>(null)
  const loading = ref<boolean | null>(null)
  const error = ref<boolean | null>(null)

  const fetchData = async () => {
    loading.value = true
    try {
      const response = await axios.get<T>(url)
      data.value = response.data
    } catch (err: any) {
      error.value = err.message
      console.error('err.message', err.message)
    } finally {
      loading.value = false
    }
  }

  return { data, loading, error, fetchData }
}
