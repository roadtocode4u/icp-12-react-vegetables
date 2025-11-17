import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import "./index.css";
import Home from "./views/Home";
import MyCart from "./views/MyCart";
import Vegetables from "./views/Vegetables";

const root = createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/vegetables" element={<Vegetables />} />
      <Route path="/my-cart" element={<MyCart />} />
    </Routes>
  </BrowserRouter>
);
