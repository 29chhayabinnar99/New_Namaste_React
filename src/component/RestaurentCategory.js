import ProductItem from "./ProductItem";

const RestaurentCategory = ({ data, showItems, setShowIndex }) => {
  const HandleClick = () => {
    setShowIndex();
  };
  return (
    <div>
      <div
        className="w-8/12 p-3 border  rounded-lg shadow-md mb-3  cursor-pointer mx-auto bg-gray-100"
        onClick={HandleClick}
      >
        {/* Top row (name left, arrow right) */}
        <div className="flex justify-between items-center">
          <span className="font-bold text-xl">
            {data?.collection_name} ({data?.products?.length})
          </span>
          <span>⬇️</span>
        </div>

        {/* Next line */}
        {showItems && (
          <div className=" mt-2">
            <ProductItem products={data?.products} />
          </div>
        )}
      </div>
    </div>
  );
};

export default RestaurentCategory;
