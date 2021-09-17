import React from "react";
import { Link } from "react-router-dom";

export default function Navbar({ active, handleClick, ...props }) {
  return (
    <nav
      className={`
   ${!active && "inset-0 transform -translate-x-full"}
    absolute flex flex-col text-center p-16 md:p-0 top-full w-full h-screen bg-white left-0 z-50 translate-x-0 transition-transform duration-300 md:h-0 md:static md:pt-3 md:w-0 md:flex
  `}
    >
      <ul className="flex flex-col border-2 py-16 md:py-0 md:border-0 md:flex-row md:justify-end md:pt-1">
        <li className="list-none mb-6 md:pr-4">
          <Link
            to="/"
            className="text-xl md:text-base uppercase font-semibold hover:text-yellow-700 cursor-pointer"
          >
            Home
          </Link>
        </li>
        <li className="list-none mb-6 md:pr-4">
          <Link
            to="/"
            className="text-xl md:text-base uppercase hover:text-yellow-700 cursor-pointer"
          >
            About
          </Link>
        </li>
        <li className="list-none">
          <Link
            to="/"
            className="text-xl md:text-base uppercase hover:text-yellow-700 cursor-pointer"
          >
            Contact
          </Link>
        </li>
        <li
          className={`${!active && "hidden"}
          mt-16 
        `}
        >
          <button
            onClick={handleClick}
            className={`${!active && "hidden"}
               bg-gray-800 py-2 px-4 text-sm uppercase text-white font-light
            `}
          >
            Close Menu
          </button>
        </li>
      </ul>
    </nav>
  );
}
