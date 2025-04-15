import { Link, NavLink } from "react-router-dom";
import React from "react";
import "./Header.css";

const Header: React.FC = () => {
  return (
    <header className="header-background-color w-screen font-poppins">
      <div className="px-4">
        <nav className="py-5">
          <ul className="list-none flex flex-row items-center gap-20">
            <li>
              <NavLink to="/">
                <img
                  className="w-32 h-auto ml-40"
                  src="https://www.servicenow.com/content/dam/servicenow-assets/images/naas/servicenow-header-logo-white.svg"
                  alt="ServiceNow Icon"
                />
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/clothing"
                className="font-normal hover:text-gray-300 text-white"
              >
                Clothing
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/accessories"
                className="font-normal hover:text-gray-300 text-white"
              >
                Accessories
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/technology"
                className="font-normal hover:text-gray-300 text-white"
              >
                Technology
              </NavLink>
            </li>
            <li className="ml-auto flex items-center gap-20 mr-40">
              <div className="p-2 rounded-full hover:bg-white/20 cursor-pointer">
                <img
                  className="w-6 h-6 brightness-0 invert"
                  src="https://www.servicenow.com/content/dam/servicenow-assets/images/naas/search-icon.svg"
                  alt="Search icon"
                />
              </div>
              <input className="cursor-pointer border px-4 py-1 rounded-3xl" type="button" value="Login" />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
