import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import {
  Plane,
  Ship,
  Truck,
  TrainFront,
  CheckCircle2,
  ArrowUpRight,
} from "lucide-react";
import { Reveal, StaggerGrid, StaggerItem } from "@/components/motion/Reveal";
import { FloatingCard } from "@/components/motion/FloatingCard";

export default function TransportModes() {
  const t = useTranslations("transportModes");

  const MODES = [
    { key: "air", emoji: "✈️", icon: Plane, accent: "bg-accent-tracking" },
    { key: "sea", emoji: "🚢", icon: Ship, accent: "bg-accent-network" },
    { key: "road", emoji: "🚛", icon: Truck, accent: "bg-accent-secure" },
    { key: "rail", emoji: "🚆", icon: TrainFront, accent: "bg-brand-violet" },
  ] as const;

  return (
    <section className="px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Reveal className="max-w-xl">
          <h2 className="text-2xl font-bold tracking-tight text-ink-100 sm:text-3xl">
            {t("heading")}
          </h2>
          <p className="mt-2 text-sm text-ink-400 sm:text-base">
            {t("subheading")}
          </p>
        </Reveal>

        <StaggerGrid className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {MODES.map((m) => {
            const features = t.raw(`modes.${m.key}.features`) as string[];
            return (
              <StaggerItem key={m.key}>
                <FloatingCard className="h-full">
                  <div className="glass-panel hover-lift flex h-full flex-col p-6">
                    <div className="flex items-start justify-between">
                      <span
                        className={`${m.accent} flex h-12 w-12 items-center justify-center rounded-xl text-xl`}
                      >
                        <m.icon className="h-6 w-6 text-white" />
                      </span>
                      <span className="glass-panel-light rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-ink-100">
                        {t(`modes.${m.key}.badge`)}
                      </span>
                    </div>

                    <h3 className="mt-4 flex items-center gap-1.5 text-base font-semibold text-ink-100">
                      <span aria-hidden>{m.emoji}</span>
                      {t(`modes.${m.key}.title`)}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-ink-400">
                      {t(`modes.${m.key}.desc`)}
                    </p>

                    <ul className="mt-4 space-y-2">
                      {features.map((f) => (
                        <li
                          key={f}
                          className="flex items-start gap-2 text-xs text-ink-400"
                        >
                          <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand-gold" />
                          {f}
                        </li>
                      ))}
                    </ul>

                    <Link
                      href="/services"
                      className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-ink-100 hover:text-brand-gold"
                    >
                      {t("learnMore")}
                      <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  </div>
                </FloatingCard>
              </StaggerItem>
            );
          })}
        </StaggerGrid>
      </div>
    </section>
  );
}
