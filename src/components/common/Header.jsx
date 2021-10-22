import React, { useState } from "react";
import Logo from "../../icons/Logo.jsx";
import Navbar from "./Navbar";

export default function Header({ ...props }) {
  const [active, setActive] = useState(false);

  function handleClickToggleMenu() {
    setActive(!active);
  }

  return (
      <header className="relative">
      <div className="py-10 transition-all duration-300 bg-white text-gray-700 z-40 w-full inset-x-0 px-4 fixed right-0 left-0 md:shadow-md">
        <div className="flex max-w-7xl m-auto justify-between">
          <Logo color="text-gray-700" size="w-10 h-10" />
          <div
            onClick={handleClickToggleMenu}
            className="cursor-pointer uppercase md:hidden"
          >
            <svg
              className="w-10"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="img"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 1024 1024"
            >
              <path
                d="M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z"
                fill="currentColor"
              />
            </svg>
          </div>
          <Navbar active={active} handleClick={handleClickToggleMenu} />
          </div>
        </div>
      </header>
  );
}
