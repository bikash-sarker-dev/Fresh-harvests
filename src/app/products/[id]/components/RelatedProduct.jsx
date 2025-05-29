import ProductCard from "@/components/home/FeshProducts/ProductCard";

const RelatedProduct = () => {
  return (
    <div className="my-24">
      <div className="container">
        <div className="text-center">
          <span className="text-lg bg-fh-gray-20 text-fh-green px-2 py-1 rounded-lg font-medium">
            Our Products
          </span>
          <h2 className="text-5xl font-bold mt-2">Related products</h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </div>
  );
};

export default RelatedProduct;
