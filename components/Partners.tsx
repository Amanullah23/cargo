import { useTranslations } from "next-intl";
import { ShieldCheck } from "lucide-react";
import { Reveal, StaggerGrid, StaggerItem } from "@/components/motion/Reveal";

const PARTNERS = ["MAERSK", "DHL", "FedEx", "MSC", "COSCO", "Hapag-Lloyd"];

export default function Partners() {
  const t = useTranslations("partners");

  return (
    <section className="px-4 pb-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="glass-panel flex flex-col items-center gap-6 p-6 sm:p-8 lg:flex-row lg:justify-between">
            <StaggerGrid
              stagger={0.06}
              className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4"
            >
              {PARTNERS.map((name) => (
                <StaggerItem key={name}>
                  <span className="text-lg font-bold tracking-tight text-ink-400 opacity-80 transition-opacity hover:text-ink-100 hover:opacity-100 sm:text-xl">
                    {name}
                  </span>
                </StaggerItem>
              ))}
            </StaggerGrid>

            <div className="flex items-center gap-2 whitespace-nowrap text-xs text-ink-400 sm:text-sm">
              <ShieldCheck className="h-4 w-4 shrink-0 text-brand-gold" />
              {t("trustText")}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
