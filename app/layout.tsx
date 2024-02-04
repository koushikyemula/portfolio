import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import { Footer } from "@/components/footer";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Koushik Yemula",
  description: "My Portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("flex flex-col justify-center items-center px-6 bg-neutral-900", inter.className)}>
        <ThemeProvider attribute="class" defaultTheme="dark" disableTransitionOnChange>
          <main className="flex flex-col h-screen py-9 gap-y-12 max-w-xl">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
