/* eslint-disable @next/next/no-img-element */
'use client'

import React from 'react'
import { motion } from "framer-motion";
// component
import { ImageHolder } from '@/components/shared'
// function
import { fadeInFromBottom } from "@/function/framer-animation";

export function ReviewCard({ data, styles }) {
  const { fields } = data

  return (
    <motion.figure 
      className={styles.figure}
      variants={fadeInFromBottom}
    >
      <blockquote className={styles.bodyText}>
        <p>“{fields.reviewBody}”</p>
      </blockquote>
      <figcaption className={styles.figCaption}>
        {
          fields.image && (
            <ImageHolder
              image={fields.image} 
              styles={{
                figure: "",
                image: styles.image
              }}
            />
          )
        }
        
        <div className={styles.textTitle}>
          <div className="font-semibold">{data.name}</div>
          <div className="text-gray-600">{fields.organization ? fields.organization : "Client Testimonial"}</div>
        </div>
      </figcaption>
    </motion.figure>
  )
}
