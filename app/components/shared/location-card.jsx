/* eslint-disable @next/next/no-img-element */
'use-client'

import React from 'react'
import _ from 'lodash'
import Link from 'next/link'
// component
import { ImageHolder } from '@/components/shared'
// function
import { linkNameFormat } from '@/function/formatting'

export function LocationCard({ data }) {
  const { fields } = data

  return (
    <Link className="group flex w-full flex-col" href={fields.googleMapUrl} target="_blank">
      <ImageHolder
        image={fields.image} 
        styles={{
          figure: "aspect-w-16 aspect-h-9 overflow-hidden rounded-t-lg",
          image: "absolute left-0 top-0 h-full w-full transform object-cover object-center transition duration-300 group-hover:scale-105"
        }}
      />
      <div className="space-y-3 rounded-b-lg border px-4 pt-5 text-lg text-gray-600 transition duration-300 group-hover:shadow-lg 2xl:text-base">
        {
          _.get(fields, 'address') && (
            <div className="flex">
              <svg className="mt-0.5 h-6 w-6 2xl:w-5 2xl:h-5 text-secondary-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
              <div className="ml-3 space-y-1">
                <p>
                  {_.get(fields, 'address.address')}<br />
                  {_.get(fields, 'address.city')}, {_.get(fields, 'address.state')} {_.get(fields, 'address.zip')}
                </p>
              </div>
            </div>
          )
        }

        {
          _.get(fields, 'telephone') && (
            <div className="flex">
              <svg className="mt-0.5 h-6 w-6 2xl:w-5 2xl:h-5 text-secondary-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>

              <div className="ml-3 mb-5 space-y-1">
                <p>{_.get(fields, 'telephone')}</p>
              </div>
            </div>
          )
        }
        <div className="border-t p-4 text-center text-sm uppercase tracking-wide group-hover:text-gray-900">{data.name} Office</div>
      </div>
    </Link>
  )
}
