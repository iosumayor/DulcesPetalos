import { useLocation } from "react-router-dom";
import styles from "./Header.module.scss";
import { Breadcrumb } from "./_components/Breadcrumb";
import { LinkTitle } from "../../../_components/LinkTitle";
import { useLanguageContext } from "../../../../core/contexts/LanguageContext/Hooks/useLanguageContext";
import { LanguageSelector } from "./_components/LanguageSelector";
import { useThemeContext } from "../../../../core/contexts/ThemeContext/hooks/useThemeContext";
import darkTheme from "../../../Icons/designIcons/darkTheme.svg";
import lightTheme from "../../../Icons/designIcons/lightTheme.svg";

export const Header = () => {
  const location = useLocation();
  const isProductDetail = location.pathname.includes("/item/");
  const { translate } = useLanguageContext();
  const { setTheme } = useThemeContext();

  return (
    <div className={styles.headerContainer}>
      <LinkTitle to="/">{translate("homeTitle")}</LinkTitle>
      <Breadcrumb isProductDetail={isProductDetail} />
      <LanguageSelector />
      <div className={styles.themeButtonsContainer}>
        <button
          className={styles.themeButton}
          onClick={() => setTheme("light")}
        >
          <img src={lightTheme} alt="lightTheme" />
        </button>
        <button className={styles.themeButton} onClick={() => setTheme("dark")}>
          <img src={darkTheme} alt="darkTheme" />
        </button>
      </div>
    </div>
  );
};
