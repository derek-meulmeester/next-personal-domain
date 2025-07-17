import { blogPosts } from "@/app/data";

export const findPostBySlug = (slug: string) => {
  return blogPosts.find((post) => post.slug === slug && post.date.getTime() < Date.now());
}