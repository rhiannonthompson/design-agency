import React from "react";
import { Link } from "react-router-dom";

export default function ButtonLink({ content, bgColor, borderColor, size, ...props }) {
  return (
    <button
      className={`${borderColor} ${bgColor} btn`}
    >
      <Link
        to="/"
        className={`${size} btn-text`}
      >
        {content}
      </Link>
    </button>
  );
}
