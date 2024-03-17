'use client'

import clsx from 'clsx'

const background = {
  default: 'bg-transparent',
  'primary-500': 'bg-primary-500',
  'secondary-900': 'bg-secondary-900',
  'secondary-800': 'bg-secondary-800',
  'white': 'bg-white',
  'gray-50': 'bg-gray-50',
  'gray-100': 'bg-gray-100',
  'gray-200': 'bg-gray-200',
  'gray-300': 'bg-gray-300',
  'gray-400': 'bg-gray-400',
  'gray-500': 'bg-gray-500',
  'gray-600': 'bg-gray-600',
  'gray-700': 'bg-gray-700',
  'gray-800': 'bg-gray-800',
  'gray-900': 'bg-gray-900',
  'black': 'bg-black',
}

export function Section({ bg = 'default', className, ...props }) {
  return <section className={clsx(background[bg], className)} {...props} />
}
