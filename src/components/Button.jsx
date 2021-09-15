import React from "react";
import { Link } from "react-router-dom";

export default function Button({ content, ...props }) {
  return (
    <button
      className="border-2 border-white py-1 px-4 bg-gray-700 bg-opacity-50 transform transition duration-150 ease-in-out hover:bg-opacity-75 hover:scale-105
    "
    >
      <Link
        to="/"
        className="uppercase text-white font-extralight text-lg md:text-1xl"
      >
        {content}
      </Link>
    </button>
  );
}
