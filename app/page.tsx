import dynamic from "next/dynamic";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Manifesto from "@/components/Manifesto";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Differentiator from "@/components/Differentiator";
import Process from "@/components/Process";
import About from "@/components/About";
import CTAFinal from "@/components/CTAFinal";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import MobileCTA from "@/components/MobileCTA";

// WebGL/Canvas can only run in the browser, so the lagoon is loaded
// client-side only. This avoids hydration mismatches and keeps the
// server render fast and lightweight.
const Lagoon = dynamic(() => import("@/components/Lagoon"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <Nav />

      <div className="fixed inset-0 z-0 h-screen w-screen">
        <Lagoon />
      </div>

      <Hero />

      <main className="relative z-[2] border-t border-white/10 bg-bg">
        <Manifesto />
        <Services />
        <Projects />
        <Differentiator />
        <Process />
        <About />
        <CTAFinal />
        <Contact />
        <Footer />
      </main>

      <MobileCTA />
    </>
  );
}
