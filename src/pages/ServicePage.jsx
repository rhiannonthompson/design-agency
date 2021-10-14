import React from 'react'
import Section from '../layouts/Section'
import { useLocation } from 'react-router'


export default function ServicePage({...props}) {
  
  const location = useLocation();
  const id = location.pathname.slice(location.pathname.length - 1);
  
  return (
    <Section heading={`Service ${id}`}>
      <div>{`Service ${id}`}</div>
    </Section>
  )
}
