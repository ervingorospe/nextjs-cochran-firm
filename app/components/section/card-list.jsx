/* eslint-disable @next/next/no-img-element */
'use client'

import React from 'react'
import { motion } from "framer-motion";
import _ from 'lodash'
// layout
import { Section, Container } from "@/components/layout"
// components
import { SectionTitles, SectionBody, ButtonCard } from '@/components/shared'
// function
import { containerMotion, fadeInFromBottom } from "@/function/framer-animation";


export function CardList({ data, marginTop, sectionCount, subCollection, navigation }) {
  const { fields } = data
  const filterCollection = _.filter(subCollection, item => item.fields.active)

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
              body: 'mt-2',
              extraBody: 'mt-4'
            }}
          />
        </motion.div>

        <div className="relative mt-5 lg:mt-6">
          <div className="absolute top-[5%] bottom-[5%] right-1/3 hidden w-[5000px] bg-secondary-100 bg-gradient-to-l from-secondary-100 to-secondary-50 lg:block">
            <div className="pattern-secondary-light absolute inset-0"></div>
          </div>
          {
            filterCollection.length > 0 && (
              <motion.div 
                className="relative z-1 grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={containerMotion}
              >
                {
                  filterCollection?.map((item, i) => (
                    <motion.div 
                      className="flex w-full flex-col items-start space-y-3 lg:justify-center" key={i}
                      variants={fadeInFromBottom}
                    >
                      <ButtonCard
                        data={{
                          name: item.name,
                          fields: {
                            ..._.get(item, 'fields'),
                            button: {
                              url: _.get(item, 'fields.url'),
                              target: _.get(item, 'fields.target')
                            },
                            buttonPageLink: _.get(item, 'fields.pageLink')
                          }
                        }}
                        className="group aspect-h-1 aspect-w-4 w-full overflow-hidden rounded-lg md:aspect-w-6 lg:aspect-h-2 lg:aspect-w-3"
                        navigation={navigation}
                      />
                    </motion.div>
                  ))
                }
              </motion.div>
            )
          }
        </div>
      </Container>
    </Section>
  )
}
