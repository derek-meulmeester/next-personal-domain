import { timeSince } from "@/app/utilities";

type Props = {
  start: Date;
  end?: Date;
};

export const TimePeriod = ({ start, end }: Props) => {
  return (
    <span className="text-sm text-stone-400 dark:text-zinc-500">
      {timeSince({ start, end })}
    </span>
  );
};
