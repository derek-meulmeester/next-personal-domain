import { FaCodeFork } from "react-icons/fa6";
import { workHistory } from "@/app/data";
import { WorkPosition } from "@/app/sections";
import { SectionTitle } from "@/app/components";

export const WorkHistory = () => {
  return (
    <section>
      <SectionTitle title="Experience" Icon={FaCodeFork} />
      <div className="mt-4">
        {workHistory.map((workPosition) => (
          <WorkPosition
            key={`${workPosition.startDate}`}
            workPosition={workPosition}
          />
        ))}
      </div>
    </section>
  );
};
