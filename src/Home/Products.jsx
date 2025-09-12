import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

function Products() {
  let [Data, setData] = useState([]);

  async function getData() {
    const response = await fetch(
      "https://fakestoreapi.com/products/category/men's clothing"
    );
    const data = await response.json();
    setData(data);
  }
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
      {Data.map((product) => {
        return (
          <div
            key={product.id}
            className="mx-10 my-10 flex flex-col items-center text-center group 
             bg-white shadow-md hover:shadow-lg rounded-lg transition-shadow duration-300"
          >
            <div className="relative w-full bg-gray-100 flex items-center justify-center overflow-hidden rounded-t-lg">
              <span className="absolute top-3 left-3 bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded">
                NEW
              </span>

              <img
                src={product.image}
                alt={product.title}
                className="h-100 object-contain p-6 transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="mt-4 space-y-1 px-4 pb-4">
              <h3 className="text-base font-medium text-gray-700 hover:text-indigo-600 transition line-clamp-1">
                {product.title}
              </h3>
              <div className="flex justify-center items-center gap-2">
                <span className="text-gray-400 line-through text-sm">
                  ${Math.round(product.price * 1.3)}
                </span>
                <span className="text-gray-900 font-semibold">
                  ${product.price}
                </span>
              </div>
            </div>
            <NavLink
              to={`/productdetails/${product.id}`}
              className="mb-4 text-sm font-medium text-indigo-600 hover:underline"
            >
              View Details
            </NavLink>
          </div>
        );
      })}
    </div>
  );
}

export default Products;
