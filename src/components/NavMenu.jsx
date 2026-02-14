import { ArrowRight, ChevronDown, X } from "lucide-react";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import LogoIcon from "../assets/nav-logo.png";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const languages = [
  { code: "en", label: "EN" },
  { code: "uz", label: "UZ" },
];

function NavMenu({ isOpen, onClose }) {
  const [mobileDropdown, setMobileDropdown] = useState(null);
  const [mounted, setMounted] = useState(false);
  const [activeLang, setActiveLang] = useState("en");

  const { t, i18n } = useTranslation();

  const navLinks = [
    { label: t("Bosh sahifa"), href: "/" },
    // { label: t("Xizmatlar"), href: "/services" },
    {
      label: t("O'quv dasturlari"),
      href: "#",
      children: [
        { label: t("O’quv kurslari"), href: "/education-course" },
        { label: t("AAOIFI imtihonlari"), href: "/aaoifi-exam" },
      ],
    },
    { label: t("Islom moliyasi"), href: "/material" },
    {
      label: t("Team"),
      href: "#",
      children: [
        { label: t("Core Team"), href: "/team" },
        { label: t("Special Council"), href: "/council" },
      ],
    },
    { label: t("Bog'lanish"), href: "/contact" },
  ];

  useEffect(() => {
    setMounted(true);
  }, []);

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

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!mounted) return null;

  return createPortal(
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-[9998] bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Panel */}
      <div
        className={`fixed right-0 top-0 z-[9999] flex h-full w-[300px] max-w-[85vw] flex-col overflow-y-auto bg-[#0a1628] shadow-2xl transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close button */}
        <div className="flex items-center justify-between px-5 pt-5 pb-2">
          <div className="flex items-center gap-2.5">
            <div>
              <img src={LogoIcon} className="w-[80px]" />
            </div>
          </div>
          <button
            onClick={onClose}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-white/70 transition-colors hover:border-white/25 hover:text-white"
            aria-label="Close menu"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="my-3 mx-5 h-px bg-white/10" />

        {/* Links */}
        <div className="flex flex-1 flex-col gap-0.5 px-4">
          {navLinks.map((link) =>
            link.children ? (
              <div key={link.label}>
                <button
                  onClick={() =>
                    setMobileDropdown(
                      mobileDropdown === link.label ? null : link.label,
                    )
                  }
                  className="flex w-full items-center justify-between rounded-xl px-4 py-3.5 text-[15px] font-medium text-white/80 transition-colors hover:bg-white/5 hover:text-white"
                >
                  {link.label}
                  <ChevronDown
                    className={`h-4 w-4 text-white/40 transition-transform duration-200 ${
                      mobileDropdown === link.label
                        ? "rotate-180 text-[#c9973f]"
                        : ""
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    mobileDropdown === link.label
                      ? "max-h-40 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="ml-2 border-l-2 border-[#c9973f]/20 pl-2">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        to={child.href}
                        onClick={onClose}
                        className="flex items-center gap-3 rounded-lg px-4 py-3 text-[14px] text-white/60 transition-colors hover:text-[#c9973f]"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-[#c9973f]/50" />
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={link.label}
                to={link.href}
                onClick={onClose}
                className="rounded-xl px-4 py-3.5 text-[15px] font-medium text-white/80 transition-colors hover:bg-white/5 hover:text-white"
              >
                {link.label}
              </Link>
            ),
          )}
        </div>

        {/* Bottom section */}
        <div className="mt-auto border-t border-white/10 px-5 pt-5 pb-8">
          <div className="mb-5 flex gap-2">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => onChangeLanguage(lang.code)}
                className={`rounded-lg px-5 py-2.5 text-xs font-semibold transition-all ${
                  initialLanguage === lang.code
                    ? "bg-[#c9973f]/15 text-[#c9973f] ring-1 ring-[#c9973f]/30"
                    : "border border-white/10 text-white/50 hover:border-white/20 hover:text-white"
                }`}
              >
                {lang.label}
              </button>
            ))}
          </div>

          {/* Login */}
          <Link
            to="/login"
            onClick={onClose}
            className="flex items-center justify-center gap-2 rounded-full bg-[#FE5D37] py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#FE5D37]/20 transition-all"
          >
            {t("Kirish")}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </>,
    document.body,
  );
}

export default NavMenu;
