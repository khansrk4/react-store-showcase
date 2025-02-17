import { ProductList } from "../components/products/ProductList";
import { useProducts } from "../hooks/useProducts";

export const Products = () => {
  const { products, loading, error } = useProducts();

  return (
    <div className="w-full">
      <h1 className="text-2xl font-bold mb-6">Products</h1>
      <ProductList products={products} loading={loading} error={error} />
    </div>
  );
};
