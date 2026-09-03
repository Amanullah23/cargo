import { useTranslations } from "next-intl";
import { Globe2, Users, Cpu, Headset, Calendar, Building2 } from "lucide-react";
import { Reveal, StaggerGrid, StaggerItem } from "@/components/motion/Reveal";

export default function AboutSection() {
  const t = useTranslations("aboutPage");

  const VALUES = [
    { key: "network", icon: Globe2, accent: "bg-accent-network" },
    { key: "team", icon: Users, accent: "bg-accent-tracking" },
    { key: "tech", icon: Cpu, accent: "bg-brand-violet" },
    { key: "support", icon: Headset, accent: "bg-accent-support" },
  ] as const;

  return (
    <section className="px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Reveal className="max-w-2xl">
          <h1 className="text-3xl font-bold tracking-tight text-ink-100 sm:text-4xl">
            {t("heading")}
          </h1>
          <p className="mt-2 text-sm text-ink-400 sm:text-base">{t("desc")}</p>
        </Reveal>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1.4fr_1fr]">
          <Reveal delay={0.1}>
            <div className="glass-panel p-6 sm:p-8">
              <h2 className="text-lg font-semibold text-ink-100">
                {t("storyHeading")}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-ink-400">
                {t("storyP1")}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-ink-400">
                {t("storyP2")}
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.18}>
            <div className="glass-panel space-y-5 p-6 sm:p-8">
              <div className="flex items-start gap-3">
                <span className="bg-accent-secure flex h-10 w-10 shrink-0 items-center justify-center rounded-xl">
                  <Calendar className="h-5 w-5 text-white" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-ink-100">
                    {t("years")}
                  </p>
                  <p className="text-xs text-ink-400">{t("yearsSub")}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="brand-gradient flex h-10 w-10 shrink-0 items-center justify-center rounded-xl">
                  <Building2 className="h-5 w-5 text-white" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-ink-100">
                    {t("location")}
                  </p>
                  <p className="text-xs text-ink-400">{t("locationSub")}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="bg-accent-network flex h-10 w-10 shrink-0 items-center justify-center rounded-xl">
                  <Globe2 className="h-5 w-5 text-white" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-ink-100">
                    {t("countries")}
                  </p>
                  <p className="text-xs text-ink-400">{t("countriesSub")}</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="mt-12">
          <Reveal>
            <h2 className="text-2xl font-bold tracking-tight text-ink-100 sm:text-3xl">
              {t("whyChooseUs")}
            </h2>
          </Reveal>
          <StaggerGrid className="mt-6 grid gap-5 sm:grid-cols-2">
            {VALUES.map((v) => (
              <StaggerItem key={v.key} className="glass-panel hover-lift p-6">
                <span
                  className={`${v.accent} flex h-11 w-11 items-center justify-center rounded-xl`}
                >
                  <v.icon className="h-5 w-5 text-white" />
                </span>
                <h3 className="mt-4 text-base font-semibold text-ink-100">
                  {t(`values.${v.key}.title`)}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-400">
                  {t(`values.${v.key}.desc`)}
                </p>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </div>
    </section>
  );
}
