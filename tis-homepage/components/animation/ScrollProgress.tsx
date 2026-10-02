"use client";

import { useEffect, useState } from "react";

export function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
      const nextProgress = documentHeight > 0 ? (window.scrollY / documentHeight) * 100 : 0;
      setProgress(nextProgress);
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });

    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  return (
    <div className="fixed inset-x-0 top-0 z-50 h-1.5 bg-slate-200/40 dark:bg-slate-800/60">
      <div
        className="h-full bg-gradient-to-r from-brand-blue via-brand-gold to-brand-gold"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
