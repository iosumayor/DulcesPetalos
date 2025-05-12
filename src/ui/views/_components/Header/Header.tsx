import { useLocation } from "react-router-dom";
import styles from "./Header.module.scss";
import { Breadcrumb } from "./_components/Breadcrumb";
import { LinkTitle } from "../../../_components/LinkTitle";
import { useLanguageContext } from "../../../../core/contexts/LanguageContext/Hooks/useLanguageContext";

export const Header = () => {
  const location = useLocation();
  const isProductDetail = location.pathname.includes("/item/");
  const { language, setLanguage, translate } = useLanguageContext();

  return (
    <div className={styles.headerContainer}>
      <LinkTitle to="/">{translate("homeTitle")}</LinkTitle>
      <Breadcrumb isProductDetail={isProductDetail} />
      <button onClick={() => setLanguage(language === "es" ? "en" : "es")}>
        {language}
      </button>
    </div>
  );
};
