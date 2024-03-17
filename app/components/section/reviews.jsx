'use client'

import _ from "lodash"
import { Section, Container } from "@/components/layout"
import { motion } from "framer-motion";
// components
import { SectionTitles, SectionBody, ReviewCard } from '@/components/shared'
// function
import { containerMotion, fadeInFromBottom } from "@/function/framer-animation";

export function Reviews({ data, marginTop, sectionCount, subCollection, navigation }) {
  const { fields } = data
  const filterCollection = _.filter(subCollection, item => item.fields.active )

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
          className="max-w-3xl text-center"
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
              title: 'mt-1',
              subtitle: 'mt-1'
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
              extraBody: 'mt-6'
            }}
          />
        </motion.div>

        {
          (filterCollection && filterCollection.length > 0) && (
            <motion.div 
              className="mx-auto mt-12 grid max-w-2xl grid-cols-1 grid-rows-1 gap-8 text-sm leading-6 text-gray-900 sm:mt-14 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-flow-col xl:grid-cols-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerMotion}
            >
              {
                (filterCollection && filterCollection[0]) && (
                  <ReviewCard
                    data={filterCollection[0]}
                    styles={{ 
                      bodyText: 'p-12 text-xl font-semibold leading-8 tracking-tight text-gray-900',
                      figure: 'col-span-2 hidden rounded-lg sm:block sm:bg-white sm:shadow-lg sm:ring-1 sm:ring-gray-900/5 xl:col-start-2 xl:row-end-1',
                      image: 'h-10 w-10 flex-none rounded-full bg-gray-50',
                      figCaption: 'flex items-center gap-x-4 border-t border-gray-900/10 py-4 px-6',
                      textTitle: 'flex-auto'
                     }}
                  />
                )
              }
              

              <div className="space-y-8 xl:contents xl:space-y-0">
                <div className="space-y-8 xl:row-span-2">
                  {
                    (filterCollection && filterCollection[1]) && (
                      <ReviewCard
                        data={filterCollection[1]}
                        styles={{ 
                          bodyText: 'text-gray-900',
                          figure: 'rounded-lg bg-white p-6 shadow-lg ring-1 ring-gray-900/5',
                          image: 'h-10 w-10 rounded-full bg-gray-50',
                          figCaption: 'mt-6 flex items-center gap-x-4',
                          textTitle: ''
                        }}
                      />
                    )
                  }
              
                  {
                    (filterCollection && filterCollection[3]) && (
                      <ReviewCard
                        data={filterCollection[3]}
                        styles={{ 
                          bodyText: 'text-gray-900',
                          figure: 'rounded-lg bg-white p-6 shadow-lg ring-1 ring-gray-900/5',
                          image: 'h-10 w-10 rounded-full bg-gray-50',
                          figCaption: 'mt-6 flex items-center gap-x-4',
                          textTitle: ''
                        }}
                      />
                    )
                  }
                </div>

                <div className="space-y-8 xl:row-start-1">
                  {
                    (filterCollection && filterCollection[5]) && (
                      <ReviewCard
                        data={filterCollection[5]}
                        styles={{ 
                          bodyText: 'text-gray-900',
                          figure: 'rounded-lg bg-white p-6 shadow-lg ring-1 ring-gray-900/5',
                          image: 'h-10 w-10 rounded-full bg-gray-50',
                          figCaption: 'mt-6 flex items-center gap-x-4',
                          textTitle: ''
                        }}
                      />
                    )
                  }
                </div>
              </div>

              <div className="space-y-8 xl:contents xl:space-y-0">
                <div className="space-y-8 xl:row-start-1">
                  {
                    (filterCollection && filterCollection[6]) && (
                      <ReviewCard
                        data={filterCollection[6]}
                        styles={{ 
                          bodyText: 'text-gray-900',
                          figure: 'rounded-lg bg-white p-6 shadow-lg ring-1 ring-gray-900/5',
                          image: 'h-10 w-10 rounded-full bg-gray-50',
                          figCaption: 'mt-6 flex items-center gap-x-4',
                          textTitle: ''
                        }}
                      />
                    )
                  }
                </div>

                <div className="space-y-8 xl:row-span-2">
                  {
                    (filterCollection && filterCollection[2]) && (
                      <ReviewCard
                        data={filterCollection[2]}
                        styles={{ 
                          bodyText: 'text-gray-900',
                          figure: 'rounded-lg bg-white p-6 shadow-lg ring-1 ring-gray-900/5',
                          image: 'h-10 w-10 rounded-full bg-gray-50',
                          figCaption: 'mt-6 flex items-center gap-x-4',
                          textTitle: ''
                        }}
                      />
                    )
                  }

                  {
                    (filterCollection && filterCollection[4]) && (
                      <ReviewCard
                        data={filterCollection[4]}
                        styles={{ 
                          bodyText: 'text-gray-900',
                          figure: 'rounded-lg bg-white p-6 shadow-lg ring-1 ring-gray-900/5',
                          image: 'h-10 w-10 rounded-full bg-gray-50',
                          figCaption: 'mt-6 flex items-center gap-x-4',
                          textTitle: ''
                        }}
                      />
                    )
                  }
                </div>
              </div>
            </motion.div>
          )
        }
      </Container>
    </Section>
  )
}
