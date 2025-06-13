import React from "react";
import { useParams, NavLink } from "react-router-dom";
import SectionsBar from "../../components/SectionsBar/SectionsBar";
import ClothingCard from "../../components/ClothingCard/ClothingCard";
import { useProductImageContext } from "../../context/ProductImageContext";

const sections = [
  { name: "T-Shirts", path: "/clothing/tshirts" },
  { name: "Shirts", path: "/clothing/shirts" },
  { name: "Jackets", path: "/clothing/jackets" },
  { name: "Pants", path: "/clothing/pants" },
  { name: "Shoes", path: "/clothing/shoes" },
];

const Clothing: React.FC = () => {
  const { clothesImages } = useProductImageContext();
  const { category = "all" } = useParams<{ category: string }>();

  let filteredClothes = clothesImages;
  if (category !== "all") {
    filteredClothes = clothesImages.filter(
      (item) => item.category === category,
    );
  }
  return (
    <div className="mb-10">
      <NavLink to="/clothing">
        <p className="text-center my-10 text-7xl font-sans font-bold tracking-tight text-white">
          CLOTHING
        </p>
      </NavLink>
      <SectionsBar sections={sections} />
      <div className="grid grid-cols-4 mt-10">
        {filteredClothes.map((item, index) => (
          <ClothingCard
            key={index}
            image={item.path}
            title={item.title}
            price={item.price}
            isNew={item.isNew}
            discount={item.discount}
            sizes={item.sizes}
          />
        ))}
      </div>
    </div>
  );
};

export default Clothing;
