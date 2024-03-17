'use client'

import React from 'react'
import Image from 'next/image'

export function ImageHolder({ image, styles }) {
  return (
    <figure className={styles.figure}>
      <Image
        src={image.imageUrl}
        alt={image.altText ? image.altText : 'Cochran Firm'}
        priority={true}
        height={1500}
        width={1500}
        className={styles.image}
      />
      <figcaption className="mt-2 block text-gray-400 italic">{image.caption}</figcaption>
    </figure>
  )
}