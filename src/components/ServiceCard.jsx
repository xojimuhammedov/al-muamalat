import { ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";

export function ServiceCard({ service }) {
  const { t, i18n } = useTranslation();
  const isDark = service.variant === "dark";

  return (
    <section
      style={{
        backgroundColor: isDark ? "#3D6B5E" : "#ffffff",
        color: isDark ? "#ffffff" : "#141414",
        borderRadius: isDark ? "16px" : "0px",
      }}
    >
      <div className="flex flex-col gap-6 px-6 py-10 md:flex-row md:items-start md:gap-12 md:px-12 md:py-14 lg:px-16 lg:py-16">
        {/* Left column */}
        <div className="flex flex-col gap-3 md:w-1/2">
          <h2 className="whitespace-pre-line font-serif text-3xl leading-tight md:text-4xl lg:text-5xl lg:leading-tight">
            {service[`title_${i18n?.language}`]}
          </h2>
        </div>

        {/* Right column */}
        <div className="flex flex-col gap-6 md:w-1/2">
          <p
            style={{
              color: isDark ? "rgba(255,255,255,0.8)" : "#5C7A6E",
            }}
            className="text-base leading-relaxed md:text-lg"
          >
            {service[`text_${i18n?.language}`]}
          </p>
          <div>
            <button
              style={{
                backgroundColor: isDark ? "#ffffff" : "#3D6B5E",
                color: isDark ? "#141414" : "#ffffff",
              }}
              className="group inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-medium transition-all duration-200 hover:opacity-90"
            >
              {t("Contact")}
              <ArrowRight
                className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                strokeWidth={2}
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
