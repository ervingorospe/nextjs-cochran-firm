'use client'

import { Fragment, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { motion } from "framer-motion";
import _ from 'lodash'
// layout
import { Section, Container } from "@/components/layout"
// components
import { SectionTitles, SectionBody, SectionButtons } from '@/components/shared'
// function
import { containerMotion, fadeInFromBottom } from "@/function/framer-animation";

 
export function AccordionSection({ data, marginTop, sectionCount, subCollection, navigation }) {
  const [open, setOpen] = useState(0);
  const { fields } = data
  const filterCollection = _.filter(subCollection, item => item.fields.active)

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
 
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
              body: 'mt-6 max-w-full',
              extraBody: 'mt-4 max-w-full'
            }}
          />

          {/* accordion */}
          {
            filterCollection.length > 0 && (
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={containerMotion}
                className="mt-6 text-left max-w-screen-lg"
              >
                <Fragment>
                  {
                    filterCollection?.map((item, i) => (
                      <motion.div
                        variants={fadeInFromBottom} 
                        key={item.name}
                      >
                        <Accordion open={open === i + 1}>
                          <AccordionHeader onClick={() => handleOpen(i + 1)}>
                            <h3 className="text-left font-medium text-lg lg:text-xl tracking-wide">{item.name}</h3>
                          </AccordionHeader>
                          <AccordionBody>
                            <p className="text-md lg:text-lg prose max-w-full" dangerouslySetInnerHTML={{__html: _.get(item, 'fields.body')}}/>
                          </AccordionBody>
                        </Accordion>
                      </motion.div>
                    ))
                  }
                </Fragment>
              </motion.div>
            )
          }

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
        </motion.div>
      </Container>
    </Section>
  );
}