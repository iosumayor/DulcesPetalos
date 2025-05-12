import { Link } from "react-router-dom";
import styles from "./Breadcrumb.module.scss";
export const Breadcrumb = ({
  isProductDetail,
}: {
  isProductDetail: boolean;
}) => {
  return (
    <div className={styles.breadcrumbContainer}>
      <Link className={styles.breadcrumbLink} to="/">
        Inicio
      </Link>
      {isProductDetail && (
        <>
          <span className={styles.separator}>&gt;</span>
          <span className={styles.currentPage}>Detalle del producto</span>
        </>
      )}
    </div>
  );
};
