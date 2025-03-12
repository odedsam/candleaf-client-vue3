import axios from 'axios'
import {productCatalog} from '@/constants'
export const BASE_URL = `http://localhost:5173`
const API_URL = 'https://fakestoreapi.com/products'

const getProducts = async () => {
  try {
    const response = await axios.get(API_URL)
    if (!response.data) {
      return ['No Products'];
    }
    const products = [...response.data,...productCatalog,];

      return products
    
  } catch (error) {
    console.error(' Error fetching products:', error)
    throw error
  }
}

const createItem = async (item: any) => {
  try {
    const response = await axios.post(API_URL, item)
    return response.data
  } catch (error) {
    console.error(' Error creating item:', error)
    throw error
  }
}

const updateItem = async (id: string, updatedData: any) => {
  try {
    const response = await axios.patch(`${API_URL}/${id}`, updatedData)
    return response.data
  } catch (error) {
    console.error(` Error updating item ${id}:`, error)
    throw error
  }
}

const deleteItem = async (id: string) => {
  try {
    await axios.delete(`${API_URL}/${id}`)
    console.log(`✅ Item ${id} deleted successfully`)
  } catch (error) {
    console.error(` Error deleting item ${id}:`, error)
    throw error
  }
}











export {getProducts, createItem, updateItem, deleteItem}
