/* eslint-disable @next/next/no-img-element */
'use client'

import React, { useState, useEffect } from 'react'
import { motion } from "framer-motion";
import Link from 'next/link'
// layout
import { Section, Container } from "@/components/layout"
// function
import { containerMotion, fadeInFromBottom } from "@/function/framer-animation";
// components
import { SectionButtons, SectionTitles, SectionBody } from '@/components/shared'

export function HeroCentered({ data, marginTop, sectionCount }) {
  const { fields } = data
  
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
          className="grid justify-center items-center text-center"
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
              title: 'text-center',
              subtitle: 'mt-1 text-center'
            }}
          />

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
          
          {
            _.get(fields, 'phone') && (
              <motion.div
                variants={fadeInFromBottom}
              >
                <Link href={`tel:${_.get(fields, 'phone').replace('-','')}`} className="mt-5 flex items-center space-x-3 text-xl text-white md:text-2xl">
                  <span className="sr-only">Telephone</span>
                  <span className="stroke-current text-primary-400">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                  </span>
                  <p>{_.get(fields, 'phone')}</p>
                </Link>
              </motion.div>
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
        </motion.div>
      </Container>
      <div className="absolute inset-0">
        <div className="absolute right-0 bottom-0 hidden h-1/2 w-2/5 border-2 border-secondary-600 bg-secondary-500 bg-opacity-20 lg:block"></div>
        <div className="absolute top-1/4 right-0 bottom-24 hidden w-1/4 border-2 border-secondary-600 bg-secondary-500 bg-opacity-20 lg:block"></div>
        <svg className="absolute left-0 right-0 bottom-0 scale-y-flipped transform fill-current text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1338 50">
          <path d="m1291.93,14.04H46.07C41.51,35.3,22.62,50,0,50V0h1338v50c-22.62,0-41.51-15.94-46.07-37.2Z" />
        </svg>
      </div>
    </Section>
  )
}
