import { useThemeContext } from "../../../../../../core/contexts/ThemeContext/hooks/useThemeContext";
import styles from "./ThemeSelector.module.scss";
import lightTheme from "../../../../../Icons/designIcons/lightTheme.svg";
import darkTheme from "../../../../../Icons/designIcons/darkTheme.svg";

export const ThemeSelector = () => {
  const { setTheme } = useThemeContext();
  return (
    <div className={styles.themeButtonsContainer}>
      <button className={styles.themeButton} onClick={() => setTheme("light")}>
        <img src={lightTheme} alt="lightTheme" />
      </button>
      <button className={styles.themeButton} onClick={() => setTheme("dark")}>
        <img src={darkTheme} alt="darkTheme" />
      </button>
    </div>
  );
};
