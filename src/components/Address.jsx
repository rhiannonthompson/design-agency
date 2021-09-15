import React from 'react'

export default function Address({...props}) {
  return (
    <div className="mt-8 mr-8">
    <h6 className="mb-2 text-lg font-bold">Contact</h6>

    <div className="flex flex-row w-full mb-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 mr-2"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
      <span className="text-sm md:text-md">
        108 Hill Top, Maple Road. KG8334
      </span>
    </div>

    <div className="flex mb-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 mr-2"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
        />
      </svg>
      <span className="ml-1 text-sm md:text-md">012-222-222</span>
    </div>

    <div className="flex mb-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 mr-2"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
        />
      </svg>

      <span className="cursor-pointer hover:underline text-sm md:text-md">
        sadbsdesign@design.com
      </span>
    </div>
  </div>
  )
}
