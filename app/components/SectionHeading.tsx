import React from 'react'

type SectionHeadingProp = { heading: string };

export default function SectionHeading(props: SectionHeadingProp) {
  return (
    <h2 className="text-3xl font-medium capitalize mb-8">{props.heading}</h2>
  )
}
