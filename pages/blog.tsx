import Link from "next/link";
import { Card } from "@/app/components";

export default function Blog() {
  return (
    <Card className="space-y-10">
      <Link href="/">Back</Link>
      <h1>Blog</h1>
    </Card>
  );
}
