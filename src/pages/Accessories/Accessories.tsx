import React from "react";
import { NavLink, useParams } from "react-router-dom";
import { SectionsBar, ClothingCard } from "../../components";
import { useProductImageContext } from "../../hooks";
import { ACCESSORIES_CATEGORIES, UI_TEXT, ROUTES } from "../../constants";

const sections = ACCESSORIES_CATEGORIES.map((cat) => ({
  name: cat,
  path: `${ROUTES.ACCESSORIES}/${cat.toLowerCase()}`,
}));

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
      <NavLink to={ROUTES.ACCESSORIES}>
        <p className="text-center my-10 text-7xl font-sans font-bold tracking-tight text-white">
          {UI_TEXT.ACCESSORIES_TITLE}
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
