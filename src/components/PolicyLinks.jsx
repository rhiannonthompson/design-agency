import React from 'react'

export default function PolicyLinks() {
  return (
    <div className=" flex flex-col mt-8">
    <h6 className="mb-2 text-lg font-bold">Our Policy</h6>
    <p className=" mb-2 text-sm md:text-md max-w-xl">
      Copy about the website Lorem ipsum dolor, sit amet consectetur
        adipisicing elit. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta blanditiis aperiam totam itaque omnis maiores quidem dolores porro nisi officiis.
    </p>
    <a href="/" className="underline md:no-underline mb-1 md:hover:underline text-sm">
      Terms and Conditions
    </a>
    <a href="/" className="underline md:no-underline md:hover:underline text-sm">
      Privacy Policy
    </a>
  </div>
  )
}
