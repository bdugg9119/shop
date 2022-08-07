import { createContext, useContext, useState } from "react";

import { ShoppingCart } from "../components";
import { useLocalStorage } from "../hooks/useLocalStorage";
import {
  CartItem,
  ShoppingCartContext as ShoppingCartContextType,
  ProviderProps
} from "../utils/types";

const ShoppingCartContext = createContext({} as ShoppingCartContextType);

export const useShoppingCart = () => useContext(ShoppingCartContext);

export const ShoppingCartProvider = ({children}: ProviderProps) => {
  const [cartItems, setCartItems] = useLocalStorage<CartItem[]>('shopping-cart', []);
  const [isOpen, setIsOpen] = useState<boolean>(false);
    
  const getItemQuantity = (id: number) => {
    return cartItems.find(item => item.id === id)?.quantity || 0;
  };

  const increaseCartQuantity = (id: number) => {
    setCartItems(currItems => {
      if (currItems.find(item => item.id === id) == null) {
        return [...currItems, { id, quantity: 1}];
      } else {
        return currItems.map(item => item.id === id
          ? {...item, quantity: item.quantity + 1}
          : item
        );
      }
    })
  };

  const decreaseCartQuantity = (id: number) => {
    setCartItems(currItems => {
      if (currItems.find(item => item.id === id)?.quantity == 1) {
        return currItems.filter(item => item.id !== id);
      } else {
        return currItems.map(item => item.id === id
          ? {...item, quantity: item.quantity - 1}
          : item
        );
      }
    })
  };

  const removeFromCart = (id: number) => {
    return setCartItems(items => items.filter(item => item.id !== id));
  }

  const cartQuantity = cartItems.reduce((quantity, item) => item.quantity + quantity, 0);

  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);

  return (
    <ShoppingCartContext.Provider
      value={{
        cartItems,
        cartQuantity,
        closeCart,
        decreaseCartQuantity,
        getItemQuantity,
        increaseCartQuantity,
        openCart,
        removeFromCart
      }}
    >
      {children}
      <ShoppingCart isOpen={isOpen} />
    </ShoppingCartContext.Provider>
  );
};