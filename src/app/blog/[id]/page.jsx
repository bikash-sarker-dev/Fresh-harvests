import DescriptionAndReviews from "./components/DescriptionAndReviews";
import ProductView from "./components/ProductView";
import RelatedProduct from "./components/RelatedProduct";

const page = async () => {
  let res = await fetch(`https://code-commando.com/api/v1/products`);
  let { data } = await res.json();
  let RelatedData = data.slice(0, 4);

  return (
    <div className="mt-10">
      <ProductView />
      <DescriptionAndReviews />
      <RelatedProduct RelatedData={RelatedData} />
    </div>
  );
};

export default page;
