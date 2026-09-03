import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Plane, MessageCircle, Mail, Phone, MapPin } from "lucide-react";

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
      <path d="M22 12.06C22 6.51 17.52 2 12 2S2 6.51 2 12.06C2 17.06 5.66 21.2 10.44 21.95V14.9H7.9v-2.84h2.54v-2.17c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.84h2.77l-.44 2.84h-2.33v7.05C18.34 21.2 22 17.06 22 12.06Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
      <path d="M12 2c2.72 0 3.06.01 4.12.06 1.06.05 1.79.22 2.43.47.66.26 1.21.6 1.76 1.15.55.55.9 1.1 1.15 1.76.25.64.42 1.37.47 2.43.05 1.06.06 1.4.06 4.12s-.01 3.06-.06 4.12c-.05 1.06-.22 1.79-.47 2.43a4.9 4.9 0 0 1-1.15 1.76c-.55.55-1.1.9-1.76 1.15-.64.25-1.37.42-2.43.47-1.06.05-1.4.06-4.12.06s-3.06-.01-4.12-.06c-1.06-.05-1.79-.22-2.43-.47a4.9 4.9 0 0 1-1.76-1.15 4.9 4.9 0 0 1-1.15-1.76c-.25-.64-.42-1.37-.47-2.43C2.01 15.06 2 14.72 2 12s.01-3.06.06-4.12c.05-1.06.18-1.79.3-2.43.26-.66.6-1.21 1.15-1.76A4.9 4.9 0 0 1 5.44 2.53c.64-.25 1.37-.42 2.43-.47C8.94 2.01 9.28 2 12 2Zm0 1.8c-2.67 0-2.99.01-4.04.06-.87.04-1.34.18-1.65.3-.42.16-.71.35-1.02.66-.31.31-.5.6-.66 1.02-.12.31-.26.78-.3 1.65C4.28 8.5 4.27 8.82 4.27 12s.01 3.5.06 4.51c.04.87.18 1.34.3 1.65.16.42.35.71.66 1.02.31.31.6.5 1.02.66.31.12.78.26 1.65.3 1.05.05 1.37.06 4.04.06s2.99-.01 4.04-.06c.87-.04 1.34-.18 1.65-.3.42-.16.71-.35 1.02-.66.31-.31.5-.6.66-1.02.12-.31.26-.78.3-1.65.05-1.01.06-1.33.06-4.51s-.01-3.5-.06-4.51c-.04-.87-.18-1.34-.3-1.65a2.7 2.7 0 0 0-.66-1.02 2.7 2.7 0 0 0-1.02-.66c-.31-.12-.78-.26-1.65-.3C14.99 3.81 14.67 3.8 12 3.8Zm0 3.15a5.05 5.05 0 1 1 0 10.1 5.05 5.05 0 0 1 0-10.1Zm0 1.8a3.25 3.25 0 1 0 0 6.5 3.25 3.25 0 0 0 0-6.5Zm5.25-2a1.18 1.18 0 1 1 0 2.36 1.18 1.18 0 0 1 0-2.36Z" />
    </svg>
  );
}

const OFFICE_PHONES = ["+93 (0) 7XX XXX XX1", "+93 (0) 7XX XXX XX2"];

export default function Footer() {
  const t = useTranslations("footer");
  const tNav = useTranslations("nav");

  const QUICK_LINKS = [
    { label: tNav("home"), href: "/" },
    { label: tNav("about"), href: "/about" },
    { label: tNav("services"), href: "/services" },
    { label: tNav("offices"), href: "/offices" },
    { label: tNav("contact"), href: "/contact" },
  ];

  return (
    <footer className="mt-24 w-full px-4 pb-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="glass-panel grid gap-10 p-8 sm:p-10 lg:grid-cols-[1.3fr_1fr_1fr]">
          <div>
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
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink-400">
              {t("tagline")}
            </p>
            <div className="mt-5 flex items-center gap-3">
              <a
                href="#"
                aria-label="Facebook"
                className="glass-panel-light flex h-9 w-9 items-center justify-center rounded-lg text-ink-400 hover:text-ink-100"
              >
                <FacebookIcon />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="glass-panel-light flex h-9 w-9 items-center justify-center rounded-lg text-ink-400 hover:text-ink-100"
              >
                <InstagramIcon />
              </a>
              <a
                href="#"
                aria-label="WhatsApp"
                className="glass-panel-light flex h-9 w-9 items-center justify-center rounded-lg text-ink-400 hover:text-ink-100"
              >
                <MessageCircle className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-ink-100">
              {t("quickLinks")}
            </h3>
            <ul className="mt-4 space-y-2.5">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-ink-400 hover:text-ink-100"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-ink-100">
              {t("contact")}
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-ink-400">
              {OFFICE_PHONES.map((p, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-brand-gold" />
                  {p}
                </li>
              ))}
              <li className="flex items-start gap-2.5">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-brand-gold" />
                info@arianacargo.af
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-gold" />
                Shahr-e-Naw, Kabul, Afghanistan
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-4 flex flex-col items-center justify-between gap-2 px-2 text-xs text-ink-400 sm:flex-row">
          <p>
            © {new Date().getFullYear()} Ariana Cargo. {t("copyright")}
          </p>
          <p>Kabul, Afghanistan</p>
        </div>
      </div>
    </footer>
  );
}
