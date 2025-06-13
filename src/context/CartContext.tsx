import { createContext } from "react";

export interface CartItem {
  id: string;
  title: string;
  price: number;
  image: string;
  size?: string;
  quantity: number;
  discount?: number;
}

interface CartContextType {
  items: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: string, size?: string) => void;
  updateQuantity: (id: string, quantity: number, size?: string) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
}

export const CartContext = createContext<CartContextType | undefined>(
  undefined,
);
