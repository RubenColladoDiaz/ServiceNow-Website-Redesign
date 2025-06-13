import { useEffect } from "react";
import ProductsOfTheMonth from "../../components/ProductsOfTheMonth/ProductsOfTheMonth";
import Categories from "../../components/Categories/Categories";
import { useProductImageContext } from "../../context/ProductImageContext";
import { useLogoImageContext } from "../../context/LogoImageContext";

const Home: React.FC = () => {
  const { logoImages } = useLogoImageContext();
  const { productImages } = useProductImageContext();

  useEffect(() => {}, [productImages]);

  return (
    <div>
      <div className="relative flex justify-center items-center h-[650px] bg-gray-200 overflow-hidden">
        <video
          className="absolute left-0 top-0 w-screen h-[650px] object-cover blur-sm opacity-70 z-0"
          autoPlay
          loop
          muted
          playsInline
          style={{ pointerEvents: "none" }}
        >
          <source src="/videos/video.webm" type="video/webm" />
          <source src="/videos/video.mp4" type="video/mp4" />
          Tu navegador no soporta el video.
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/10 to-white/60 z-10" />
        <div className="relative z-20 flex justify-center items-center">
          <img
            src={logoImages[0].path}
            alt={logoImages[0].path}
            className="w-[700px] drop-shadow-2xl rounded-2xl p-6 border-4 border-white"
          />
        </div>
      </div>
      <ProductsOfTheMonth />
      <Categories />
    </div>
  );
};

export default Home;
