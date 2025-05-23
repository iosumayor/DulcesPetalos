import { useContext } from "react";
import { ThemeContext } from "../ThemeContext";

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useThemeContext must be used within a ThemeContext");
  }
  return context;
};
