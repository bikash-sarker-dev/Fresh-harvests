import CardProduct from "./[id]/components/CardProduct";

const page = async () => {
  let res = await fetch(`https://code-commando.com/api/v1/products`);
  let data = await res.json();
  return (
    <div className="mb-20 mt-8">
      <div className="container">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {data.data.map((product) => (
            <CardProduct product={product} key={product.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
