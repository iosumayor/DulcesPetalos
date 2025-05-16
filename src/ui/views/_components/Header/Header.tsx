import { useLocation } from "react-router-dom";
import styles from "./Header.module.scss";
import { Breadcrumb } from "./_components/Breadcrumb";
import { LinkTitle } from "../../../_components/LinkTitle";
import { useLanguageContext } from "../../../../core/contexts/LanguageContext/Hooks/useLanguageContext";
import { LanguageSelector } from "./_components/LanguageSelector";
import { ThemeSelector } from "./_components/ThemeSelector/ThemeSelctor";
import { ROUTES } from "../../../../core/constants/routeConstants";

export const Header = () => {
  const location = useLocation();
  const pathname = location.pathname;
  const isProductDetail = location.pathname.includes("/item/");
  const isHome = pathname === ROUTES.HOME;
  const { translate } = useLanguageContext();

  return (
    <div className={styles.headerContainer}>
      <LinkTitle to={ROUTES.HOME}>{translate("homeTitle")}</LinkTitle>
      {(isProductDetail || isHome) && (
        <Breadcrumb isProductDetail={isProductDetail} />
      )}
      <LanguageSelector />
      <ThemeSelector />
    </div>
  );
};
