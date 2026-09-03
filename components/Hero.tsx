import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import {
  ArrowUpRight,
  Grid3x3,
  Box,
  MapPin,
  Globe,
  ShieldCheck,
  Headphones,
} from "lucide-react";
import { Reveal, StaggerGrid, StaggerItem } from "@/components/motion/Reveal";
import { FloatingCard } from "@/components/motion/FloatingCard";
import GlobeOrbit from "@/components/GlobeOrbit";

export default function Hero() {
  const t = useTranslations("hero");

  const FEATURES = [
    { key: "tracking", icon: MapPin, accent: "bg-accent-tracking" },
    { key: "network", icon: Globe, accent: "bg-accent-network" },
    { key: "secure", icon: ShieldCheck, accent: "bg-accent-secure" },
    { key: "support", icon: Headphones, accent: "bg-accent-support" },
  ] as const;

  return (
    <section className="relative overflow-hidden px-4 pt-6 sm:px-6 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-navy-950">
        <div className="absolute -top-40 right-[-10%] h-[36rem] w-[36rem] rounded-full bg-brand-blue-light/25 blur-[140px]" />
        <div className="absolute top-1/3 left-[-15%] h-[30rem] w-[30rem] rounded-full bg-brand-violet/20 blur-[140px]" />
        <div className="absolute bottom-[-10%] right-1/4 h-[24rem] w-[24rem] rounded-full bg-brand-gold/10 blur-[120px]" />
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-navy-950/40 to-navy-950" />
      </div>

      <div className="mx-auto max-w-7xl pb-10 pt-8 lg:pb-16 lg:pt-14">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-start">
          <div>
            <Reveal delay={0}>
              <span className="glass-panel-light inline-flex items-center gap-2 px-4 py-1.5 text-xs font-medium text-ink-100">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                {t("badge")}
              </span>
            </Reveal>

            <Reveal delay={0.1}>
              <h1 className="mt-6 text-4xl font-bold leading-[1.1] tracking-tight text-ink-100 sm:text-5xl lg:text-6xl">
                {t("headlineLine1")}
                <br />
                {t("headlineLine2Pre")}{" "}
                <span className="brand-gradient-text">
                  {t("headlineLine2Highlight")}
                </span>
              </h1>
            </Reveal>

            <Reveal delay={0.18}>
              <p className="mt-5 max-w-lg text-base leading-relaxed text-ink-400 sm:text-lg">
                {t("paragraph")}
              </p>
            </Reveal>

            <Reveal delay={0.26}>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link
                  href="/contact"
                  className="brand-gradient flex items-center gap-1.5 rounded-xl px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
                >
                  {t("ctaQuote")}
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/services"
                  className="glass-panel-light flex items-center gap-1.5 rounded-xl px-6 py-3 text-sm font-semibold text-ink-100"
                >
                  {t("ctaServices")}
                  <Grid3x3 className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.34}>
              <div className="glass-panel hover-lift mt-10 max-w-xl p-5 sm:p-6">
                <div className="flex items-start gap-3">
                  <span className="brand-gradient flex h-10 w-10 shrink-0 items-center justify-center rounded-xl">
                    <Box className="h-5 w-5 text-white" />
                  </span>
                  <div className="w-full">
                    <h3 className="text-sm font-semibold text-ink-100">
                      {t("trackingTitle")}
                    </h3>
                    <div className="mt-3 flex flex-col gap-2 sm:flex-row">
                      <input
                        type="text"
                        placeholder={t("trackingPlaceholder")}
                        className="glass-panel-light w-full flex-1 px-4 py-2.5 text-sm text-ink-100 placeholder:text-ink-400 focus:outline-none"
                      />
                      <button className="brand-gradient flex items-center justify-center gap-1.5 whitespace-nowrap rounded-xl px-5 py-2.5 text-sm font-semibold text-white hover:opacity-90">
                        {t("trackingButton")}
                        <ArrowUpRight className="h-4 w-4" />
                      </button>
                    </div>
                    <p className="mt-2 text-xs text-ink-400">
                      {t("trackingExample")}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="flex flex-col gap-6 lg:mt-2">
            <Reveal delay={0.15}>
              <GlobeOrbit />
            </Reveal>

            <Reveal delay={0.2} y={16}>
              <FloatingCard>
                <StaggerGrid
                  stagger={0.1}
                  className="glass-panel flex flex-col divide-y divide-[color:var(--glass-border)] p-2"
                >
                  {FEATURES.map((f) => (
                    <StaggerItem
                      key={f.key}
                      className="hover-lift flex items-start gap-3 p-4"
                    >
                      <span
                        className={`${f.accent} flex h-10 w-10 shrink-0 items-center justify-center rounded-xl`}
                      >
                        <f.icon className="h-5 w-5 text-white" />
                      </span>
                      <div>
                        <h4 className="text-sm font-semibold text-ink-100">
                          {t(`features.${f.key}.title`)}
                        </h4>
                        <p className="mt-0.5 text-xs leading-relaxed text-ink-400">
                          {t(`features.${f.key}.desc`)}
                        </p>
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerGrid>
              </FloatingCard>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
