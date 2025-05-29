import DescriptionAndReviews from "./components/DescriptionAndReviews";
import ProductView from "./components/ProductView";
import RelatedProduct from "./components/RelatedProduct";

const page = () => {
  return (
    <div>
      <ProductView />
      <DescriptionAndReviews />
      <RelatedProduct />
    </div>
  );
};

export default page;
