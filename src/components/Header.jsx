import React, { useState } from "react";
import Logo from "./../icons/Logo.jsx";
import Navbar from "./Navbar.jsx";

export default function Header({ ...props }) {
  const [active, setActive] = useState(false);

  function handleClickToggleMenu() {
    setActive(!active);
  }

  return (
    <header className="bg-white relative text-gray-700">
      <div className="max-w-7xl m-auto flex justify-between py-10 px-4">
      
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
    </header>
  );
}
