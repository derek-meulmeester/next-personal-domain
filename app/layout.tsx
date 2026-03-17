import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider, Nav } from "@/app/components";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://derek.meulmeester.ca"),
  title: "Derek Meulmeester",
  description: "Personal Domain for Derek Meulmeester.",
  openGraph: {
    type: "website",
    title: "Derek Meulmeester",
    description: "Personal Domain",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} bg-stone-50 text-stone-600 dark:bg-zinc-950 dark:text-zinc-300`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Nav />
          <main className="max-w-4xl mx-auto px-4 sm:px-6 pt-24 md:pt-28 pb-8 md:pb-12">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
