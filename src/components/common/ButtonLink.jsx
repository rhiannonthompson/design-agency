import React from "react";
import { Link } from "react-router-dom";

export default function ButtonLink({ content, bgColor, borderColor, size, linkTo, ...props }) {
  return (
    <button
      className={`${borderColor} ${bgColor} btn`}
    >
      <Link
        to={linkTo}
        className={`${size} btn-text`}
      >
        {content}
      </Link>
    </button>
  );
}

