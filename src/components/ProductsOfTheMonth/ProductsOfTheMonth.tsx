import React from "react";

import { useProductImageContext } from "../../context/ProductImageContext";
import { useIconImageContext } from "../../context/IconImageContext";

const ProductsOfTheMonth: React.FC = () => {
  const { iconImages } = useIconImageContext();
  const { productImages } = useProductImageContext();
  const productsOfTheMonth: string[] = [
    productImages[2].path,
    productImages[1].path,
    productImages[4].path,
  ];

  return (
    <div className="text-center bg-green-600">
      <p className="text-7xl pt-10 font-sans font-bold tracking-tight text-white">
        PRODUCTS OF THE MONTH
      </p>
      <div className="flex justify-center items-center text-black gap-96 text-5xl">
        <p>#2</p>
        <img
          src={iconImages[0].path}
          alt={iconImages[0].alt}
          className="w-24 mx-10"
        />
        <p>#3</p>
      </div>
      <div className="flex items-center justify-center gap-4 pb-24">
        {productsOfTheMonth.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`top ${i}`}
            className="w-[480px] rounded-3xl h-[480px] object-cover cursor-pointer"
          />
        ))}
      </div>
    </div>
  );
};

export default ProductsOfTheMonth;
