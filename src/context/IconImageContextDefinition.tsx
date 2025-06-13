import { createContext } from "react";
import { IconImageContextType } from "../types/iconImageRoute";

export const IconImageContext = createContext<IconImageContextType | undefined>(
  undefined,
);
