'use client'

import clsx from 'clsx'
import Link from 'next/link'

const buttonStyles = {
  'default' : 'button bg-primary-500 text-white hover:bg-primary-600 hover:text-white focus:ring-primary-700 max-w-lg',
  'text-button' : 'hidden sm:flex items-center text-header-button hover:text-link-hover text-sm md:text-lg',
  'footer-button': 'button flex w-full border-white text-white hover:bg-white hover:text-secondary-900 focus:ring-white md:w-auto',
  'button-primary' : 'button flex bg-primary-500 text-white hover:bg-primary-600 hover:text-white focus:ring-primary-700 max-w-lg',
  'button-gray' : 'button bg-primary-500 text-white hover:bg-primary-600 hover:text-white focus:ring-primary-700 max-w-lg',
  'button-gray-light-outlined' : 'button bg-primary-500 text-white hover:bg-primary-600 hover:text-white focus:ring-primary-700 max-w-lg',
  'button-gray-outlined' : 'button bg-primary-500 text-white hover:bg-primary-600 hover:text-white focus:ring-primary-700 max-w-lg',
  'button-outlined' : 'button bg-primary-500 text-white hover:bg-primary-600 hover:text-white focus:ring-primary-700 max-w-lg',
  'button-primary-outlined' : 'button bg-primary-500 text-white hover:bg-primary-600 hover:text-white focus:ring-primary-700 max-w-lg',
  'link' : 'block text-base font-normal uppercase tracking-wider text-link hover:text-link-hover',
  'footer-link': 'block font-normal uppercase tracking-wide text-secondary-200 hover:text-white',
  'footer-sublink': 'block text-sm font-normal tracking-wide text-secondary-400 hover:text-white',
  'sub-nav' : 'group/child-nav flex items-center border-b border-gray-200 border-opacity-50 px-5 pt-4 pb-3 hover:bg-gray-100',
  'sub-items' : 'group/child-nav flex items-center px-5 pt-4 pb-3 hover:bg-gray-100',
  'button-secondary' : 'button inline-flex w-full border-2 border-white bg-secondary text-center text-white hover:border-white hover:bg-white hover:text-primary-700 md:w-auto',
  'mobile-menu-button': 'w-full block button rounded-t-none text-center text-white bg-primary-500 hover:bg-primary-600 hover:text-white focus:ring-primary-700',
  'mobile-link': 'block p-3 text-base font-normal uppercase tracking-wider text-gray-700 hover:text-primary-300',
  'mobile-sub-nav': 'group/child-nav block px-3 py-3 text-sm font-medium text-gray-600 hover:text-gray-700'
}

const buttonSizes = {
  'default' : 'text-base',
  'text-xs' : 'text-xs',
  'text-sm' : 'text-sm',
  'text-base' : 'text-base',
  'text-lg' : 'text-lg',
  'text-xl' : 'text-xl',
  'text-2xl' : 'text-2xl'
}

export function ButtonLayout({ size = 'default', buttonStyle = 'button-primary', buttonDetails, data, className, ...props }) {
  return <Link 
    href={`${buttonDetails.target !== '_blank' ? '/' : ''}${buttonDetails.url}`} 
    target={buttonDetails.target} 
    className={clsx(buttonStyles[buttonStyle], buttonSizes[size], className)} 
    {...props}
  />
}
