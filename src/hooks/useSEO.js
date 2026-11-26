import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { SITE_URL } from "@/config/contact";
import { useLang } from "@/i18n/LanguageContext";

export const useSEO = () => {
  const location = useLocation();
  const { t } = useLang();

  useEffect(() => {
    const meta = t.seo.pages[location.pathname] ?? t.seo.fallback;
    const url = `${SITE_URL}${location.pathname}`;

    document.title = meta.title;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", meta.description);
    document
      .querySelector('meta[property="og:title"]')
      ?.setAttribute("content", meta.title);
    document
      .querySelector('meta[property="og:description"]')
      ?.setAttribute("content", meta.description);
    document
      .querySelector('meta[property="og:url"]')
      ?.setAttribute("content", url);
    document.querySelector('link[rel="canonical"]')?.setAttribute("href", url);
  }, [location.pathname, t]);
};
