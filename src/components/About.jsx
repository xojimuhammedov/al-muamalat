import { useTranslation } from "react-i18next";
import RightBgImage from "../assets/right-bg.png";

export function AboutHero() {
  const { t } = useTranslation();
  return (
    <section className="relative pt-8 pb-16 md:pt-12 md:pb-16">
      {/* Subtle decorative elements */}
      <div className="absolute top-20 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -z-10" />

      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text content */}
          <div className="order-2 lg:order-1">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary leading-tight text-balance">
              {t("Al Muamalat Consulting LLC")}
            </h1>

            <div className="mt-6 h-1 w-20 bg-secondary rounded-full" />
            <p className="mt-4 text-lg md:text-xl leading-relaxed text-muted-foreground">
              {t(
                "Al Muamalat Consulting is an Uzbekistan-based consulting company specializing in Islamic finance, product structuring, innovative financial solutions and trainings on Islamic banking and finance for financial institutions.",
              )}
            </p>

            <p className="mt-5 text-base md:text-lg leading-relaxed text-muted-foreground">
              {t(
                "We support conventional banks in establishing Islamic banking windows, full-fledged Islamic finance institutions, and market stakeholders (regulators, auditors, and practitioners) through expert advisory services and capacity building.",
              )}
            </p>
          </div>

          {/* Right: Image */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={RightBgImage}
                alt="Modern office with financial analytics and global maps"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
                priority
              />
              {/* Overlay accent */}
              <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
            </div>
          </div>
        </div>

        {/* Mission & Vision Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          <div className="group relative bg-background/80 backdrop-blur-sm rounded-3xl p-6 border border-primary/10 hover:border-primary/25 shadow-sm hover:shadow-xl hover:shadow-primary/5 transition-all duration-500">
            <div className="absolute top-0 left-10 right-10 h-[3px] rounded-b-full bg-gradient-to-r from-primary/60 via-primary to-primary/60" />

            <div className="flex items-start gap-5">
              <div>
                <h3 className="text-xl md:text-2xl font-serif font-bold text-primary mb-3">
                  {" "}
                  {t("Missiya")}
                </h3>
                <p className="text-sm md:text-base leading-relaxed text-[#6b7a6f]">
                  {t(
                    "Mintaqa manfaatlari va amaldagi qoidalarga muvofiq holda, O'zbekiston va Markaziy Osiyoda Islom moliyasining har tomonlama rivojlanishiga hissa qo'shish.",
                  )}
                </p>
              </div>
            </div>

            <div className="absolute bottom-5 right-5 opacity-10 group-hover:opacity-20 transition-opacity">
              <svg width="40" height="40" viewBox="0 0 40 40">
                <rect
                  x="0"
                  y="0"
                  width="18"
                  height="18"
                  rx="4"
                  fill="hsl(150,60%,22%)"
                />
                <rect
                  x="22"
                  y="22"
                  width="18"
                  height="18"
                  rx="4"
                  fill="hsl(150,60%,22%)"
                />
              </svg>
            </div>
          </div>

          <div className="group relative bg-background/80 backdrop-blur-sm rounded-3xl p-6 border border-secondary/10 hover:border-secondary/25 shadow-sm hover:shadow-xl hover:shadow-secondary/5 transition-all duration-500">
            <div className="absolute top-0 left-10 right-10 h-[3px] rounded-b-full bg-gradient-to-r from-secondary/60 via-secondary to-secondary/60" />
            <div className="flex items-start gap-5">
              <div>
                <h3 className="text-xl md:text-2xl font-serif font-bold text-secondary mb-3">
                  {t("Istiqbolli qarash")}
                </h3>
                <p className="text-sm md:text-base leading-relaxed text-[#6b7a6f]">
                  {t(
                    "Innovatsion Islom moliyasi yechimlari orqali Markaziy Osiyodagi moliyaviy muhitni transformatsiya qilishda yetakchilik qilish.",
                  )}
                </p>
              </div>
            </div>

            <div className="absolute bottom-5 right-5 opacity-10 group-hover:opacity-20 transition-opacity">
              <svg width="40" height="40" viewBox="0 0 40 40">
                <circle cx="9" cy="9" r="9" fill="hsl(30,80%,54%)" />
                <circle cx="31" cy="31" r="9" fill="hsl(30,80%,54%)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
