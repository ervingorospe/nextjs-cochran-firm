/* eslint-disable @next/next/no-img-element */
'use client'

import React from 'react'
import { motion } from "framer-motion";
import _ from 'lodash'
// layouts
import { Section, Container } from "@/components/layout"
// components
import { SectionTitles, SectionBody, SectionButtons, ImageHolder } from '@/components/shared'
// function
import { containerMotion, fadeInFromBottom } from "@/function/framer-animation";


export function ImageRightDetachedTitle({ data, marginTop, sectionCount, navigation }) {
  const { fields } = data

  return (
    <Section
      bg={_.get(fields, 'backgroundColorClass')}
      className="relative"
    >
      <Container
        size={_.get(fields, 'containerWidth') !== 'default' ? _.get(fields, 'containerWidth') : 'max-w-screen-2xl'}
        className={marginTop}
      >
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerMotion}
        >
          <SectionTitles
            sectionCount={sectionCount}
            fields={fields}
            motionStyle={{
              title: fadeInFromBottom,
              subtitle: fadeInFromBottom
            }}
            defaultSize={{
              title: 'default',
              subtitle: 'subtitle'
            }}
            styles={{
              title: 'default',
              subtitle: 'subtitle'
            }}
            className={{
              title: 'mt-1',
              subtitle: 'mt-1'
            }}
          />
          
          <div className="mt-6 grid gap-8 lg:grid-cols-2">
            <div className="">
              {/* Body */}
              <SectionBody
                fields={fields}
                motionStyle={{
                  body: fadeInFromBottom,
                  extraBody: fadeInFromBottom
                }}
                defaultSize={{
                  body: 'default',
                  extraBody: 'default'
                }}
                className={{
                  body: 'mt-6',
                  extraBody: 'mt-6'
                }}
              />

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
            </div>
            <motion.div 
              className="relative"
              variants={fadeInFromBottom}
            >
              <div className="absolute -top-[12%] -bottom-[12%] left-1/4 hidden lg:w-[37vw] xl:w-[43vw] 2xl:w-[39.3vw] bg-secondary-100 bg-gradient-to-r from-secondary-100 to-secondary-50 lg:block">
                <div className="pattern-secondary-light absolute inset-0"></div>
              </div>
              {
                _.get(fields, 'videoUrl') ? (
                  <figure className="aspect-w-16 aspect-h-9 relative z-1 overflow-hidden rounded-xl">
                    <iframe className="h-full w-full object-cover object-center" src={_.get(fields, 'videoUrl')} allowFullScreen/>
                  </figure>
                ) :
                (
                  <ImageHolder
                    image={fields.image} 
                    styles={{
                      figure: "aspect-w-16 aspect-h-9 relative z-1 overflow-hidden rounded-xl",
                      image: "h-full w-full object-cover object-center"
                    }}
                  />
                )
              }
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </Section>
  )
}
