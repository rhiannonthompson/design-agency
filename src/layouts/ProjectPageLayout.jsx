import React from "react";

export default function ProjectPageLayout({ ...props }) {
  return (
    <div className="bg-indigo-100 py-28">
      <div>{props.children}</div>
    </div>
  );
}

