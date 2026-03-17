"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ProfilePicture } from "./ProfilePicture";
import { ThemeToggle } from "./ThemeToggle";
import { FaBars, FaTimes } from "react-icons/fa";

const navLinks = [
  { href: "#background", label: "Background" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
];

export const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };
    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  return (
    <nav
      ref={menuRef}
      className="sticky top-0 z-50 bg-stone-50 dark:bg-zinc-950 border-b border-stone-200/50 dark:border-zinc-800/50 pt-[env(safe-area-inset-top)]"
    >
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
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2 text-stone-500 hover:text-stone-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {menuOpen ? (
                <FaTimes className="w-5 h-5" />
              ) : (
                <FaBars className="w-5 h-5" />
              )}
            </button>
            <ThemeToggle />
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden border-t border-stone-200/50 dark:border-zinc-800/50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 py-3 flex flex-col gap-1">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="text-sm text-stone-500 hover:text-stone-900 dark:text-zinc-400 dark:hover:text-zinc-100 no-underline transition-colors duration-200 py-2 px-2 rounded-lg hover:bg-stone-100 dark:hover:bg-zinc-900"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};
