import { createContext, useContext, useEffect, useState } from "react";
import { i18nData } from "../i18n";

const LangContext = createContext();
export const useLang = () => useContext(LangContext);

export function LangProvider({ children }) {
  const saved = localStorage.getItem("lang") || "en";
  const [lang, setLang] = useState(saved);
  const [dict, setDict] = useState(i18nData[saved]);

  useEffect(() => {
    setDict(i18nData[lang]);
    localStorage.setItem("lang", lang);
  }, [lang]);

  return (
    <LangContext.Provider value={{ lang, setLang, dict }}>
      {children}
    </LangContext.Provider>
  );
}
