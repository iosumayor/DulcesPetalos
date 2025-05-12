import styles from "./Home.module.scss";
import { Header } from "../_components/Header/Header";
import { SearchBar } from "./_components/SearchBar/SearchBar";
import { useHome } from "./hooks/useHome";
import { Item } from "./_components/Item/Item";
import type { Product } from "../../../core/domain/models/Products";

export const Home = () => {
  const { isLoading, filteredProducts, search, setSearch } = useHome();
  return (
    <div className={styles.container}>
      <Header />
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
    </div>
  );
};
