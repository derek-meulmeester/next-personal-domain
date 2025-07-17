import Link from "next/link";
import fs from 'fs';
import path from 'path';
import { findPostBySlug, notEmpty } from "@/app/utilities";
import { Card } from "@/app/components";
import { type Post } from "@/app/data";

export default async function Blog() {
  const files = fs.readdirSync(path.join('posts'));
  const posts: Post[] = files
    .map((filename) => (findPostBySlug(filename.replace('.mdx', ''))))
    .filter(notEmpty)
    .sort((a, b) => (b.date.getTime() - a.date.getTime()));

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
              <div className="text-sm/6 text-gray-500 dark:text-gray-400">{date.toDateString()}</div>
            </div>
          </li>
        ))}
      </ul>
    </Card>
  );
}
