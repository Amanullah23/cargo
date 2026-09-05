"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";

const PRODUCTS = [
  { key: "womens", image: "/images/product1.jpeg" },
  { key: "mens", image: "/images/product2.jpeg" },
  { key: "freshFruits", image: "/images/product3.jpeg" },
  { key: "driedFruits", image: "/images/product4.jpeg" },
  { key: "handicrafts", image: "/images/product5.jpeg" },
] as const;

const AUTO_MS = 4000;

export default function ExportProducts() {
  const t = useTranslations("exportProducts");
  const [index, setIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const [direction, setDirection] = useState(1);

  const next = useCallback(() => {
    setDirection(1);
    setIndex((i) => (i + 1) % PRODUCTS.length);
  }, []);

  const prev = () => {
    setDirection(-1);
    setIndex((i) => (i - 1 + PRODUCTS.length) % PRODUCTS.length);
  };

  useEffect(() => {
    if (!autoPlay) return;
    const id = setInterval(next, AUTO_MS);
    return () => clearInterval(id);
  }, [autoPlay, next]);

  const product = PRODUCTS[index];

  return (
    <section className="px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <Reveal className="text-center">
          <h2 className="text-2xl font-bold tracking-tight text-ink-100 sm:text-3xl">
            {t("heading")}
          </h2>
          <p className="mt-2 text-sm text-ink-400 sm:text-base">
            {t("subheading")}
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div
            className="glass-panel relative mt-8 overflow-hidden"
            onMouseEnter={() => setAutoPlay(false)}
            onMouseLeave={() => setAutoPlay(true)}
          >
            <div className="relative h-72 w-full sm:h-96">
              <AnimatePresence mode="wait">
                <motion.div
                  key={product.key}
                  initial={{ opacity: 0, x: direction * 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -direction * 40 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0"
                >
                  <Image
                    src={product.image}
                    alt={t(`items.${product.key}`)}
                    fill
                    priority={index === 0}
                    className="object-cover"
                  />
                </motion.div>
              </AnimatePresence>

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

              <span className="glass-panel-solid absolute bottom-4 start-4 rounded-full px-3 py-1 text-xs font-semibold text-white">
                {t("categoryOf", {
                  current: index + 1,
                  total: PRODUCTS.length,
                })}
              </span>
              <h3 className="absolute bottom-4 end-4 text-lg font-bold text-white drop-shadow-md sm:text-xl">
                {t(`items.${product.key}`)}
              </h3>

              <button
                onClick={prev}
                aria-label="Previous"
                className="glass-panel-light absolute start-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full text-white"
              >
                <ChevronLeft className="h-5 w-5 rtl:rotate-180" />
              </button>
              <button
                onClick={next}
                aria-label="Next"
                className="glass-panel-light absolute end-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full text-white"
              >
                <ChevronRight className="h-5 w-5 rtl:rotate-180" />
              </button>
            </div>
          </div>
        </Reveal>

        <div className="mt-4 flex items-center justify-center gap-2">
          {PRODUCTS.map((p, i) => (
            <button
              key={p.key}
              onClick={() => {
                setDirection(i > index ? 1 : -1);
                setIndex(i);
              }}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-1.5 rounded-full transition-all ${
                i === index
                  ? "w-6 bg-brand-gold"
                  : "w-1.5 bg-[color:var(--glass-border)]"
              }`}
            />
          ))}
        </div>

        <button
          onClick={() => setAutoPlay((v) => !v)}
          className="mx-auto mt-3 flex items-center gap-1.5 text-xs text-ink-400 hover:text-ink-100"
        >
          {autoPlay ? (
            <Pause className="h-3.5 w-3.5" />
          ) : (
            <Play className="h-3.5 w-3.5" />
          )}
          {t("auto")}
        </button>
      </div>
    </section>
  );
}
