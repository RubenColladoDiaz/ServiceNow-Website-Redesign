import { NavLink } from "react-router-dom";
import React, { useEffect, useRef, useState } from "react";
import "./Header.css";

function SearchToggle() {
  // For the appearance of the input when the lens is clicked, we make a boolean initialized in false
  const [isSearching, setIsSearching] = useState(false);
  // We make a reference for the input element in DOM
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // if the input is visible and the input exists...
    if (isSearching && inputRef.current) {
      // We put the user inside the input
      inputRef.current.focus();
    }
    // We execute the effect when the value of isSearching changes
  }, [isSearching]);

  return (
    <div className="relative flex items-center h-10">
      {isSearching ? (
        <input
          ref={inputRef}
          type="text"
          placeholder="Search"
          className="border border-white bg-transparent text-white placeholder-white rounded-full px-4 py-1 w-60 focus:outline-none focus:ring-2 focus:ring-white transition-all"
          // When the user exits the input, isSearching = false
          onBlur={() => setIsSearching(false)}
        />
      ) : (
        <div
          className="p-2 rounded-full hover:bg-white/20 cursor-pointer"
          onClick={() => setIsSearching(true)}
        >
          <img
            className="w-6 h-6 brightness-0 invert"
            src="https://www.servicenow.com/content/dam/servicenow-assets/images/naas/search-icon.svg"
            alt="Search icon"
          />
        </div>
      )}
    </div>
  );
}

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
              <SearchToggle />
              <input
                className="cursor-pointer border px-4 py-1 rounded-3xl"
                type="button"
                value="Login"
              />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
