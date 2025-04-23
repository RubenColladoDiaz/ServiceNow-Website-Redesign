import React from "react";
import { NavLink } from "react-router-dom";
import SectionsBar from "../../components/SectionsBar/SectionsBar";

const sections = [
  { name: "Backpacks", path: "/accessories/backpacks" },
  { name: "Caps", path: "/accessories/caps" },
  { name: "Watches", path: "/accessories/watches" },
  { name: "Rings", path: "/accessories/rings" },
  { name: "Belts", path: "/accessories/belts" },
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
