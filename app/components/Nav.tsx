"use client";

import Link from "next/link";
import { ProfilePicture } from "./ProfilePicture";
import { ThemeToggle } from "./ThemeToggle";

const navLinks = [
  { href: "#background", label: "Background" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
];

export const Nav = () => {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-stone-50/80 dark:bg-zinc-950/80 border-b border-stone-200/50 dark:border-zinc-800/50 pt-[env(safe-area-inset-top)]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-3 no-underline">
            <div className="w-9 h-9 rounded-full bg-avatar-green-200 dark:bg-avatar-green-900 border border-stone-300 dark:border-zinc-600 overflow-hidden">
              <ProfilePicture />
            </div>
            <span className="font-semibold text-stone-900 dark:text-zinc-100 text-sm hidden sm:block">
              Derek Meulmeester
            </span>
          </Link>

          <div className="flex items-center gap-1 sm:gap-6">
            <div className="hidden md:flex items-center gap-6">
              {navLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="text-sm text-stone-500 hover:text-stone-900 dark:text-zinc-400 dark:hover:text-zinc-100 no-underline transition-colors duration-200"
                >
                  {label}
                </Link>
              ))}
            </div>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
};
