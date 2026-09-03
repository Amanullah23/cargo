"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Plane, Truck, TrainFront } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";

type Point = { top: number; left: number };

function bezier(p0: Point, pc: Point, p1: Point, steps = 12): Point[] {
  const pts: Point[] = [];
  for (let i = 0; i <= steps; i++) {
    const t = i / steps;
    const top =
      (1 - t) ** 2 * p0.top + 2 * (1 - t) * t * pc.top + t ** 2 * p1.top;
    const left =
      (1 - t) ** 2 * p0.left + 2 * (1 - t) * t * pc.left + t ** 2 * p1.left;
    pts.push({ top, left });
  }
  return pts;
}

function pathD(p0: Point, pc: Point, p1: Point) {
  return `M ${p0.left} ${p0.top} Q ${pc.left} ${pc.top} ${p1.left} ${p1.top}`;
}

const HUB: Point = { top: 50, left: 50 };

const ROUTES = [
  {
    key: "centralAsia",
    dest: { top: 14, left: 50 },
    control: { top: 32, left: 58 },
    icon: Truck,
    accent: "bg-accent-secure",
    duration: 5,
  },
  {
    key: "china",
    dest: { top: 24.5, left: 78.3 },
    control: { top: 43.2, left: 69.5 },
    icon: TrainFront,
    accent: "bg-accent-network",
    duration: 6,
  },
  {
    key: "pakistan",
    dest: { top: 50, left: 90 },
    control: { top: 58, left: 70 },
    icon: Truck,
    accent: "bg-accent-support",
    duration: 5,
  },
  {
    key: "india",
    dest: { top: 75.5, left: 78.3 },
    control: { top: 68.7, left: 58.8 },
    icon: Plane,
    accent: "bg-brand-blue",
    duration: 6.5,
  },
  {
    key: "gulf",
    dest: { top: 86, left: 50 },
    control: { top: 68, left: 42 },
    icon: Plane,
    accent: "bg-brand-gold",
    duration: 6,
  },
  {
    key: "middleEast",
    dest: { top: 75.5, left: 21.7 },
    control: { top: 56.8, left: 30.5 },
    icon: Plane,
    accent: "bg-brand-blue-light",
    duration: 6.5,
  },
  {
    key: "iran",
    dest: { top: 50, left: 10 },
    control: { top: 42, left: 30 },
    icon: Truck,
    accent: "bg-brand-violet",
    duration: 5.5,
  },
  {
    key: "europe",
    dest: { top: 24.5, left: 21.7 },
    control: { top: 31.3, left: 41.2 },
    icon: Plane,
    accent: "bg-accent-tracking",
    duration: 7,
  },
] as const;

export default function TradeRoutes() {
  const t = useTranslations("tradeRoutes");

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

        <Reveal delay={0.1}>
          <div className="glass-panel mt-8 p-6 sm:p-10">
            <div className="relative mx-auto aspect-square w-full max-w-2xl">
              <svg
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                className="absolute inset-0 h-full w-full"
              >
                {ROUTES.map((r) => (
                  <motion.path
                    key={r.key}
                    d={pathD(HUB, r.control, r.dest)}
                    fill="none"
                    stroke="var(--glass-border)"
                    strokeWidth="0.5"
                    strokeDasharray="1.5 2"
                    animate={{ strokeDashoffset: [0, -14] }}
                    transition={{
                      duration: r.duration,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                ))}
              </svg>

              <div
                className="glass-panel absolute z-10 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1 px-4 py-3"
                style={{ top: `${HUB.top}%`, left: `${HUB.left}%` }}
              >
                <span className="text-xl">🇦🇫</span>
                <span className="whitespace-nowrap text-xs font-semibold text-ink-100">
                  {t("hubName")}
                </span>
                <span className="whitespace-nowrap text-[10px] text-ink-400">
                  {t("hubSub")}
                </span>
              </div>

              {ROUTES.map((r) => {
                const pts = bezier(HUB, r.control, r.dest);
                return (
                  <div key={r.key}>
                    <div
                      className="glass-panel-light absolute z-10 flex -translate-x-1/2 -translate-y-1/2 items-center gap-1.5 px-3 py-1.5"
                      style={{ top: `${r.dest.top}%`, left: `${r.dest.left}%` }}
                    >
                      <span
                        className={`${r.accent} h-2 w-2 shrink-0 rounded-full`}
                      />
                      <span className="whitespace-nowrap text-xs font-medium text-ink-100">
                        {t(`routes.${r.key}`)}
                      </span>
                    </div>

                    <motion.div
                      className={`${r.accent} absolute z-20 flex h-8 w-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-lg shadow-lg`}
                      animate={{
                        top: pts.map((p) => `${p.top}%`),
                        left: pts.map((p) => `${p.left}%`),
                      }}
                      transition={{
                        duration: r.duration,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    >
                      <r.icon className="h-4 w-4 text-white" />
                    </motion.div>
                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
