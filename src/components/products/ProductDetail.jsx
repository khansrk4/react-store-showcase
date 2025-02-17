import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import api from "../../services/api";

export const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const { data } = await api.get(`/products/${id}`);
        setProduct(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin h-12 w-12 border-4 border-blue-600 border-t-transparent rounded-full" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 p-4 rounded">
        <p className="text-red-700">Error: {error}</p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <button
        onClick={() => navigate(-1)}
        className="mb-4 flex items-center text-gray-600 hover:text-gray-900"
      >
        <ArrowLeft className="w-5 h-5 mr-2" />
        Back
      </button>

      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="flex items-center justify-center p-4 bg-gray-50 rounded-lg">
            <img
              src={product.image}
              alt={product.title}
              className="max-h-80 object-contain"
            />
          </div>

          <div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              {product.title}
            </h1>

            <div className="mb-4">
              <span className="px-2 py-1 bg-gray-100 rounded text-sm text-gray-600">
                {product.category}
              </span>
            </div>

            <p className="text-gray-600 mb-4">{product.description}</p>

            <div className="text-3xl font-bold text-blue-600">
              ${product.price?.toFixed(2)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
