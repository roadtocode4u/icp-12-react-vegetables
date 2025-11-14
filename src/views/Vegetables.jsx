import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import VegetableCard from "../components/VegetableCard";
import Navbar from "./../components/Navbar";
import VEGETABLES_DATA from "./../data.json";

function Vegetables() {
  const [refreshCart, setRefreshCart] = useState(false);

  function addToCart(item) {
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];

    const itemIndex = existingCart.findIndex(
      (cartItem) => cartItem.id === item.id
    );

    if (itemIndex !== -1) {
      existingCart[itemIndex] = item;
    } else {
      existingCart.push(item);
    }

    localStorage.setItem("cart", JSON.stringify(existingCart));

    setTimeout(() => {
      setRefreshCart(!refreshCart);
      toast.success("Item added to cart!");
    }, 1000);
  }

  return (
    <div>
      <Navbar refreshCart={refreshCart} />

      <div className="min-h-screen">
        <div className="flex flex-wrap justify-center">
          {VEGETABLES_DATA.map((vegItem) => {
            return (
              <VegetableCard
                key={vegItem.id}
                {...vegItem}
                addToCart={addToCart}
              />
            );
          })}
        </div>
      </div>
      <Toaster position="top-center" />
    </div>
  );
}

export default Vegetables;
