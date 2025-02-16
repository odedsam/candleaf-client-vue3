export type ProductIdScheme = {
  productId: number
  productImage: string
  productPrice: number
  productTitle: string
}

export type WishlistItem = {
  id: string
  name: string
  price: number
}
export type Item = {
  id: number
  title: string
  image: string
  price: number
}
export type Cart = Item & {
  quantity: number
}

export type Order = {
  id: string
  total: number
  date: string
}

export type APIScheme = {
  id: number
  title: string
  image: string
  price: number
}

export interface APIRequest<T> {
  data: null | T
  loading: null | boolean
  error: null | boolean
}



export interface ProductID {
  productId: number
  productImage: string
  productPrice: number
  productTitle: string
}

export type Product = {
  id: number
  productImage: string
  productTitle: string
  productPrice?: number
  imgSize?: string | null
}

export type Face = {
  personFace: string
  reviewText: string
  name: string
}
