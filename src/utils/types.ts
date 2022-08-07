import {ReactNode} from 'react';

export type CartItem = {
  id: number
  quantity: number
};

export type Product = {
  category: string
  description: string
  id: number
  image: string
  price: string
  title: string
};

export type ShoppingCartContext = {
  decreaseCartQuantity: (id: number) => void
  getItemQuantity: (id: number) => number
  increaseCartQuantity: (id: number) => void
  removeFromCart: (id: number) => void
};

export type ShoppingCartProviderProps = {
  children: ReactNode
};