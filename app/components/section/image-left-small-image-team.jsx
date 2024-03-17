/* eslint-disable @next/next/no-img-element */
'use client'

import React from 'react'
import { motion } from "framer-motion";
import _ from 'lodash'
// layouts
import { Section, Container } from "@/components/layout"
// components
import { ImageHolder } from '@/components/shared'
// function
import { containerMotion, fadeInFromBottom } from "@/function/framer-animation";


export function ImageLeftSmallImageTeam({ data, marginTop, sectionCount }) {
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
          className="relative mt-6 grid lg:grid-cols-2 gap-8 lg:gap-12 xl:grid-cols-12"
        >
          <motion.div 
            className="mx-auto xl:col-span-4"
            variants={fadeInFromBottom}
          >
            <ImageHolder
              image={fields.image} 
              styles={{
                figure: "",
                image: "relative z-1 object-center rounded-xl"
              }}
            />
          </motion.div>

          <div className="relative xl:col-span-8 mt-4 lg:mt-0">
            {/* titles */}
            <motion.div
              variants={fadeInFromBottom}
            >
              <h2 className="text-4xl md:text-5xl xl:text-6xl font-heading font-semibold text-gray-900">{ _.get(fields, 'title') }</h2>
            </motion.div>

             {/* titles */}
            <motion.div
              variants={fadeInFromBottom}
            >
              <p className="text-lg md:text-xl font-semibold uppercase tracking-wide text-primary-600">{ _.get(fields, 'subtitle') }</p>
            </motion.div>

            {/* Body */}
            {
              _.get(fields, 'body') && (
                <motion.div
                  variants={fadeInFromBottom}
                >
                <p className="prose prose-lg mt-6" dangerouslySetInnerHTML={{__html: _.get(fields, 'body')}}/>
                </motion.div>
              )
            }
          </div>
        </motion.div>
      </Container>
    </Section>
  )
}
