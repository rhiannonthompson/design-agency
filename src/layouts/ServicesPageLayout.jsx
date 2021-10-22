import React from 'react'

export default function ServicesPageLayout({...props}) {
  return (
    <div className="min-h-full bg-yellow-50 pt-28">
      <div className="w-full">{props.children}</div>
    </div>
  )
}
