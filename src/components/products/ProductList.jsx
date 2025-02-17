import { useState } from "react";
import { ProductCard } from "./ProductCard";
import { TableIcon, GridIcon } from "lucide-react";
import { useNavigate } from "react-router";

const ProductList = ({ products, loading, error }) => {
  const navigate = useNavigate();
  const [viewType, setViewType] = useState("grid"); // 'grid' or 'table'

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-600 border-t-transparent"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 p-4 rounded-md">
        <p className="text-red-700">Error loading products: {error}</p>
      </div>
    );
  }

  // View Toggle Buttons
  const ViewToggle = () => (
    <div className="mb-4 flex justify-end">
      <div className="inline-flex rounded-lg border border-gray-200">
        <button
          onClick={() => setViewType("grid")}
          className={`px-4 py-2 rounded-l-lg ${
            viewType === "grid"
              ? "bg-blue-50 text-blue-600"
              : "text-gray-600 hover:bg-gray-50"
          }`}
        >
          <GridIcon className="w-5 h-5" />
        </button>
        <button
          onClick={() => setViewType("table")}
          className={`px-4 py-2 rounded-r-lg ${
            viewType === "table"
              ? "bg-blue-50 text-blue-600"
              : "text-gray-600 hover:bg-gray-50"
          }`}
        >
          <TableIcon className="w-5 h-5" />
        </button>
      </div>
    </div>
  );

  // Table View
  if (viewType === "table") {
    return (
      <div>
        <ViewToggle />
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded-lg shadow">
            <thead>
              <tr className="bg-gray-50 border-b">
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Product
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Category
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Price
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {products.map((product) => (
                <tr
                  key={product.id}
                  onClick={() => navigate(`/product/${product.id}`)}
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <img
                        className="h-10 w-10 object-contain"
                        src={product.image}
                        alt=""
                      />
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">
                          {product.title}
                        </div>
                        <div className="text-sm text-gray-500 truncate max-w-md">
                          {product.description}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 py-1 text-sm bg-gray-100 rounded-full text-gray-600 capitalize">
                      {product.category}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-600">
                    ${product.price?.toFixed(2)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }

  // Grid View (Card Format)
  return (
    <div>
      <ViewToggle />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export { ProductList };
