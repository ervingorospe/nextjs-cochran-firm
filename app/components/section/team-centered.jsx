'use client'

import React from 'react'
import { motion } from "framer-motion";
import _ from 'lodash'
import Link from 'next/link'
import { containerMotion, fadeInFromBottom } from "@/function/framer-animation";
// layout
import { Section, Container } from "@/components/layout"
// components
import { SectionTitles, SectionBody, ImageHolder } from '@/components/shared'
import { formatRouteName } from '@/function/formatting';

export function TeamCentered({ data, marginTop, sectionCount, subCollection }) {
  const { fields } = data
  const filterCollection = _.filter(subCollection, item => item.fields.active)

  return (
    <Section
      bg={_.get(fields, 'backgroundColorClass')}
      className="relative"
    >
      <Container
        size={_.get(fields, 'containerWidth') !== 'default' ? _.get(fields, 'containerWidth') : 'max-w-screen-2xl'}
        className={`relative z-1 text-center ${marginTop}`}
      >
        <motion.div 
          className="mx-auto"
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
            <motion.ul
              role="list"
              className="grid md:grid-cols-2 mx-auto lg:flex flex-wrap justify-center lg:space-x-14"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerMotion}
            >
              {filterCollection.map((item, i) => {
                const slug = formatRouteName(item.name.replace(/[^a-zA-Z0-9 ]/g, ''))

                return (
                  <motion.li 
                    key={i} 
                    className="group w-full md:w-auto mt-14"
                    variants={fadeInFromBottom}
                  >
                    {
                      _.get(item, 'fields.subtitle') === "Paralegal" ? (
                        <div>
                          <ImageHolder
                            image={_.get(item, 'fields.image')} 
                            styles={{
                              figure: "h-56 w-56 overflow-hidden rounded-full",
                              image: "mx-auto object-center object-cover h-full w-full group-hover:scale-110 transition ease-in-out duration-300"
                            }}
                          />
                          <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-gray-900">{item.name}</h3>
                          <p className="text-sm leading-6 text-gray-600">{_.get(item, 'fields.subtitle')}</p>
                        </div>
                      )
                      :
                      (
                        <Link href={`/about-us/our-team/${slug}`} className="cursor-pointer ">
                          <ImageHolder
                            image={_.get(item, 'fields.image')} 
                            styles={{
                              figure: "h-56 w-56 overflow-hidden rounded-full",
                              image: "mx-auto object-center object-cover h-full w-full group-hover:scale-110 transition ease-in-out duration-300"
                            }}
                          />
                          <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-gray-900">{item.name}</h3>
                          <p className="text-sm leading-6 text-gray-600">{_.get(item, 'fields.subtitle')}</p>
                        </Link>
                      )
                    }
                  </motion.li>
                )
              })}
            </motion.ul>
          )
        }
      </Container>
    </Section>
  )
}
