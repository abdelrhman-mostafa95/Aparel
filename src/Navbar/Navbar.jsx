import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import "./Navbar.css";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  const quantity = useSelector((state) => state.cart.quantity);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        isScrolled ? "bg-white shadow-md " : "bg-transparent "
      }`}
    >
      <div className="container mx-auto flex justify-between items-center py-4 px-8">
    
        <div className="ml-4">
          <img src="logo.png" alt="Logo" className="h-10" />
        </div>

        <div className="flex gap-10 items-center">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/categories">Categories</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink
            to="/cart"
            className="relative p-2 rounded-full border border-gray-400 hover:bg-black hover:text-white transition duration-300"
          >
            <FaShoppingCart className="text-lg" />
            {quantity > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full">
                {quantity}
              </span>
            )}
          </NavLink>
        </div>
        <div className="mr-4">
          <NavLink
            to={`/FormRegister`}
            className="px-4 py-2 rounded-full border border-gray-400 hover:bg-black hover:text-white transition duration-300"
          >
            Account
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
