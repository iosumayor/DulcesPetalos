import { useState } from "react";
import { LanguageContext } from "./LanguageContext";
import type { Language } from "./LanguageContext";
import esTranslations from "./esTranslations";
import enTranslations from "./enTranslations";

const translations = {
  es: esTranslations,
  en: enTranslations,
};

export const LanguageProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [language, setLanguage] = useState<Language>("es");
  const translate = (key: string) => {
    return (
      translations[language][key as keyof (typeof translations)[Language]] ||
      key
    );
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, translate }}>
      {children}
    </LanguageContext.Provider>
  );
};
