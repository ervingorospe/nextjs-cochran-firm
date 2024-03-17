'use client'

import React from 'react'
import { motion } from "framer-motion";
import { Title } from '@/components/layout'

export function SectionTitles({ fields, motionStyle, defaultSize, styles, sectionCount, className }) {
  return (
    <>
      {/* title */}
      {
        _.get(fields, 'title') && (
          <motion.div
            variants={motionStyle.title}
          >
            <Title
              titleTag={_.get(fields, 'titleTag') !== 'default' ? _.get(fields, 'titleTag') : sectionCount === 1 ? 'h1' : 'h2'}
              size={_.get(fields, 'titleSize') === 'default' ? _.get(fields, 'titlesInverted') !== 'inverted' ? defaultSize.title : defaultSize.subtitle : _.get(fields, 'titleSize')}
              align={_.get(fields, 'textAlign')}
              title={_.get(fields, 'title')}
              styles={_.get(fields, 'titlesInverted') !== 'inverted' ? styles.title : styles.subtitle}
              className={className.title}
            />
          </motion.div>
        )
      }
      
      {/* subtitle */}
      {
        _.get(fields, 'subtitle') && (
          <motion.div
            variants={motionStyle.subtitle}
          >
            <Title
              titleTag={_.get(fields, 'subtitleTag') !== 'default' ? _.get(fields, 'subtitleTag') : sectionCount === 1 ? 'h2' : 'h3'}
              size={_.get(fields, 'subtitleSize') === 'default' ? _.get(fields, 'titlesInverted') !== 'inverted' ? defaultSize.subtitle : defaultSize.title : _.get(fields, 'subtitleSize')}
              align={_.get(fields, 'textAlign')}
              title={_.get(fields, 'subtitle')}
              styles={_.get(fields, 'titlesInverted') !== 'inverted' ? styles.subtitle : styles.title}
              className={className.subtitle}
            />
          </motion.div>
        )
      }
    </>
  )
}
