import { useProductDetail } from "./hooks/useProductDetail";
import { ProductItem } from "./_components/ProductItem/ProductItem";
import { Layout } from "../../layouts/Layout";
export const ProductDetail = () => {
  const { product, isLoading } = useProductDetail();
  return (
    <Layout>
      {isLoading ? (
        <p>Cargando producto...</p>
      ) : (
        <ProductItem product={product} />
      )}
    </Layout>
  );
};
