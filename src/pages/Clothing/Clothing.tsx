import React from "react";
import SectionsBar from "../../components/SectionsBar/SectionsBar";
import ClothingCard from "../../components/ClothingCard/ClothingCard";

const Clothing: React.FC = () => {
  return (
    <div className="mb-10">
      <p className="text-center my-10 text-7xl font-sans font-bold tracking-tight text-white">
        CLOTHING
      </p>
      <SectionsBar />
      <ClothingCard
        image="https://www.janfer.com/web/image/product.template/93127/image_256/Camiseta%20de%20trabajo%20BALI?unique=e33f1a3"
        title="Camiseta Azul"
        price={29.99}
      />
    </div>
  );
};

export default Clothing;
