import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

import { useProductImageContext } from "../../context/ProductImageContext";
import { useIconImageContext } from "../../context/IconImageContext";

const Categories: React.FC = () => {
  const { productImages } = useProductImageContext();
  const { iconImages } = useIconImageContext();

  const categoriesImages: { [key: string]: { path: string; link: string } } = {
    Clothing: { path: productImages[4].path, link: "/clothing" },
    Accessories: { path: productImages[1].path, link: "/accessories" },
    Technology: { path: iconImages[1].path, link: "/technology" },
  };

  return (
    <div className="container mx-auto px-4">
      <div>
        <p className="text-5xl text-center py-8 font-sans font-bold tracking-tight text-white">
          CATEGORIES
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-16">
        {Object.entries(categoriesImages).map(([category, data], i) => (
          <NavLink
            key={category}
            to={data.link}
            className="relative aspect-[3/4] cursor-pointer overflow-hidden rounded-2xl block"
          >
            <motion.img
              src={data.path}
              alt={`category ${category}`}
              className="w-full h-full object-cover"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 * i, duration: 0.6 }}
              whileHover={{ scale: 1.12, rotate: 2 }}
            />
            <motion.p
              className="absolute bottom-0 left-0 w-full text-white text-3xl font-bold rounded-b-2xl py-3 bg-black bg-opacity-40 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + 0.2 * i, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
            >
              {category}
            </motion.p>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Categories;
