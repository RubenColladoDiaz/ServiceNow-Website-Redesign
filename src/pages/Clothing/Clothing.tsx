import React from "react";
import { useParams, NavLink } from "react-router-dom";
import { SectionsBar, ClothingCard } from "../../components";
import { useProductImageContext } from "../../hooks";
import { CLOTHING_CATEGORIES, UI_TEXT, ROUTES } from "../../constants";

const sections = CLOTHING_CATEGORIES.map((cat) => ({
  name: cat.charAt(0).toUpperCase() + cat.slice(1),
  path: `${ROUTES.CLOTHING}/${cat}`,
}));

const Clothing: React.FC = () => {
  const { clothesImages } = useProductImageContext();
  const { category = "all" } = useParams<{ category: string }>();

  let filteredClothes = clothesImages;
  if (category !== "all") {
    const normalizedCategory = category
      .toLowerCase()
      .replace(/\s/g, "")
      .replace(/-/g, "");
    filteredClothes = clothesImages.filter(
      (item) => item.category === normalizedCategory,
    );
  }

  return (
    <div className="mb-10">
      <NavLink to={ROUTES.CLOTHING}>
        <p className="text-center my-10 text-7xl font-sans font-bold tracking-tight text-white">
          {UI_TEXT.CLOTHING_TITLE}
        </p>
      </NavLink>
      <SectionsBar sections={sections} />
      <div className="grid grid-cols-4 mt-10">
        {filteredClothes.map((item) => (
          <ClothingCard
            key={item.id}
            id={item.id}
            image={item.path}
            title={item.title}
            price={item.price}
            isNew={item.isNew || false}
            discount={item.discount}
            sizes={item.sizes}
          />
        ))}
      </div>
    </div>
  );
};

export default Clothing;
