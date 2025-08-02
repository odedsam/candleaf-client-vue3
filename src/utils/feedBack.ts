import { ToastOptions } from "./toaster";

export const PURCHASE_SUCCUES:ToastOptions = {
 ToastMessage: 'Item Successfuly Purchased ! ',
 bgColor: '#56B280',
 textColor: '#fff',
 borderColor: '#56B280',
 position: 'bottom-right',
}

export const ITEM_REMOVED_FROM_CART:ToastOptions = {
      ToastMessage: 'Item removed from cart',
      bgColor: '#56B280',
      textColor: '#fff',
      borderColor: '#56B280',
      position: 'bottom-left'
    }

export const ITEM_ADDED_TO_CART:ToastOptions = {
  ToastMessage: 'Item added to cart',
      bgColor: '#56B280',
      textColor: '#fff',
      borderColor: '#56B280',
      position: 'bottom-right'
}

export const PURCHASE_FAILED: ToastOptions = {
  ToastMessage: 'Purchase Failed. Please try again.',
  bgColor: '#E74C3C',
  textColor: '#fff',
  borderColor: '#E74C3C',
  position: 'bottom-right',
}
