import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div className="w-full text-center py-16">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">404</h1>
      <p className="text-xl text-gray-600 mb-8">Page not found</p>
      <Link to="/" className="text-blue-600 hover:text-blue-800 underline">
        Return to Products
      </Link>
    </div>
  );
};
