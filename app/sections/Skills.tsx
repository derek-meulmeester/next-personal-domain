import { FaCode } from "react-icons/fa";
import { skills } from "@/app/data";
import { SectionTitle } from "@/app/components";

const categoryColors: Record<string, string> = {
  Backend: "bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950/30 dark:text-emerald-400 dark:border-emerald-800",
  Frontend: "bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950/30 dark:text-blue-400 dark:border-blue-800",
  "Build/Development Tools": "bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-950/30 dark:text-amber-400 dark:border-amber-800",
  "Observability Tools": "bg-purple-50 text-purple-700 border-purple-200 dark:bg-purple-950/30 dark:text-purple-400 dark:border-purple-800",
};

export const Skills = () => {
  return (
    <section>
      <SectionTitle title="Skills" Icon={FaCode} />
      <div className="space-y-6">
        {skills.map((skillset) => {
          const colorClasses = categoryColors[skillset.title] ?? "bg-stone-50 text-stone-700 border-stone-200 dark:bg-zinc-800 dark:text-zinc-300 dark:border-zinc-700";
          return (
            <div key={skillset.title}>
              <h3 className="text-sm font-semibold text-stone-900 dark:text-zinc-100 uppercase tracking-wider mb-3">
                {skillset.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skillset.tools.map((tool) => (
                  <span
                    className={`px-3 py-1.5 rounded-full text-xs font-medium border ${colorClasses}`}
                    key={tool}
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
