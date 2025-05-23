import { Link, useNavigate } from "react-router-dom";
import {
  type Product,
  getFormattedPrice,
} from "../../../../../core/domain/models/Products";
import styles from "./Item.module.scss";
import { getProductDetailRoute } from "../../../../../core/constants/routeConstants";
import { useCallback } from "react";
import { Text } from "../../../../_components/Text/Text";
export const Item = ({ product }: { product: Product }) => {
  const navigate = useNavigate();
  useCallback(() => {
    navigate(getProductDetailRoute(product.id));
  }, [navigate, product.id]);
  return (
    <li>
      <Link to={getProductDetailRoute(product.id)} className={styles.item}>
        <img
          className={styles.itemImage}
          src={product.imgUrl}
          alt={product.name}
        />
        <Text as="h3" variant="headingH3">
          {product.name}
        </Text>
        <Text>{getFormattedPrice(product)}</Text>
      </Link>
    </li>
  );
};
