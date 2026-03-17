import { FaBook } from "react-icons/fa";
import { SectionTitle } from "@/app/components";

export const Publications = () => {
  return (
    <section>
      <SectionTitle title="Publications &amp; Presentations" Icon={FaBook} />
      <div className="space-y-6">
        <div className="bg-white dark:bg-zinc-900 rounded-xl border border-stone-200 dark:border-zinc-800 p-6">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
            <div>
              <h3 className="font-semibold text-stone-900 dark:text-zinc-100">
                <a
                  href="http://slides.com/meulmees/angularjs-canwic-2016#/"
                  target="_blank"
                  rel="noopener"
                >
                  AngularJS Workshop
                </a>
              </h3>
              <p className="text-sm text-stone-500 dark:text-zinc-400">
                CAN-CWiC
              </p>
            </div>
            <span className="text-sm text-stone-400 dark:text-zinc-500 whitespace-nowrap">
              Jan 2016
            </span>
          </div>
          <p className="mt-3 text-sm text-stone-600 dark:text-zinc-300 leading-relaxed">
            Delivered an AngularJS workshop at the{" "}
            <a
              href="http://www.can-cwic.ca/#/"
              target="_blank"
              rel="noopener"
            >
              Canadian Celebration of Women in Computing
            </a>{" "}
            conference where I explained the fundamentals of AngularJS through
            an example of recreating the Netflix browse page.
          </p>
        </div>

        <div className="bg-white dark:bg-zinc-900 rounded-xl border border-stone-200 dark:border-zinc-800 p-6">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
            <div>
              <h3 className="font-semibold text-stone-900 dark:text-zinc-100">
                <a
                  href="https://www.youtube.com/watch?v=y4y5DvNovQo"
                  target="_blank"
                  rel="noopener"
                >
                  Intersection of a Line and Plane
                </a>
              </h3>
              <p className="text-sm text-stone-500 dark:text-zinc-400">
                YouTube
              </p>
            </div>
            <span className="text-sm text-stone-400 dark:text-zinc-500 whitespace-nowrap">
              Feb 2008
            </span>
          </div>
          <p className="mt-3 text-sm text-stone-600 dark:text-zinc-300 leading-relaxed">
            A short math tutorial on finding the intersection point of a line
            and plane shared on YouTube which has received over 25,000 views.
          </p>
        </div>
      </div>
    </section>
  );
};
