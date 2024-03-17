'use client'

import React from 'react'

export function VideoHolder({ video, styles }) {
  return (
    <figure className="relative">
      <div className={styles.image}>
        <video playsInline autoPlay muted loop>
          <source src={video} type="video/mp4"/>
        </video>
      </div>
    </figure>
  )
}