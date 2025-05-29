import Hero from "@/components/hero/Hero";
import AboutFresh from "@/components/home/aboutFresh/AboutFresh";
import Blogs from "@/components/home/blogs/Blogs";
import CustomersSay from "@/components/home/customers/CoustomersSay";
import DiscountSeasonal from "@/components/home/DiscountUp/DiscountSeasonal";
import FreshProducts from "@/components/home/FeshProducts/FreshProducts";
import { categoryDataFetch } from "@/lib/categoryDataFetch";

export default async function Home() {
  let categoric = await categoryDataFetch();
  let res = await fetch(`https://code-commando.com/api/v1/products`);
  let data = await res.json();

  return (
    <div>
      <Hero />
      <FreshProducts data={categoric.data} product={data.data} />
      <AboutFresh />
      <DiscountSeasonal />
      <CustomersSay />
      <Blogs />
    </div>
  );
}
