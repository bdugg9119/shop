import { createContext, useContext, useState } from "react";

import {
  CartItem,
  ShoppingCartContext as ShoppingCartContextType,
  ShoppingCartProviderProps
} from "../utils/types";

const ShoppingCartContext = createContext({} as ShoppingCartContextType);

export const useShoppingCart = () => useContext(ShoppingCartContext);

export const ShoppingCartProvider = ({children}: ShoppingCartProviderProps) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
    
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

  return (
    <ShoppingCartContext.Provider
      value={{
        decreaseCartQuantity,
        getItemQuantity,
        increaseCartQuantity,
        removeFromCart
       }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};