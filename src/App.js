import "./App.css";
import Header from "../src/component/layout/Header";
import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import AboutUs from "./component/AboutUs";
import Product from "./component/Product";
import ProductDetail from "./component/ProductDetail";
import Cart from "./component/Cart";
import Contact from "./component/Contact";

function App() {
  return (
    <div className="App">
      <div class="container-fluid wrap-tag">
        <Header />

        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<AboutUs />} path="/about-us" />
          <Route element={<Product />} path="product" />
          <Route element={<Cart />} path="cart" />
          <Route element={<Contact />} path="contact" />
          <Route element={<ProductDetail />} path="/product-detail/:id" />
        </Routes>
      </div>
    </div>
  );
}

export default App;
