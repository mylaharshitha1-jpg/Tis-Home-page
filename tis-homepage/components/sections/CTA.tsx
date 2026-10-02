import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/animation/ScrollReveal";

export function CTA() {
  return (
    <section id="cta" className="bg-gradient-to-r from-brand-blue to-brand-blue-dark py-20 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="flex flex-col gap-8 rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-sm lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.26em] text-blue-100">Take the next step</p>
            <h2 className="mt-4 text-3xl font-black tracking-[-0.04em] sm:text-4xl">
              Discover a school where every child can thrive.
            </h2>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Link href="#admissions">
              <Button type="button" variant="secondary" className="w-full border-white/30 bg-white/10 text-white hover:bg-white/20">
                Enquire Now
              </Button>
            </Link>
            <Link href="tel:+919837983791">
              <Button type="button" variant="ghost" className="w-full border border-white/20 bg-transparent text-white hover:bg-white/10">
                +91-98379 83791
              </Button>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
