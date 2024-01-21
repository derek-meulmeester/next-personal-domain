import { SlClock } from "react-icons/sl";
import { timeSince } from "@/app/utilities";

type Props = {
  start: Date;
  end?: Date;
};

export const TimePeriod = ({ start, end }: Props) => {
  return (
    <div className="flex items-center justify-end gap-2">
      <SlClock />
      <span className="text-xs md:text-sm">{timeSince({ start, end })}</span>
    </div>
  );
};
