import { useState, useEffect, useRef, useCallback } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, ArrowRight, Menu, X } from "lucide-react";
import LogoIcon from "../assets/nav-logo.png";
import Language from "./Language";
import NavMenu from "./NavMenu";
import { useTranslation } from "react-i18next";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const dropdownTimeout = useRef(null);
  const { t } = useTranslation();

  const navLinks = [
    { label: t("Bosh sahifa"), href: "/" },
    { label: t("Xizmatlar"), href: "/services" },
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
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleDropdownEnter = useCallback((label) => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    setOpenDropdown(label);
  }, []);

  const handleDropdownLeave = useCallback(() => {
    dropdownTimeout.current = setTimeout(() => setOpenDropdown(null), 150);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
          scrolled
            ? "bg-[#fff]/95 shadow-lg shadow-black/10 backdrop-blur-md"
            : "bg-[#fff] backdrop-blur-sm"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-0 sm:px-8 lg:px-10">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <div className="flex items-center gap-2.5 py-3">
              <div className="hidden min-[400px]:block">
                <img src={LogoIcon} className="w-[120px]" />
              </div>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) =>
              link.children ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => handleDropdownEnter(link.label)}
                  onMouseLeave={handleDropdownLeave}
                >
                  <button
                    className={`flex items-center gap-1 px-4 py-6 text-[13px] font-medium tracking-wide transition-colors ${
                      openDropdown === link.label ? "text-[#FE5D37]" : ""
                    }`}
                  >
                    {link.label}
                    <ChevronDown
                      className={`h-3.5 w-3.5 transition-transform duration-200 ${
                        openDropdown === link.label ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`absolute left-1/2 top-full -translate-x-1/2 pt-1 transition-all duration-200 ${
                      openDropdown === link.label
                        ? "visible translate-y-0 opacity-100"
                        : "invisible -translate-y-2 opacity-0"
                    }`}
                  >
                    <div className="min-w-[220px] overflow-hidden rounded-xl border border-white/10 bg-white shadow-xl shadow-black/20 backdrop-blur-xl">
                      {link.children.map((child, i) => (
                        <Link
                          key={child.href}
                          to={child.href}
                          onClick={() => window.scrollTo({ top: 0 })}
                          className={`flex items-center gap-3 px-5 py-3.5 text-[13px] font-medium transition-all hover:bg-white/5 hover:text-[#FE5D37] ${
                            i !== link.children.length - 1
                              ? "border-b border-white/5"
                              : ""
                          }`}
                        >
                          <span className="h-1.5 w-1.5 rounded-full bg-[#FE5D37]/50" />
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
                  onClick={() => window.scrollTo({ top: 0 })}
                  className="px-4 py-6 text-[13px] font-medium tracking-wide"
                >
                  {link.label}
                </Link>
              ),
            )}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-3">
            <Language />
            <Link
              to="/login"
              className="group hidden items-center gap-2 rounded-full bg-[#FE5D37] px-5 py-2 text-[13px] font-semibold text-white shadow-lg shadow-[#FE5D37]/20 transition-all duration-300 sm:flex"
            >
              {t("Kirish")}
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="relative z-[10000] flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 transition-all hover:border-white/25 lg:hidden"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              <div className="relative h-5 w-5">
                <Menu
                  className={`absolute inset-0 h-5 w-5 transition-all duration-300 ${
                    mobileOpen ? "rotate-90 opacity-0" : "rotate-0 opacity-100"
                  }`}
                />
                <X
                  className={`absolute inset-0 h-5 w-5 transition-all duration-300 ${
                    mobileOpen ? "rotate-0 opacity-100" : "-rotate-90 opacity-0"
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu via Portal */}
      <NavMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}

export default Navbar;
