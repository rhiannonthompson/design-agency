import React from 'react'

export default function Policy({heading, policyInfo, links, ...props}) {
  
  const [terms, privacy] = links;
  
  return (
    <div className=" flex flex-col mt-8">
      <h6 className="footer-heading">{heading}</h6>
    <p className=" mb-2 text-sm md:text-md max-w-xl">
        {policyInfo}
    </p>
    <a href="/" className="mb-1 text-link">
      {terms}
    </a>
    <a href="/" className="text-link">
      {privacy}
    </a>
  </div>
  )
}

Policy.defaultProps = {
  heading: "heading",
  policyInfo: "our policy information",
  terms: "policy link",
  privacy: "privacy link",
}
