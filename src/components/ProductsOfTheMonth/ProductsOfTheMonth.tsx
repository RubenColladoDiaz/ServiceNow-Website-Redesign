import React, { memo } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useProductImageContext, useIconImageContext } from "../../hooks";

const ProductsOfTheMonth: React.FC = () => {
  const { iconImages } = useIconImageContext();
  const { productImages, clothesImages, accessoriesImages, technologyImages } =
    useProductImageContext();
  const productsOfTheMonth: string[] = [
    productImages[2].path,
    productImages[10].path,
    productImages[6].path,
  ];
  const navigate = useNavigate();

  const handleImageClick = (src: string) => {
    // Buscar en ropa
    const clothing = clothesImages.find((item) => item.path === src);
    if (clothing) {
      navigate(`/clothing/${clothing.category}`);
      return;
    }
    // Buscar en accesorios
    const accessory = accessoriesImages.find((item) => item.path === src);
    if (accessory) {
      navigate(`/accessories/${accessory.category}`);
      return;
    }
    // Buscar en tecnología
    const tech = technologyImages.find((item) => item.path === src);
    if (tech) {
      navigate(`/technology/${tech.category}`);
    }
  };

  return (
    <div className="text-center bg-green-600 px-4">
      <p className="text-7xl pt-10 font-sans font-bold tracking-tight text-white mb-8">
        <motion.span
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          PRODUCTS OF THE MONTH
        </motion.span>
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
              loading="lazy"
            />
          </div>
          <div>
            <p className="text-5xl text-black mb-4">#3</p>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-8 pb-24">
          {productsOfTheMonth.map((src, i) => (
            <motion.img
              key={src}
              src={src}
              alt={`top ${i}`}
              className="w-full rounded-3xl aspect-square object-cover cursor-pointer"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 * i, duration: 0.6 }}
              whileHover={{ scale: 1.08, rotate: 2 }}
              onClick={() => handleImageClick(src)}
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default memo(ProductsOfTheMonth);
