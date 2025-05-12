import { Link } from "react-router-dom";
import styles from "./Breadcrumb.module.scss";
import { useLanguageContext } from "../../../../../../core/contexts/LanguageContext/Hooks/useLanguageContext";
export const Breadcrumb = ({
  isProductDetail,
}: {
  isProductDetail: boolean;
}) => {
  const { translate } = useLanguageContext();
  return (
    <div className={styles.breadcrumbContainer}>
      <Link className={styles.breadcrumbLink} to="/">
        {translate("home")}
      </Link>
      {isProductDetail && (
        <>
          <span className={styles.separator}>&gt;</span>
          <span className={styles.currentPage}>
            {translate("productDetail")}
          </span>
        </>
      )}
    </div>
  );
};
