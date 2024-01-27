import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/app/components";
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
        className={`${inter.className} bg-slate-100 text-slate-600 dark:bg-zinc-950 dark:text-zinc-200`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
