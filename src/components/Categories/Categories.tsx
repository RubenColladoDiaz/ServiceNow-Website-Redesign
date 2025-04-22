import React from "react";

import { useProductImageContext } from "../../context/ProductImageContext";
import { useIconImageContext } from "../../context/IconImageContext";

const Categories: React.FC = () => {
  const { productImages } = useProductImageContext();
  const { iconImages } = useIconImageContext();

  const categoriesImages: { [key: string]: string } = {
    Clothing: productImages[4].path,
    Accessories: productImages[1].path,
    Technology: iconImages[1].path,
  };

  return (
    <div className="container mx-auto px-4">
      <div>
        <p className="text-5xl text-center py-8 font-sans font-bold tracking-tight text-white">
          CATEGORIES
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-16">
        {Object.entries(categoriesImages).map(([category, src], i) => (
          <div
            key={i}
            className="relative aspect-[3/4] cursor-pointer overflow-hidden rounded-2xl"
          >
            <img
              src={src}
              alt={`category ${category}`}
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
            />
            <p className="absolute bottom-0 left-0 w-full text-white text-3xl font-bold rounded-b-2xl py-3 bg-black bg-opacity-40 text-center">
              {category}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
