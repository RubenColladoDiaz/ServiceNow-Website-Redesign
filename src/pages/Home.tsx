import React from "react";
import { useState, useEffect } from "react";

const Home: React.FC = () => {
  const [randomImage, setRandomImage] = useState<string>("");

  const products: string[] = [
    "https://di2ponv0v5otw.cloudfront.net/posts/2023/10/26/653adcd892e4916146702c21/m_wp_653adce7eb7e7a9729cbc128.webp",
    "https://src1.ilogo.in/new_upload/2024/0302/1706944416172712021762549/1706945228/back_design_idea.webp",
    "https://www.servicenow.com/community/s/cgfwn76974/attachments/cgfwn76974/developer-blog/2660/1/Shirt.png",
    "https://di2ponv0v5otw.cloudfront.net/posts/2023/10/26/653adcd892e4916146702c21/m_wp_653adce7eb7e7a9729cbc128.webp",
    "https://www.arcadiaonline.co.uk/uploaded/images/org/6829-dscf6109.jpg",
    "https://m.media-amazon.com/images/I/A18Zbr2L5LL._CLa%7C2140%2C2000%7CA1tDZIkkJtL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_UY1000_.png",
    "https://ih1.redbubble.net/image.4986081873.7764/ssrco,classic_tee,womens_01,0d162e:9880ee6111,front,product_square,x600.1u10.jpg",
    "https://cdn11.bigcommerce.com/s-x6m5zxcu7z/images/stencil/300x300/products/274/802/Tshirt_Center_Chest_Mockup_1__34537.1728530698.png?c=1",
    "https://ih1.redbubble.net/image.3037954562.8689/ssrco,slim_fit_t_shirt,flatlay,101010:01c5ca27c6,front,wide_portrait,750x1000-bg,f8f8f8.u1.jpg",
  ];

  const randomProduct = (): string => {
    let randomNumber: number = Math.floor(Math.random() * products.length);
    return products[randomNumber];
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setRandomImage(randomProduct());
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className="flex justify-center mt-10 mb-10 gap-40">
        <img
          src="https://www.servicenow.com/content/dam/servicenow-assets/images/naas/servicenow-header-logo-white.svg"
          alt="ServiceNow Logo"
          className="w-7xl"
        />
        <img
          src={randomImage}
          alt="Products slider"
          className="rounded-3xl w-[550px] h-[550px] object-cover"
        />
      </div>
      <div className="text-center bg-green-600">
        <p className="text-7xl pt-10 pb-10 font-sans font-light font-bold tracking-tight text-white">
          PRODUCTS OF THE MONTH
        </p>
        <div className="flex items-center justify-center gap-4 pb-24">
          <img
            src="https://src1.ilogo.in/new_upload/2024/0302/1706944416172712021762549/1706945228/back_design_idea.webp"
            alt="top 2"
            className="w-[480px] rounded-3xl h-[480px] object-cover cursor-pointer"
          />
          <img
            src="https://www.servicenow.com/community/s/cgfwn76974/attachments/cgfwn76974/developer-blog/2660/1/Shirt.png"
            alt="top 1"
            className="w-[480px] rounded-3xl h-[480px] object-cover cursor-pointer"
          />
          <img
            src="https://di2ponv0v5otw.cloudfront.net/posts/2023/10/26/653adcd892e4916146702c21/m_wp_653adce7eb7e7a9729cbc128.webp"
            alt="top 3"
            className="w-[480px] rounded-3xl h-[480px] object-cover cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
