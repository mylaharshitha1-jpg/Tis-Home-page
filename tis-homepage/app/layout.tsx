import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tulas International School | Dehradun Boarding & Day School",
  description:
    "Official-style homepage for Tulas International School with academic programs, admissions guidance, and campus life information.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-slate-50 text-slate-900 antialiased dark:bg-slate-950 dark:text-white">
        {children}
      </body>
    </html>
  );
}
