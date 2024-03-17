'use client'

import React from 'react'
import { motion } from "framer-motion";
import { BodyLayout } from '@/components/layout'

export function SectionBody({ fields, motionStyle, defaultSize, className }) {
  return (
    <>
      {/* body */}
      {
        _.get(fields, 'body') && (
          <motion.div
            variants={motionStyle.body}
          >
            <BodyLayout
              size={_.get(fields, 'bodySize') === 'default' ? defaultSize.body : _.get(fields, 'bodySize')}
              className={`${className.body} ${_.get(fields, 'bodyClass')}`}
            >
              <p dangerouslySetInnerHTML={{__html: _.get(fields, 'body')}}/>
            </BodyLayout>
          </motion.div>
        )
      }
      
      {/* extra body */}
      {
        _.get(fields, 'extraBody') && (
          <motion.div
            variants={motionStyle.extraBody}
          >
            <BodyLayout
              size={_.get(fields, 'extraBodySize') === 'default' ? defaultSize.extraBody : _.get(fields, 'extraBodySize')}
              className={`${className.extraBody} ${_.get(fields, 'extraBodyClass')}`}
            >
              <p dangerouslySetInnerHTML={{__html: _.get(fields, 'extraBody')}}/>
            </BodyLayout>
          </motion.div>
        )
      }
    </>
  )
}
