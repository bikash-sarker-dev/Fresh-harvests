import Hero from "@/components/hero/Hero";
import AboutFresh from "@/components/home/aboutFresh/AboutFresh";
import Blogs from "@/components/home/blogs/Blogs";
import CustomersSay from "@/components/home/customers/CoustomersSay";
import DiscountSeasonal from "@/components/home/DiscountUp/DiscountSeasonal";
import FreshProducts from "@/components/home/FeshProducts/FreshProducts";

export default function Home() {
  return (
    <div>
      <Hero />
      <FreshProducts />
      <AboutFresh />
      <DiscountSeasonal />
      <CustomersSay />
      <Blogs />
    </div>
  );
}
