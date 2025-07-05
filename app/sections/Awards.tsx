import { FaTrophy } from "react-icons/fa";
import { DateWrapper, SectionContent, SectionTitle } from "@/app/components";

export const Awards = () => {
  return (
    <div>
      <SectionTitle title="Awards" Icon={FaTrophy} />
      <SectionContent>
        <div className="space-y-8">
          <div className="space-y-2">
            <div className="flex items-center">
              <div className="grow">
                <div className="space-y-0 pr-2">
                  <p>
                    <strong>
                      ROC Award (Recognition of Outstanding Contribution)
                    </strong>
                  </p>
                  <p className="text-sm">Morgan Stanley</p>
                </div>
              </div>
              <DateWrapper size="large">
                <div className="flex justify-end">
                  <p>
                    <strong>
                      <small>Awarded on:</small>
                    </strong>
                    &nbsp;April, 2015
                  </p>
                </div>
              </DateWrapper>
            </div>
            <p>
              ROC Awards recognize the high quality and excellent work
              specifically when it comes to demonstrating or driving Innovation,
              Collaboration, Resourcefulness, Client Service & Support and
              Operational Efficiencies. Specifically I was recognized for
              dedication to educating team members and improving the development
              life cycle.
            </p>
          </div>

          <hr className="border-gray-200" />

          <div className="space-y-2">
            <div className="flex items-center">
              <div className="grow">
                <div className="space-y-0 pr-2">
                  <p>
                    <strong>Technical Guru</strong>
                  </p>
                  <p className="text-sm">Mallon & Associates Training</p>
                </div>
              </div>
              <DateWrapper size="large">
                <div className="flex justify-end">
                  <p>
                    <strong>
                      <small>Awarded on:</small>
                    </strong>
                    &nbsp;Nov, 2012
                  </p>
                </div>
              </DateWrapper>
            </div>
            <p>
              Was nominated by the other ~50 students as the Technical Guru of
              that class.
            </p>
          </div>
        </div>
      </SectionContent>
    </div>
  );
};
