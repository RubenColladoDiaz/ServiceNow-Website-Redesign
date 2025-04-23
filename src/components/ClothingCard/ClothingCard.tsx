import React from "react";

interface ClothingCardProps {
  image: string;
  title: string;
  price: number;
}

const ClothingCard: React.FC<ClothingCardProps> = ({ image, title, price }) => {
  return (
    <div className="mx-16 my-10 flex flex-col items-center justify-center text-center bg-white text-black rounded-3xl py-5 hover:scale-105 hover:cursor-pointer transition-transform duration-300">
      <img src={image} alt={title} className="w-full max-w-xs h-full" />
      <h2 className="mt-2 text-lg font-semibold">{title}</h2>
      <p className="text-green-600">${price}</p>
    </div>
  );
};

export default ClothingCard;
