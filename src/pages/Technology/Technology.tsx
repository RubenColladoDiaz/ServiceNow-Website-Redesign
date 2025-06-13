import React from "react";
import { NavLink, useParams } from "react-router-dom";
import { SectionsBar, ClothingCard } from "../../components";
import { useProductImageContext } from "../../hooks";
import { TECHNOLOGY_CATEGORIES, UI_TEXT, ROUTES } from "../../constants";

const sections = TECHNOLOGY_CATEGORIES.map((cat) => ({
  name: cat,
  path: `${ROUTES.TECHNOLOGY}/${cat.toLowerCase()}`,
}));

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
      <NavLink to={ROUTES.TECHNOLOGY}>
        <p className="text-center my-10 text-7xl font-sans font-bold tracking-tight text-white">
          {UI_TEXT.TECHNOLOGY_TITLE}
        </p>
      </NavLink>
      <SectionsBar sections={sections} />
      <div className="grid grid-cols-4 mt-10">
        {filteredTechnology.map((item) => (
          <ClothingCard
            key={item.id}
            id={item.id}
            image={item.path}
            title={item.title}
            price={item.price}
            isNew={item.isNew || false}
            discount={item.discount}
            sizes={[]}
          />
        ))}
      </div>
    </div>
  );
};

export default Technology;
