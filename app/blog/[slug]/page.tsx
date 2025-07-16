import { Card } from "@/app/components";
import { blogPosts } from "@/app/data";
import Link from "next/link";

type PageProps = {
  params: Promise<{ slug: string }>
};

const BlogNotFound = () => {
  return (
    <Card className="space-y-4">
      <h1 className="mt-2 text-3xl font-semibold tracking-tight text-pretty sm:text-4xl">
        Not Found
      </h1>
      <p>Could not find that blog post...</p>
      <Link href="/blog">Back to posts</Link>
    </Card>
  );
};

export default async function Page({ params }: PageProps) {
  const { slug } = await params
  const post = blogPosts.find((post) => post.slug === slug);

  if (!post) {
    return <BlogNotFound />;
  }

  try {
    const { default: Post } = await import(`@/posts/${slug}.mdx`)
  
    return (
      <Card className="space-y-8">
        <div className="flex items-center gap-2">
          <Link href="/">Overview</Link>
          <span>/</span>
          <Link href="/blog">Blog posts</Link>
        </div>

        <div className="space-y-4">
          <div>
            <h1 className="mt-2 text-3xl font-semibold tracking-tight text-pretty sm:text-4xl">
              {post.title}
            </h1>
            <div className="text-sm/6 text-gray-500 dark:text-gray-400">{post.date}</div>
          </div>

          <hr className="border-gray-200" />

          <Post />
        </div>
      </Card>
    ); 
  } catch {
    return <BlogNotFound />;
  }
}

export const dynamicParams = false;
