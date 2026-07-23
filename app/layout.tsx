import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import { Sidebar } from "@/components/layout/Sidebar";
import { TopNav } from "@/components/layout/TopNav";
import { CommandPalette } from "@/components/command/CommandPalette";

export const metadata: Metadata = {
  title: "ODIN | Whiteout Survival SaaS Intelligence Platform",
  description: "Production SaaS platform for Whiteout Survival game meta, hero database, strategy, building calculators, and AI assistance.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-odin-bg text-odin-text-main antialiased selection:bg-odin-primary/30 selection:text-white">
        <Providers>
          <div className="flex h-screen overflow-hidden">
            <Sidebar />
            <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
              <TopNav />
              <main className="flex-1 overflow-y-auto p-6 md:p-8 scrollbar-thin scrollbar-thumb-odin-border">
                {children}
              </main>
            </div>
          </div>
          <CommandPalette />
        </Providers>
      </body>
    </html>
  );
}
