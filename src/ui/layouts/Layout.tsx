import { Header } from "../views/_components/Header/Header";
import { useLocation } from "react-router-dom";
import styles from "./Layout.module.scss";
import { SearchBar } from "../views/Home/_components/SearchBar/SearchBar";
import { useState } from "react";
import { BackButton } from "../views/ProductDetail/_components/BackButton/BackButton";
import { useThemeContext } from "../../core/contexts/ThemeContext/hooks/useThemeContext";
export const Layout = ({ children }: { children: React.ReactNode }) => {
  const isHome = useLocation().pathname === "/";
  const { theme } = useThemeContext();
  const [search, setSearch] = useState("");
  console.log(theme);
  return (
    <div
      className={`${styles.layoutContainer} ${theme === "dark" ? styles.darkLayoutContainer : ""}`}
    >
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
