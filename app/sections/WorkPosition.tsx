import Image from "next/image";
import type { Position } from "@/app/data";
import { TimePeriod } from "@/app/components";
import { formatShortDate } from "@/app/utilities";

type Props = {
  workPosition: Position;
};

const variantLabel = (variant: Position["variant"]) => {
  switch (variant) {
    case "promoted":
      return "Promoted";
    default:
      return "Joined";
  }
};

export const WorkPosition = ({ workPosition }: Props) => {
  const { company, position, location, startDate, endDate, variant, content } =
    workPosition;

  return (
    <div className="relative pl-8 pb-8 border-l-2 border-stone-200 dark:border-zinc-700 last:border-l-0 last:pb-0">
      {/* Timeline dot */}
      <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-green-600 dark:bg-green-500 border-2 border-white dark:border-zinc-900" />

      <div className="space-y-3">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg overflow-hidden border border-stone-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 flex-shrink-0">
              <Image
                width={40}
                height={40}
                src={company.logo}
                alt={`${company.name} logo`}
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <h3 className="font-semibold text-stone-900 dark:text-zinc-100">
                {position}
              </h3>
              <p className="text-sm text-stone-500 dark:text-zinc-400">
                <a href={company.url} target="_blank" rel="noopener">
                  {company.name}
                </a>
                <span className="mx-1.5 text-stone-300 dark:text-zinc-600">&middot;</span>
                {location}
              </p>
            </div>
          </div>
          <div className="text-sm text-stone-400 dark:text-zinc-500 flex items-center gap-2 pl-13 sm:pl-0">
            <span className="text-xs font-medium uppercase tracking-wider text-green-600 dark:text-green-500">
              {variantLabel(variant)}
            </span>
            <span>{formatShortDate(startDate)}</span>
            <span className="text-stone-300 dark:text-zinc-600">&middot;</span>
            <TimePeriod start={startDate} end={endDate} />
          </div>
        </div>

        <div className="text-stone-600 dark:text-zinc-300 text-sm leading-relaxed">
          {content}
        </div>
      </div>
    </div>
  );
};
