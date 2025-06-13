import { useContext } from "react";
import { IconImageContext } from "../context/IconImageContextDefinition";

export const useIconImageContext = () => {
  const context = useContext(IconImageContext);
  if (!context) {
    throw new Error(
      "useIconImageContext must be used inside a IconImageProvider",
    );
  }
  return context;
};
