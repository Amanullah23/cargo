import { useTranslations } from "next-intl";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { Reveal, StaggerGrid, StaggerItem } from "@/components/motion/Reveal";

const OFFICE_PHONES = ["+93 (0) 7XX XXX XX1", "+93 (0) 7XX XXX XX2"];

export default function ContactSection() {
  const t = useTranslations("contactPage");

  return (
    <section className="px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Reveal className="max-w-xl">
          <h1 className="text-3xl font-bold tracking-tight text-ink-100 sm:text-4xl">
            {t("heading")}
          </h1>
          <p className="mt-2 text-sm text-ink-400 sm:text-base">{t("desc")}</p>
        </Reveal>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1.4fr_1fr]">
          <Reveal delay={0.1}>
            <form className="glass-panel space-y-4 p-6 sm:p-8">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-xs font-medium text-ink-400">
                    {t("form.fullName")}
                  </label>
                  <input
                    type="text"
                    placeholder={t("form.fullNamePlaceholder")}
                    className="glass-panel-light w-full px-4 py-2.5 text-sm text-ink-100 placeholder:text-ink-400 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-xs font-medium text-ink-400">
                    {t("form.email")}
                  </label>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="glass-panel-light w-full px-4 py-2.5 text-sm text-ink-100 placeholder:text-ink-400 focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-xs font-medium text-ink-400">
                    {t("form.phone")}
                  </label>
                  <input
                    type="tel"
                    placeholder={t("form.phonePlaceholder")}
                    className="glass-panel-light w-full px-4 py-2.5 text-sm text-ink-100 placeholder:text-ink-400 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-xs font-medium text-ink-400">
                    {t("form.company")}
                  </label>
                  <input
                    type="text"
                    placeholder={t("form.companyPlaceholder")}
                    className="glass-panel-light w-full px-4 py-2.5 text-sm text-ink-100 placeholder:text-ink-400 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="mb-1.5 block text-xs font-medium text-ink-400">
                  {t("form.message")}
                </label>
                <textarea
                  rows={5}
                  placeholder={t("form.messagePlaceholder")}
                  className="glass-panel-light w-full resize-none px-4 py-2.5 text-sm text-ink-100 placeholder:text-ink-400 focus:outline-none"
                />
              </div>

              <button
                type="button"
                className="brand-gradient flex items-center gap-1.5 rounded-xl px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
              >
                {t("form.submit")}
                <Send className="h-4 w-4" />
              </button>
            </form>
          </Reveal>

          <StaggerGrid className="space-y-4">
            <StaggerItem className="glass-panel hover-lift p-6">
              <span className="brand-gradient flex h-10 w-10 items-center justify-center rounded-xl">
                <Phone className="h-5 w-5 text-white" />
              </span>
              <h3 className="mt-3 text-sm font-semibold text-ink-100">
                {t("phoneCard")}
              </h3>
              <div className="mt-1.5 space-y-0.5">
                {OFFICE_PHONES.map((p, i) => (
                  <p key={i} className="text-sm text-ink-400">
                    {p}
                  </p>
                ))}
              </div>
            </StaggerItem>

            <StaggerItem className="glass-panel hover-lift p-6">
              <span className="bg-accent-network flex h-10 w-10 items-center justify-center rounded-xl">
                <Mail className="h-5 w-5 text-white" />
              </span>
              <h3 className="mt-3 text-sm font-semibold text-ink-100">
                {t("emailCard")}
              </h3>
              <p className="mt-1.5 text-sm text-ink-400">info@arianacargo.af</p>
            </StaggerItem>

            <StaggerItem className="glass-panel hover-lift p-6">
              <span className="bg-accent-secure flex h-10 w-10 items-center justify-center rounded-xl">
                <MapPin className="h-5 w-5 text-white" />
              </span>
              <h3 className="mt-3 text-sm font-semibold text-ink-100">
                {t("officeCard")}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-400">
                Shahr-e-Naw, Kabul, Afghanistan
              </p>
            </StaggerItem>
          </StaggerGrid>
        </div>
      </div>
    </section>
  );
}
