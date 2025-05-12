import { useLocation } from "react-router-dom";
import styles from "./Header.module.scss";
import { Breadcrumb } from "./_components/Breadcrumb";
import { LinkTitle } from "../../../_components/LinkTitle";
import { useLanguageContext } from "../../../../core/contexts/LanguageContext/Hooks/useLanguageContext";

export const Header = () => {
  const location = useLocation();
  const isProductDetail = location.pathname.includes("/item/");
  const { language, setLanguage, translate } = useLanguageContext();
  const getButtonClassName = (buttonLanguage: string) => {
    return `${styles.languageButton} ${language === buttonLanguage ? styles.active : ""}`;
  };
  console.log(language);

  return (
    <div className={styles.headerContainer}>
      <LinkTitle to="/">{translate("homeTitle")}</LinkTitle>
      <Breadcrumb isProductDetail={isProductDetail} />
      <div className={styles.languageButtonsContainer}>
        <button
          className={getButtonClassName("es")}
          onClick={() => setLanguage("es")}
        >
          {translate("es")}
        </button>
        <button
          className={getButtonClassName("en")}
          onClick={() => setLanguage("en")}
        >
          {translate("en")}
        </button>
      </div>
    </div>
  );
};
