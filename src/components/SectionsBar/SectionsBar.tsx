import React from "react";
import { NavLink } from "react-router-dom";

const SectionsBar: React.FC = () => {
  return (
    <header className="bg-white text-black w-1/3 mx-auto rounded-3xl font-inter font-light">
      <div className="px-10">
        <nav className="py-3 flex justify-center items-center">
          <ul className="list-none flex flex-row items-center gap-10">
            <li>
              <NavLink to="/clothing/tshirts">T-Shirts</NavLink>
            </li>
            <li>
              <NavLink to="/clothing/shirts">Shirts</NavLink>
            </li>
            <li>
              <NavLink to="/clothing/jackets">Jackets</NavLink>
            </li>
            <li>
              <NavLink to="/clothing/pants">Pants</NavLink>
            </li>
            <li>
              <NavLink to="/clothing/shoes">Shoes</NavLink>
            </li>
          </ul>
        </nav>
        <p className="text-center pb-3">All clothes are Unisex</p>
      </div>
    </header>
  );
};

export default SectionsBar;
