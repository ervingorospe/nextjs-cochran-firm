'use client'

import React from 'react'
import _ from 'lodash'
// layout
import { ButtonLayout } from '@/components/layout'

export function SubNavButton({ data, className, navigation, iconStyle, showIcon = true }) {
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
      className={`${className.container} ${_.get(data, 'buttonClass')}`}
    >
      <div className={`${className.div}`}>
        <p className={`${className.text}`}>
          {buttonDetails.text}
        </p>
        {
          showIcon && (
            <svg
              className={iconStyle}
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="long-arrow-right"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              data-fa-i2svg=""
              height="12"
            >
              <path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"></path>
            </svg>
          )
        }
      </div>
    </ButtonLayout>
  )
}
