'use client'

import clsx from 'clsx'
// component
import * as TitleComponent from '@/components/shared/title-tags'
// function
import { formatComponentName } from '@/function/formatting'


const titleAlign = {
  'default': 'text-left',
  'text-left': 'text-left',
  'text-center': 'text-center',
  'text-right': 'text-right',
  'text-justify': 'text-justify'
}

const titleSizes = {
  'hero-title-custom': 'text-3xl md:text-5xl xl:text-8xl',
  'hero-title': 'text-4xl md:text-5xl xl:text-6xl',
  'hero-subtitle': 'text-lg md:text-xl xl:text-2xl',
  'default': 'text-4xl md:text-5xl xl:text-6xl',
  'subtitle': 'text-xl md:text-2xl',
  'text-xs': 'text-xs',
  'text-sm': 'text-sm',
  'text-base': 'text-base',
  'text-lg': 'text-lg',
  'text-xl': 'text-xl',
  'text-2xl': 'text-2xl',
  'text-3xl': 'text-3xl',
  'text-4xl': 'text-4xl',
  'text-5xl': 'text-5xl',
  'text-6xl': 'text-6xl',
  'text-7xl': 'text-7xl',
  'text-8xl': 'text-8xl',
  'text-9xl': 'text-9xl'
}

const titleStyle = {
  'default': 'font-heading font-semibold text-gray-900',
  'subtitle': 'font-semibold uppercase tracking-wide text-primary-600',
  'hero-title': 'font-heading font-semibold text-white',
  'hero-subtitle': 'font-normal uppercase uppercase tracking-wide text-primary-400',
  'light-title': 'font-heading font-semibold text-primary-400',
  'light-subtitle': 'font-semibold text-secondary-50',
}

export function Title({ titleTag = 'default', styles = 'default', size='default', align='default', className, title}) {
  const TitleType = TitleComponent[formatComponentName(titleTag)]; 

  if (title)
    return <TitleType title={title} styles={clsx(titleStyle[styles], titleSizes[size], titleAlign[align], className)}/>
}
