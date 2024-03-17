/* eslint-disable @next/next/no-img-element */
'use client'

import React from 'react'
import { motion } from "framer-motion";
import _ from 'lodash'
import { containerMotion, fadeInFromBottom } from "@/function/framer-animation";
// layout
import { Section, Container } from "@/components/layout"
// components
import { SectionTitles, VideoLists } from '@/components/shared'

export function VideoList({ data, marginTop, sectionCount, subCollection, collections }) {
  const { fields } = data
  const filterCollection = _.filter(subCollection, data => data.fields.active)

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
          className="mx-auto max-w-screen-2xl text-center"
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
            (filterCollection && filterCollection.length > 0) && (
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={containerMotion}
                className="mx-auto text lg:text-center"
              >
                {
                  filterCollection?.map((item, i) => (
                    <div className="mt-8 " key={item.name}>
                      <VideoLists
                        data={item}
                        collections={collections[i]}
                      />
                    </div>
                  ))
                }
              </motion.div>
            )
          }
        </motion.div>
      </Container>
    </Section>
  )
}
