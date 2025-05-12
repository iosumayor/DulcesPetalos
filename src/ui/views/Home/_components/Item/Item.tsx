import { useNavigate } from "react-router-dom";
import type { Product } from "../../../../../core/domain/models/Products";
import styles from "./Item.module.scss";
export const Item = ({ product }: { product: Product }) => {
  const navigate = useNavigate();
  return (
    <li
      onClick={() => {
        navigate(`/item/${product.id}`);
      }}
    >
      <div className={styles.item}>
        <img
          className={styles.itemImage}
          src={product.imgUrl}
          alt={product.name}
        />
        <h3>{product.name}</h3>
        <p>{product.price.toFixed(2)}€</p>
      </div>
    </li>
  );
};
