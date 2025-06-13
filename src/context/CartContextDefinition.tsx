import React, { useState, ReactNode, useMemo } from "react";
import { CartContext, CartItem } from "./CartContext.tsx";

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([]);

  const addToCart = (item: CartItem) => {
    setItems((currentItems) => {
      const existingItemIndex = currentItems.findIndex(
        (i) => i.id === item.id && i.size === item.size,
      );

      if (existingItemIndex > -1) {
        const newItems = [...currentItems];
        newItems[existingItemIndex].quantity += item.quantity;
        return newItems;
      }

      return [...currentItems, item];
    });
  };

  const removeFromCart = (id: string, size?: string) => {
    setItems((currentItems) =>
      currentItems.filter((item) => !(item.id === id && item.size === size)),
    );
  };

  const updateQuantity = (id: string, quantity: number, size?: string) => {
    setItems((currentItems) =>
      currentItems.map((item) =>
        item.id === id && item.size === size
          ? { ...item, quantity: Math.max(0, quantity) }
          : item,
      ),
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  const totalPrice = items.reduce((sum, item) => {
    const itemPrice = item.discount
      ? item.price * (1 - item.discount / 100)
      : item.price;
    return sum + itemPrice * item.quantity;
  }, 0);

  const contextValue = useMemo(
    () => ({
      items,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      totalItems,
      totalPrice,
    }),
    [items, totalItems, totalPrice],
  );

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};
