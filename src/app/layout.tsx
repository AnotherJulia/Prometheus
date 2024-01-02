import { cn } from "@/library/utils";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "react-loading-skeleton/dist/skeleton.css";
import TanstackProvider from "@/components/providers/tanstackProvider";

const font = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Prometheus",
  description:
    "Prometheus: The ultimate starter command for modern web development. Effortlessly initialize projects with a blend of cutting-edge technologies including Next.js, React, Tailwind CSS, and Shadcn UI. Ideal for developers seeking a streamlined, powerful start to their web applications.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="light" suppressHydrationWarning={true}>
      <body
        className={cn(
          "min-h-screen font-sans antialiased grainy",
          font.className
        )}
      >
        <TanstackProvider>{children}</TanstackProvider>
      </body>
    </html>
  );
}
