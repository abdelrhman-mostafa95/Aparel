import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Categories from "./categories/Categories";
import Footer from "./Footer/Footer";
import Home from "./Home/Home";
import Navbar from "./Navbar/Navbar";
import About from "./About";
import ProductDetails from "./categories/Productdetails";
import FormRegister from "./Navbar/Register";
import { Provider } from "react-redux";
import { store } from "./store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/productdetails/:id" element={<ProductDetails />} />
          <Route path="/FormRegister" element={<FormRegister />} />
          <Route path="/about" element={<About />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
