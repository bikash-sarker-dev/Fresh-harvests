const Category = ({ data, handleCategory }) => {
  return (
    <div>
      <ul className="flex sm:gap-6 gap-2 justify-center mt-4">
        {data.map((categoric) => (
          <li key={categoric?.id}>
            <button
              onClick={() => handleCategory(categoric.id)}
              className={`btn  text-white ${categoric.id ? "bg-fh-green" : ""}`}
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
