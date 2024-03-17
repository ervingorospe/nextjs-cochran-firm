/* eslint-disable @next/next/no-img-element */
'use client'

import React  from 'react'
import { motion } from "framer-motion";
// layout
import { Section, Container } from "@/components/layout"
// function
import { containerMotion, fadeInFromBottom } from "@/function/framer-animation";
// components
import { SectionButtons, SectionTitles, SectionBody, Chip } from '@/components/shared'


export function HeroWithChip({ data, marginTop, sectionCount, subCollection, navigation }) {
  const { fields } = data
  const filterCollection = _.filter(subCollection, item => item.fields.active)
  
  return (
    <Section
      bg={_.get(fields, 'backgroundColorClass') ?? 'secondary-800'}
      className="relative overflow-hidden"
    >
      <div className="pattern-secondary absolute inset-0"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-secondary-950"></div>

      <div className="md:h-22 h-20 lg:h-24 xl:h-28"></div>

      <div className="pointer-events-none absolute inset-0 overflow-hidden"></div>

      <div className="relative"></div>
      <Container
        size={_.get(fields, 'containerWidth') !== 'default' ? _.get(fields, 'containerWidth') : 'max-w-screen-2xl'}
        className="relative z-1 py-12 md:py-16 lg:py-20 xl:py-24 2xl:py-28"
      >
        <motion.div 
          className="grid items-center text-left"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerMotion}
        >
          {/* titles */}
          <SectionTitles
            sectionCount={sectionCount}
            fields={fields}
            motionStyle={{
              title: fadeInFromBottom,
              subtitle: fadeInFromBottom
            }}
            defaultSize={{
              title: 'hero-title',
              subtitle: 'hero-subtitle'
            }}
            styles={{
              title: 'hero-title',
              subtitle: 'hero-subtitle'
            }}
            className={{
              title: 'text-left',
              subtitle: 'mt-1 text-left'
            }}
          />

          {
            (filterCollection && filterCollection.length > 0) && (
              <div 
                className="flex flex-wrap mt-2 sm:space-x-2 sm:text-center"
              >
                {
                  subCollection?.map((item, i) => (
                    <Chip data={item} key={i}/>
                  ))
                }
              </div>
            )
          }
          
          {/* section buttons */}
          {
            (_.get(fields, 'button') || _.get(fields, 'button-2')) && (
              <SectionButtons
                fields={fields}
                navigation={navigation}
                motionStyle={{
                  button: fadeInFromBottom,
                  button2: fadeInFromBottom
                }}
                buttonStyle={{
                  button: 'button-primary',
                  button2: 'button-primary'
                }}
                size={{
                  button: 'default',
                  button2: 'default'
                }}
              />
            )
          }

          {/* Body */}
          <SectionBody
            fields={fields}
            motionStyle={{
              body: fadeInFromBottom,
              extraBody: fadeInFromBottom
            }}
            defaultSize={{
              body: 'hero-custom-default',
              extraBody: 'hero-custom-default'
            }}
            className={{
              body: 'mt-6',
              extraBody: 'mt-6'
            }}
          />
        </motion.div>
      </Container>
      <div className="absolute inset-0">
        <svg className="absolute left-0 right-0 bottom-0 scale-y-flipped transform fill-current text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1338 50">
          <path d="m1291.93,14.04H46.07C41.51,35.3,22.62,50,0,50V0h1338v50c-22.62,0-41.51-15.94-46.07-37.2Z" />
        </svg>
      </div>
    </Section>
  )
}
