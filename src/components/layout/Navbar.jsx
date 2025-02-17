import { Menu, ShoppingBag } from "lucide-react";

const Navbar = ({ onMenuClick }) => {
  return (
    <nav className="w-full bg-white border-b fixed top-0 left-0 z-50">
      <div className="flex items-center h-16 px-4">
        <button
          onClick={onMenuClick}
          className="p-2 hover:bg-gray-100 rounded-md"
        >
          <Menu size={24} className="text-gray-600" />
        </button>
        <div className="flex items-center">
          <ShoppingBag className="h-6 w-6 text-blue-600" />
          <span className="ml-2 text-xl font-bold">Store</span>
        </div>
      </div>
    </nav>
  );
};

export { Navbar };
