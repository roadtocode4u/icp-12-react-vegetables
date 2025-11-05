import { Salad as SaladIcon } from "lucide-react";

function Navbar() {
  return (
    <div className="bg-[#FFBC4C] sticky top-2 max-w-10/12 mx-auto px-10 py-2 rounded-full flex items-center my-2">
      <SaladIcon className="mr-2" size={60} strokeWidth={1} />
      <h2 className="text-2xl font-bold">RTC Vegetables</h2>
    </div>
  );
}

export default Navbar;
