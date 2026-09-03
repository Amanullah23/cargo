"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { motion } from "framer-motion";
import { ArrowUpRight, PhoneCall } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";

export default function Cta() {
  const t = useTranslations("cta");

  return (
    <section className="px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Reveal y={32}>
          <div className="brand-gradient relative overflow-hidden rounded-glass p-8 sm:p-12">
            <motion.div
              className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-white/10 blur-3xl"
              animate={{ x: [0, 20, 0], y: [0, -14, 0] }}
              transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="pointer-events-none absolute -bottom-20 left-1/3 h-56 w-56 rounded-full bg-white/10 blur-3xl"
              animate={{ x: [0, -18, 0], y: [0, 16, 0] }}
              transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
            />

            <div className="relative flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                  {t("heading")}
                </h2>
                <p className="mt-2 max-w-lg text-sm text-white/80 sm:text-base">
                  {t("desc")}
                </p>
              </div>

              <div className="flex shrink-0 flex-wrap items-center gap-3">
                <Link
                  href="/contact"
                  className="flex items-center gap-1.5 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-navy-950 transition-opacity hover:opacity-90"
                >
                  {t("quoteButton")}
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
                <a
                  href="tel:+937XXXXXXXX"
                  className="flex items-center gap-1.5 rounded-xl border border-white/30 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10"
                >
                  <PhoneCall className="h-4 w-4" />
                  {t("callButton")}
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
