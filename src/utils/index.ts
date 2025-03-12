
export const normalizeTitle = (title: string, wordLimit: number = 4): string => {
  return (
    title.split(' ').slice(0, wordLimit).join(' ') + (title.split(' ').length > wordLimit ? '' : '')
  )
}

export const getImageUrl = (imageName: string) => {
  return new URL(`/src/assets/images/faces/${imageName}`, import.meta.url).href
}

export const formatPrice = (price?: number | null): string => {
  return (price ?? 0).toFixed(2);
};