import { useAppSelector } from "../hooks/useAppSelector";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { removeFromCart, clearCart } from "../features/cart/cartSlice";

export default function Cart() {
  const cart = useAppSelector(state => state.cart.items);
  const dispatch = useAppDispatch();

  if (cart.length === 0) {
    return <p className="p-6">Your cart is empty.</p>;
  }

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Your Cart</h1>
      {cart.map(item => (
        <div key={item.id} className="flex justify-between items-center border-b py-2">
          <span>{item.name} (x{item.quantity})</span>
          <button
            className="bg-red-500 text-white px-3 py-1 rounded"
            onClick={() => dispatch(removeFromCart(item.id))}
          >
            Remove
          </button>
        </div>
      ))}
      <button
        className="mt-4 bg-gray-800 text-white px-4 py-2 rounded"
        onClick={() => dispatch(clearCart())}
      >
        Clear Cart
      </button>
    </div>
  );
}
