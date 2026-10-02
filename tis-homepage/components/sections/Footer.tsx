import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-8 dark:border-slate-800 dark:bg-slate-950">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 text-sm text-slate-600 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8 dark:text-slate-300">
        <div>
          <p className="text-base font-black text-slate-900 dark:text-white">Tulas International School</p>
          <p className="mt-1">Dhoolkot, P.O – Selaqui, Chakrata Road, Dehradun – 248011</p>
        </div>

        <div className="flex flex-wrap items-center gap-5">
          <Link href="#about" className="transition hover:text-brand-blue dark:hover:text-brand-gold">
            About
          </Link>
          <Link href="#academics" className="transition hover:text-brand-blue dark:hover:text-brand-gold">
            Academics
          </Link>
          <Link href="#admissions" className="transition hover:text-brand-blue dark:hover:text-brand-gold">
            Admissions
          </Link>
          <Link href="mailto:info@tis.edu.in" className="transition hover:text-brand-blue dark:hover:text-brand-gold">
            info@tis.edu.in
          </Link>
        </div>
      </div>
    </footer>
  );
}
