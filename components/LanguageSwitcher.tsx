"use client";

import { useState, useRef, useEffect } from "react";
import { useLocale } from "next-intl";
import { Globe, Check } from "lucide-react";
import { usePathname, useRouter } from "@/i18n/navigation";

const LOCALES = [
  { code: "en", label: "English", short: "EN" },
  { code: "fa-AF", label: "دری", short: "دری" },
  { code: "ps", label: "پښتو", short: "پښتو" },
];

export default function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const current = LOCALES.find((l) => l.code === locale) ?? LOCALES[0];

  function switchTo(code: string) {
    router.replace(pathname, { locale: code });
    setOpen(false);
  }

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen((v) => !v)}
        className="glass-panel-light flex items-center gap-1.5 px-3 py-2 text-sm text-ink-100"
      >
        <Globe className="h-4 w-4" />
        {current.short}
      </button>

      {open && (
        <div className="glass-panel-solid absolute start-0 top-full z-50 mt-2 w-36 overflow-hidden p-1">
          {LOCALES.map((l) => (
            <button
              key={l.code}
              onClick={() => switchTo(l.code)}
              className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-start text-sm text-ink-100 hover:bg-[color:var(--glass-light-bg)]"
            >
              {l.label}
              {l.code === locale && (
                <Check className="h-4 w-4 text-brand-gold" />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
