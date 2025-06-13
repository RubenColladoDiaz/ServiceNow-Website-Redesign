import React from "react";
import { motion } from "framer-motion";

interface ClothingCardProps {
  image: string;
  title: string;
  price: number;
}

const ClothingCard: React.FC<ClothingCardProps> = ({ image, title, price }) => {
  return (
    <motion.div
      className="mx-16 my-10 flex flex-col items-center justify-center text-center bg-white text-black rounded-3xl py-5 hover:cursor-pointer"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.07, boxShadow: "0 8px 32px rgba(0,0,0,0.18)" }}
    >
      <img src={image} alt={title} className="w-full h-full" />
      <h2 className="mt-2 text-lg font-semibold">{title}</h2>
      <p className="text-green-600">${price}</p>
    </motion.div>
  );
};

export default ClothingCard;
