import { useTranslations } from "next-intl";
import { Globe2, PackageCheck, Timer, Headphones } from "lucide-react";
import { Reveal, StaggerGrid, StaggerItem } from "@/components/motion/Reveal";

export default function Stats() {
  const t = useTranslations("stats");

  const STATS = [
    { key: "countries", icon: Globe2, value: "120+" },
    { key: "shipments", icon: PackageCheck, value: "15K+" },
    { key: "onTime", icon: Timer, value: "98%" },
    { key: "support", icon: Headphones, value: "24/7" },
  ] as const;

  return (
    <section className="px-4 pb-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <StaggerGrid className="glass-panel grid grid-cols-2 gap-6 p-6 sm:p-8 lg:grid-cols-4">
            {STATS.map((s) => (
              <StaggerItem
                key={s.key}
                className="hover-lift flex items-center gap-3"
              >
                <span className="glass-panel-light flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-brand-blue-light">
                  <s.icon className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xl font-bold text-ink-100 sm:text-2xl">
                    {s.value}
                  </p>
                  <p className="text-xs text-ink-400">
                    {t(`${s.key}.label`)}{" "}
                    <span className="hidden sm:inline">
                      {t(`${s.key}.sub`)}
                    </span>
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </Reveal>
      </div>
    </section>
  );
}
