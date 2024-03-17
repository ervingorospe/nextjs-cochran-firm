'use client'

import React from 'react'
import { motion } from "framer-motion";
import _ from 'lodash'
import { containerMotion, fadeInFromBottom } from "@/function/framer-animation";
// layout
import { Section, Container } from "@/components/layout"
// components
import { SectionTitles, SectionBody, Card } from '@/components/shared'

export function DefaultCenteredWithList({ data, marginTop, sectionCount, subCollection, collections }) {
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

        {
          (filterCollection && filterCollection.length > 0) && (
            <motion.div 
              className="mx-auto mt-16 lg:max-w-4xl"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerMotion}
            >
              <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                {
                  filterCollection?.map((item, i) => (
                    <motion.div
                      variants={fadeInFromBottom}
                      key={i}
                    >
                      <Card
                        data={item}
                        collections={collections[i]}
                      />
                    </motion.div>
                  ))
                }
              </dl>
            </motion.div>
          )
        }
      </Container>
    </Section>
  )
}
