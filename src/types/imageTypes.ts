// Tipos base para imágenes
export type ImageId = string;
export type ImagePath = string;
export type ImageAlt = string;

// Interfaz base para imágenes
export interface BaseImage {
  id: ImageId;
  path: ImagePath;
  alt?: ImageAlt;
}

// Tipo para el contexto de imágenes
export interface ImageContextType<T extends BaseImage> {
  images: T[];
}
