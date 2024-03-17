/* eslint-disable @next/next/no-img-element */
'use client'

import React from 'react'
import _ from 'lodash'

export function VideoCard({ data }) {
  const { fields } = data
  return (
    <div className="md:flex md:w-1/2 lg:w-1/3 flex-wrap px-4">
      <p className="mx-auto font-medium text-lg text-center">{data.name}</p>
      <div className="h-[300px] w-[300px] lg:w-[600px]">
        <iframe className="h-full w-full block h-full w-full rounded-lg object-cover object-center" src={_.get(fields, 'videoUrl')} allowFullScreen/>
      </div>
    </div>
  )
}
