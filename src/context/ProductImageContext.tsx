import React, { createContext, useContext } from "react";
import { ProductImageRoute } from "../types/productImagesRoute";
import { productImagesRoutes } from "../data/productImagesRoutes";

interface ProductImageContextType {
  productImages: ProductImageRoute[];
}

const ProductImageContext = createContext<ProductImageContextType | undefined>(
  undefined
);

export const ProductImageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <ProductImageContext.Provider
      value={{ productImages: productImagesRoutes }}
    >
      {" "}
      {children}
    </ProductImageContext.Provider>
  );
};

export const useProductImageContext = () => {
  const context = useContext(ProductImageContext);
  if (!context) {
    throw new Error(
      "useProductImageContext must be used inside a ProductImageProvider"
    );
  }
  return context;
};
