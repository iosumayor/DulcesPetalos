import { useProductDetail } from "./hooks/useProductDetail";
import { ProductItem } from "./_components/ProductItem/ProductItem";
import { BackButton } from "./_components/BackButton/BackButton";
import { Layout } from "../../layouts/Layout";
export const ProductDetail = () => {
  const { product, isLoading } = useProductDetail();
  return (
    <Layout>
      <BackButton />
      {isLoading ? (
        <p>Cargando producto...</p>
      ) : (
        <ProductItem product={product} />
      )}
    </Layout>
  );
};
