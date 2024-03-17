/* eslint-disable @next/next/no-img-element */
'use client'

import React from 'react'
import Link from 'next/link'
import _ from 'lodash'
// component
import { ImageHolder } from '@/components/shared'

export function ButtonCard({ data, className, navigation }) {
  const { fields } = data
  let buttonDetails = {
    ..._.get(fields, 'button'),
    url: _.get(fields, 'button.url') ? _.get(fields, 'button.url') : '/'
  }

  const getNavigation = () => {
    const url = _.find(navigation, path => path.id === fields.buttonPageLink)

    return {
      ..._.get(fields, 'button'),
      url: _.get(url, 'slug') ? `/${_.get(url, 'slug')}` : '/'
    }
  }

  if (fields.buttonPageLink) {
    buttonDetails = getNavigation()
  }

  if (!fields.url && !fields.buttonPageLink) {
    return (
      <div className={className}>
        <div className="absolute bg-secondary-600">
          <ImageHolder
            image={fields.image} 
            styles={{
              figure: "",
              image: "absolute inset-0 h-full w-full object-cover brightness-150 saturate-0"
            }}
          />
          <div className="absolute inset-0 bg-secondary-700/90 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-tr from-secondary-900 transition group-hover:opacity-50"></div>
          <div className="absolute inset-0 flex items-end p-4">
            <p className="font-heading text-2xl text-white">{data.name}</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <Link className={className} href={buttonDetails.url} target={buttonDetails.target}>
      <div className="absolute bg-secondary-600">
        <ImageHolder
          image={fields.image} 
          styles={{
            figure: "",
            image: "absolute inset-0 h-full w-full object-cover brightness-150 saturate-0"
          }}
        />
        <div className="absolute inset-0 bg-secondary-700/90 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-secondary-900 transition group-hover:opacity-50"></div>
        <div className="absolute inset-0 flex items-end p-4">
          <p className="font-heading text-2xl text-white">{data.name}</p>
        </div>
      </div>
    </Link>
  )
}
