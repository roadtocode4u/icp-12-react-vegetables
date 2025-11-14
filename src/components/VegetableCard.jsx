import { CircleMinus, CirclePlus } from "lucide-react";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import Button from "./Button";

function VegetableCard({
  id,
  name,
  image,
  price,
  description,
  unit,
  category,
  tags,
  addToCart,
}) {
  const [quantity, setQuantity] = useState(1);

  return (
    <div
      className="border border-solid border-slate-500 bg-white m-5 p-4 w-90 rounded-md"
      key={id}
    >
      <div className="relative">
        <img
          src={image}
          alt={name}
          className="w-full h-48 object-cover rounded-md"
        />
        <span className="absolute top-2 right-2 text-white text-lg">
          {category}
        </span>
      </div>
      <h3>{name}</h3>
      <p className="text-slate-500">{description}</p>
      <p className="my-2 text-slate-600">
        <span className="text-xl font-bold text-slate-800">₹{price}</span> per{" "}
        {unit}
      </p>
      <p>{tags.join(", ")}</p>

      <div className="flex justify-center items-center my-4 gap-4">
        <CircleMinus
          className="cursor-pointer"
          onClick={() => {
            if (quantity > 1) {
              setQuantity(quantity - 1);
            } else {
              toast.error("Quantity cannot be less than 1");
            }
          }}
        />
        <label className="text-2xl">{quantity}</label>
        <CirclePlus
          className="cursor-pointer"
          onClick={() => {
            if (quantity < 10) {
              setQuantity(quantity + 1);
            } else {
              toast.error("Quantity cannot be more than 10");
            }
          }}
        />
      </div>

      <div className="flex justify-center">
        <Button
          title={"Add To Cart"}
          onClick={() => {
            addToCart({
              id,
              name,
              image,
              price,
              description,
              unit,
              category,
              tags,
              addToCart,
              quantity,
              totalAmount: price * quantity,
            });
          }}
        />
      </div>

      <Toaster />
    </div>
  );
}

export default VegetableCard;
