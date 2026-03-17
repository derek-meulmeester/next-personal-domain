import Link from "next/link";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { ProfilePicture } from "@/app/components";
import { projectLinks } from "@/app/data";
import {
  Background,
  WorkHistory,
  Skills,
  Education,
  Awards,
  Publications,
} from "@/app/sections";

export default function Home() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative">
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8">
          <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-2xl bg-avatar-green-200 dark:bg-avatar-green-900 border border-stone-200 dark:border-zinc-700 shadow-lg overflow-hidden flex-shrink-0">
            <ProfilePicture />
          </div>
          <div className="text-center sm:text-left space-y-3">
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold text-stone-900 dark:text-zinc-50 tracking-tight">
                Derek Meulmeester
              </h1>
              <p className="text-lg text-green-700 dark:text-green-500 font-medium mt-2">
                Software Engineer at Stripe
              </p>
              <p className="text-stone-500 dark:text-zinc-400">
                Ottawa, ON, Canada
              </p>
            </div>
            <div className="flex items-center gap-4 justify-center sm:justify-start">
              <Link
                href="https://github.com/derek-meulmeester"
                target="_blank"
                rel="noopener"
                className="text-stone-500 hover:text-green-600 dark:text-zinc-400 dark:hover:text-green-500 transition-colors duration-200"
              >
                <FaGithub className="w-6 h-6" />
              </Link>
              <Link
                href="https://ca.linkedin.com/pub/derek-meulmeester/2b/260/9a"
                target="_blank"
                rel="noopener"
                className="text-stone-500 hover:text-green-600 dark:text-zinc-400 dark:hover:text-green-500 transition-colors duration-200"
              >
                <FaLinkedin className="w-6 h-6" />
              </Link>
              <Link
                href="mailto:derek@meulmeester.ca"
                className="text-stone-500 hover:text-green-600 dark:text-zinc-400 dark:hover:text-green-500 transition-colors duration-200"
              >
                <FaEnvelope className="w-6 h-6" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Side Projects */}
      <section className="flex flex-wrap gap-3">
        {projectLinks.map(({ href, title }) => (
          <Link
            key={href}
            href={href}
            target="_blank"
            rel="noopener"
            className="text-sm px-4 py-2 rounded-full border border-stone-200 dark:border-zinc-700 text-stone-600 dark:text-zinc-400 hover:border-green-400 hover:text-green-700 dark:hover:border-green-700 dark:hover:text-green-500 no-underline transition-all duration-200"
          >
            {title}
          </Link>
        ))}
      </section>

      {/* Content Sections */}
      <div className="space-y-16">
        <div id="background" className="scroll-mt-20">
          <Background />
        </div>
        <div id="experience" className="scroll-mt-20">
          <WorkHistory />
        </div>
        <div id="skills" className="scroll-mt-20">
          <Skills />
        </div>
        <div id="education" className="scroll-mt-20">
          <Education />
        </div>
        <Awards />
        <Publications />
      </div>
    </div>
  );
}
