' use client '

import React from 'react'
import _ from 'lodash'
// components
import { Button } from '@/components/shared'

export function Custom({ data, styles, navigation }) {
  const { fields } = data

  return (
    <div>
      <p className={styles.title}>{data.name}</p>
      {
        _.get(fields, 'button') && (
          <div className="mt-3 space-y-2 text-lg text-gray-300">
            <Button
              data={{
                button: {
                  ..._.get(fields, 'button'),
                },
                buttonPageLink: _.get(fields, 'buttonPageLink'),
                buttonStyle: 'footer-button'
              }}
              navigation={navigation}
              styles="button flex w-full bg-primary-600 text-white hover:bg-primary-700 hover:text-white focus:ring-primary-700 md:w-auto"
            />
          </div>
        )
      }

      {
        _.get(fields, 'button-2') && (
          <div className="mt-3 space-y-2 text-lg text-gray-300">
            <Button
              data={{
                button: {
                  ..._.get(fields, 'button-2'),
                },
                buttonPageLink: _.get(fields, 'buttonPageLink-2'),
                buttonStyle: 'footer-button'
              }}
            />
          </div>
        )
      }
    </div>
  )
}
