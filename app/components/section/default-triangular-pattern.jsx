'use client'

import _ from "lodash"
import { Section, Container } from "@/components/layout"
import { motion } from "framer-motion";
// components
import { SectionTitles, SectionBody, ButtonCard } from '@/components/shared'
// function
import { containerMotion, fadeInFromBottom } from "@/function/framer-animation";

export function DefaultTriangularPattern({ data, marginTop, sectionCount, subCollection, navigation }) {
  const { fields } = data
  const filterCollection = _.filter(subCollection, item => item.fields.active)
  
  let count = 0

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
          className="max-w-3xl"
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

        <div className="relative mt-5 lg:mt-0">
          <div className="absolute top-[5%] bottom-[5%] right-1/3 hidden w-[5000px] bg-secondary-100 bg-gradient-to-l from-secondary-100 to-secondary-50 lg:block">
            <div className="pattern-secondary-light absolute inset-0"></div>
          </div>
          {
            filterCollection.length > 0 && (
              <motion.div 
                className="relative z-1 grid gap-3 md:mt-7 lg:mt-0 lg:flex"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={containerMotion}
              >
                {
                  filterCollection?.map((item, i) => {
                    const elements = [];

                    if (count < filterCollection.length) {
                      for (let x = 0; x <= i; x++) {
                        elements.push(
                          <ButtonCard
                            data={filterCollection[count]}
                            className="group aspect-h-1 aspect-w-4 w-full overflow-hidden rounded-lg md:aspect-w-6 lg:aspect-h-2 lg:aspect-w-3"
                            navigation={navigation}
                            key={`${item.name}${x}`}
                          />
                        );

                        count++;
                      }

                      return (
                        <motion.div 
                          className="flex w-full flex-col items-start space-y-3 lg:justify-center" key={i}
                          variants={fadeInFromBottom}
                        >
                          {elements}
                        </motion.div>
                      )
                    }
                  })
                }
              </motion.div>
            )
          }
        </div>
      </Container>
    </Section>
  )
}
