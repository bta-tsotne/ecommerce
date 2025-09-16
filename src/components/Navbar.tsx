import { Link } from "react-router-dom";
import { useAppSelector } from "../hooks/useAppSelector";

export default function Navbar() {
  const cartItems = useAppSelector(state => state.cart.items);

  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center">
      <Link to="/" className="font-bold text-xl">E-Shop</Link>
      <div className="flex gap-6">
        <Link to="/">Home</Link>
        <Link to="/cart">Cart ({cartItems.length})</Link>
      </div>
    </nav>
  );
}
