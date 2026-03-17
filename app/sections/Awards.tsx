import { FaTrophy } from "react-icons/fa";
import { SectionTitle } from "@/app/components";

export const Awards = () => {
  return (
    <section>
      <SectionTitle title="Awards" Icon={FaTrophy} />
      <div className="space-y-6">
        <div className="bg-white dark:bg-zinc-900 rounded-xl border border-stone-200 dark:border-zinc-800 p-6">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
            <div>
              <h3 className="font-semibold text-stone-900 dark:text-zinc-100">
                ROC Award (Recognition of Outstanding Contribution)
              </h3>
              <p className="text-sm text-stone-500 dark:text-zinc-400">
                Morgan Stanley
              </p>
            </div>
            <span className="text-sm text-stone-400 dark:text-zinc-500 whitespace-nowrap">
              April 2015
            </span>
          </div>
          <p className="mt-3 text-sm text-stone-600 dark:text-zinc-300 leading-relaxed">
            ROC Awards recognize the high quality and excellent work
            specifically when it comes to demonstrating or driving Innovation,
            Collaboration, Resourcefulness, Client Service &amp; Support and
            Operational Efficiencies. Specifically I was recognized for
            dedication to educating team members and improving the development
            life cycle.
          </p>
        </div>

        <div className="bg-white dark:bg-zinc-900 rounded-xl border border-stone-200 dark:border-zinc-800 p-6">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
            <div>
              <h3 className="font-semibold text-stone-900 dark:text-zinc-100">
                Technical Guru
              </h3>
              <p className="text-sm text-stone-500 dark:text-zinc-400">
                Mallon &amp; Associates Training
              </p>
            </div>
            <span className="text-sm text-stone-400 dark:text-zinc-500 whitespace-nowrap">
              Nov 2012
            </span>
          </div>
          <p className="mt-3 text-sm text-stone-600 dark:text-zinc-300 leading-relaxed">
            Was nominated by the other ~50 students as the Technical Guru of
            that class.
          </p>
        </div>
      </div>
    </section>
  );
};
