import { createContext } from "react";
import { IconImageRoute } from "../types/iconImageRoute";

interface IconImageContextType {
  iconImages: IconImageRoute[];
}

export const IconImageContext = createContext<IconImageContextType | undefined>(
  undefined,
);
