'use client'

import React from 'react'
// layouts
import { Section, Container } from "@/components/layout"

export function DefaultHero({ data }) {
  return (
    <Section
      bg="secondary-800"
      className="relative overflow-hidden"
    >
      <div className="pattern-secondary absolute inset-0"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-secondary-950"></div>

      <div className="md:h-22 h-20 lg:h-24 xl:h-28"></div>

      <div className="pointer-events-none absolute inset-0 overflow-hidden"></div>

      <div className="relative"></div>

      <Container
        size='max-w-screen-2xl'
        className="relative z-1 py-12 md:py-16 lg:py-20 xl:py-24 2xl:py-28"
      >
        <div className="text-center">
          <h1 className="font-heading text-4xl font-semibold text-white md:text-5xl xl:text-6xl">{data.name}</h1>
        </div>
      </Container>
      <div className="absolute inset-0">
        <div className="absolute bottom-0 right-0 hidden h-1/2 w-2/5 border-2 border-secondary-600 border-opacity-50 bg-secondary-500 bg-opacity-10 lg:block"></div>
        <div className="absolute bottom-24 right-0 top-1/4 hidden w-1/4 border-2 border-secondary-600 border-opacity-50 bg-secondary-500 bg-opacity-10 lg:block"></div>
        <svg className="absolute bottom-0 left-0 right-0 scale-y-flipped transform fill-current text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1338 50">
          <path d="m1291.93,14.04H46.07C41.51,35.3,22.62,50,0,50V0h1338v50c-22.62,0-41.51-15.94-46.07-37.2Z" />
        </svg>
      </div>
    </Section>
  )
}
