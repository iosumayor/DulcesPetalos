import styles from "./Home.module.scss";
import { useHome } from "./hooks/useHome";
import { Item } from "./_components/Item/Item";
import { Text } from "../../_components/Text/Text";
import type { Product } from "../../../core/domain/models/Products";
import { useLanguageContext } from "../../../core/contexts/LanguageContext/Hooks/useLanguageContext";
import { Layout } from "../../layouts/Layout";

export const Home = () => {
  const { isLoading, filteredProducts, isError } = useHome();
  const { translate } = useLanguageContext();
  return (
    <Layout>
      {isLoading ? (
        <Text>{translate("loading")}</Text>
      ) : isError ? (
        <Text>{translate("error")}</Text>
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
