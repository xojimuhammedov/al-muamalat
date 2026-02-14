import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { ChevronDown, Globe } from "lucide-react";

const languages = [
  { code: "en", label: "EN" },
  { code: "uz", label: "UZ" },
];

function Language() {
  const [langOpen, setLangOpen] = useState(false);
  const [activeLang, setActiveLang] = useState("en");

  const { i18n } = useTranslation();
  const initialLanguage =
    typeof window !== "undefined"
      ? localStorage.getItem("language") || "uz"
      : "ru";

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      i18n &&
      typeof i18n.changeLanguage === "function"
    ) {
      i18n.changeLanguage(activeLang);
      localStorage.setItem("language", activeLang);
    } else {
      console.error("i18n object or changeLanguage method is not available.");
    }
  }, [activeLang, i18n]);

  const onChangeLanguage = (value) => {
    setActiveLang(value);
  };


  return (
    <div className="relative hidden sm:block">
      <button
        onClick={() => setLangOpen(!langOpen)}
        onBlur={() => setTimeout(() => setLangOpen(false), 150)}
        className="flex items-center gap-1.5 rounded-lg border border-white/10 px-3 py-1.5 text-xs font-medium text-white/70 transition-all hover:border-white/20 hover:text-white"
      >
        <Globe className="h-3.5 w-3.5" />
        {initialLanguage.toUpperCase()}
        <ChevronDown
          className={`h-3 w-3 transition-transform duration-200 ${
            langOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`absolute right-0 top-full mt-2 overflow-hidden rounded-lg border border-white/10 bg-[#0f2035] shadow-xl transition-all duration-200 ${
          langOpen
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-2 opacity-0"
        }`}
      >
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => {
              onChangeLanguage(lang.code);
              setLangOpen(false);
            }}
            className={`flex w-full items-center px-5 py-2.5 text-xs font-medium transition-all ${
              activeLang === lang.code
                ? "bg-[#c9973f]/10 text-[#c9973f]"
                : "text-white/60 hover:bg-white/5 hover:text-white"
            }`}
          >
            {lang.label}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Language;

const css = {
  image: {
    width: "25px",
    height: "25px",
  },
};
