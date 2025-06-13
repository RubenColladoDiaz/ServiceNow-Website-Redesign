export interface ProductImageRoute {
  id: string;
  path: string;
  alt?: string;
  isNew?: boolean;
  discount?: number;
}

export interface ClothesImagesInterface {
  id: string;
  path: string;
  alt?: string;
  title: string;
  price: number;
  category: string;
  isNew?: boolean;
  discount?: number;
  sizes?: string[];
}

export interface AccessoriesImagesInterface {
  id: string;
  path: string;
  alt?: string;
  title: string;
  price: number;
  category: string;
  isNew?: boolean;
  discount?: number;
}

export interface TechnologyImagesInterface {
  id: string;
  path: string;
  alt?: string;
  title: string;
  price: number;
  category: string;
  isNew?: boolean;
  discount?: number;
}
