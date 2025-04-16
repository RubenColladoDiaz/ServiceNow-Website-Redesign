import React from "react";

const ProductsOfTheMonth: React.FC = () => {
  const productsOfTheMonth: string[] = [
    "https://src1.ilogo.in/new_upload/2024/0302/1706944416172712021762549/1706945228/back_design_idea.webp",
    "https://www.servicenow.com/community/s/cgfwn76974/attachments/cgfwn76974/developer-blog/2660/1/Shirt.png",
    "https://di2ponv0v5otw.cloudfront.net/posts/2023/10/26/653adcd892e4916146702c21/m_wp_653adce7eb7e7a9729cbc128.webp",
  ];

  return (
    <div className="text-center bg-green-600">
      <p className="text-7xl pt-10 font-sans font-bold tracking-tight text-white">
        PRODUCTS OF THE MONTH
      </p>
      <div className="flex justify-center items-center text-black gap-96 text-5xl">
        <p>#2</p>
        <img
          src="https://images.vexels.com/media/users/3/239727/isolated/lists/636853d970c760b684e1ae6ef40ef82d-doodly-normal-crown.png"
          alt="Crown Image"
          className="w-24 mx-10"
        />
        <p>#3</p>
      </div>
      <div className="flex items-center justify-center gap-4 pb-24">
        {productsOfTheMonth.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`top ${i}`}
            className="w-[480px] rounded-3xl h-[480px] object-cover cursor-pointer"
          />
        ))}
      </div>
    </div>
  );
};

export default ProductsOfTheMonth;
