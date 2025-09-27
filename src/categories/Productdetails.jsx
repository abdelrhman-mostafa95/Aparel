import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom"; // 👈 استورد useNavigate
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, addToCart } from "../Slice";

function ProductDetails() {
  const { id } = useParams();
  const [data, setData] = useState(null);

  const dispatch = useDispatch();
  const navigate = useNavigate(); // 👈 جهزنا الـ navigate
  const quantity = useSelector((state) => state.cart.quantity);

  async function getData() {
    const response = await fetch(`https://dummyjson.com/products/${id}`);
    const product = await response.json();
    setData(product);
  }

  useEffect(() => {
    getData();
  }, [id]);

  if (!data) {
    return <p className="text-center mt-20 text-gray-600">Loading...</p>;
  }

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden p-6 mt-20">
      <div className="flex justify-center bg-gray-50 rounded-xl mb-6">
        <img
          src={data.thumbnail}
          alt={data.title}
          className="h-72 w-full object-contain p-6"
        />
      </div>

      <p className="text-xs uppercase tracking-wide text-gray-500 font-semibold mb-2">
        {data.category}
      </p>

      <h3 className="text-2xl font-bold text-gray-800 mb-3">{data.title}</h3>

      <p className="text-gray-600 text-sm leading-relaxed mb-4">
        {data.description}
      </p>

      <div className="flex items-center justify-between mt-6">
        <span className="text-2xl font-bold text-black">${data.price}</span>
        <span className="text-yellow-500">⭐ {data.rating}</span>
      </div>
      <div className="flex items-center gap-4 mt-6">
        <button
          onClick={() => dispatch(decrement())}
          className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition"
        >
          -
        </button>
        <span className="text-lg font-semibold">{quantity}</span>
        <button
          onClick={() => dispatch(increment())}
          className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-900 transition"
        >
          +
        </button>
      </div>

      <button
        onClick={() => {
          dispatch(addToCart({ ...data, quantity }));
          navigate("/cart"); 
        }}
        className="mt-6 w-full px-5 py-2 bg-yellow-400 text-gray-900 font-semibold rounded-lg hover:bg-yellow-300 transition"
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductDetails;
