import { useSelector, useDispatch } from "react-redux";
import { updateQuantity } from "../Slice";

function Cart() {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  if (items.length === 0) {
    return (
      <p className="text-center mt-20 text-gray-600">Your cart is empty 🛒</p>
    );
  }

  return (
    <div className="max-w-4xl mx-auto mt-20 p-6 bg-white rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
      <ul className="space-y-4">
        {items.map((item) => (
          <li
            key={item.id}
            className="flex items-center justify-between border-b pb-4"
          >
            <div className="flex items-center gap-4">
              <img
                src={item.thumbnail}
                alt={item.title}
                className="h-16 w-16 object-contain"
              />
              <div>
                <h3 className="font-semibold">{item.title}</h3>
                <p className="text-gray-600 text-sm">${item.price}</p>
                <div className="flex items-center gap-2 mt-2">
                  <button
                    onClick={() =>
                      dispatch(
                        updateQuantity({ id: item.id, type: "decrement" })
                      )
                    }
                    className="px-2 py-1 bg-gray-200 rounded"
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() =>
                      dispatch(
                        updateQuantity({ id: item.id, type: "increment" })
                      )
                    }
                    className="px-2 py-1 bg-gray-200 rounded"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
            <span className="font-bold">
              ${(item.price * item.quantity).toFixed(2)}
            </span>
          </li>
        ))}
      </ul>
      <div className="text-right font-bold text-lg mt-6">
        Total: $
        {items
          .reduce((acc, item) => acc + item.price * item.quantity, 0)
          .toFixed(2)}
      </div>
    </div>
  );
}

export default Cart;
