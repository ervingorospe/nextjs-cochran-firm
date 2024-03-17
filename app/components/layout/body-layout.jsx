'use client'

import clsx from 'clsx'

const bodySize = {
  'hero-custom-default': 'prose-secondary-invert prose prose-lg xl:prose-2xl',
  'default': 'prose prose-lg md:prose-xl',
  'prose-sm': 'prose prose-sm',
  'prose-base': 'prose-base',
  'prose-md': 'prose prose-md',
  'prose-lg': 'prose-lg',
  'prose-xl': 'prose-xl',
  'prose-2xl': 'prose-2xl',
  'md:prose-lg': 'prose prose-md md:prose-lg',
  'md:prose-xl': 'md:prose-xl',
  'md:prose-2xl': 'md:prose-2xl',
  'lg:prose-lg': 'lg:prose-lg',
  'lg:prose-xl': 'lg:prose-xl',
  'lg:prose-2xl': 'lg:prose-2xl',
  'xl:prose-lg': 'xl:prose-lg',
  'xl:prose-xl': 'xl:prose-xl',
  'xl:prose-2xl': 'xl:prose-2xl',
  '2xl:prose-lg': '2xl:prose-lg',
  '2xl:prose-xl': '2xl:prose-xl',
  '2xl:prose-2xl': '2xl:prose-2xl',
}

export function BodyLayout({ size = 'default', className, ...props }) {
  return <div className={clsx(bodySize[size], className)} {...props} />
}
