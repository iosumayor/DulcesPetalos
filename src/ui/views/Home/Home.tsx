import styles from "./Home.module.scss";
import { SearchBar } from "./_components/SearchBar/SearchBar";
import { useHome } from "./hooks/useHome";
import { Item } from "./_components/Item/Item";
import type { Product } from "../../../core/domain/models/Products";
import { Layout } from "../../layouts/Layout";

export const Home = () => {
  const { isLoading, filteredProducts, search, setSearch } = useHome();
  return (
    <Layout>
      <SearchBar search={search} setSearch={setSearch} />
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
