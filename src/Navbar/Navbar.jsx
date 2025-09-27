import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import { useSelector } from "react-redux";
import "./Navbar.css";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const cartCount = useSelector((state) =>
    state.cart.items.reduce((acc, item) => acc + item.quantity, 0)
  );

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
      <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-8">
        {/* Logo */}
        <div className="ml-2 md:ml-4">
          <img src="logo.png" alt="Logo" className="h-10" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-10 items-center">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/categories">Categories</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink
            to="/cart"
            className="relative p-2 rounded-full border border-gray-400 hover:bg-black hover:text-white transition duration-300"
          >
            <FaShoppingCart className="text-lg" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full">
                {cartCount}
              </span>
            )}
          </NavLink>
        </div>

        {/* Account button (desktop) */}
        <div className="hidden md:block mr-2 md:mr-4">
          <NavLink
            to={`/FormRegister`}
            className="px-4 py-2 rounded-full border border-gray-400 hover:bg-black hover:text-white transition duration-300"
          >
            Account
          </NavLink>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md absolute top-full left-0 w-full p-6 flex flex-col gap-4">
          <NavLink to="/" onClick={() => setIsOpen(false)}>
            Home
          </NavLink>
          <NavLink to="/categories" onClick={() => setIsOpen(false)}>
            Categories
          </NavLink>
          <NavLink to="/about" onClick={() => setIsOpen(false)}>
            About
          </NavLink>
          <NavLink
            to="/cart"
            onClick={() => setIsOpen(false)}
            className="relative p-2 rounded-full border border-gray-400 w-fit hover:bg-black hover:text-white transition duration-300"
          >
            <FaShoppingCart className="text-lg" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full">
                {cartCount}
              </span>
            )}
          </NavLink>
          <NavLink
            to={`/FormRegister`}
            onClick={() => setIsOpen(false)}
            className="px-4 py-2 rounded-full border border-gray-400 w-fit hover:bg-black hover:text-white transition duration-300"
          >
            Account
          </NavLink>
        </div>
      )}
    </div>
  );
}

export default Navbar;
