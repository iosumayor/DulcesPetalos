import { Link } from "react-router-dom";
import styles from "./LinkTitle.module.scss";
export const LinkTitle = ({
  children,
  to,
}: {
  children: React.ReactNode;
  to: string;
}) => {
  return (
    <div className={styles.titleContainer}>
      <Link className={styles.linkTitle} to={to}>
        {children}
      </Link>
    </div>
  );
};
