import { createContext } from "react";
import {
  ProductImageRoute,
  ClothesImagesInterface,
  AccessoriesImagesInterface,
  TechnologyImagesInterface,
} from "../types/productImagesRoute";

interface ProductImageContextType {
  productImages: ProductImageRoute[];
  clothesImages: ClothesImagesInterface[];
  accessoriesImages: AccessoriesImagesInterface[];
  technologyImages: TechnologyImagesInterface[];
}

export const ProductImageContext = createContext<
  ProductImageContextType | undefined
>(undefined);
