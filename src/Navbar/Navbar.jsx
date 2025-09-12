import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

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
          <img src="Group 1453.png" alt="Logo" className="h-10" />
        </div>
        <div className="flex gap-10">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/categories">Categories</NavLink>
          <NavLink to="/about">About</NavLink>
        </div>
        <div className="mr-4">
          <NavLink className="px-4 py-2 rounded-full border border-gray-400 hover:bg-black hover:text-white transition duration-300">
            Account
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
