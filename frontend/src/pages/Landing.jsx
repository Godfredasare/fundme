import Hero from "../components/landing/Hero";
import Features from "../components/landing/Features";
import HowItWorks from "../components/landing/HowItWorks";
import CTASection from "../components/landing/CTASection";

export default function Landing() {
  return (
    <div className="animate-fade-in">
      <Hero />
      <Features />
      <HowItWorks />
      <CTASection />
    </div>
  );
}