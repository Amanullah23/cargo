import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import TransportModes from "@/components/TransportModes";
import TradeRoutes from "@/components/TradeRoutes";
import Services from "@/components/Services";
import ExportProducts from "@/components/ExportProducts";
import Partners from "@/components/Partners";
import Cta from "@/components/Cta";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <TransportModes />
      <TradeRoutes />
      <Services />
      <ExportProducts />
      <Partners />
      <Cta />
    </>
  );
}
