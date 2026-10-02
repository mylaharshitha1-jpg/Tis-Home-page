"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";

const navItems = [
  { label: "About TIS", href: "#about" },
  { label: "Academics", href: "#academics" },
  { label: "Boarding Life", href: "#admissions" },
  { label: "Beyond Academics", href: "#cta" },
  { label: "Admissions", href: "#admissions" },
];

export function Navbar() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/75 backdrop-blur-xl dark:border-slate-700 dark:bg-slate-950/70">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="#top" className="flex items-center gap-3" aria-label="Tulas International School home">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-blue to-brand-blue-dark text-sm font-black text-white shadow-lg shadow-brand-blue/25">
            TIS
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-brand-blue/70 dark:text-brand-gold">
              Tulas
            </p>
            <p className="text-sm font-semibold text-slate-900 dark:text-white">International School</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-700 lg:flex dark:text-slate-200">
          {navItems.map((item) => (
            <Link key={item.label} href={item.href} className="transition hover:text-brand-blue dark:hover:text-brand-gold">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            aria-label="Toggle color theme"
            onClick={() => setIsDark((current) => !current)}
            className="hidden h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-lg text-slate-700 shadow-sm transition hover:border-brand-gold hover:text-brand-blue md:flex dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
          >
            {isDark ? "☀" : "☾"}
          </button>
          <Button type="button" variant="primary" className="hidden sm:inline-flex">
            Apply Now
          </Button>
        </div>
      </div>
    </header>
  );
}
