const Category = ({ data, handleCategory, active }) => {
  return (
    <div>
      <ul className="flex sm:gap-6 gap-2 justify-center mt-4">
        {data.map((categoric) => (
          <li key={categoric?.id}>
            <button
              onClick={() => handleCategory(categoric.id)}
              className={`btn btn-sm md:btn-md  ${
                categoric.id === active ? "bg-fh-green text-white" : ""
              }`}
            >
              {categoric?.categoryName}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Category;
