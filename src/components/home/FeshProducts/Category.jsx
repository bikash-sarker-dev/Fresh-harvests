const Category = () => {
  return (
    <div>
      <ul className="flex sm:gap-6 gap-2 justify-center mt-4">
        <li>
          <button className="btn bg-fh-green text-white">All</button>
        </li>
        <li>
          <button className="btn text-fh-gray-100">Fruits</button>
        </li>
        <li>
          <button className="btn text-fh-gray-100">Vegetables</button>
        </li>
        <li>
          <button className="btn text-fh-gray-100">Salad</button>
        </li>
      </ul>
    </div>
  );
};

export default Category;
