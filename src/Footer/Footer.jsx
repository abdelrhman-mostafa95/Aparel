import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-lg font-semibold mb-4">Help</h3>
          <ul className="space-y-2 text-gray-600">
            <li>
              <a href="#">Contact us</a>
            </li>
            <li>
              <a href="#">Account</a>
            </li>
            <li>
              <a href="#">Shipping</a>
            </li>
            <li>
              <a href="#">Returns</a>
            </li>
            <li>
              <a href="#">FAQ</a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">About</h3>
          <ul className="space-y-2 text-gray-600">
            <li>
              <a href="#">About us</a>
            </li>
            <li>
              <a href="#">Press</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Team</a>
            </li>
            <li>
              <a href="#">FAQ</a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Shop</h3>
          <ul className="space-y-2 text-gray-600">
            <li>
              <a href="#">Store</a>
            </li>
            <li>
              <a href="#">Gift Cards</a>
            </li>
            <li>
              <a href="#">Student Discount</a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">
            Join our list and receive exclusives
          </h3>
          <div className="flex">
            <input
              type="email"
              placeholder="Email address"
              className="w-full px-4 py-2 border border-gray-300 focus:outline-none"
            />
            <button className="px-6 py-2 bg-black text-white font-medium">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>
      <div className=" py-6 text-center text-gray-500 text-sm">
        Copyright ©2025 All rights reserved | This template is made with
        <a href="https://colorlib.com" className="text-blue-600">
          {" "}
          Abdelrahman Mostafa
        </a>
      </div>
    </footer>
  );
}
export default Footer;
