import Link from "next/link";
import {
  serialize,
  type SerializeResult,
} from 'next-mdx-remote-client/serialize'
import { MDXClient } from 'next-mdx-remote-client'
import fs from 'fs'
import path from 'path'
import { Card } from '@/app/components'
import { useMDXComponents } from "@/mdx-components";

type FrontMatter = {
  title: string;
  date: string;
};

type Props = {
  mdxSource: SerializeResult<FrontMatter>;
};

const Post = ({ mdxSource }: Props) => {
  const components = useMDXComponents({});

  return (
    <Card className="space-y-6">
      <div className="flex items-center gap-2">
        <Link href="/">Overview</Link>
        <span>/</span>
        <Link href="/blog">Blog posts</Link>
      </div>

      <div>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-pretty sm:text-4xl">
          {mdxSource.frontmatter?.title}
        </h1>
        <p className="text-sm/6 text-gray-500 dark:text-gray-400">{mdxSource.frontmatter?.date}</p>
      </div>

      <hr className="border-gray-200" />

      <article className="space-y-8">
        <MDXClient compiledSource="" {...mdxSource} components={components} />
      </article>
    </Card>
  )
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join('posts'))
  const paths = files.map((filename) => ({
    params: { slug: filename.replace('.mdx', '') },
  }))

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }: { params: {slug: string }}) {
  const filePath = path.join('posts', `${params.slug}.mdx`);
  const markdownWithMeta = fs.readFileSync(filePath, 'utf-8');
  const mdxSource = await serialize({
    source: markdownWithMeta,
    options: { parseFrontmatter: true },
  });

  return {props: { mdxSource }};
}

export default Post