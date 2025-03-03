import Hero from "@/components/hero";
import Features from "@/components/features";
import Benefits from "@/components/benefits";
import Testimonials from "@/components/testimonials";
import Pricing from "@/components/pricing";
import FAQ from "@/components/faq";
import CTA from "@/components/cta";
import Courses from "@/components/courses";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <Hero />
      <Features />
      <Benefits />
      <Courses />
      <Testimonials />
      <Pricing />
      <FAQ />
      <CTA />
    </div>
  );
}