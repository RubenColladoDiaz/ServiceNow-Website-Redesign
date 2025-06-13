import { createContext } from "react";
import { LogoImageContextType } from "../types/LogoImagesInterface";

export const LogoImageContext = createContext<LogoImageContextType | undefined>(
  undefined,
);
