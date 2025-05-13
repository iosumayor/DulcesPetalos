import { useNavigate } from "react-router-dom";
import {
  type Product,
  getFormattedPrice,
} from "../../../../../core/domain/models/Products";
import styles from "./Item.module.scss";
import { getProductDetailRoute } from "../../../../../core/constants/routeConstants";
export const Item = ({ product }: { product: Product }) => {
  const navigate = useNavigate();
  return (
    <li
      onClick={() => {
        navigate(getProductDetailRoute(product.id));
      }}
    >
      <div className={styles.item}>
        <img
          className={styles.itemImage}
          src={product.imgUrl}
          alt={product.name}
        />
        <h3>{product.name}</h3>
        <p>{getFormattedPrice(product)}</p>
      </div>
    </li>
  );
};
