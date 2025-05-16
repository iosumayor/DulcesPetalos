import {
  getFormattedPrice,
  getFormattedHeight,
  type Product,
} from "../../../../../core/domain/models/Products";
import styles from "./ProductItem.module.scss";
import { useLanguageContext } from "../../../../../core/contexts/LanguageContext/Hooks/useLanguageContext";
import { useMemo } from "react";
import { Text } from "../../../../_components/Text/Text";

export const ProductItem = ({ product }: { product: Product | undefined }) => {
  const { translate } = useLanguageContext();

  const productDetails = useMemo(() => {
    if (!product) {
      return {
        name: "",
        formattedPrice: "",
        binomialName: "",
        wateringsPerWeek: 0,
        fertilizerType: "",
        heightInCm: 0,
      };
    }
    return {
      name: product?.name,
      price: getFormattedPrice(product ?? ({} as Product)),
      binomialName: product?.binomialName,
      wateringsPerWeek: product?.wateringsPerWeek,
      fertilizerType:
        product?.fertilizerType === "nitrogen"
          ? translate("nitrogen")
          : translate("phosphorus"),
      heightInCm: getFormattedHeight(product),
    };
  }, [product, translate]);

  return (
    <div className={styles.productContainer}>
      <div className={styles.imageContainer}>
        <img
          className={styles.itemImage}
          src={product?.imgUrl}
          alt={product?.name}
        />
      </div>
      <div className={styles.productInfo}>
        <Text as="h1" variant="headingH1">
          {product?.name}
        </Text>
        <Text>
          {translate("price")}: {productDetails.price}
        </Text>
        <Text>
          {translate("binomialName")}: {productDetails?.binomialName}
        </Text>
        <Text>
          {translate("wateringsPerWeek")}: {productDetails?.wateringsPerWeek}
        </Text>
        <Text>
          {translate("fertilizerType")}:{productDetails?.fertilizerType}
        </Text>
        <Text>
          {translate("height")}: {productDetails.heightInCm}
        </Text>
      </div>
    </div>
  );
};
