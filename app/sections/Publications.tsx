import { FaBook, FaComment, FaYoutube } from "react-icons/fa";
import { DateWrapper, SectionContent, SectionTitle } from "@/app/components";

export const Publications = () => {
  return (
    <div>
      <SectionTitle title="Publications/Presentations" Icon={FaBook} />
      <SectionContent>
        <div className="space-y-8">
          <div className="space-y-2">
            <div className="flex items-center">
              <div className="grow">
                <div className="flex items-center gap-2 pr-2">
                  <div className="space-y-0 pr-2">
                    <strong>
                      <a
                        href="http://slides.com/meulmees/angularjs-canwic-2016#/"
                        target="_blank"
                        rel="noopener"
                      >
                        AngularJS Workshop
                      </a>
                    </strong>
                    <p className="text-sm">CAN-CWiC</p>
                  </div>
                </div>
              </div>
              <DateWrapper size="large">
                <div className="flex justify-end">
                  <p>
                    <strong>
                      <small>Presented on:</small>
                    </strong>
                    &nbsp;Jan, 2016
                  </p>
                </div>
              </DateWrapper>
            </div>
            <p>
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

          <hr />

          <div className="space-y-2">
            <div className="flex items-center">
              <div className="grow">
                <div className="flex items-center gap-2 pr-2">
                  <div className="space-y-0 pr-2">
                    <strong>
                      <a
                        href="https://www.youtube.com/watch?v=y4y5DvNovQo"
                        target="_blank"
                        rel="noopener"
                      >
                        Intersection of a Line and Plane
                      </a>
                    </strong>
                    <p className="text-sm">Youtube</p>
                  </div>
                </div>
              </div>
              <DateWrapper size="large">
                <div className="flex justify-end">
                  <p>
                    <strong>
                      <small>Published on:</small>
                    </strong>
                    &nbsp;Feb, 2008
                  </p>
                </div>
              </DateWrapper>
            </div>
            <p>
              A short math tutorial on finding the intersection point of a line
              and plane shared on Youtube which has received over 25,000 views.
            </p>
          </div>
        </div>
      </SectionContent>
    </div>
  );
};
