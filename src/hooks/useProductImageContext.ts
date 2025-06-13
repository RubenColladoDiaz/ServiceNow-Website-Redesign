import { useContext } from "react";
import { ProductImageContext } from "../context/ProductImageContextDefinition";

export const useProductImageContext = () => {
  const context = useContext(ProductImageContext);
  if (!context) {
    throw new Error(
      "useProductImageContext must be used inside a ProductImageProvider",
    );
  }
  return context;
};
