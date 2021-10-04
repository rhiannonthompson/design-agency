import React from "react";

export default function ContactPageLayout({...props }) {
  return (
    <div className="min-h-full relative bg-yellow-50">
    <div className="w-full absolute top-28">{props.children}</div>
  </div>
  );
}
