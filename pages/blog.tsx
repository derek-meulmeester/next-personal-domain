import Link from "next/link";
import fs from 'fs';
import path from 'path';
import {serialize} from 'next-mdx-remote-client/serialize'
import { Card } from "@/app/components";

type Post = {
  slug: string;
  title: string;
  date: string;
}

type Props = {
  posts: Post[];
}

export default function Blog({ posts }: Props) {
  return (
    <Card className="space-y-8">
      <div className="flex items-center gap-2">
        <Link href="/">Overview</Link>
      </div>

      <h1 className="mt-2 text-3xl font-semibold tracking-tight text-pretty sm:text-4xl">
        Blog posts
      </h1>

      <ul className="space-y-4">
        {posts.map(({slug, title, date}) => (
          <li key={slug}>
            <div>
              <Link href={`/blog/${slug}`}>
                {title}
              </Link>
              <div className="text-sm/6 text-gray-500 dark:text-gray-400">{date}</div>
            </div>
          </li>
        ))}
      </ul>
    </Card>
  );
}

export async function getStaticProps() {
  const files = fs.readdirSync(path.join('posts'));
  const posts = await Promise.all(files.map(async (filename) => {
    const slug = filename.replace('.mdx', '');
    const filePath = path.join('posts', filename);
    const markdownWithMeta = fs.readFileSync(filePath, 'utf-8');
    const {frontmatter} = await serialize({
      source: markdownWithMeta,
      options: { parseFrontmatter: true },
    });

    return { ...frontmatter, slug };
  }));

  return {props: { posts }};
}
