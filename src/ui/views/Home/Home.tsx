import styles from "./Home.module.scss";
import { useHome } from "./hooks/useHome";
import { Item } from "./_components/Item/Item";
import type { Product } from "../../../core/domain/models/Products";
import { useLanguageContext } from "../../../core/contexts/LanguageContext/Hooks/useLanguageContext";
import { Layout } from "../../layouts/Layout";

export const Home = () => {
  const { isLoading, filteredProducts, isError } = useHome();
  const { translate } = useLanguageContext();
  return (
    <Layout>
      {isLoading ? (
        <p>{translate("loading")}</p>
      ) : isError ? (
        <p>{translate("error")}</p>
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
