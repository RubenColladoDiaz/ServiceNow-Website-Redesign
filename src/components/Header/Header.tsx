import { NavLink } from "react-router-dom";
import React, { useEffect, useRef, useState } from "react";
import "./Header.css";

import { useIconImageContext } from "../../context/IconImageContext";
import { useLogoImageContext } from "../../context/LogoImageContext";
import { useProductImageContext } from "../../context/ProductImageContext";
import {
  ClothesImagesInterface,
  AccessoriesImagesInterface,
  TechnologyImagesInterface,
} from "../../types/productImagesRoute";

function SearchToggle() {
  const { iconImages } = useIconImageContext();
  const { clothesImages, accessoriesImages, technologyImages } =
    useProductImageContext();
  const [isSearching, setIsSearching] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [showResults, setShowResults] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  // Unimos todos los productos en un solo array
  const allProducts = [
    ...clothesImages,
    ...accessoriesImages,
    ...technologyImages,
  ];

  // Filtramos los productos por el texto de búsqueda
  const filteredProducts = allProducts.filter((product) =>
    product.title.toLowerCase().includes(searchText.toLowerCase()),
  );

  useEffect(() => {
    if (isSearching && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isSearching]);

  // Función para navegar a la categoría del producto
  type ProductType =
    | ClothesImagesInterface
    | AccessoriesImagesInterface
    | TechnologyImagesInterface;
  const handleResultClick = (product: ProductType) => {
    let basePath = "/";
    if (product.category) {
      if (
        ["tshirts", "shirts", "jackets", "pants", "shoes"].includes(
          product.category,
        )
      ) {
        basePath = `/clothing/${product.category}`;
      } else if (
        ["backpacks", "caps", "watches", "rings", "belts"].includes(
          product.category,
        )
      ) {
        basePath = `/accessories/${product.category}`;
      } else if (
        ["laptops", "mice", "keyboards", "headphones"].includes(
          product.category,
        )
      ) {
        basePath = `/technology/${product.category}`;
      }
    }
    window.location.href = basePath;
    setIsSearching(false);
    setShowResults(false);
    setSearchText("");
  };

  return (
    <div className="relative flex items-center h-10">
      {isSearching ? (
        <div className="relative w-60">
          <input
            ref={inputRef}
            type="text"
            placeholder="Buscar productos..."
            className="border border-white bg-transparent text-white placeholder-white rounded-full px-4 py-1 w-60 focus:outline-none focus:ring-2 focus:ring-white transition-all"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
              setShowResults(true);
            }}
            onBlur={() =>
              setTimeout(() => {
                setIsSearching(false);
                setShowResults(false);
              }, 200)
            }
            onFocus={() => setShowResults(true)}
          />
          {showResults && searchText && (
            <ul className="absolute z-50 left-0 w-full bg-white text-black rounded-b-lg shadow-lg max-h-60 overflow-y-auto">
              {filteredProducts.length > 0 ? (
                filteredProducts.slice(0, 8).map((product: ProductType) => (
                  <li
                    key={product.id + product.title}
                    className="flex items-center gap-2 px-3 py-2 hover:bg-gray-200 cursor-pointer"
                    onMouseDown={() => handleResultClick(product)}
                  >
                    <img
                      src={product.path}
                      alt={product.title}
                      className="w-8 h-8 rounded object-cover"
                    />
                    <span className="text-sm">{product.title}</span>
                  </li>
                ))
              ) : (
                <li className="px-3 py-2 text-gray-500">No hay resultados</li>
              )}
            </ul>
          )}
        </div>
      ) : (
        <div
          className="p-2 rounded-full hover:bg-white/20 cursor-pointer"
          onClick={() => setIsSearching(true)}
        >
          <img
            className="w-6 h-6 brightness-0 invert"
            src={iconImages[2].path}
            alt={iconImages[2].alt}
          />
        </div>
      )}
    </div>
  );
}

const Header: React.FC = () => {
  const { logoImages } = useLogoImageContext();
  return (
    <header className="header-background-color w-screen font-poppins">
      <div className="px-4">
        <nav className="py-5">
          <ul className="list-none flex flex-row items-center gap-20">
            <li>
              <NavLink to="/">
                <img
                  className="w-32 h-auto ml-40"
                  src={logoImages[0].path}
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
