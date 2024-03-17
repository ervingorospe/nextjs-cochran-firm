/* eslint-disable @next/next/no-img-element */
'use client'

import React from 'react'
import { motion } from "framer-motion";
// function
import { containerMotion, fadeInFromBottom } from "@/function/framer-animation";
// layout
import { Section, Container } from "@/components/layout"
// component
import { SectionButtons, ImageHolder, VideoHolder } from '@/components/shared'

export function CallToAction({ data, navigation }) {
  const { fields } = data

  return (
    <Section 
      bg={_.get(fields, 'backgroundColorClass')}
      className="relative overflow-hidden"
    >
      <div className="absolute left-0 bottom-6 right-0">
        <svg className="absolute left-0 bottom-0 w-full fill-current text-secondary-200" fillOpacity="0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path d="M0,64L0,0L36.9,0L36.9,32L73.8,32L73.8,160L110.8,160L110.8,224L147.7,224L147.7,128L184.6,128L184.6,32L221.5,32L221.5,96L258.5,96L258.5,256L295.4,256L295.4,224L332.3,224L332.3,96L369.2,96L369.2,320L406.2,320L406.2,256L443.1,256L443.1,64L480,64L480,256L516.9,256L516.9,224L553.8,224L553.8,192L590.8,192L590.8,192L627.7,192L627.7,0L664.6,0L664.6,192L701.5,192L701.5,128L738.5,128L738.5,128L775.4,128L775.4,0L812.3,0L812.3,320L849.2,320L849.2,64L886.2,64L886.2,288L923.1,288L923.1,96L960,96L960,32L996.9,32L996.9,128L1033.8,128L1033.8,128L1070.8,128L1070.8,128L1107.7,128L1107.7,128L1144.6,128L1144.6,160L1181.5,160L1181.5,128L1218.5,128L1218.5,32L1255.4,32L1255.4,128L1292.3,128L1292.3,288L1329.2,288L1329.2,320L1366.2,320L1366.2,96L1403.1,96L1403.1,96L1440,96L1440,320L1403.1,320L1403.1,320L1366.2,320L1366.2,320L1329.2,320L1329.2,320L1292.3,320L1292.3,320L1255.4,320L1255.4,320L1218.5,320L1218.5,320L1181.5,320L1181.5,320L1144.6,320L1144.6,320L1107.7,320L1107.7,320L1070.8,320L1070.8,320L1033.8,320L1033.8,320L996.9,320L996.9,320L960,320L960,320L923.1,320L923.1,320L886.2,320L886.2,320L849.2,320L849.2,320L812.3,320L812.3,320L775.4,320L775.4,320L738.5,320L738.5,320L701.5,320L701.5,320L664.6,320L664.6,320L627.7,320L627.7,320L590.8,320L590.8,320L553.8,320L553.8,320L516.9,320L516.9,320L480,320L480,320L443.1,320L443.1,320L406.2,320L406.2,320L369.2,320L369.2,320L332.3,320L332.3,320L295.4,320L295.4,320L258.5,320L258.5,320L221.5,320L221.5,320L184.6,320L184.6,320L147.7,320L147.7,320L110.8,320L110.8,320L73.8,320L73.8,320L36.9,320L36.9,320L0,320L0,320Z"></path></svg>
        <svg className="absolute left-0 bottom-0 w-full scale-x-flipped transform fill-current text-secondary-200" fillOpacity="0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path d="M0,64L0,0L36.9,0L36.9,32L73.8,32L73.8,160L110.8,160L110.8,224L147.7,224L147.7,128L184.6,128L184.6,32L221.5,32L221.5,96L258.5,96L258.5,256L295.4,256L295.4,224L332.3,224L332.3,96L369.2,96L369.2,320L406.2,320L406.2,256L443.1,256L443.1,64L480,64L480,256L516.9,256L516.9,224L553.8,224L553.8,192L590.8,192L590.8,192L627.7,192L627.7,0L664.6,0L664.6,192L701.5,192L701.5,128L738.5,128L738.5,128L775.4,128L775.4,0L812.3,0L812.3,320L849.2,320L849.2,64L886.2,64L886.2,288L923.1,288L923.1,96L960,96L960,32L996.9,32L996.9,128L1033.8,128L1033.8,128L1070.8,128L1070.8,128L1107.7,128L1107.7,128L1144.6,128L1144.6,160L1181.5,160L1181.5,128L1218.5,128L1218.5,32L1255.4,32L1255.4,128L1292.3,128L1292.3,288L1329.2,288L1329.2,320L1366.2,320L1366.2,96L1403.1,96L1403.1,96L1440,96L1440,320L1403.1,320L1403.1,320L1366.2,320L1366.2,320L1329.2,320L1329.2,320L1292.3,320L1292.3,320L1255.4,320L1255.4,320L1218.5,320L1218.5,320L1181.5,320L1181.5,320L1144.6,320L1144.6,320L1107.7,320L1107.7,320L1070.8,320L1070.8,320L1033.8,320L1033.8,320L996.9,320L996.9,320L960,320L960,320L923.1,320L923.1,320L886.2,320L886.2,320L849.2,320L849.2,320L812.3,320L812.3,320L775.4,320L775.4,320L738.5,320L738.5,320L701.5,320L701.5,320L664.6,320L664.6,320L627.7,320L627.7,320L590.8,320L590.8,320L553.8,320L553.8,320L516.9,320L516.9,320L480,320L480,320L443.1,320L443.1,320L406.2,320L406.2,320L369.2,320L369.2,320L332.3,320L332.3,320L295.4,320L295.4,320L258.5,320L258.5,320L221.5,320L221.5,320L184.6,320L184.6,320L147.7,320L147.7,320L110.8,320L110.8,320L73.8,320L73.8,320L36.9,320L36.9,320L0,320L0,320Z"></path></svg>

        <svg className="absolute left-0 right-0 bottom-24 scale-y-flipped transform fill-current text-secondary-900" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1338 50">
          <path d="m1291.93,14.04H46.07C41.51,35.3,22.62,50,0,50V0h1338v50c-22.62,0-41.51-15.94-46.07-37.2Z" />
        </svg>
      </div>
      <div className="absolute left-0 right-0 bottom-0 h-32 bg-secondary-900"></div>
      <Container
        size={_.get(fields, 'containerWidth') !== 'default' ? _.get(fields, 'containerWidth') : 'max-w-screen-xl'}
        className={`relative z-1 md:py-12 lg:py-16 text-center`}
      >
        <div className="relative overflow-hidden rounded-xl bg-primary-400 shadow-lg">
          <div className="pattern-primary absolute inset-0"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-primary-500"></div>
          <div className="relative z-1 grid md:flex md:justify-between">
            <motion.div 
              className="max-w-xl p-6 py-8 text-left md:p-8 lg:px-12 lg:py-20"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerMotion}
            >
              <motion.h2 
                className="font-heading text-4xl font-semibold text-white md:text-5xl" 
                variants={fadeInFromBottom}
                dangerouslySetInnerHTML={{__html: fields.body}}
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
                      button: 'button-secondary',
                      button2: 'button-secondary'
                    }}
                    size={{
                      button: 'text-xl',
                      button2: 'default'
                    }}
                    className={{
                      button: 'button-xl',
                      button2: 'button-xl'
                    }}
                  />
                )
              }
            </motion.div>
            
            {
              (_.get(fields, 'video') || _.get(fields, 'image')) && (
                <>
                  {
                    _.get(fields, 'video') && (
                      <VideoHolder 
                        video={_.get(fields, 'video.videoUrl')} 
                        styles={{
                          figure: "relative md:flex w-full overflow-hidden md:w-1/3 lg:w-2/5",
                          image: "object-bottom-right md:absolute left-0 top-0 h-full w-full object-cover"
                        }}
                      />
                    )
                  }

                  {
                    !_.get(fields, 'video') && _.get(fields, 'image') && (
                      <ImageHolder 
                        image={fields.image} 
                        styles={{
                          figure: "relative flex w-full overflow-hidden md:w-1/3 lg:w-2/5 row-start-1",
                          image: "object-bottom-right md:absolute left-0 top-0 h-full w-full object-cover"
                        }}
                      />
                    )
                  }
                </>
              )
            }
          </div>
        </div>
      </Container>
    </Section>
  )
}
