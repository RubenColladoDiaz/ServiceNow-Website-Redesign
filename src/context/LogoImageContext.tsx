import React, { createContext, useContext } from "react";
import { LogoImagesInterface } from "../types/LogoImagesInterface";
import { LogoImagesRoutes } from "../data/LogoImagesRoutes";

interface LogoImageContextType {
  logoImages: LogoImagesInterface[];
}

const LogoImageContext = createContext<LogoImageContextType | undefined>(
  undefined
);

export const LogoImageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <LogoImageContext.Provider value={{ logoImages: LogoImagesRoutes }}>
      {" "}
      {children}
    </LogoImageContext.Provider>
  );
};

export const useLogoImageContext = () => {
  const context = useContext(LogoImageContext);
  if (!context) {
    throw new Error(
      "useLogoImageContext must be used inside a LogoImageProvider"
    );
  }
  return context;
};
