'use client'

import _ from "lodash"
import { Section, Container } from "@/components/layout"
import { motion } from "framer-motion";
// components
import { SectionTitles, SectionBody, ImageHolder, SectionButtons } from '@/components/shared'
// function
import { containerMotion, fadeInFromBottom } from "@/function/framer-animation";

export function ImageLeftCustom({ data, marginTop, sectionCount, navigation }) {
  const { fields } = data

  return (
    <Section
      bg={_.get(fields, 'backgroundColorClass')}
      className="pt-24 pb-16 sm:pt-32 sm:pb-24 xl:pb-32"
    >
      <div className="relative bg-secondary-900 pb-20 sm:pb-24 xl:pb-0">
        <div className="pattern-secondary absolute inset-0"></div>
        <div className="absolute inset-0 bg-gradient-to-l from-secondary-900"></div>
      
        <motion.div 
          className="relative z-1 mx-auto flex max-w-screen-2xl flex-col items-center gap-y-10 gap-x-8 px-6 sm:gap-y-8 lg:px-8 xl:flex-row xl:items-stretch"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerMotion}
        >
          <motion.div 
            className="-mt-12 w-full max-w-2xl xl:-mb-12 xl:w-[600px] xl:flex-none"
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
                    figure: "aspect-w-16 aspect-h-9 relative h-full xl:aspect-w-3 xl:aspect-h-2 md:-mx-8 xl:mx-0",
                    image: "absolute inset-0 h-full w-full rounded-2xl bg-secondary-800 object-cover object-end shadow-2xl"
                  }}
                />
              )
            }
          </motion.div>

          <div className="w-full max-w-2xl xl:max-w-none xl:flex-auto xl:py-24 xl:px-16">
            <div className="relative isolate">
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
                  title: 'light-title',
                  subtitle: 'light-subtitle'
                }}
                className={{
                  title: 'mt-1',
                  subtitle: 'mt-3'
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
                  body: 'mt-6 prose-secondary-invert',
                  extraBody: 'mt-6 prose-secondary-invert'
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
      </div>
    </Section>
  )
}
