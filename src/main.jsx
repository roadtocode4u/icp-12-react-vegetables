import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import "./index.css";
import Home from "./views/Home";
import Vegetables from "./views/Vegetables";

const root = createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/vegetables" element={<Vegetables />} />
    </Routes>
  </BrowserRouter>
);
