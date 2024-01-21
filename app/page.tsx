import { Card } from "@/app/components";
import {
  Awards,
  Background,
  Education,
  LeftMenu,
  Publications,
  Skills,
  WorkHistory,
} from "@/app/sections";

export default function Home() {
  return (
    <div className="p-2 md:p-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <section>
          <LeftMenu />
        </section>
        <main className="md:col-span-3">
          <Card className="space-y-10">
            <Background />
            <WorkHistory />
            <Skills />
            <Education />
            <Awards />
            <Publications />
          </Card>
        </main>
      </div>
    </div>
  );
}
