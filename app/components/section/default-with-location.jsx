'use client'

import _ from "lodash"
import { Section, Container } from "@/components/layout"
import { motion } from "framer-motion";
// components
import { SectionTitles, SectionBody, LocationCard } from '@/components/shared'
// function
import { containerMotion, fadeInFromBottom } from "@/function/framer-animation";

export function DefaultWithLocation({ data, marginTop, sectionCount, subCollection }) {
  const { fields } = data
  const filterCollection = _.filter(subCollection, item => item.name !== 'Location Info' && item.fields.active )

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

        {
          filterCollection.length > 0 && (
            <motion.div 
              className="relative mt-5 grid gap-3 md:mt-7 md:max-w-none md:grid-cols-2 lg:grid-cols-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerMotion}
            >
              {
                filterCollection?.map((item, i) => (
                  <motion.div
                    variants={fadeInFromBottom}
                    key={i}
                  >
                    <LocationCard
                      data={item}
                    />
                  </motion.div>
                ))
              }
            </motion.div>
          )
        }
      </Container>
    </Section>
  )
}
