import { About } from "@/components/sections/About";
import { Academics } from "@/components/sections/Academics";
import { Admissions } from "@/components/sections/Admissions";
import { CTA } from "@/components/sections/CTA";
import { Footer } from "@/components/sections/Footer";
import { Hero } from "@/components/sections/Hero";
import { Navbar } from "@/components/sections/Navbar";
import { ScrollProgress } from "@/components/animation/ScrollProgress";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <ScrollProgress />
      <Navbar />
      <Hero />
      <About />
      <Academics />
      <Admissions />
      <CTA />
      <Footer />
    </main>
  );
}
