export interface BasicIngredients {
  wax: string
  fragrance: string
  burningTime: string
  dimensions: string
  weight: string
}
export interface Ingredients {
  Wax?: string
  Fragrance?: string
  BurningTime?: string
  Dimension?: string
  Weight?: string
  fragrance?: string
  burningTime?: string
  dimensions?: string
  weight?: string
}

export interface Product {
  id: number
  title: string
  image: string
  price: number
  ingredients: Ingredients
}

export type ProductCatalog = Product[]
