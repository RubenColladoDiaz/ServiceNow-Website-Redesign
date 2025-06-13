import React from "react";
import ClothingCard from "../../components/ClothingCard/ClothingCard";
import { useProductImageContext } from "../../context/ProductImageContext";
import { useParams, NavLink } from "react-router-dom";
import SectionsBar from "../../components/SectionsBar/SectionsBar";

const sections = [
  { name: "Laptops", path: "/technology/laptops" },
  { name: "Mice", path: "/technology/mice" },
  { name: "Keyboards", path: "/technology/keyboards" },
  { name: "Headphones", path: "/technology/headphones" },
];

const Technology: React.FC = () => {
  const { technologyImages } = useProductImageContext();
  const { category = "all" } = useParams<{ category: string }>();

  let filteredTechnology = technologyImages;
  if (category !== "all") {
    filteredTechnology = technologyImages.filter(
      (item) => item.category === category,
    );
  }
  return (
    <div className="mb-10">
      <NavLink to="/technology">
        <p className="text-center my-10 text-7xl font-sans font-bold tracking-tight text-white">
          TECHNOLOGY
        </p>
      </NavLink>
      <SectionsBar sections={sections} />
      <div className="grid grid-cols-4 mt-10">
        {filteredTechnology.map((item, index) => (
          <ClothingCard
            key={index}
            image={item.path}
            title={item.title}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Technology;
