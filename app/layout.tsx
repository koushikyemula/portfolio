import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import { Footer } from "@/components/footer";
import { cn } from "@/lib/utils";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Koushik Yemula — CS Student & Developer",
  description: "Computer Science student passionate about building clean, minimal web experiences.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <body
        className={cn(
          "min-h-screen bg-black text-white antialiased",
          "flex flex-col items-center",
          "font-inter selection:bg-zinc-600 selection:text-white",
          inter.className
        )}>
        <ThemeProvider attribute="class" defaultTheme="dark" disableTransitionOnChange>
          <div className="flex flex-col min-h-screen w-full max-w-2xl px-6">
            <main className="flex-1 py-16 md:py-24">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
