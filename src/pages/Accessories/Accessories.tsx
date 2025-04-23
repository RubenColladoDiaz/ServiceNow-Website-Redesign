import React from "react";
import { NavLink } from "react-router-dom";
import SectionsBar from "../../components/SectionsBar/SectionsBar";

const sections = [
  { name: "Backpacks", path: "/clothing/backpacks" },
  { name: "Caps", path: "/clothing/caps" },
  { name: "Watches", path: "/clothing/watches" },
  { name: "Rings", path: "/clothing/rings" },
  { name: "Belts", path: "/clothing/belts" },
];

const Accessories: React.FC = () => {
  return (
    <div className="mb-10">
      <NavLink to="/accessories">
        <p className="text-center my-10 text-7xl font-sans font-bold tracking-tight text-white">
          ACCESSORIES
        </p>
      </NavLink>
      <SectionsBar sections={sections} />
    </div>
  );
};

export default Accessories;
