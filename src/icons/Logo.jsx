import React from "react";
import { useHistory } from "react-router";
import HEADINGS from "../content/headings";

export default function Logo({ color, size, hover, ...props }) {
  const location = useHistory();

  const logoContent = HEADINGS.hero.logo;

  function handleClick() {
    location.push("/");
  }

  return (
    <div className=" max-w-max">
      <div
        onClick={handleClick}
        className="group flex flex-row items-end cursor-pointer"
      >
        <svg
          className={`${color} ${size} group-hover:text-yellow-700`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          alt="logo"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
          />
        </svg>
        <span className={`pl-1 text-xl font-semibold group-hover:text-yellow-700 ${color}`}>
          {logoContent}
        </span>
      </div>
    </div>
  );
}
