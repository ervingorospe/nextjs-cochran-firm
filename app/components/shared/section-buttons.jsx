'use client'

import React from 'react'
import { motion } from "framer-motion";
// components
import { Button } from '@/components/shared'
// function
import { containerMotion } from "@/function/framer-animation";

export function SectionButtons({ fields, motionStyle = {}, navigation, buttonStyle = {}, size = {}, className = {} }) {
  return (
    <motion.div 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerMotion}
      className="mt-8 grid space-y-2"
    >
      {/* button 1*/}
      {
        _.get(fields, 'button') && (
          <motion.div
            variants={motionStyle.button}
          >
            <Button
              data={{
                button: {
                  ..._.get(fields, 'button'),
                },
                buttonPageLink: _.get(fields, 'buttonPageLink'),
                buttonStyle: buttonStyle.button,
              }}
              size={size.button}
              className={className.button}
              navigation={navigation}
            />
          </motion.div>
        )
      }

      {/* button 2*/}
      {
        _.get(fields, 'button-2') && (
          <motion.div
            variants={motionStyle.button2}
          >
            <Button
              data={{
                button: {
                  ..._.get(fields, 'button-2'),
                },
                buttonPageLink: _.get(fields, 'buttonPageLink-2'),
                buttonStyle: buttonStyle.button2
              }}
              size={size.button}
              className={className.button2}
              navigation={navigation}
            />
          </motion.div>
        )
      }
    </motion.div>
  )
}
