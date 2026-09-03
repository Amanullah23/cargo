import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import {
  Plane,
  Ship,
  Truck,
  Warehouse,
  FileCheck,
  ShieldCheck,
  CheckCircle2,
  ArrowUpRight,
} from "lucide-react";
import { Reveal, StaggerGrid, StaggerItem } from "@/components/motion/Reveal";

export default function ServicesSection() {
  const t = useTranslations("servicesPage");

  const SERVICES = [
    { key: "air", icon: Plane, accent: "bg-accent-tracking" },
    { key: "sea", icon: Ship, accent: "bg-accent-network" },
    { key: "land", icon: Truck, accent: "bg-accent-secure" },
    { key: "warehousing", icon: Warehouse, accent: "bg-brand-violet" },
    { key: "customs", icon: FileCheck, accent: "bg-accent-support" },
    { key: "insurance", icon: ShieldCheck, accent: "bg-brand-blue-light" },
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

        <StaggerGrid className="mt-8 grid gap-5 lg:grid-cols-2">
          {SERVICES.map((s) => {
            const features = t.raw(`items.${s.key}.features`) as string[];
            return (
              <StaggerItem
                key={s.key}
                className="glass-panel hover-lift p-6 sm:p-8"
              >
                <span
                  className={`${s.accent} flex h-11 w-11 items-center justify-center rounded-xl`}
                >
                  <s.icon className="h-5 w-5 text-white" />
                </span>
                <h2 className="mt-4 text-lg font-semibold text-ink-100">
                  {t(`items.${s.key}.title`)}
                </h2>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-400">
                  {t(`items.${s.key}.desc`)}
                </p>

                <ul className="mt-4 space-y-2">
                  {features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-2 text-sm text-ink-400"
                    >
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-gold" />
                      {f}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-ink-100 hover:text-brand-gold"
                >
                  {t("requestQuote")}
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </StaggerItem>
            );
          })}
        </StaggerGrid>
      </div>
    </section>
  );
}
