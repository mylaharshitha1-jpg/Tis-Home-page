import { Card } from "@/components/ui/Card";
import { ScrollReveal } from "@/components/animation/ScrollReveal";

const programs = [
  {
    title: "Foundation & Primary",
    copy: "Strong literacy, numeracy, and inquiry-led learning that develops confidence and curiosity from the early years.",
  },
  {
    title: "Middle School",
    copy: "Concept-driven teaching, project work, and skill-building experiences that support deeper understanding and growth.",
  },
  {
    title: "Senior Secondary",
    copy: "A rigorous CBSE pathway that balances academic mastery, examinations, and future-ready competencies.",
  },
  {
    title: "Co-curricular Excellence",
    copy: "Sports, performing arts, leadership clubs, and innovation labs complement classroom learning in meaningful ways.",
  },
];

export function Academics() {
  return (
    <section id="academics" className="bg-slate-100/80 py-20 dark:bg-slate-900/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="mb-12 max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.26em] text-brand-blue dark:text-brand-gold">Academics</p>
          <h2 className="mt-4 text-3xl font-black tracking-[-0.04em] text-slate-900 sm:text-4xl dark:text-white">
            A balanced curriculum designed for lifelong achievement.
          </h2>
        </ScrollReveal>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {programs.map((program, index) => (
            <ScrollReveal key={program.title} className="h-full">
              <Card className="h-full border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-950/70">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-blue/10 text-lg font-black text-brand-blue dark:bg-brand-gold/15 dark:text-brand-gold">
                  0{index + 1}
                </div>
                <h3 className="text-xl font-black text-slate-900 dark:text-white">{program.title}</h3>
                <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-300">{program.copy}</p>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
