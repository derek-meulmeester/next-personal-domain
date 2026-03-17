import { FaGraduationCap } from "react-icons/fa";
import { SectionTitle } from "@/app/components";

export const Education = () => {
  return (
    <section>
      <SectionTitle title="Education" Icon={FaGraduationCap} />
      <div className="space-y-8">
        <div className="bg-white dark:bg-zinc-900 rounded-xl border border-stone-200 dark:border-zinc-800 p-6">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
            <div>
              <h3 className="font-semibold text-stone-900 dark:text-zinc-100">
                University of British Columbia
              </h3>
              <p className="text-sm text-stone-500 dark:text-zinc-400">
                Vancouver, BC
              </p>
            </div>
            <span className="text-sm text-stone-400 dark:text-zinc-500">
              Sep 2007 &mdash; May 2012
            </span>
          </div>
          <ul className="mt-4 space-y-2 text-sm text-stone-600 dark:text-zinc-300">
            <li className="flex items-baseline gap-2">
              <span className="text-green-600">&#8226;</span>
              Bachelor of Applied Science in Electrical Engineering
              Nanotechnology and Microsystems
            </li>
            <li className="flex items-baseline gap-2">
              <span className="text-green-600">&#8226;</span>
              Enrolled in EECE Project Integrated Program
            </li>
          </ul>
        </div>

        <div className="bg-white dark:bg-zinc-900 rounded-xl border border-stone-200 dark:border-zinc-800 p-6">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
            <div>
              <h3 className="font-semibold text-stone-900 dark:text-zinc-100">
                Technology Analyst Program (TAP)
              </h3>
              <p className="text-sm text-stone-500 dark:text-zinc-400">
                Mallon &amp; Associates &middot; Manhattan, NY
              </p>
            </div>
            <span className="text-sm text-stone-400 dark:text-zinc-500">
              Aug 2012 &mdash; Nov 2012
            </span>
          </div>
          <ul className="mt-4 space-y-2 text-sm text-stone-600 dark:text-zinc-300">
            <li className="flex items-baseline gap-2">
              <span className="text-green-600">&#8226;</span>
              <span>
                Received intensive training from{" "}
                <a href="http://matraining.com/" target="_blank" rel="noopener">
                  Mallon Associates
                </a>{" "}
                instructors on a variety of topics including OS&apos;s (Linux,
                Windows), C, C++, C#, Java, Python, Perl, and SQL (Sybase &amp;
                DB2).
              </span>
            </li>
            <li className="flex items-baseline gap-2">
              <span className="text-green-600">&#8226;</span>
              Gained a global network of peers, since employees from Europe,
              Asia, and NY all took part in the training together.
            </li>
            <li className="flex items-baseline gap-2">
              <span className="text-green-600">&#8226;</span>
              Worked on a project for displaying customized metrics in a team
              of 3 sponsored by the Retail Structured Products Business.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
