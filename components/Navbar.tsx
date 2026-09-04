"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Plane, Menu, X, ArrowUpRight } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";
import LanguageSwitcher from "@/components/LanguageSwitcher";

export default function Navbar() {
  const t = useTranslations("nav");
  const [open, setOpen] = useState(false);

  const NAV_LINKS = [
    { label: t("home"), href: "/" },
    { label: t("services"), href: "/services" },
    { label: t("offices"), href: "/offices" },
    { label: t("about"), href: "/about" },
    { label: t("contact"), href: "/contact" },
  ];

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="sticky top-0 z-50 w-full border-b border-[color:var(--glass-border)] bg-navy-950/55 backdrop-blur-xl"
    >
      <div className="relative mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
        <div className="glass-panel flex items-center justify-between px-4 py-3 sm:px-6">
          <Link href="/" className="flex items-center gap-2.5">
            <span className="brand-gradient flex h-9 w-9 items-center justify-center rounded-xl">
              <Plane
                className="h-[18px] w-[18px] -rotate-45 text-white"
                strokeWidth={2.25}
              />
            </span>
            <span className="text-lg font-semibold tracking-tight text-ink-100">
              Ariana <span className="text-brand-gold">Cargo</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-ink-400 transition-colors hover:text-ink-100"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <ThemeToggle />
            <LanguageSwitcher />
            <Link
              href="/contact"
              className="brand-gradient flex items-center gap-1.5 rounded-xl px-4 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
            >
              {t("getQuote")}
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle />
            <button
              onClick={() => setOpen((v) => !v)}
              className="glass-panel-light flex h-10 w-10 items-center justify-center rounded-xl"
              aria-label="Toggle menu"
            >
              {open ? (
                <X className="h-5 w-5 text-ink-100" />
              ) : (
                <Menu className="h-5 w-5 text-ink-100" />
              )}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              key="mobile-menu"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="glass-panel-solid absolute inset-x-4 top-full z-40 mt-2 flex flex-col gap-1 p-4 sm:inset-x-6 lg:hidden"
            >
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2.5 text-sm font-medium text-ink-400 hover:bg-[color:var(--glass-light-bg)] hover:text-ink-100"
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-2 flex items-center gap-3 border-t border-[color:var(--glass-border)] pt-3">
                <LanguageSwitcher />
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="brand-gradient flex flex-1 items-center justify-center gap-1.5 rounded-xl px-4 py-2.5 text-sm font-semibold text-white"
                >
                  {t("getQuote")}
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
