"use client"

import React from 'react'
import SectionHeading from './SectionHeading'
import { projectsData } from "../lib/data"
import Project from './Project'
import { useInView } from 'react-intersection-observer'
import { useActiveSectionContext } from '../context/ActiveSectionContextProvider'

export default function Projects() {
  const { ref, inView } = useInView({threshold: 0.5})
  const { setActiveSection } = useActiveSectionContext()
  
  React.useEffect(() => {
    if (inView) {
      setActiveSection("Projects")
    }
  }, [inView, setActiveSection])
  const projects = projectsData.map((project, index) => (
    <React.Fragment
      key={index}>
      <Project {...project}/>
    </React.Fragment>
  ))
  return (
    <section
      className="scroll-mt-28"
      id="projects"
      ref={ref}>
      <SectionHeading heading='My projects'/>
      <div>{projects}</div>
    </section>
  )
}

