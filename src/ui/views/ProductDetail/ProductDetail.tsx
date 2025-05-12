import { Header } from "../_components/Header/Header";
import styles from "./ProductDetail.module.scss";
import { useProductDetail } from "./hooks/useProductDetail";
import { ProductItem } from "./_components/ProductItem/ProductItem";
import { BackButton } from "./_components/BackButton/BackButton";
export const ProductDetail = () => {
  const { product, isLoading } = useProductDetail();
  return (
    <div className={styles.container}>
      <Header />
      <BackButton />
      {isLoading ? (
        <p>Cargando producto...</p>
      ) : (
        <ProductItem product={product} />
      )}
    </div>
  );
};
