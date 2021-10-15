import React from 'react'

export default function ProjectsPageLayout({...props}) {
  return (
    <div className="min-h-full bg-yellow-100 py-28">
      <div className="w-full">{props.children}</div>
    </div>
  )
}
