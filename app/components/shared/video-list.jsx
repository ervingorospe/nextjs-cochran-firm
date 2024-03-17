/* eslint-disable @next/next/no-img-element */
'use client'

import React from 'react'
import _ from 'lodash'
// component
import { VideoCard } from '@/components/shared'

export function VideoLists({ data, collections }) {
  let subCollection = []

  if (collections) {
    subCollection = _.filter(collections[0].items, item => item.fields.active)
  }

  return (
    <div>
      <p className="text-2xl font-semibold uppercase tracking-wide text-primary-600 text-center">{data.name}</p>
      <div className="mt-6 grid md:flex justify-center flex-wrap">
        {
          (subCollection && subCollection.length > 0) && (
            subCollection?.map(item => (
              <VideoCard
                data={item}
                key={item.name}
              />
            ))
          )
        }
      </div>
    </div>
    
  )
}
