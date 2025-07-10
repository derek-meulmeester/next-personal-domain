import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import Link from "next/link";
import { usePathname } from 'next/navigation'
import { Inter } from "next/font/google";
import { Card, ThemeProvider } from "@/app/components";
import { LeftMenu } from '@/app/sections';
import "@/app/globals.css";
import { blogPosts } from '@/app/data';

const inter = Inter({ subsets: ["latin"] });
 
export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

const RootLayout = ({ children }: React.PropsWithChildren<{}>) => {
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

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const pathParts = (usePathname() || '').split('/').filter(Boolean);
  const [root, page] = pathParts;
  const blogPost = root === 'blog' ? blogPosts.find(({slug}) => slug === page) : undefined;

  if (blogPost) {
    const blogPost = blogPosts.find(({slug}) => slug === page);

    return (
      <RootLayout>
        <Card className="space-y-8">
          <div className="flex items-center gap-2 mb-4">
            <Link href="/">Overview</Link>
            <span>/</span>
            <Link href="/blog">Blog posts</Link>
          </div>

          <div className="mt-8">
            <h1 className="text-3xl font-semibold tracking-tight text-pretty sm:text-4xl">
              {blogPost?.title}
            </h1>
            <div className="text-sm/6 text-gray-600">{blogPost?.date}</div>
          </div>

          <Component {...pageProps} />
        </Card>
      </RootLayout>
    );
  }

  return Component.getLayout ?
    Component.getLayout(<Component {...pageProps} />) :
    (
      <RootLayout>
        <Component {...pageProps} />
      </RootLayout>
    );
}
