const ProductItem = ({ products }) => {
  return (
    <div>
      {products?.map((product) => (
        <div
          key={product.product_id}
          className="p-2 m-2 border-b-2 border-gray-300 flex justify-between gap-3"
        >
          {/* Left Side */}
          <div className="w-10/12">
            <h3 className="font-medium text-md">
              {product.is_veg === 0 ? "🔴 " : "🟢 "}
              {product.product_name}
            </h3>

            <p className="font-medium">₹{product.display_price.toFixed(2)}</p>

            <p className="text-gray-600 text-xs">{product.big_description}</p>
          </div>

          {/* Right Side (Image + Button) */}
          <div className="w-2/12 relative">
            <img
              src={product.image_es}
              alt="food"
              className="w-full h-24 object-cover rounded-md"
            />

            <button className="absolute bottom-1 left-1/2 -translate-x-1/2 bg-white px-2 py-1 text-sm shadow-md rounded">
              ADD +
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductItem;
