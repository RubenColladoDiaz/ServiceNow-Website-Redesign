import { BaseImage } from "./imageTypes";

export type IconImageRoute = BaseImage;

// Tipo para el contexto de iconos
export interface IconImageContextType {
  iconImages: IconImageRoute[];
}
