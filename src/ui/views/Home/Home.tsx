import styles from "./Home.module.scss";
import { useHome } from "./hooks/useHome";
import { Item } from "./_components/Item/Item";
import { ROUTES } from "../../../core/constants/routeConstants";
import { Link } from "react-router-dom";
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
        <>
          <div className={styles.loginHomeWrapper}>
            <Text variant="headingH3" as="h3">
              ¿Aun no te has logueado?
            </Text>
            <Link className={styles.linkTextLogin} to={ROUTES.LOGIN}>
              Click aquí para loguearte
            </Link>
          </div>
          <ul className={styles.list}>
            {filteredProducts?.map((product: Product) => (
              <Item key={product.id} product={product} />
            ))}
          </ul>
        </>
      )}
    </Layout>
  );
};
