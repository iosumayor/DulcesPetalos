import { useContext } from "react";
import { LanguageContext } from "../LanguageContext";

export const useLanguageContext = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguageContext must be used within a LanguageContext");
  }
  return context;
};
