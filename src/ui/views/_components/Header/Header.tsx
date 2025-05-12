import { useLocation } from "react-router-dom";
import styles from "./Header.module.scss";
import { Breadcrumb } from "./_components/Breadcrumb";
import { LinkTitle } from "../../../_components/LinkTitle";
export const Header = () => {
  const location = useLocation();
  const isProductDetail = location.pathname.includes("/item/");

  return (
    <div className={styles.headerContainer}>
      <LinkTitle to="/">Dulces Petalos</LinkTitle>
      <Breadcrumb isProductDetail={isProductDetail} />
    </div>
  );
};
