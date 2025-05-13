import { useNavigate } from "react-router-dom";
import styles from "./BackButton.module.scss";
import { useLanguageContext } from "../../../../../core/contexts/LanguageContext/Hooks/useLanguageContext";
import { ROUTES } from "../../../../../core/constants/routeConstants";

export const BackButton = () => {
  const navigate = useNavigate();
  const { translate } = useLanguageContext();
  return (
    <button className={styles.backButton} onClick={() => navigate(ROUTES.HOME)}>
      {translate("back")}
    </button>
  );
};
