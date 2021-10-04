import React from 'react'
import Section from '../layouts/Section'
import { useLocation } from 'react-router'


export default function ProjectPage({...props}) {
  
  const location = useLocation();
  const id = location.pathname.slice(location.pathname.length - 1);
  
  return (
    <Section heading={`Project ${id}`}>
      <div>{`Project ${id}`}</div>
    </Section>
  )
}

