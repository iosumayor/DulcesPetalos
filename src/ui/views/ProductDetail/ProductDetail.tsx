import { useProductDetail } from "./hooks/useProductDetail";
import { ProductItem } from "./_components/ProductItem/ProductItem";
import { Layout } from "../../layouts/Layout";
import { Text } from "../../_components/Text/Text";
import { useLanguageContext } from "../../../core/contexts/LanguageContext/Hooks/useLanguageContext";
export const ProductDetail = () => {
  const { product, isLoading, isError } = useProductDetail();
  const { translate } = useLanguageContext();
  return (
    <Layout>
      {isLoading ? (
        <Text>{translate("loading")}</Text>
      ) : isError ? (
        <Text>{translate("error")}</Text>
      ) : (
        <ProductItem product={product} />
      )}
    </Layout>
  );
};
