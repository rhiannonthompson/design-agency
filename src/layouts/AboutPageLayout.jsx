import React from 'react'

export default function AboutPageLayout({...props}) {
    return (
    <div className="min-h-full bg-yellow-50 py-28">
      <div className="w-full">{props.children}</div>
    </div>
  );
}
