import Image from "next/image";
import Download from "./Download";
import FreshSalad from "./FreshSalad";
import "./hero.css";

const Hero = () => {
  return (
    <section className=" bg-fh-gray-20 pb-12 pt-10">
      <div className="hidden lg:block">
        <Image
          src={"/assets/pata-top.png"}
          width={60}
          height={10}
          className="absolute top-28 left-0 z-11"
        />
      </div>
      <div className=" container ">
        <div className=" lg:flex">
          <div className="lg:w-3/5">
            <div className="container">
              <h3 className="bg-fh-gray-50 inline-block py-1 px-3 text-fh-green font-semibold mb-2 text-lg md:text-xl ">
                Welcome to Fresh Harvest
              </h3>
              <h1 className="text-3xl font-bold xl:text-[80px]">
                Fresh Fruits and Vegetables
              </h1>
              <p className="py-6 max-w-md">
                At Fresh Harvests, we are passionate about providing you with
                the freshest and most flavorful fruits and vegetables
              </p>
              <button className="btn rounded-lg  bg-fh-primary text-lg py-5 text-white px-8">
                shop Now
              </button>
              <FreshSalad />
              <Download />
            </div>
          </div>
          <div className="lg:w-2/5 relative ">
            <div className="hidden lg:block">
              <Image
                src={"/assets/pata.png"}
                width={60}
                height={10}
                className="absolute top-24 left-10 z-11"
              />
            </div>
            <div className=" ml-8">
              <Image
                src={"/assets/banner-image.png"}
                width={880}
                height={700}
                className="absolute w-[250] md:w-[400] xl:[880] bottom-[-46px] right-[-20px] md:right-[-20px] z-10 "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
