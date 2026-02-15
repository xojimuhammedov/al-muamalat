import { useTranslation } from "react-i18next";
import HeroBanner from "../assets/hero-banner.jpg";
import { useNavigate } from "react-router-dom";

export function HeroHeader() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        minHeight: "100vh",
        backgroundImage: `url(${HeroBanner})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.7) 100%)",
          zIndex: 1,
        }}
      />
      <div
        style={{
          position: "relative",
          zIndex: 2,
          textAlign: "center",
          maxWidth: "800px",
          padding: "40px 24px",
        }}
        className="flex flex-col items-center gap-4"
      >
        {/* Main heading */}
        <h1
          style={{
            color: "#ffffff",
            lineHeight: "1.15",
            margin: 0,
          }}
          className="text-3xl sm:text-4xl md:text-5xl font-medium"
        >
          {t("ISLOMIY MOLIYAGA")}
          <br />
          <span>{t("SIZNING YO'LBOSHCHINGIZ")}</span>
        </h1>

        {/* Subtitle */}
        <p
          style={{
            color: "rgba(255,255,255,0.85)",
            fontSize: "16px",
            lineHeight: "1.8",
            fontWeight: "400",
            letterSpacing: "1px",
            maxWidth: "600px",
          }}
          className="text-sm sm:text-base md:text-lg"
        >
          {t("Strategik yechimlar. Axloqiy yuksalish. Global ta'sir")}
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
          <button
            onClick={() => {
              navigate("/contact");
            }}
            style={{
              color: "#fff",
              padding: "14px 36px",
              borderRadius: "999px",
              fontSize: "14px",
              fontWeight: "700",
              letterSpacing: "1.5px",
              textTransform: "uppercase",
              border: "none",
              cursor: "pointer",
              transition: "all 0.3s ease",
              minWidth: "220px",
            }}
            className="hover:opacity-90 active:scale-95 bg-emerald-700"
          >
            {t("KONSULTATSIYA OLISH")}
          </button>

          <button
            onClick={() => {
              navigate("/contact");
            }}
            style={{
              backgroundColor: "transparent",
              color: "#ffffff",
              padding: "14px 36px",
              borderRadius: "999px",
              fontSize: "14px",
              fontWeight: "700",
              letterSpacing: "1.5px",
              textTransform: "uppercase",
              border: "2px solid rgba(255,255,255,0.5)",
              cursor: "pointer",
              transition: "all 0.3s ease",
              minWidth: "220px",
            }}
            className="hover:border-white active:scale-95"
          >
            {t("XIZMATLAR HAQIDA")}
          </button>
        </div>

        {/* Scroll indicator */}
        <div
          style={{
            marginTop: "32px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <span
            style={{
              color: "rgba(255,255,255,0.5)",
              fontSize: "11px",
              letterSpacing: "2px",
              textTransform: "uppercase",
            }}
          >
            {t("Pastga tushiring")}
          </span>
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="rgba(255,255,255,0.5)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{
              animation: "bounce 2s infinite",
            }}
          >
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </div>
      </div>

      {/* Bounce animation */}
      <style jsx>{`
        @keyframes bounce {
          0%,
          20%,
          50%,
          80%,
          100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-8px);
          }
          60% {
            transform: translateY(-4px);
          }
        }
      `}</style>
    </section>
  );
}
