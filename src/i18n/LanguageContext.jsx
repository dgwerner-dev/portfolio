import PropTypes from "prop-types";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import en from "./en";
import pt from "./pt";

const dictionaries = { pt, en };
const STORAGE_KEY = "portfolio-lang";
const HTML_LANG = { pt: "pt-BR", en: "en" };

const detectInitialLang = () => {
  if (typeof window === "undefined") return "pt";
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored && dictionaries[stored]) return stored;
  } catch {
    // localStorage indisponível
  }
  return navigator.language?.toLowerCase().startsWith("pt") ? "pt" : "en";
};

const LanguageContext = createContext({
  lang: "pt",
  setLang: () => {},
  t: pt,
});

export const LanguageProvider = ({ children }) => {
  const [lang, setLangState] = useState(detectInitialLang);

  useEffect(() => {
    document.documentElement.lang = HTML_LANG[lang];
  }, [lang]);

  const setLang = useCallback((next) => {
    if (!dictionaries[next]) return;
    setLangState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // ignore
    }
  }, []);

  const value = useMemo(
    () => ({ lang, setLang, t: dictionaries[lang] }),
    [lang, setLang],
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

LanguageProvider.propTypes = {
  children: PropTypes.node,
};

// eslint-disable-next-line react-refresh/only-export-components
export const useLang = () => useContext(LanguageContext);
