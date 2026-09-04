import { useTranslations } from "next-intl";
import { MapPin, Phone } from "lucide-react";
import { Reveal, StaggerGrid, StaggerItem } from "@/components/motion/Reveal";

const OFFICES = [
  { key: "hq", phone: "+93 (0) 7XX XXX XX1", isHq: true },
  { key: "karteNaw", phone: "+93 (0) 7XX XXX XX2", isHq: false },
  { key: "shahrNaw", phone: "+93 (0) 7XX XXX XX3", isHq: false },
  { key: "dehAfghanan", phone: "+93 (0) 7XX XXX XX4", isHq: false },
] as const;

export default function OfficesSection() {
  const t = useTranslations("officesPage");

  return (
    <section className="px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Reveal className="max-w-xl">
          <h1 className="text-3xl font-bold tracking-tight text-ink-100 sm:text-4xl">
            {t("heading")}
          </h1>
          <p className="mt-2 text-sm text-ink-400 sm:text-base">{t("desc")}</p>
        </Reveal>

        <StaggerGrid className="mt-8 grid gap-5 sm:grid-cols-2">
          {OFFICES.map((office) => (
            <StaggerItem
              key={office.key}
              className="glass-panel hover-lift p-6"
            >
              <div className="flex items-start justify-between gap-3">
                <span className="brand-gradient flex h-11 w-11 shrink-0 items-center justify-center rounded-xl">
                  <MapPin className="h-5 w-5 text-white" />
                </span>
                {office.isHq && (
                  <span className="bg-accent-secure rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-white">
                    {t("hq")}
                  </span>
                )}
              </div>

              <h3 className="mt-4 text-base font-semibold text-ink-100">
                {t(`offices.${office.key}.name`)}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-400">
                {t(`offices.${office.key}.address`)}
              </p>

              <div className="mt-3 flex items-center gap-2 text-sm text-ink-400">
                <Phone className="h-4 w-4 shrink-0 text-brand-gold" />
                {office.phone}
              </div>
            </StaggerItem>
          ))}
        </StaggerGrid>
      </div>
    </section>
  );
}
