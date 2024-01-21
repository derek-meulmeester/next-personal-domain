import { FaCode } from "react-icons/fa";
import { skills } from "@/app/data";
import { SectionContent, SectionTitle } from "@/app/components";

export const Skills = () => {
  return (
    <div>
      <SectionTitle title="Skills" Icon={FaCode} />
      <SectionContent>
        <ul className="space-y-6">
          {skills.map((skillset, index) => {
            return (
              <li key={index}>
                <div>
                  <strong>{skillset.title}</strong>
                  <div className="flex flex-row flex-wrap space-x-2">
                    {skillset.tools.map((tool, index) => {
                      return (
                        <span
                          className="px-2 py-1 mt-1 bg-sky-800 rounded text-white text-xs font-bold"
                          key={index}
                        >
                          {tool}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </SectionContent>
    </div>
  );
};
