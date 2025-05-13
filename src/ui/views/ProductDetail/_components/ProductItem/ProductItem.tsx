import {
  getFormattedPrice,
  type Product,
} from "../../../../../core/domain/models/Products";
import styles from "./ProductItem.module.scss";
import { useLanguageContext } from "../../../../../core/contexts/LanguageContext/Hooks/useLanguageContext";
import { memo, useMemo } from "react";

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
      heightInCm: product?.heightInCm,
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
        <h1>{product?.name}</h1>
        <p>
          {translate("price")}: {productDetails.price}
        </p>
        <p>
          {translate("binomialName")}: {productDetails?.binomialName}
        </p>
        <p>
          {translate("wateringsPerWeek")}: {productDetails?.wateringsPerWeek}
        </p>
        <p>
          {translate("fertilizerType")}:{productDetails?.fertilizerType}
        </p>
        <p>
          {translate("height")}: {productDetails?.heightInCm} cm
        </p>
      </div>
    </div>
  );
};

export const ProductItemComponent = memo(ProductItem);
