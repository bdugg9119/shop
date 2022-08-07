import {ReactNode} from 'react';

export type CartItem = {
  id: number
  quantity: number
};

export type CartItemProps = {
  id: number
  key: number
  quantity: number
};

export type CatalogContext = {
  data?: Product[]
  error?: any
  isLoading: boolean
};

export type Product = {
  category: string
  description: string
  id: number
  image: string
  price: string
  title: string
};

export type ProviderProps = {
  children: ReactNode
};

export type ShoppingCartContext = {
  closeCart: () => void
  decreaseCartQuantity: (id: number) => void
  cartItems: CartItem[]
  cartQuantity: number
  getItemQuantity: (id: number) => number
  increaseCartQuantity: (id: number) => void
  openCart: () => void
  removeFromCart: (id: number) => void
};

export type ShoppingCartProps = {
  isOpen: boolean
};