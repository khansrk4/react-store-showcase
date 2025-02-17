import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/product/${product.id}`)}
      className="bg-white rounded shadow hover:shadow-md"
    >
      <div className="relative pt-[100%]">
        <img
          src={product.image}
          alt={product.title}
          className="absolute inset-0 w-full h-full p-4 object-contain"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-medium truncate">{product.title}</h3>
        <p className="mt-1 text-sm text-gray-500 line-clamp-2">
          {product.description}
        </p>
        <div className="mt-3 flex justify-between items-center">
          <span className="text-lg font-bold text-blue-600">
            ${product.price?.toFixed(2)}
          </span>
          <span className="px-2 py-1 text-sm bg-gray-100 rounded">
            {product.category}
          </span>
        </div>
      </div>
    </div>
  );
};

export { ProductCard };
