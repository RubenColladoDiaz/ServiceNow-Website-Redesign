import React from "react";

import { useProductImageContext } from "../../context/ProductImageContext";
import { useIconImageContext } from "../../context/IconImageContext";

const ProductsOfTheMonth: React.FC = () => {
  const { iconImages } = useIconImageContext();
  const { productImages } = useProductImageContext();
  const productsOfTheMonth: string[] = [
    productImages[2].path,
    productImages[10].path,
    productImages[6].path,
  ];

  return (
    <div className="text-center bg-green-600 px-4">
      <p className="text-7xl pt-10 font-sans font-bold tracking-tight text-white mb-8">
        PRODUCTS OF THE MONTH
      </p>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-3 gap-8">
          <div>
            <p className="text-5xl text-black mb-4">#2</p>
          </div>
          <div className="flex justify-center">
            <img
              src={iconImages[0].path}
              alt={iconImages[0].alt}
              className="w-20"
            />
          </div>
          <div>
            <p className="text-5xl text-black mb-4">#3</p>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-8 pb-24">
          {productsOfTheMonth.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`top ${i}`}
              className="w-full rounded-3xl aspect-square object-cover cursor-pointer"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsOfTheMonth;
