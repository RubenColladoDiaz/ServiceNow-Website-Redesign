import { useContext } from "react";
import { LogoImageContext } from "../context/LogoImageContextDefinition";

export const useLogoImageContext = () => {
  const context = useContext(LogoImageContext);
  if (!context) {
    throw new Error(
      "useLogoImageContext must be used inside a LogoImageProvider",
    );
  }
  return context;
};
