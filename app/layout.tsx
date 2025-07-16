import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/app/components";
import { LeftMenu } from "@/app/sections";
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
          <div className="p-2 pt-4 pb-8 md:p-4 md:pt-4 md:pb-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <section>
                <LeftMenu />
              </section>
              <main className="md:col-span-3">
                {children}
              </main>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
