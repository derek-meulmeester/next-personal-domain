export type Post = {
  slug: string;
  title: string;
  date: Date;
};

export const blogPosts: Post[] = [
  {
    slug: "kitchen-sink-components",
    title: "Kitchen sink of components",
    date: new Date('2025-07-11T12:00:00.000Z'),
  },
  {
    slug: "how-ai-might-shape-us",
    title: "How AI might shape us",
    date: new Date('2025-07-16T12:00:00.000Z'),
  },
];
