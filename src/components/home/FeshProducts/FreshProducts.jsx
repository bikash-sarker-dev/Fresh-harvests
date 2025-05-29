import SectionHeader from "@/components/sectionHeader/SectionHeader";
import Image from "next/image";
import Category from "./Category";
import ProductCard from "./ProductCard";

const FreshProducts = () => {
  return (
    <section className="mt-[130px] relative">
      <div className="container relative">
        <div className="">
          <Image
            src={"/assets/pata.png"}
            width={60}
            height={10}
            className="absolute top-[-100px] md:right-30 right-5 z-11"
          />
        </div>
        <div className="">
          <Image
            src={"/assets/pata.png"}
            width={60}
            height={10}
            className="absolute top-[-50px] md:left-25 z-11 rotate-45"
          />
        </div>
        <SectionHeader
          subTitle={"Our Products"}
          title={"Our Fresh Products"}
          description={
            "We pride ourselves on offering a wide variety of fresh and flavorful fruits, vegetables, and salad ingredients."
          }
        />
        <Category />

        {/* product list  */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
        <div className="text-center mt-6">
          <button className="btn border text-lg py-4 px-8 font-medium text-fh-primary border-fh-primary btn-outline">
            See All Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default FreshProducts;
