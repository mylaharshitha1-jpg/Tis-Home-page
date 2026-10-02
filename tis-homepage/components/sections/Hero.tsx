import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/animation/ScrollReveal";

const stats = [
  { value: "15+", label: "Years of excellence" },
  { value: "1300+", label: "Students nurtured" },
  { value: "40+", label: "Academic clubs" },
];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(29,78,216,0.14),_transparent_35%),linear-gradient(180deg,_#f8fbff_0%,_#eef4ff_100%)] dark:bg-[radial-gradient(circle_at_top_left,_rgba(212,167,74,0.13),_transparent_30%),linear-gradient(180deg,_#020817_0%,_#0f172a_100%)]">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 pb-16 pt-12 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:pb-20 lg:pt-16">
        <ScrollReveal className="flex flex-col justify-center">
          <Badge className="mb-6 w-fit">Admissions Open 2026-27</Badge>

          <h1 className="max-w-xl text-4xl font-black leading-tight tracking-[-0.04em] text-slate-900 sm:text-5xl lg:text-6xl dark:text-white">
            Welcome to <span className="text-brand-blue dark:text-brand-gold">Tulas International School</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-700 dark:text-slate-300">
            TIS is one of India&apos;s leading boarding and day schools in Dehradun, blending academic excellence,
            character building, and global learning in a nurturing environment.
          </p>

          <p className="mt-3 max-w-xl text-base leading-7 text-slate-600 dark:text-slate-400">
            Our CBSE curriculum develops confident learners, compassionate leaders, and creative thinkers ready to
            thrive in a changing world.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link href="#admissions">
              <Button type="button" variant="primary" className="w-full sm:w-auto">
                Apply Now
              </Button>
            </Link>
            <Link href="#about">
              <Button type="button" variant="secondary" className="w-full sm:w-auto">
                Explore Campus
              </Button>
            </Link>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-slate-200 bg-white/75 p-4 shadow-sm dark:border-slate-700 dark:bg-slate-900/50">
                <p className="text-2xl font-black text-brand-blue dark:text-brand-gold">{stat.value}</p>
                <p className="mt-1 text-xs font-medium uppercase tracking-[0.18em] text-slate-600 dark:text-slate-300">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal className="relative flex items-center justify-center">
          <div className="relative w-full max-w-xl rounded-[2rem] border border-slate-200 bg-white/80 p-4 shadow-[0_30px_80px_rgba(30,64,175,0.18)] backdrop-blur dark:border-slate-700 dark:bg-slate-900/80">
            <div className="rounded-[1.5rem] bg-gradient-to-br from-brand-blue via-brand-blue-dark to-sky-600 p-6 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-blue-100">Campus Life</p>
                  <h2 className="mt-3 text-3xl font-black">Boarding & Day School Excellence</h2>
                </div>
                <div className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-blue-50">2026</div>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl bg-white/10 p-4 backdrop-blur-sm">
                  <p className="text-xs uppercase tracking-[0.2em] text-blue-100">Academics</p>
                  <p className="mt-3 text-3xl font-black">CBSE</p>
                </div>
                <div className="rounded-2xl bg-white/10 p-4 backdrop-blur-sm">
                  <p className="text-xs uppercase tracking-[0.2em] text-blue-100">Campus</p>
                  <p className="mt-3 text-3xl font-black">Eco</p>
                </div>
                <div className="rounded-2xl bg-white/10 p-4 backdrop-blur-sm sm:col-span-2">
                  <p className="text-xs uppercase tracking-[0.2em] text-blue-100">Holistic Growth</p>
                  <div className="mt-4 flex flex-wrap gap-3 text-sm font-medium">
                    <span className="rounded-full bg-white/10 px-3 py-1">Sports</span>
                    <span className="rounded-full bg-white/10 px-3 py-1">Arts</span>
                    <span className="rounded-full bg-white/10 px-3 py-1">Leadership</span>
                    <span className="rounded-full bg-white/10 px-3 py-1">Student Clubs</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
