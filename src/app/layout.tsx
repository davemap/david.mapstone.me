import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "David Mapstone",
  description:
    "Personal website of David Mapstone – software engineer, problem solver, and technology enthusiast.",
  openGraph: {
    title: "David Mapstone",
    description:
      "Personal website of David Mapstone – software engineer, problem solver, and technology enthusiast.",
    url: "https://david.mapstone.me",
    siteName: "David Mapstone",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased bg-slate-950 text-slate-100">
        {children}
      </body>
    </html>
  );
}
