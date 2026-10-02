import type { ReactNode } from "react";

type BadgeProps = {
  children: ReactNode;
  className?: string;
};

export function Badge({ children, className = "" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full border border-brand-gold/60 bg-brand-gold/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-brand-blue ${className}`}
    >
      {children}
    </span>
  );
}
