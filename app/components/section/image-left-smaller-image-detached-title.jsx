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


export function ImageLeftSmallerImageDetachedTitle({ data, marginTop, sectionCount, navigation }) {
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
          <div className="relative z-1">
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
                title: 'mt-1',
                subtitle: 'mt-1'
              }}
            />
          </div>
          
          <div className="relative mt-6 grid lg:grid-cols-2 gap-8 xl:grid-cols-12">
            <motion.div 
              className="mx-auto xl:col-span-4"
              variants={fadeInFromBottom}
            >
              <div className="absolute -bottom-[12%] -top-[12%] -left-1/2 hidden lg:w-[80vw] xl:w-[70vw] 2xl:w-[60vw] bg-secondary-100 bg-gradient-to-r from-secondary-100 to-secondary-50 lg:block">
                <div className="pattern-secondary-light absolute inset-0"></div>
              </div>
              <ImageHolder
                image={fields.image} 
                styles={{
                  figure: "",
                  image: "relative z-1 object-center rounded-xl"
                }}
              />
            </motion.div>

            <div className="xl:col-span-8 mt-4 lg:mt-0">
              {/* Body */}
              <SectionBody
                fields={fields}
                motionStyle={{
                  body: fadeInFromBottom,
                  extraBody: fadeInFromBottom
                }}
                defaultSize={{
                  body: 'md:prose-lg',
                  extraBody: 'md:prose-lg'
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
          </div>
        </motion.div>
      </Container>
    </Section>
  )
}
