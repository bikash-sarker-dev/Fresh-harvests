import axios from "axios";
import DescriptionAndReviews from "./components/DescriptionAndReviews";
import ProductView from "./components/ProductView";
import RelatedProduct from "./components/RelatedProduct";

const page = async ({ params }) => {
  const { id } = await params;
  console.log(id);

  let details = await axios.get(
    `https://code-commando.com/api/v1/products/${id}`
  );
  let singleProduct = await details.data;

  let res = await fetch(`https://code-commando.com/api/v1/products`);
  let { data } = await res.json();
  let RelatedData = data.slice(0, 4);

  return (
    <div className="mt-10">
      <ProductView details={details.data} />
      <DescriptionAndReviews />
      <RelatedProduct RelatedData={RelatedData} />
    </div>
  );
};

export default page;
