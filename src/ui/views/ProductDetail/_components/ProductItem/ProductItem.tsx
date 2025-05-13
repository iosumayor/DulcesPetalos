import {
  getFormattedPrice,
  type Product,
} from "../../../../../core/domain/models/Products";
import styles from "./ProductItem.module.scss";
import { useLanguageContext } from "../../../../../core/contexts/LanguageContext/Hooks/useLanguageContext";
export const ProductItem = ({ product }: { product: Product | undefined }) => {
  const { translate } = useLanguageContext();
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
          {translate("price")}: {getFormattedPrice(product ?? ({} as Product))}
        </p>
        <p>
          {translate("binomialName")}: {product?.binomialName}
        </p>
        <p>
          {translate("wateringsPerWeek")}: {product?.wateringsPerWeek}
        </p>
        <p>
          {translate("fertilizerType")}:{" "}
          {product?.fertilizerType === "nitrogen"
            ? translate("nitrogen")
            : translate("phosphorus")}
        </p>
        <p>
          {translate("height")}: {product?.heightInCm} cm
        </p>
      </div>
    </div>
  );
};
