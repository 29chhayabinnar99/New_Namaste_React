import { useSelector } from "react-redux";
import ProductItem from "./ProductItem";
import { clearItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const Cart = () => {
  // while subscribing select specific or required part of the store that is efficient way to use useSelector and it will only re-render the component when that specific part of the store changes
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const clearCart = () => {
    // Implementation for clearing the cart
    dispatch(clearItem());
  };

  return (
    <div>
      <h2 className="text-lg font-semibold  text-center m-5">Cart</h2>
      <div>
        <button
          onClick={clearCart}
          className="px-4 m-5 text-center py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300 transform hover:scale-105"
        >
          Clear Cart
        </button>
        {cartItems.length === 0 ? (
          <p className="text-center text-gray-500">Your cart is empty.</p>
        ) : (
          <ProductItem products={cartItems} />
        )}
      </div>
    </div>
  );
};

export default Cart;
