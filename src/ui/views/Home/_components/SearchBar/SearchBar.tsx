import styles from "./SearchBar.module.scss";
export const SearchBar = ({
  search,
  setSearch,
}: {
  search: string;
  setSearch: (search: string) => void;
}) => {
  return (
    <input
      className={styles.searchBar}
      type="text"
      placeholder="Buscar"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  );
};
