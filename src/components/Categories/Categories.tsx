import React from "react";

const Categories: React.FC = () => {
  const categoriesImages: { [key: string]: string } = {
    Clothing:
      "https://ih1.redbubble.net/image.4986081873.7764/ssrco,classic_tee,womens_02,0d162e:9880ee6111,front,product_square,x600.1u10.jpg",
    Accessories: "https://pbs.twimg.com/media/GAOQwwMWEAADSOt.jpg:large",
    Technology:
      "https://img.freepik.com/fotos-premium/computadora-portatil-estante-verde-fondo-vertical-ilustracion-3d_118047-11729.jpg",
  };

  return (
    <div>
      <div>
        <p className="text-7xl text-center pt-10 pb-10 font-sans font-bold tracking-tight text-white">
          CATEGORIES
        </p>
      </div>
      <div className="flex justify-center gap-20 pb-24">
        {Object.entries(categoriesImages).map(([category, src], i) => (
          <div
            key={i}
            className="relative w-[480px] h-[880px] cursor-pointer overflow-hidden rounded-3xl"
          >
            <img
              src={src}
              alt={`category ${category}`}
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
            />
            <p className="absolute bottom-0 left-0 w-full text-white text-7xl font-bold rounded-b-3xl py-4 bg-black bg-opacity-40">
              {category}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
