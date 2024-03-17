'use client'

import React from 'react'
import { motion } from "framer-motion";
import _ from 'lodash'
// component
import { ImageHolder } from '@/components/shared'
// function
import { containerMotion, fadeInFromBottom } from "@/function/framer-animation";

export function Card({ data, collections }) {
  const { fields } = data
  let subCollection = []

  if (collections) {
    subCollection = _.filter(collections[0].items, item => item.fields.active)
  }

  return (
    <div className="relative pl-16">
      <dt className="text-xl font-semibold text-gray-900">
        <ImageHolder
          image={_.get(fields, 'image')} 
          styles={{
            figure: "absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-primary-500",
            image: "h-6 w-6 text-white"
          }}
        />

        {data.name}
      </dt>

      {
        _.get(fields, 'body') && (
          <dd className="mt-2 text-base leading-7 text-gray-600">{_.get(fields, 'body')}</dd>
        )
      }
      
      {
        (subCollection && subCollection.length > 0) && (
          <dd className="mt-2 text-base leading-7 text-gray-600">
            <motion.ul
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerMotion}
            >
              {
                subCollection?.map((item, i) => (
                  <motion.li 
                    className="flex items-center space-y-1.5" key={i}
                    variants={fadeInFromBottom}
                  >
                    <span className="flex-none h-4 w-4">
                      <ImageHolder
                        image={_.get(item, 'fields.image')} 
                        styles={{
                          figure: "",
                          image: "h-full w-full"
                        }}
                      />
                    </span>
                      
                    <p className="ml-3">{_.get(item, 'fields.body')}</p>
                  </motion.li>
                ))
              }
            </motion.ul>
          </dd>
        )
      }
    </div>
  )
}
