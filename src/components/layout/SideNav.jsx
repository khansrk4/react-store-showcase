import { X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const SideNav = ({ isOpen, onClose }) => {
  const location = useLocation();
  const pathname = location.pathname;

  const menuItems = [
    { name: "Products", href: "/products" },
    { name: "Orders", href: "/orders" },
    { name: "Customers", href: "/customers" },
  ];

  const isActive = (href) => {
    if (href === "/products") {
      return pathname === "/products" || pathname === "/";
    }
    return pathname === href;
  };

  return (
    <div
      className={`fixed left-0 top-16 w-64 h-[calc(100vh-64px)] bg-white border-r transform transition-transform duration-300 ease-in-out ${
        !isOpen ? "-translate-x-full" : "translate-x-0"
      } z-50`}
    >
      <div className="flex items-center justify-between h-14 px-4 border-b">
        <span className="text-xl font-bold">Menu</span>
        <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-md">
          <X size={24} className="text-gray-600" />
        </button>
      </div>

      <nav className="p-4">
        {menuItems.map((item) => (
          <Link
            key={item.name}
            to={item.href}
            className={`block px-4 py-2 mb-1 rounded-md transition-colors ${
              isActive(item.href)
                ? "bg-blue-50 text-blue-600"
                : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            {item.name}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export { SideNav };
