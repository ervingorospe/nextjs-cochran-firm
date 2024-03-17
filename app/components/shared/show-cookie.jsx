'use client'

import React, { Fragment, useState } from 'react'
import { Transition } from '@headlessui/react'
import Cookies from 'js-cookie'

export function ShowCookie () {
  const [showCookie, setShowCookie] = useState(true)

  const hideCookie = () => {
    Cookies.set('wpcc', 'dismissed', { expires: 0.3 })
    setShowCookie(false)
  }

  if (showCookie)
    return (
      <Transition
        as={Fragment}  
        show={showCookie}
        enter="transition-all ease-in duration-150"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-all ease-out duration-200 "
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="bg-white border font-medium sm:rounded-md fixed z-50 bottom-16 sm:left-5 sm:bottom-16 md:bottom-5 p-7">
          <div className="max-w-[280px]">
            <span className="">This website uses cookies to ensure you get the best experience on our website. </span>
            <a className="underline text-sm md:text-base inline-flex items-center justify-center group text-red-700 hover:text-red-800" href="/cookie-policy" rel="noreferrer" target="_blank"> View Cookie Policy</a>
            <button onClick={() => hideCookie()} className="mt-4 button inline-flex w-full bg-primary-500 hover:bg-primary-600 text-white hover:text-gray-200">
              Got it!
            </button>
          </div>
        </div>
      </Transition>
    )
}