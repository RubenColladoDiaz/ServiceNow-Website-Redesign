import React from "react";
import { ClothingCard, SectionsBar } from "../../components";
import { useProductImageContext } from "../../hooks";
import { useParams, NavLink } from "react-router-dom";
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

export default Technology;
