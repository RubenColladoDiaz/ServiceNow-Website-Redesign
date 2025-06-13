import React from "react";
import { NavLink, useParams } from "react-router-dom";
import SectionsBar from "../../components/SectionsBar/SectionsBar";
import ClothingCard from "../../components/ClothingCard/ClothingCard";
import { useProductImageContext } from "../../hooks/useProductImageContext";

const sections = [
  { name: "Backpacks", path: "/accessories/backpacks" },
  { name: "Caps", path: "/accessories/caps" },
  { name: "Watches", path: "/accessories/watches" },
  { name: "Rings", path: "/accessories/rings" },
  { name: "Belts", path: "/accessories/belts" },
];

const Accessories: React.FC = () => {
  const { accessoriesImages } = useProductImageContext();
  const { category = "all" } = useParams<{ category: string }>();

  let filteredAccessories = accessoriesImages;
  if (category !== "all") {
    filteredAccessories = accessoriesImages.filter(
      (item) => item.category === category,
    );
  }
  return (
    <div className="mb-10">
      <NavLink to="/accessories">
        <p className="text-center my-10 text-7xl font-sans font-bold tracking-tight text-white">
          ACCESSORIES
        </p>
      </NavLink>
      <SectionsBar sections={sections} />
      <div className="grid grid-cols-4 mt-10">
        {filteredAccessories.map((item) => (
          <ClothingCard
            key={item.id}
            image={item.path}
            title={item.title}
            price={item.price}
            isNew={item.isNew}
            discount={item.discount}
          />
        ))}
      </div>
    </div>
  );
};

export default Accessories;
