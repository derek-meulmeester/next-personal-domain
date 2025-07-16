import { Card } from "@/app/components";
import {
  Awards,
  Background,
  Education,
  Publications,
  Skills,
  WorkHistory,
} from "@/app/sections";

export default function Home() {
  return (
    <Card className="space-y-10">
      <Background />
      <WorkHistory />
      <Skills />
      <Education />
      <Awards />
      <Publications />
    </Card>
  );
}
