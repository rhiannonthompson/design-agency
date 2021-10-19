import React from "react";
import { NavLink } from "react-router-dom";
import NAV_CONTENT from "../../content/navContent";

export default function Navbar({ active, handleClick, ...props }) {
  

  const { home, about, services, projects, contact } = NAV_CONTENT.navLinks;
  const { close } = NAV_CONTENT.buttonAction;
  

  return (
    <nav
      className={`
   ${!active && "inset-0 transform -translate-x-full"}
    absolute flex flex-col text-center p-16 md:p-0 top-full w-full h-screen bg-white left-0 z-50 translate-x-0 transition-transform duration-300 md:h-0 md:static md:pt-3 md:w-0 md:flex
  `}
    >
      <ul className="flex flex-col border-2 py-16 md:py-0 md:border-0 md:flex-row md:justify-end md:pt-1">
        <li className="mb-6 md:pr-4">
          <NavLink
            onClick={handleClick}
            to="/"
            className="text-xl md:text-base uppercase md:hover:text-yellow-700 cursor-pointer"
            activeClassName="font-semibold"
            exact
          >
            {home}
          </NavLink>
        </li>
        <li className="mb-6 md:pr-4">
          <NavLink
            onClick={handleClick}
            to="/about"
            className="text-xl md:text-base uppercase md:hover:text-yellow-700 cursor-pointer"
            activeClassName="font-semibold"
          >
            {about}
          </NavLink>
        </li>
        <li className="mb-6 md:pr-4">
          <NavLink
            onClick={handleClick}
            to="/services"
            className="text-xl md:text-base uppercase md:hover:text-yellow-700 cursor-pointer"
            activeClassName="font-semibold"
          >
            {services}
          </NavLink>
        </li>
        <li className="mb-6 md:pr-4">
          <NavLink
            onClick={handleClick}
            to="/projects"
            className="text-xl md:text-base uppercase md:hover:text-yellow-700 cursor-pointer"
            activeClassName="font-semibold"
          >
            {projects}
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={handleClick}
            to="/contact"
            className="text-xl md:text-base uppercase md:hover:text-yellow-700 cursor-pointer"
            activeClassName="font-semibold"
          >
            {contact}
          </NavLink>
        </li>
        <li
          className={`${!active && "hidden"}
          mt-16 
        `}
        >
          <button
            onClick={handleClick}
            className={`${!active && "hidden"}
               md:hidden bg-gray-800 py-2 px-4 text-sm uppercase text-white font-light
            `}
          >
            {close}
          </button>
        </li>
      </ul>
    </nav>
  );
}
