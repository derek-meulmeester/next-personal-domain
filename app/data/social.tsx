import { IconType } from "react-icons";
import {
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaTwitterSquare,
} from "react-icons/fa";

type SocialLink = {
  href: string;
  color: string;
  Icon: IconType;
};

export const socialLinks: SocialLink[] = [
  {
    href: "https://github.com/derek-meulmeester",
    color: "text-slate-600 hover:text-slate-700",
    Icon: FaGithub,
  },
  {
    href: "https://www.facebook.com/derek.meulmeester.3",
    color: "text-blue-600 hover:text-blue-700",
    Icon: FaFacebook,
  },
  {
    href: "https://ca.linkedin.com/pub/derek-meulmeester/2b/260/9a",
    color: "text-blue-500 hover:text-blue-600",
    Icon: FaLinkedin,
  },
  {
    href: "https://twitter.com/d_meulmeester",
    color: "text-cyan-500 hover:text-cyan-600",
    Icon: FaTwitterSquare,
  },
];
