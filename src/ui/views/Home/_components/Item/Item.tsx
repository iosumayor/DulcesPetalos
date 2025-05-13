import { useNavigate } from "react-router-dom";
import {
  type Product,
  getFormattedPrice,
} from "../../../../../core/domain/models/Products";
import styles from "./Item.module.scss";
import { getProductDetailRoute } from "../../../../../core/constants/routeConstants";
import { memo, useCallback } from "react";
export const Item = ({ product }: { product: Product }) => {
  const navigate = useNavigate();
  const handleItemClick = useCallback(() => {
    navigate(getProductDetailRoute(product.id));
  }, [navigate, product.id]);
  return (
    <li onClick={handleItemClick}>
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

export const ItemComponent = memo(Item);
