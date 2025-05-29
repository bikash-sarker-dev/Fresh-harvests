import Image from "next/image";

const FreshSalad = () => {
  return (
    <div className="flex">
      <div className="ml-24">
        <Image
          src={"/assets/line.png"}
          width={100}
          height={10}
          alt="Fresh Salad"
          className=" rounded-full"
        />
      </div>
      <div className="bg-fh-gray-50 p-5 rounded-2xl flex items-center space-x-4 w-max ml-10 ">
        <div className="">
          <p className="text-green-600 font-semibold">Special Offer</p>
          <h3 className="text-3xl font-bold">Fresh Salad</h3>
          <p className="text-lg font-semibold my-1">
            <span className="text-green-600  text-md">Up to </span>
            <span className="text-2xl font-bold">70%</span> off
          </p>
          <button
            type="button"
            className="bg-green-700 mt-2 inline-block text-white font-semibold px-3 py-2 text-sm rounded-full "
          >
            CODE : <span className="text-yellow-300">FRESH25</span>
          </button>
        </div>
        <Image
          src={"/assets/plete-food.png"}
          width={130}
          height={100}
          alt="Fresh Salad"
          className=" rounded-full"
        />
      </div>
    </div>
  );
};

export default FreshSalad;
