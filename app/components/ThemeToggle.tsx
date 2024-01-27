"use client";

import React from "react";
import { FaMoon, FaSun } from "react-icons/fa6";
import { useTheme } from "next-themes";

export const ThemeToggle = () => {
  const { setTheme, resolvedTheme } = useTheme();

  const onChange = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const theme = event.target.checked ? "dark" : "light";

      setTheme(theme);
    },
    [setTheme]
  );

  return (
    <div>
      <input
        type="checkbox"
        className="dark-mode-toggle"
        id="dark-mode-toggle"
        checked={resolvedTheme === "dark"}
        onChange={onChange}
      />
      <label htmlFor="dark-mode-toggle" className="dark-mode-toggle--label">
        <span className="text-sky-300">
          <FaMoon />
        </span>
        <span className="text-amber-300">
          <FaSun />
        </span>
        <span className="dark-mode-toggle--ball"></span>
      </label>
    </div>
  );
};
