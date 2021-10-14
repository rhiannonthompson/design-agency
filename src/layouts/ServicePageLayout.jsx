import React from "react";

export default function ServicePageLayout({ ...props }) {
  return (
    <div className="min-h-full bg-yellow-50 py-28">
      <div className="w-full top-28">{props.children}</div>
    </div>
  );
}
