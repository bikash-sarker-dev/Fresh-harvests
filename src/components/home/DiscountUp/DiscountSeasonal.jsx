import Image from "next/image";
import TimeCount from "./TimeCount";

const DiscountSeasonal = () => {
  return (
    <div className="bg-fh-gray-20 py-[90px]">
      <div className="container">
        <div className="flex items-center">
          <div className="w-3/4">
            <div className=" ">
              <h3 className="bg-fh-gray-50 inline-block  px-2 rounded-sm text-fh-green font-semibold  text-xl  ">
                Special Offer
              </h3>
              <h2 className="text-fh-block text-6xl font-bold my-4">
                Seasonal Fruit Bundle
              </h2>
              <h4 className="text-fh-block text-4xl max-w-md font-semibold  mb-5">
                Discount up to <span className="text-fh-primary"> 80% OFF</span>
              </h4>
              <TimeCount />
              <button className="btn rounded-4xl text-2xl mt-6 font-semibold  text-white py-6  bg-green-700">
                CODE : <span className="text-yellow-400"> FRESH28</span>
              </button>
            </div>
          </div>
          <div className=" relative">
            <div className="">
              <Image
                src={"/assets/pata.png"}
                width={60}
                height={10}
                className="absolute top-[-50px] rotate-180 left-[-60px] z-11"
              />
            </div>
            <Image
              src={"/assets/seasonal.png"}
              width={500}
              height={500}
              className="mt-16 ml-[-100px] "
              alt="no image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscountSeasonal;
