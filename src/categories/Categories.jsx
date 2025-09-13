import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom"; 

function Categories() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  
  async function getCategories() {
    const res = await fetch("https://dummyjson.com/products/categories");
    const data = await res.json();
    setCategories(data);
  }

  async function getProducts(category = "") {
    const url = category
      ? `https://dummyjson.com/products/category/${category}`
      : "https://dummyjson.com/products";
    const res = await fetch(url);
    const data = await res.json();
    setProducts(data.products);
  }

  useEffect(() => {
    getCategories();
    getProducts(); 
  }, []);

  
  function handleCategoryClick(categorySlug) {
    setSelectedCategory(categorySlug);
    getProducts(categorySlug);
  }

  return (
    <div className="flex bg-gray-50 min-h-screen mt-20">
     
      <aside className="w-64 bg-white shadow-md p-6 border-r hidden md:block">
        <h2 className="text-xl font-bold mb-6 text-black">Categories</h2>
        <ul className="space-y-3">
          <li
            key="all"
            className={`cursor-pointer px-3 py-2 rounded-md transition ${
              selectedCategory === ""
                ? "bg-black text-white font-semibold"
                : "hover:bg-gray-200 text-gray-800"
            }`}
            onClick={() => handleCategoryClick("")}
          >
            All
          </li>
          {categories.map((cat) => (
            <li
              key={typeof cat === "string" ? cat : cat.slug}
              className={`cursor-pointer px-3 py-2 rounded-md transition ${
                selectedCategory === (typeof cat === "string" ? cat : cat.slug)
                  ? "bg-black text-white font-semibold"
                  : "hover:bg-gray-200 text-gray-800"
              }`}
              onClick={() =>
                handleCategoryClick(typeof cat === "string" ? cat : cat.slug)
              }
            >
              {typeof cat === "string" ? cat : cat.name}
            </li>
          ))}
        </ul>
      </aside>

      
      <main className="flex-1 p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition p-5 flex flex-col h-[350px]"
          >
          
            <div className="relative w-full h-40 flex items-center justify-center">
              <img
                src={product.thumbnail}
                alt={product.title}
                className="max-h-full object-contain transition-transform duration-300 hover:scale-105"
              />
              <span className="absolute top-3 left-3 bg-black text-white text-xs px-2 py-1 rounded-md shadow">
                {product.discountPercentage > 0
                  ? `-${Math.round(product.discountPercentage)}%`
                  : "NEW"}
              </span>
            </div>

           
            <div className="mt-4 flex flex-col flex-1">
              <h3 className="text-base font-semibold text-gray-900 line-clamp-1">
                {product.title}
              </h3>
              <p className="text-gray-500 text-sm mb-3 line-clamp-1">
                {product.brand}
              </p>

              <div className="flex justify-between items-center mt-auto">
                <span className="font-bold text-black">${product.price}</span>
                <span className="text-yellow-500 text-sm">
                  ⭐ {product.rating}
                </span>
              </div>
            </div>

            <NavLink
              to={`/productdetails/${product.id}`}
              className="mt-3 text-sm font-medium text-indigo-600 hover:underline"
            >
              View Details
            </NavLink>
          </div>
        ))}
      </main>
    </div>
  );
}

export default Categories;
