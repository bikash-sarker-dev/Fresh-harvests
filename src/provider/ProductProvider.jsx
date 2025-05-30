"use client";
import { ProductContext } from "@/contextApi/prodcutContext";
import { useState } from "react";

const ProductProvider = ({ children }) => {
  const [cartAdd, setCartAdd] = useState([]);
  let valueProvide = {
    cartAdd,
    setCartAdd,
  };
  return (
    <ProductContext.Provider value={valueProvide}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
