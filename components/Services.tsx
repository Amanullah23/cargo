import { useTranslations } from "next-intl";
import {
  Plane,
  Ship,
  Truck,
  Warehouse,
  FileCheck,
  ShieldCheck,
} from "lucide-react";
import { Reveal, StaggerGrid, StaggerItem } from "@/components/motion/Reveal";

export default function Services() {
  const t = useTranslations("services");

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
        <Reveal className="max-w-xl">
          <h2 className="text-2xl font-bold tracking-tight text-ink-100 sm:text-3xl">
            {t("heading")}
          </h2>
          <p className="mt-2 text-sm text-ink-400 sm:text-base">
            {t("subheading")}
          </p>
        </Reveal>

        <StaggerGrid className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <StaggerItem
              key={s.key}
              className="glass-panel hover-lift p-6 transition-colors hover:bg-[color:var(--glass-light-bg)]"
            >
              <span
                className={`${s.accent} flex h-11 w-11 items-center justify-center rounded-xl`}
              >
                <s.icon className="h-5 w-5 text-white" />
              </span>
              <h3 className="mt-4 text-base font-semibold text-ink-100">
                {t(`items.${s.key}.title`)}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-400">
                {t(`items.${s.key}.desc`)}
              </p>
            </StaggerItem>
          ))}
        </StaggerGrid>
      </div>
    </section>
  );
}
