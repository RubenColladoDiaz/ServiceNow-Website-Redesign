import { BaseImage } from "./imageTypes";

export type LogoImagesInterface = BaseImage;

// Tipo para el contexto de logos
export interface LogoImageContextType {
  logoImages: LogoImagesInterface[];
}
