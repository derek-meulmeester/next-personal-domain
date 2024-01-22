import { FaGraduationCap } from "react-icons/fa";
import { DateWrapper, SectionContent, SectionTitle } from "@/app/components";

export const Education = () => {
  return (
    <div>
      <SectionTitle title="Education" Icon={FaGraduationCap} />
      <SectionContent>
        <div className="space-y-8">
          <div className="space-y-2">
            <div className="flex items-end">
              <div className="grow">
                <div className="space-y-0 pr-2">
                  <p>
                    <strong>University of British Columbia</strong>
                  </p>
                  <p>
                    <small>Vancouver, BC</small>
                  </p>
                </div>
              </div>
              <DateWrapper size="large">
                <p className="flex justify-end">
                  <strong>
                    <small>Started:</small>
                  </strong>
                  &nbsp;Sep, 2007
                </p>
                <p className="flex justify-end">
                  <strong>
                    <small>Completion:</small>
                  </strong>
                  &nbsp;May, 2012
                </p>
              </DateWrapper>
            </div>

            <ul className="list-disc list-outside pt-2 pl-12">
              <li>
                Bachelor of Applied Science in Electrical Engineering
                Nanotechnology and Microsystems
              </li>
              <li>Enrolled in EECE Project Integrated Program</li>
            </ul>
          </div>

          <hr />

          <div className="space-y-2">
            <div className="flex items-end">
              <div className="grow">
                <div className="space-y-0 pr-2">
                  <p>
                    <strong>Technology Analyst Program (TAP)</strong>
                  </p>
                  <p>
                    Mallon & Associates <small>Manhatten, NY</small>
                  </p>
                </div>
              </div>
              <DateWrapper size="large">
                <p className="flex justify-end">
                  <strong>
                    <small>Started:</small>
                  </strong>
                  &nbsp;Aug, 2012
                </p>
                <p className="flex justify-end">
                  <strong>
                    <small>Completion:</small>
                  </strong>
                  &nbsp;Nov, 2012
                </p>
              </DateWrapper>
            </div>
            <ul className="list-disc list-outside pt-2 pl-12">
              <li>
                Received intensive training from{" "}
                <a href="http://matraining.com/" target="_blank" rel="noopener">
                  Mallon Associates
                </a>{" "}
                instructors on a variety of topics including OS’s (Linux,
                Windows), C, C++, C#, Java, Python, Perl, and SQL (Sybase &
                DB2).
              </li>
              <li>
                Gained a global network of peers, since employees from Europe,
                Asia, and NY all took part in the training together.
              </li>
              <li>
                Worked on a project for displaying customized metrics in a team
                of 3 sponsored by the Retail Structured Products Business.
              </li>
            </ul>
          </div>
        </div>
      </SectionContent>
    </div>
  );
};
