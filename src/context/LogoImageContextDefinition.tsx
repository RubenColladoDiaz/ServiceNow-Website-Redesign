import { createContext } from "react";
import { LogoImagesInterface } from "../types/LogoImagesInterface";

interface LogoImageContextType {
  logoImages: LogoImagesInterface[];
}

export const LogoImageContext = createContext<LogoImageContextType | undefined>(
  undefined,
);
