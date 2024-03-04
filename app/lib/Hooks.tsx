import React from "react"
import { useInView } from "react-intersection-observer"
import { useActiveSectionContext } from "../context/ActiveSectionContextProvider"
import { SectionName } from "./types"

export function useSectionInView(sectionName: SectionName, threshold = 0.75) {
  const { ref, inView } = useInView({threshold: threshold})
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext()
  
  React.useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(sectionName)
    }
  }, [inView, setActiveSection, timeOfLastClick, sectionName])

  return {
    ref
  }
}