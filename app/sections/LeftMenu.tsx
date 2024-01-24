import Link from "next/link";
import { FaEnvelope, FaLocationArrow } from "react-icons/fa";
import { projectLinks, socialLinks } from "@/app/data";
import { Card, ProfilePicture } from "@/app/components";

export const LeftMenu = () => {
  return (
    <div className="space-y-4 sticky top-4">
      <Card>
        <div className="space-y-4">
          <div className="flex justify-center">
            <div className="w-40 border border-slate-400 bg-green-200 rounded-full shadow-xl">
              <Link href="/">
                <ProfilePicture />
              </Link>
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-2xl">Derek Meulmeester</h3>
            <h5 className="text-l">Software Engineer</h5>
          </div>

          <hr />

          <div>
            <div className="flex justify-center items-center gap-2">
              <FaLocationArrow />
              <span>Ottawa, ON. Canada</span>
            </div>
            <div className="flex justify-center gap-2">
              <div className="flex items-center gap-2">
                <FaEnvelope />
                <Link
                  href="mailto:derek@meulmeester.ca"
                  target="_blank"
                  rel="noopener"
                >
                  derek@meulmeester.ca
                </Link>
              </div>
            </div>
          </div>

          <hr />

          <div>
            <div className="flex justify-center">
              {socialLinks.map(({ href, Icon, color }) => (
                <div key={href} className="px-1 text-2xl">
                  <Link href={href} target="_blank" rel="noopener">
                    <span className={color}>
                      <Icon />
                    </span>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Card>

      <Card>
        <h4 className="text-xl pb-4">Side Projects & Open Source</h4>
        <hr />
        <ul className="pt-2">
          {projectLinks.map(({ href, title }) => (
            <li key={href} className="pt-2 text-sm">
              <Link href={href} target="_blank" rel="noopener">
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </Card>
    </div>
  );
};
