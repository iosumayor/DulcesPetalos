import styles from "./SearchBar.module.scss";
import { useLanguageContext } from "../../../../../core/contexts/LanguageContext/Hooks/useLanguageContext";
export const SearchBar = ({
  search,
  setSearch,
}: {
  search: string;
  setSearch: (search: string) => void;
}) => {
  const { translate } = useLanguageContext();
  return (
    <input
      className={styles.searchBar}
      type="text"
      placeholder={translate("searchPlaceholder")}
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  );
};
