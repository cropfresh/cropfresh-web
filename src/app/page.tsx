import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import ProblemStatement from "@/components/home/ProblemStatement";
import Features from "@/components/home/Features";
import HowItWorks from "@/components/home/HowItWorks";
import ImpactMetrics from "@/components/home/ImpactMetrics";
import MarketOpportunity from "@/components/home/MarketOpportunity";
import Testimonials from "@/components/home/Testimonials";
import FAQ from "@/components/home/FAQ";
import EarlyAccess from "@/components/home/EarlyAccess";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <ProblemStatement />
        <Features />
        <HowItWorks />
        <ImpactMetrics />
        <MarketOpportunity />
        <Testimonials />
        <FAQ />
        <EarlyAccess />
      </main>
      <Footer />
    </div>
  );
}
