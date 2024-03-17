'use client'

import React, { useEffect, useState } from 'react'
import Script from 'next/script'
import { motion } from "framer-motion";
import _ from 'lodash'
import { getTiktokSrc } from '@/function/embed-codes'
// layout
import { Section, Container } from "@/components/layout"
// components
import { SectionTitles, SectionBody, SectionButtons } from '@/components/shared'
// function
import { containerMotion, fadeInFromBottom } from "@/function/framer-animation";

export function YoutubeFeed({ data, marginTop, sectionCount, navigation }) {
  const { fields } = data
  const embedCode = getTiktokSrc(fields.embed)

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
          className="mx-auto lg:text-center"
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
                className={{
                  button: 'mx-auto max-w-sm',
                  button2: 'mx-auto max-w-sm'
                }}
              />
            )
          }
          <div className="py-10">
            <Script src={embedCode.scriptCode} defer data-elfsight-app-lazy></Script>
            <div className={embedCode.divCode}></div>
          </div>
        </motion.div>
      </Container>
    </Section>
  )
}
