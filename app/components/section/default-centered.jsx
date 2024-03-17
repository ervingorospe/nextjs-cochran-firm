'use client'

import React from 'react'
import { motion } from "framer-motion";
import _ from 'lodash'
import { containerMotion, fadeInFromBottom } from "@/function/framer-animation";
// layout
import { Section, Container } from "@/components/layout"
// components
import { SectionTitles, SectionBody, ImageHolder } from '@/components/shared'

export function DefaultCentered({ data, marginTop, sectionCount, navigation }) {
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
          className="mx-auto max-w-screen-lg lg:text-center"
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
              title: 'default',
              subtitle: 'subtitle'
            }}
            styles={{
              title: 'default',
              subtitle: 'subtitle'
            }}
            className={{
              title: 'text-center',
              subtitle: 'mt-1 text-center'
            }}
          />
          
          {
            (_.get(fields, 'videoUrl') || fields.image) && (
              <motion.div 
                className="relative mt-6"
                variants={fadeInFromBottom}
              >
                {
                  _.get(fields, 'videoUrl') ? (
                    <figure className="aspect-w-16 aspect-h-9 relative h-full xl:aspect-w-3 xl:aspect-h-2 md:-mx-8 xl:mx-0">
                      <iframe className="absolute inset-0 h-full w-full rounded-2xl bg-secondary-800 object-cover object-end shadow-2xl" src={_.get(fields, 'videoUrl')} allowFullScreen/>
                    </figure>
                  ) :
                  (
                    <ImageHolder
                      image={fields.image} 
                      styles={{
                        figure: "w-full h-full",
                        image: "w-full h-full shadow-2xl"
                      }}
                    />
                  )
                }
              </motion.div>
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
              body: 'default',
              extraBody: 'default'
            }}
            className={{
              body: 'mt-6',
              extraBody: 'mt-4'
            }}
          />
        </motion.div>
      </Container>
    </Section>
  )
}
