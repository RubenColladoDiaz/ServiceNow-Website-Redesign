import React, { useMemo } from "react";
import { iconImagesRoutes } from "../data/iconImageRoutes";
import { IconImageContext } from "./IconImageContextDefinition";

export const IconImageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const value = useMemo(() => ({ iconImages: iconImagesRoutes }), []);

  return (
    <IconImageContext.Provider value={value}>
      {children}
    </IconImageContext.Provider>
  );
};
