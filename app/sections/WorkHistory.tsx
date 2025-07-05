import { FaCodeFork } from "react-icons/fa6";
import { workHistory } from "@/app/data";
import { WorkPosition } from "@/app/sections";
import { SectionContent, SectionTitle } from "@/app/components";

export const WorkHistory = () => {
  return (
    <div>
      <SectionTitle title="Work History" Icon={FaCodeFork} />
      <SectionContent>
        <div className="space-y-8">
          {workHistory.map((workPosition, index) => (
            <div key={`${workPosition.startDate}`}>
              <WorkPosition workPosition={workPosition} />
              {index + 1 < workHistory.length ? <hr className="border-gray-200 mt-6" /> : null}
            </div>
          ))}
        </div>
      </SectionContent>
    </div>
  );
};
