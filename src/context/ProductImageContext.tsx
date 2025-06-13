import React, { useMemo } from "react";
import { productImagesRoutes } from "../data/productImagesRoutes";
import { clothesImagesRoutes } from "../data/productImagesRoutes";
import {
  accessoriesImagesRoutes,
  technologyImagesRoutes,
} from "../data/productImagesRoutes";
import { ProductImageContext } from "./ProductImageContextDefinition";

export const ProductImageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const value = useMemo(
    () => ({
      productImages: productImagesRoutes,
      clothesImages: clothesImagesRoutes,
      accessoriesImages: accessoriesImagesRoutes,
      technologyImages: technologyImagesRoutes,
    }),
    [],
  );

  return (
    <ProductImageContext.Provider value={value}>
      {children}
    </ProductImageContext.Provider>
  );
};
