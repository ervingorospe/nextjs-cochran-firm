/* eslint-disable @next/next/no-img-element */
'use client'

import React from 'react'
import { motion } from "framer-motion";
import _ from 'lodash'
// layout
import { Section, Container, BodyLayout } from "@/components/layout"
// components
import { SectionTitles, SectionButtons } from '@/components/shared'
// function
import { containerMotion, fadeInFromBottom } from "@/function/framer-animation";


export function ArticleWithVideo({ data, marginTop, sectionCount, navigation }) {
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
          <div className="relative z-1 ${sectionStyles.textAlign">
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
          </div>
          
          <div className="mt-6 grid gap-8 lg:grid-cols-2">
            <motion.div 
              className="relative"
              variants={fadeInFromBottom}
            >
              <div className="absolute z-0 -top-[12%] -bottom-[12%] left-1/4 hidden lg:w-[37vw] xl:w-[43vw] 2xl:w-[39.3vw] bg-secondary-100 bg-gradient-to-r from-secondary-100 to-secondary-50 lg:block">
                <div className="z-0 pattern-secondary-light absolute inset-0"></div>
              </div>
              <figure className="aspect-w-16 aspect-h-9 relative z-1 overflow-hidden rounded-xl">
                <iframe className="h-full w-full" src={_.get(fields, 'videoUrl')} allowFullScreen/>
              </figure>
            </motion.div>

            <div className="relative lg:row-start-1">
              {/* body */}
              <motion.div
                variants={fadeInFromBottom}
              >
                <BodyLayout
                  size={_.get(fields, 'bodySize') === 'default' ? 'prose-md' : _.get(fields, 'bodySize')}
                  className={`${_.get(fields, 'bodyClass')}`}
                >
                  <p dangerouslySetInnerHTML={{__html: _.get(fields, 'body')}}/>
                </BodyLayout>
              </motion.div>
            </div>
          </div>

          <div className="grid relative z-1">
            <motion.div
              variants={fadeInFromBottom}
            >
              <BodyLayout
                size={_.get(fields, 'extraBodySize') === 'default' ? 'prose-md' : _.get(fields, 'extraBodySize')}
                className={`${_.get(fields, 'extraBodyClass')} max-w-full mt-4`}
              >
                <p dangerouslySetInnerHTML={{__html: _.get(fields, 'extraBody')}}/>
              </BodyLayout>
            </motion.div>

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
        </motion.div>
      </Container>
    </Section>
  )
}
