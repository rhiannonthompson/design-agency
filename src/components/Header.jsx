import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./../icons/Logo.jsx";

export default function Header({ ...props }) {
  const [active, setActive] = useState(true);

  function handleClickToggleMenu(params) {
    setActive(!active);
  }

  return (
    <header className="bg-white relative text-gray-700">
      <div className="max-w-7xl mx-auto flex justify-between items-center content-center py-10 px-2.5">
        <div className="w-14">
          <Logo />
        </div>

        <div
          onClick={handleClickToggleMenu}
          className="cursor-pointer uppercase md:hidden"
        >
          Menu
        </div>

        <nav
          className={`
         ${!active && "hidden"}
          absolute flex flex-col top-full w-full left-0 z-20 md:static md:w-auto md:flex 
        `}
        >
          <ul className=" pl-2 md:flex md:flex-row">
            <li className="list-none md:mr-6">
              <Link to="/" className="flex w-full text-base uppercase hover:text-green-700 cursor-pointer">
                Home
              </Link>
            </li>
            <li className="list-none md:mr-6">
              <Link className="flex w-full text-base uppercase hover:text-green-700 cursor-pointer">
                About
              </Link>
            </li>
            <li className="list-none">
              <Link className="flex w-full text-base uppercase hover:text-green-700 cursor-pointer">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
