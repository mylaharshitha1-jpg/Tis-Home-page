import { Card } from "@/components/ui/Card";
import { ScrollReveal } from "@/components/animation/ScrollReveal";

const pillars = [
  "Academic rigour with a global outlook",
  "Values-led education and personal growth",
  "Nurturing boarding culture and student wellbeing",
  "Innovation, creativity, and leadership",
];

export function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <ScrollReveal className="mb-10 max-w-3xl">
        <p className="text-sm font-bold uppercase tracking-[0.26em] text-brand-blue dark:text-brand-gold">About TIS</p>
        <h2 className="mt-4 text-3xl font-black tracking-[-0.04em] text-slate-900 sm:text-4xl dark:text-white">
          Building confident learners for a brighter future.
        </h2>
      </ScrollReveal>

      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <ScrollReveal>
          <Card className="h-full border-slate-200/80 bg-slate-50/80 dark:border-slate-700 dark:bg-slate-900/60">
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-300">
              Established under the aegis of the Rishabh Educational Trust, Tulas International School is committed to
              providing a transformative learning experience. We shape students who are intellectually curious, socially
              aware, and ready to lead with integrity.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                { value: "2012", label: "Founded" },
                { value: "100%", label: "Holistic learning" },
                { value: "12:1", label: "Student focus" },
                { value: "24/7", label: "Support" },
              ].map((item) => (
                <div key={item.label} className="rounded-2xl bg-white p-4 shadow-sm dark:bg-slate-800">
                  <p className="text-2xl font-black text-brand-blue dark:text-brand-gold">{item.value}</p>
                  <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{item.label}</p>
                </div>
              ))}
            </div>
          </Card>
        </ScrollReveal>

        <ScrollReveal>
          <Card className="h-full border-brand-gold/30 bg-gradient-to-br from-brand-gold/10 to-white dark:from-brand-gold/10 dark:to-slate-900">
            <h3 className="text-2xl font-black text-slate-900 dark:text-white">What makes TIS different</h3>
            <ul className="mt-8 space-y-4">
              {pillars.map((pillar) => (
                <li key={pillar} className="flex items-start gap-3 text-slate-700 dark:text-slate-200">
                  <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-brand-blue text-xs font-black text-white dark:bg-brand-gold dark:text-brand-blue">
                    ✓
                  </span>
                  <span>{pillar}</span>
                </li>
              ))}
            </ul>
          </Card>
        </ScrollReveal>
      </div>
    </section>
  );
}
