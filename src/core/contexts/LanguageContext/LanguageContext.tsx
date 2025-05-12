import { createContext } from "react";

export type Language = "en" | "es";

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  translate: (key: string) => string;
}

export const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);
