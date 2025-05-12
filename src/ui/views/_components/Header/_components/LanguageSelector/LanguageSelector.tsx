import { useLanguageContext } from "../../../../../../core/contexts/LanguageContext/Hooks/useLanguageContext";
import styles from "./LanguageSelector.module.scss";
export const LanguageSelector = () => {
  const { language, setLanguage, translate } = useLanguageContext();
  const getButtonClassName = (buttonLanguage: string) => {
    return `${styles.languageButton} ${language === buttonLanguage ? styles.active : ""}`;
  };
  return (
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
  );
};
