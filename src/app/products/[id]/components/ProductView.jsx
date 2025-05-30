"use client";
import { Heart, ShoppingCart, Star } from "lucide-react";
import { useState } from "react";
const ProductView = ({ details }) => {
  console.log(details);
  let { description, stock, images, price, productName } = details.data;
  const [quantity, setQuantity] = useState(1);
  const handleQuantity = (action) => {
    setQuantity((prev) =>
      action === "inc" ? prev + 1 : Math.max(1, prev - 1)
    );
  };
  return (
    <div className="container my-8 mt-20">
      <div className="flex flex-col md:flex-row   p-6 max-w-4xl mx-auto">
        {/* Product Image */}
        <div className="flex-1 border border-fh-gray-50 rounded-xl p-5  flex justify-center items-center">
          <img
            src={images}
            alt="Coconut"
            className="rounded-xl w-full object-contain"
          />
        </div>

        {/* Product Details */}
        <div className="flex-1 mt-6 md:mt-0 md:ml-8">
          <span className="text-lg bg-fh-gray-20 text-fh-green px-2 py-1 rounded-lg font-medium">
            Fruits
          </span>

          <h2 className="text-5xl font-bold mt-2">{productName}</h2>

          <div className="flex items-center text-[#FFB848] mt-3">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={18} fill="currentColor" />
            ))}
            <span className="text-sm text-gray-600 ml-2">(5 reviews)</span>
          </div>

          <p className="text-xl font-semibold text-red-600 mt-3">${price}/kg</p>

          <p className="text-gray-600 mt-4 text-sm">{description}</p>

          {/* Quantity and Actions */}
          <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="flex items-center ">
              <span className="text-lg font-medium">Quantity</span>
              <div className="join mx-2">
                <button
                  className="join-item btn text-xl font-bold"
                  onClick={() => handleQuantity("dec")}
                >
                  -
                </button>
                <button className="join-item btn ">{quantity}</button>
                <button
                  className="join-item btn text-xl font-bold "
                  onClick={() => handleQuantity("inc")}
                >
                  +
                </button>
              </div>

              <span className=" text-sm text-gray-600">/kg</span>
            </div>
          </div>
          <div className="flex gap-5 mt-10">
            <button className="flex items-center gap-2 text-lg font-medium px-4 py-2 bg-fh-gray-50 text-gray-700 rounded-lg hover:bg-gray-300">
              <Heart size={18} /> Save as favorite
            </button>

            <button className="flex items-center gap-2 text-lg font-medium px-5 py-2 bg-fh-primary text-white rounded-lg hover:bg-orange-600">
              <ShoppingCart size={18} /> Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductView;
