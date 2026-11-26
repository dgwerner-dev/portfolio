import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Code2, Menu, X } from "lucide-react";
import SearchDialog from "./SearchDialog";
import { useLang } from "@/i18n/LanguageContext";

const navPaths = [
  { path: "/", key: "home" },
  { path: "/about", key: "about" },
  { path: "/education", key: "education" },
  { path: "/experience", key: "experience" },
  { path: "/skills", key: "skills" },
  { path: "/projects", key: "projects" },
  { path: "/certificates", key: "certificates" },
  { path: "/contact", key: "contact" },
];

const LanguageSwitcher = () => {
  const { lang, setLang, t } = useLang();
  return (
    <div
      className="flex items-center rounded-lg bg-white/10 p-0.5 text-xs font-medium"
      role="group"
      aria-label={t.nav.switchLang}
    >
      {["pt", "en"].map((code) => (
        <button
          key={code}
          type="button"
          onClick={() => setLang(code)}
          aria-pressed={lang === code}
          className={`px-2.5 py-1 rounded-md uppercase transition-colors ${
            lang === code
              ? "bg-white text-black"
              : "text-gray-400 hover:text-white"
          }`}
        >
          {code}
        </button>
      ))}
    </div>
  );
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { t } = useLang();
  const navLinks = navPaths.map((l) => ({ ...l, label: t.nav[l.key] }));
  const menuRef = useRef(null);

  useEffect(() => {
    if (!isMenuOpen) return;

    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMenuOpen]);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <motion.nav
      ref={menuRef}
      className="fixed top-0 w-full z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative">
        <div className="absolute inset-0 bg-black/50 backdrop-blur-xl" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Link to="/" className="flex items-center space-x-3">
              <Code2 className="w-8 h-8 text-white" aria-hidden="true" />
              <span className="text-xl font-bold text-white">{t.site.shortName}</span>
            </Link>

            <div className="hidden lg:flex items-center space-x-4">
              <SearchDialog />
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`nav-link ${location.pathname === link.path ? "bg-white/15 backdrop-blur-sm" : ""}`}
                  aria-current={
                    location.pathname === link.path ? "page" : undefined
                  }
                >
                  {link.label}
                </Link>
              ))}
              <LanguageSwitcher />
            </div>

            <div className="flex lg:hidden items-center space-x-2">
              <SearchDialog />
              <LanguageSwitcher />
              <button
                className="p-2 text-gray-400 hover:text-white transition-colors"
                onClick={() => setIsMenuOpen((prev) => !prev)}
                aria-label={isMenuOpen ? t.nav.closeMenu : t.nav.openMenu}
                aria-expanded={isMenuOpen}
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6" aria-hidden="true" />
                ) : (
                  <Menu className="w-6 h-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <motion.div
            className="lg:hidden absolute top-full left-0 right-0 bg-black/50 backdrop-blur-xl"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="px-4 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block px-3 py-2 text-gray-400 hover:text-white transition-colors ${
                    location.pathname === link.path
                      ? "bg-white/10 backdrop-blur-sm text-white"
                      : ""
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                  aria-current={
                    location.pathname === link.path ? "page" : undefined
                  }
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
