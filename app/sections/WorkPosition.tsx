import Image from "next/image";
import type { Position } from "@/app/data";
import { DateWrapper, TimePeriod } from "@/app/components";
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
    <div className="space-y-4">
      <div className="flex">
        <div className="grow">
          <div className="flex justify-start items-center md:gap-2">
            <div className="w-8 md:w-16">
              <Image
                width={60}
                height={60}
                src={company.logo}
                alt={`${company.name} logo`}
              />
            </div>
            <div className="pl-4">
              <div className="space-y-0 pr-2">
                <p>
                  <strong>{position}</strong>
                </p>
                <p>
                  <a href={company.url} target="_blank" rel="noopener">
                    {company.name}
                  </a>
                  &nbsp;
                  <small>{location}</small>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="pl-2">
          <DateWrapper>
            <div className="flex justify-end">
              <strong>
                <small>{variantLabel(variant)}:</small>
              </strong>
              &nbsp;{formatShortDate(startDate)}
            </div>
            <TimePeriod start={startDate} end={endDate} />
          </DateWrapper>
        </div>
      </div>
      {content}
    </div>
  );
};
