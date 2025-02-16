export const getImageUrl = (imageName: string) => {
    return new URL(`/src/assets/images/faces/${imageName}`, import.meta.url).href
  }
