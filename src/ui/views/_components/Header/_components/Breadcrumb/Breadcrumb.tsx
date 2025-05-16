import { Link } from "react-router-dom";
import styles from "./Breadcrumb.module.scss";
import { useLanguageContext } from "../../../../../../core/contexts/LanguageContext/Hooks/useLanguageContext";
import { ROUTES } from "../../../../../../core/constants/routeConstants";
import { Text } from "../../../../../_components/Text/Text";
export const Breadcrumb = ({
  isProductDetail,
}: {
  isProductDetail: boolean;
}) => {
  const { translate } = useLanguageContext();
  return (
    <div className={styles.breadcrumbContainer}>
      <Link className={styles.breadcrumbLink} to={ROUTES.HOME}>
        {translate("home")}
      </Link>
      {isProductDetail && (
        <>
          <Text as="span" className={styles.separator}>
            &gt;
          </Text>
          <Text as="span">{translate("productDetail")}</Text>
        </>
      )}
    </div>
  );
};
