import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/app/components";
import { LeftMenu } from '@/app/sections';
import "@/app/globals.css";

const inter = Inter({ subsets: ["latin"] });
 
export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}
 
export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  return Component.getLayout ?
    Component.getLayout(<Component {...pageProps} />) :
    (
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
                  <Component {...pageProps} />
                </main>
              </div>
            </div>
            
          </ThemeProvider>
        </body>
      </html>
    );
}
