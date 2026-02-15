import { QuoteIcon } from "lucide-react";
import SecondBanner from "../assets/second-banner.png";
import { useTranslation } from "react-i18next";

export function HeaderBanner() {
  const { t } = useTranslation();
  return (
    <header className="relative w-full overflow-hidden min-h-[3/4]">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${SecondBanner})` }}
      />
      {/* Dark overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.7) 100%)",
          zIndex: 1,
        }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20 lg:px-10 lg:pt-36 flex flex-col justify-between min-h-[3/4]">
        <div className="flex justify-center items-center gap-10 lg:flex-row lg:gap-14 flex-1">
          <div className="flex flex-col justify-center lg:w-1/2">
            {/* Decorative quote mark */}
            <div className="mb-2 mt-10 md:mt-0">
              <svg
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                className="text-[#FE5D37] w-10 h-10"
              >
                <path
                  d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"
                  fill="currentColor"
                />
                <path
                  d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"
                  fill="currentColor"
                />
              </svg>
            </div>

            <blockquote className="mb-8">
              <p className="text-base leading-relaxed text-white/95 sm:text-xl lg:text-2xl xl:leading-relaxed">
                {
                  t("The time has come to create a legal framework for the introduction of Islamic financial services in Uzbekistan. Experts from the Islamic Development Bank and other international financial organizations will be involved in this process.")
                }
              </p>
            </blockquote>

            <div className="flex items-center gap-4">
              <div className="h-[2px] w-12 bg-[#FE5D37]" />
              <div>
                <p className="text-sm font-bold tracking-widest text-[#FE5D37] uppercase sm:text-base">
                  {t("Shavkat Mirziyoyev")}
                </p>
                <p className="text-xs tracking-wider text-white/50 uppercase sm:text-sm">
                   {t("President of the Republic of Uzbekistan")}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Separator */}
        <div className="my-10 flex items-center gap-4 lg:my-14">
          <div className="h-px flex-1 bg-white/15" />
          <div className="h-2 w-2 rotate-45 bg-[#c9973f]" />
          <div className="h-px flex-1 bg-white/15" />
        </div>

      </div>
    </header>
  );
}
