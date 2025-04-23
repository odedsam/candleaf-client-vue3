import { User } from '@/types/User'


export const normalizeTitle = (title: string, wordLimit: number = 4): string => {
  const cleaned = title.replace(/-/g, ' ')
  const words = cleaned.split(' ')
  return words.slice(0, wordLimit).join(' ')
}

export const getImageUrl = (imageName: string) => {
  return new URL(`/src/assets/images/faces/${imageName}`, import.meta.url).href
}

export const formatPrice = (price?: number | null): string => {
  return (price ?? 0).toFixed(2)
}

export const formatShippingAddress = (shippingData: {
  address?: string
  postalCode?: string
  city?: string
  province?: string
  country?: string
}): string => {
  if (
    !shippingData.address ||
    !shippingData.postalCode ||
    !shippingData.city ||
    !shippingData.province ||
    !shippingData.country
  ) {
    return 'Address Not Available'
  }

  return `${shippingData.address},${shippingData.postalCode.toString()}, ${shippingData.city},${shippingData.province}, ${shippingData.country}`
}


export const getUserFromStorage = (): User | null => {
  try {
    const raw = localStorage.getItem('auth.user')
    if (!raw) return null

    const parsed = JSON.parse(raw)

    // duplicate stringify fix
    return typeof parsed === 'string' ? JSON.parse(parsed) : parsed
  } catch {
    return null
  }
}
