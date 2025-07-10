import Link from "next/link";
import { IoChevronBack } from "react-icons/io5";
import { Card } from "@/app/components";
import { blogPosts } from "@/app/data";

export default function Blog() {
  return (
    <Card className="space-y-8">
      <div className="flex items-center gap-2">
        <Link href="/">Overview</Link>
      </div>

      <h1 className="mt-2 text-3xl font-semibold tracking-tight text-pretty sm:text-4xl">
        Blog posts
      </h1>

      <ul>
        {blogPosts.map(({slug, title, date}) => (
          <li key={slug}>
            <div>
              <Link href={`/blog/${slug}`}>
                {title}
              </Link>
              <div className="text-sm/6 text-gray-600">{date}</div>
            </div>
          </li>
        ))}
      </ul>
    </Card>
  );
}
