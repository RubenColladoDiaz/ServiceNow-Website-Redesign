import React from "react";
import { useState, useEffect } from "react";
import ProductsOfTheMonth from "../components/ProductsOfTheMonth/ProductsOfTheMonth";
import Categories from "../components/Categories/Categories";
import { useProductImageContext } from "../context/ProductImageContext";
import { useLogoImageContext } from "../context/LogoImageContext";

const Home: React.FC = () => {
  const { logoImages } = useLogoImageContext();
  const { productImages } = useProductImageContext();
  const [randomImage, setRandomImage] = useState<string>("");
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);

  useEffect(() => {
    let randomNumber: number = Math.floor(Math.random() * productImages.length);
    setRandomImage(productImages[randomNumber].path);
    const randomProduct = (): string => {
      randomNumber = Math.floor(Math.random() * productImages.length);
      return productImages[randomNumber].path;
    };

    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setRandomImage(randomProduct());
        setIsTransitioning(false);
      }, 800);
    }, 4000);
    return () => clearInterval(interval);
  }, [productImages]);

  return (
    <div>
      <div className="flex justify-center mt-10 mb-10 gap-40">
        <img
          src={logoImages[0].path}
          alt={logoImages[0].path}
          className="w-7xl"
        />
        <div className="relative w-[550px] h-[550px]">
          <img
            src={randomImage}
            alt="Products slider"
            className={`rounded-3xl w-full h-full object-cover transition-opacity duration-1000 ${
              isTransitioning ? "opacity-0" : "opacity-100"
            }`}
          />
        </div>
      </div>
      <ProductsOfTheMonth />
      <Categories />
    </div>
  );
};

export default Home;
