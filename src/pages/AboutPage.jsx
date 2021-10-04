import React from 'react'
import Section from '../layouts/Section'
import { useLocation } from 'react-router'

export default function AboutPage() {
  
  const location = useLocation();
  console.log(location.pathname);

  return (
    <Section heading={"About"}>
       <div>About Page</div>
    </Section>
  )
}
