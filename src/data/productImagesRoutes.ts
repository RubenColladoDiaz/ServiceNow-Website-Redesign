import { ProductImageRoute } from "../types/productImagesRoute";
import { ClothesImagesInterface } from "../types/productImagesRoute";

export const productImagesRoutes: ProductImageRoute[] = [
  { id: "1", path: "/images/servicenowBackpack.jpg", alt: "Backpack Image" },
  { id: "2", path: "/images/servicenowBackpack2.webp", alt: "Backpack Image" },
  { id: "3", path: "/images/servicenowSweater.jpg", alt: "Sweater Image" },
  { id: "4", path: "/images/servicenowTshirt.webp", alt: "T-Shirt Image" },
  { id: "5", path: "/images/servicenowTshirt2.jpg", alt: "T-Shirt Image" },
  { id: "6", path: "/images/servicenowTshirt3.avif", alt: "T-Shirt Image" },
  { id: "7", path: "/images/servicenowTshirt4.jpg", alt: "T-Shirt Image" },
  { id: "8", path: "/images/servicenowTshirt5.webp", alt: "T-Shirt Image" },
  { id: "9", path: "/images/servicenowSweater2.jpg", alt: "Sweater Image" },
];

export const clothesImagesRoutes: ClothesImagesInterface[] = [
  {
    id: "1",
    path: "/images/servicenowSweater.jpg",
    alt: "Sweater Image",
    title: "Badass Sweater",
    price: 49.99,
    category: "jackets",
  },
  {
    id: "2",
    path: "/images/servicenowTshirt.webp",
    alt: "T-Shirt Image",
    title: "ServiceNow T-Shirt",
    price: 19.99,
    category: "tshirts",
  },
  {
    id: "3",
    path: "/images/servicenowTshirt2.jpg",
    alt: "T-Shirt Image",
    title: "ServiceNow T-Shirt",
    price: 24.99,
    category: "tshirts",
  },
  {
    id: "4",
    path: "/images/servicenowTshirt3.avif",
    alt: "T-Shirt Image",
    title: "ServiceNow T-Shirt",
    price: 22.99,
    category: "tshirts",
  },
  {
    id: "5",
    path: "/images/servicenowTshirt4.jpg",
    alt: "T-Shirt Image",
    title: "ServiceNow T-Shirt",
    price: 21.99,
    category: "tshirts",
  },
  {
    id: "6",
    path: "/images/servicenowTshirt5.webp",
    alt: "T-Shirt Image",
    title: "ServiceNow T-Shirt",
    price: 18.99,
    category: "tshirts",
  },
  {
    id: "7",
    path: "/images/servicenowSweater2.jpg",
    alt: "Sweater Image",
    title: "ServiceNow Sweater",
    price: 38.99,
    category: "jackets",
  },
];
