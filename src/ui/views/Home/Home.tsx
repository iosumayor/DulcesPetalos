import styles from "./Home.module.scss";
import { useHome } from "./hooks/useHome";
import { Item } from "./_components/Item/Item";
import type { Product } from "../../../core/domain/models/Products";
import { Layout } from "../../layouts/Layout";

export const Home = () => {
  const { isLoading, filteredProducts } = useHome();
  return (
    <Layout>
      {isLoading ? (
        <p>Cargando productos...</p>
      ) : (
        <ul className={styles.list}>
          {filteredProducts?.map((product: Product) => (
            <Item key={product.id} product={product} />
          ))}
        </ul>
      )}
    </Layout>
  );
};
