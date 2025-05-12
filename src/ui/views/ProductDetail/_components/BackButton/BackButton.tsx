import { useNavigate } from "react-router-dom";
import styles from "./BackButton.module.scss";
export const BackButton = () => {
  const navigate = useNavigate();
  return (
    <button className={styles.backButton} onClick={() => navigate("/")}>
      Volver
    </button>
  );
};
