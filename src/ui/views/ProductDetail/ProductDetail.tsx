import { useProductDetail } from "./hooks/useProductDetail";
import { ProductItem } from "./_components/ProductItem/ProductItem";
import { Layout } from "../../layouts/Layout";
import { useLanguageContext } from "../../../core/contexts/LanguageContext/Hooks/useLanguageContext";
export const ProductDetail = () => {
  const { product, isLoading, isError } = useProductDetail();
  const { translate } = useLanguageContext();
  return (
    <Layout>
      {isLoading ? (
        <p>{translate("loading")}</p>
      ) : isError ? (
        <p>{translate("error")}</p>
      ) : (
        <ProductItem product={product} />
      )}
    </Layout>
  );
};
