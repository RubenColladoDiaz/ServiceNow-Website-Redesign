import React, { useState } from "react";
import { motion } from "framer-motion";
import { UI_TEXT } from "../../constants/ui";
import { useCartContext } from "../../hooks/useCartContext";

interface ClothingCardProps {
  id: string;
  image: string;
  title: string;
  price: number;
  isNew: boolean;
  discount?: number;
  sizes: string[];
}

const ClothingCard: React.FC<ClothingCardProps> = ({
  id,
  image,
  title,
  price,
  isNew,
  discount,
  sizes,
}) => {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [showSizeError, setShowSizeError] = useState(false);
  const { addToCart } = useCartContext();

  const handleBuyNow = () => {
    if (sizes.length > 0 && !selectedSize) {
      setShowSizeError(true);
      return;
    }

    setShowSizeError(false);
    addToCart({
      id,
      title,
      price,
      image,
      size: selectedSize ?? undefined,
      quantity: 1,
      discount,
    });
  };

  return (
    <motion.div
      className="mx-16 my-10 flex flex-col items-center justify-center text-center bg-white text-black rounded-3xl py-5 hover:cursor-pointer relative"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.07, boxShadow: "0 8px 32px rgba(0,0,0,0.18)" }}
    >
      {isNew && (
        <span className="absolute top-3 left-3 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">
          {UI_TEXT.NEW_LABEL}
        </span>
      )}
      {typeof discount === "number" && discount > 0 && (
        <span className="absolute top-3 right-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
          -{discount}%
        </span>
      )}
      <img src={image} alt={title} className="w-full h-full" loading="lazy" />
      <h2 className="mt-2 text-lg font-semibold">{title}</h2>
      <div className="flex items-center justify-center gap-2">
        {typeof discount === "number" && discount > 0 ? (
          <>
            <span className="text-gray-400 line-through">
              ${price.toFixed(2)}
            </span>
            <span className="text-green-600 font-bold">
              ${(price * (1 - discount / 100)).toFixed(2)}
            </span>
          </>
        ) : (
          <span className="text-green-600">${price.toFixed(2)}</span>
        )}
      </div>
      {sizes.length > 0 && (
        <div className="mt-2 flex flex-col items-center">
          <div className="flex flex-wrap justify-center gap-2">
            {sizes.map((size) => (
              <button
                key={size}
                type="button"
                className={`border rounded px-2 py-1 text-xs transition font-semibold
                  ${
                    selectedSize === size
                      ? "bg-green-600 text-white border-green-600"
                      : "bg-white text-black border-gray-300"
                  }
                `}
                onClick={() => {
                  setSelectedSize(size);
                  setShowSizeError(false);
                }}
              >
                {size}
              </button>
            ))}
          </div>
          {showSizeError && (
            <p className="text-red-500 text-sm mt-2">Please, select a size</p>
          )}
        </div>
      )}
      <button
        className="mt-4 bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-full transition"
        onClick={handleBuyNow}
      >
        {UI_TEXT.BUY_NOW}
      </button>
    </motion.div>
  );
};

export default ClothingCard;
