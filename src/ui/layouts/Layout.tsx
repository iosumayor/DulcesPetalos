import { Header } from "../views/_components/Header/Header";
import styles from "./Layout.module.scss";
export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={styles.layoutContainer}>
      <Header />
      {children}
    </div>
  );
};
