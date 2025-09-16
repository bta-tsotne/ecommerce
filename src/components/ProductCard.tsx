import { type Product } from "../features/products/productSlice";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { addToCart } from "../features/cart/cartSlice";

export default function ProductCard({ product }: { product: Product }) {
  const dispatch = useAppDispatch();

  return (
    <div className="border border-gray-300 p-8 rounded-lg shadow flex flex-col justify-between">
      <img
        src={product.image}
        alt={product.title}
        className="h-40 object-contain mx-auto mb-2.5"
      />
      <div className="desc-data">
        <h2 className="text-lg font-semibold">{product.title}</h2>
        <p className="text-gray-700">${product.price}</p>
        <button
          className="mt-2 bg-emerald-300 text-white px-4 py-2 rounded hover:bg-blue-700"
          onClick={() =>
            dispatch(
              addToCart({
                id: product.id.toString(),
                name: product.title,
                price: product.price,
                quantity: 1,
              })
            )
          }
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
