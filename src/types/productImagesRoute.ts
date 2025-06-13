// Tipos base
export type ProductId = string;
export type ProductPath = string;
export type ProductTitle = string;
export type ProductCategory = string;
export type ProductSize = "S" | "M" | "L" | "XL";
export type ProductPrice = number;
export type ProductDiscount = number;

// Interfaces base
export interface BaseProduct {
  id: ProductId;
  path: ProductPath;
  alt?: string;
  title: ProductTitle;
  price: ProductPrice;
  category: ProductCategory;
  isNew?: boolean;
  discount?: ProductDiscount;
}

export type ProductImageRoute = Pick<BaseProduct, "id" | "path" | "alt">;

export interface ClothesImagesInterface extends BaseProduct {
  sizes: ProductSize[];
}

// Tipos derivados
export type AccessoriesImagesInterface = BaseProduct;
export type TechnologyImagesInterface = BaseProduct;

// Tipo unión para todos los productos
export type ProductType =
  | ClothesImagesInterface
  | AccessoriesImagesInterface
  | TechnologyImagesInterface;

// Tipo para el contexto de productos
export interface ProductImageContextType {
  productImages: ProductImageRoute[];
  clothesImages: ClothesImagesInterface[];
  accessoriesImages: AccessoriesImagesInterface[];
  technologyImages: TechnologyImagesInterface[];
}
