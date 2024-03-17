'use client'

import React from 'react'
import { motion } from "framer-motion";
import _ from 'lodash'
// layout
import { Section, Container } from "@/components/layout"
// components
import { SectionTitles, SectionBody, SectionButtons } from '@/components/shared'
// function
import { containerMotion, fadeInFromBottom } from "@/function/framer-animation";


export function Default({ data, marginTop, sectionCount, navigation }) {
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
          className="mx-auto lg:text-left"
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
              title: 'text-left',
              subtitle: 'mt-1 text-left'
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
              body: 'default',
              extraBody: 'default'
            }}
            className={{
              body: 'mt-6 max-w-full',
              extraBody: 'mt-4 max-w-full'
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
        </motion.div>
      </Container>
    </Section>
  )
}
