'use client'

import React from 'react'
import _ from 'lodash'
import Image from 'next/image'
// layout
import { ButtonLayout } from '@/components/layout'


export function Button({ data, className, navigation, iconStyle, size }) {
  let buttonDetails = {
    ..._.get(data, 'button'),
    url: _.get(data, 'button.url') ? _.get(data, 'button.url') : '/'
  }

  const getNavigation = () => {
    const url = _.find(navigation, path => path.id === data.buttonPageLink)

    return {
      ..._.get(data, 'button'),
      url: _.get(url, 'slug') ? _.get(url, 'slug') : '/'
    }
  }

  if (data.buttonPageLink) {
    buttonDetails = getNavigation()
  }

  return (
    <ButtonLayout 
      buttonStyle={_.get(data, 'buttonStyle')}
      buttonDetails={buttonDetails}
      size={size} 
      className={`${className} ${_.get(data, 'buttonClass')}`}
    >
      {
        _.get(data, 'icon') && (
          <Image
            src={_.get(data, 'icon.imageUrl')}
            alt="Cochran Firm"
            height={500}
            width={500}
            priority={true}
            className={`mr-1 ${iconStyle}`}
          />
        ) 
      }

      {buttonDetails.text}
    </ButtonLayout>
  )
}
