import Link from "next/link";

const ProductCard = () => {
  return (
    <div className="card group cursor-pointer bg-base-100 md:pt-3 pt-2 rounded-xl shadow-sm mb-2 md:p-3 p-2 py-0">
      <figure className=" p-10 bg-fh-gray-20 rounded-xl">
        <img
          src={"/assets/product/product-1.png"}
          alt="Shoes"
          className="rounded-xl group-hover:scale-125 transition duration-300 ease-in-out"
        />
      </figure>
      <div className="card-body px-0 pb-4 items-center mt-[-10px] text-center mb-0">
        <h2 className=" text-lg font-medium">Mushroom</h2>
        <p className="text-fh-gray-100 text-lg">$1.3/kg</p>
        <div className="card-actions w-full">
          <Link
            href={""}
            className="btn btn-sm md:btn- group-hover:bg-fh-primary duration-300 ease-in-out  btn-block border border-fh-gray-50"
          >
            Add To Card
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
