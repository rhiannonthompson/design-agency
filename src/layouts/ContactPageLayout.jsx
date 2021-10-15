import React from "react";

export default function ContactPageLayout({...props }) {
  return (
    <div className="min-h-full bg-yellow-100 pt-28">
    <div className="w-full">{props.children}</div>
  </div>
  );
}
