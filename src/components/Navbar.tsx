import { Link } from "react-router-dom";
import { useAppSelector } from "../hooks/useAppSelector";

export default function Navbar() {
  const cartItems = useAppSelector(state => state.cart.items);

  return (
    <nav className="bg-blue-800 border-stone-700 border-b-4 text-gray-100 px-6 py-12 flex justify-between items-center">
      <Link to="/" className="text-xl">ონლაინ მაღაზია</Link>
      <div className="flex gap-6">
        <Link to="/">საწყისი</Link>
        <Link to="/cart">კალათა ({cartItems.length})</Link>
      </div>
    </nav>
  );
}
