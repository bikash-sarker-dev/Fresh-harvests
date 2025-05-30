"use client";
import CardProduct from "@/app/products/[id]/components/CardProduct";
import SectionHeader from "@/components/sectionHeader/SectionHeader";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Category from "./Category";

const FreshProducts = ({ data, product }) => {
  let [active, setActive] = useState();
  let [category, setCategory] = useState([]);

  const handleCategory = (id) => {
    setActive(id);
    if (id) {
      let categoryFilter = product.filter(
        (product) => product.categoryId === id
      );
      setCategory(categoryFilter);
    } else {
      let defaultProduct = product.slice(0, 8);
      setCategory(defaultProduct);
    }
  };

  let defaultProduct = product.slice(0, 8);
  const mainProduct = defaultProduct || category;

  return (
    <section className="mt-[130px] relative">
      <div className="container relative">
        <div className="">
          <Image
            src={"/assets/pata.png"}
            width={60}
            height={10}
            className="absolute top-[-100px] md:right-30 right-5 z-11"
            alt="no support image"
          />
        </div>
        <div className="">
          <Image
            src={"/assets/pata.png"}
            width={60}
            height={10}
            className="absolute top-[-50px] md:left-25 z-11 rotate-45"
            alt="product image"
          />
        </div>
        <SectionHeader
          subTitle={"Our Products"}
          title={"Our Fresh Products"}
          description={
            "We pride ourselves on offering a wide variety of fresh and flavorful fruits, vegetables, and salad ingredients."
          }
        />
        <Category data={data} handleCategory={handleCategory} active={active} />

        {/* product list  */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {category &&
            category.map((product) => (
              <CardProduct product={product} key={product.id} />
            ))}
          {defaultProduct &&
            defaultProduct.map((product) => (
              <CardProduct product={product} key={product.id} />
            ))}
        </div>
        <div className="text-center mt-6">
          <Link
            href={"/products"}
            className="btn border text-lg py-4 px-8 font-medium text-fh-primary border-fh-primary btn-outline"
          >
            See All Products
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FreshProducts;
