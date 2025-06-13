import React, { useMemo } from "react";
import { LogoImagesRoutes } from "../data/LogoImagesRoutes";
import { LogoImageContext } from "./LogoImageContextDefinition";

export const LogoImageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const value = useMemo(() => ({ logoImages: LogoImagesRoutes }), []);

  return (
    <LogoImageContext.Provider value={value}>
      {children}
    </LogoImageContext.Provider>
  );
};
