import { Header } from "../views/_components/Header/Header";
import { useLocation } from "react-router-dom";
import styles from "./Layout.module.scss";
import { SearchBar } from "../views/Home/_components/SearchBar/SearchBar";
import { useState } from "react";
import { BackButton } from "../views/ProductDetail/_components/BackButton/BackButton";
export const Layout = ({ children }: { children: React.ReactNode }) => {
  const isHome = useLocation().pathname === "/";
  const [search, setSearch] = useState("");
  return (
    <div className={styles.layoutContainer}>
      <Header />
      {isHome ? (
        <SearchBar search={search} setSearch={setSearch} />
      ) : (
        <BackButton />
      )}
      {children}
    </div>
  );
};
