import React, { createContext, useContext } from "react";
import { IconImageRoute } from "../types/iconImageRoute";
import { iconImagesRoutes } from "../data/iconImageRoutes";

interface IconImageContextType {
  iconImages: IconImageRoute[];
}

const IconImageContext = createContext<IconImageContextType | undefined>(
  undefined
);

export const IconImageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <IconImageContext.Provider value={{ iconImages: iconImagesRoutes }}>
      {" "}
      {children}
    </IconImageContext.Provider>
  );
};

export const useIconImageContext = () => {
  const context = useContext(IconImageContext);
  if (!context) {
    throw new Error(
      "useIconImageContext must be used inside a IconImageProvider"
    );
  }
  return context;
};
