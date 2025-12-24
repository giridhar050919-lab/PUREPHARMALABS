import { useEffect, useRef } from "react";
import HeroSection from "@/react-app/components/HeroSection";
import AboutSection from "@/react-app/components/AboutSection";
import ProductsSection from "@/react-app/components/ProductsSection";
import ContactSection from "@/react-app/components/ContactSection";

export default function HomePage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.style.margin = "0";
    document.body.style.padding = "0";
    document.body.style.overflow = "auto";
  }, []);

  return (
    <div ref={containerRef} className="relative bg-gradient-to-b from-slate-900 to-slate-800">
      <HeroSection />
      <AboutSection />
      <ProductsSection />
      <ContactSection />
    </div>
  );
}
