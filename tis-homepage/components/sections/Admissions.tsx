import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { ScrollReveal } from "@/components/animation/ScrollReveal";

const steps = [
  { title: "Submit enquiry", copy: "Share your child’s details and preferred grade for a personalised response." },
  { title: "Campus interaction", copy: "Visit us for a guided walkthrough and meet our teaching and student community." },
  { title: "Secure admission", copy: "Complete the formal process and welcome your child into the TIS family." },
];

export function Admissions() {
  return (
    <section id="admissions" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <ScrollReveal className="mb-12 max-w-3xl">
        <p className="text-sm font-bold uppercase tracking-[0.26em] text-brand-blue dark:text-brand-gold">Admissions</p>
        <h2 className="mt-4 text-3xl font-black tracking-[-0.04em] text-slate-900 sm:text-4xl dark:text-white">
          A simple process, a life-changing experience.
        </h2>
      </ScrollReveal>

      <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
        <div className="grid gap-6 md:grid-cols-3">
          {steps.map((step, index) => (
            <ScrollReveal key={step.title} className="h-full">
              <Card className="h-full border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-900/60">
                <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-full bg-brand-gold/20 text-sm font-black text-brand-blue dark:text-brand-gold">
                  0{index + 1}
                </div>
                <h3 className="text-xl font-black text-slate-900 dark:text-white">{step.title}</h3>
                <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-300">{step.copy}</p>
              </Card>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <Card className="h-full border-brand-blue/20 bg-gradient-to-br from-brand-blue to-brand-blue-dark p-7 text-white shadow-[0_30px_70px_rgba(17,24,39,0.25)]">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-blue-100">Admissions Helpline</p>
            <h3 className="mt-4 text-3xl font-black">Speak to our team today.</h3>
            <div className="mt-8 space-y-4 text-blue-50">
              <p>+91-98379 83791</p>
              <p>info@tis.edu.in</p>
              <p>Dhoolkot, P.O – Selaqui, Chakrata Road, Dehradun</p>
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button type="button" variant="secondary" className="w-full border-white/40 bg-white/10 text-white hover:bg-white/20">
                Call Now
              </Button>
              <Button type="button" variant="ghost" className="w-full bg-white/10 text-white hover:bg-white/15">
                Enquire Now
              </Button>
            </div>
          </Card>
        </ScrollReveal>
      </div>
    </section>
  );
}
