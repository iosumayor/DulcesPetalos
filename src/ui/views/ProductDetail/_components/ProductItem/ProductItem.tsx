import type { Product } from "../../../../../core/domain/models/Products";
import styles from "./ProductItem.module.scss";
export const ProductItem = ({ product }: { product: Product | undefined }) => {
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
        <p>Precio: {product?.price.toFixed(2)}€</p>
        <p>Nombre científico: {product?.binomialName}</p>
        <p>Riegos por semana: {product?.wateringsPerWeek}</p>
        <p>
          Tipo de fertilizante:{" "}
          {product?.fertilizerType === "nitrogen" ? "Nitrogenado" : "Fosforado"}
        </p>
        <p>Altura: {product?.heightInCm} cm</p>
      </div>
    </div>
  );
};
