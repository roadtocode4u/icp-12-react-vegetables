import Button from "./Button";

const removeFromCart = (id) => {
  const cartItems = JSON.parse(localStorage.getItem("cart")) || [];

  const updatedCartItems = cartItems.filter((item) => item.id !== id);

  localStorage.setItem("cart", JSON.stringify(updatedCartItems));

  window.location.reload();
};

function CartVegetableCard({
  id,
  name,
  image,
  price,
  description,
  unit,
  quantity,
}) {
  return (
    <div className="border border-solid border-slate-500 bg-white m-5 p-4 rounded-md flex items-center">
      <div>
        <img
          src={image}
          alt={name}
          className="w-32 h-28 object-cover rounded-md bg-gray-400"
        />
      </div>
      <div className="w-full">
        <p className="text-2xl ml-2">
          {name}{" "}
          <span className="text-sm">
            (₹{price}/{unit})
          </span>
        </p>
        <p className="text-slate-500 ml-2">{description}</p>
        <p className="text-slate-600 ml-2">
          {quantity} x {price}
        </p>
        <p className="ml-2 text-lg mt-2">₹{quantity * price} /-</p>

        <div className="flex justify-end w-full">
          <Button
            title={"Remove From Cart"}
            size="small"
            variant="danger"
            onClick={() => {
              removeFromCart(id);
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default CartVegetableCard;
