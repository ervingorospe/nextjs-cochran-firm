'use client'

import React, { Fragment } from 'react'
import Link from 'next/link';
import _ from 'lodash'
import Image from 'next/image';
// tailwind
import { Popover, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
// component
import { Button } from '@/components/shared'
import { SubNav, MobileSubNav } from '@/components/navigation'

export function HeaderContent({ navigation, actionBtns, general }) {
  const filteredNav = _.filter(navigation, data => _.get(data, 'fields.showInNavigation'))

  return (
    <div className="fixed w-full z-1000 bg-header-color">
      <Popover>
        {({ open }) => (
          <>
            <div className="container flex max-w-screen-2xl justify-between py-4">
              <Link href="/">
                <Image
                  src="https://fluxconsole.com/files/item/1332/174562/logo-white_1.svg"
                  alt={_.get(general, 'organizationName')}
                  height={1000}
                  width={1000}
                  priority={true}
                  className="h-12 w-auto md:h-16 xl:h-20"
                />
              </Link>

              <div className="flex items-center justify-end xl:flex-col xl:items-end xl:justify-center">
                {/* action buttons */}
                <div className="flex items-center space-x-4">
                  {
                    actionBtns?.map((item, i) => (
                      <Button
                        data={{
                          ..._.get(item, 'fields'),
                          button: {
                            ..._.get(item, 'fields.button'),
                          },
                          buttonPageLink: _.get(item, 'fields.buttonPageLink'),
                        }}
                        navigation={navigation}
                        className='flex space-x-1 md:space-x-3 items-center'
                        iconStyle='h-4 w-4 md:h-5 w-5'
                        key={i}
                      />
                    ))
                  }
                </div>
                {/* end of action buttons */}

                {/* paths */}
                <nav className="mt-4 hidden space-x-8 xl:flex">
                  {
                    filteredNav?.map((item, i) => {
                      if (_.get(item, 'parentId') === 0){
                        const subNav = _.filter(navigation, data => data.parentId === item.id);

                        if (subNav.length === 0) {
                          return (
                            <Button
                              className=""
                              data={{
                                button: {
                                  url: _.get(item, 'fields.nav.url') ? _.get(item, 'fields.nav.url') : item.slug,
                                  text: item.name,
                                  target: _.get(item, 'fields.nav.target'),
                                },
                                buttonPageLink: _.get(item, 'fields.pageLink'),
                                buttonStyle: 'link'
                              }}
                              key={item.name}
                            />
                          )
                        }

                        return (
                          <SubNav
                            navigation={navigation}
                            item={item}
                            subNav={subNav}
                            key={item.name}
                          />
                        )
                      }
                    })
                  }
                </nav>
                {/* end of paths */}

                <div className="-my-2 -mr-2 ml-6 xl:hidden">
                  <Popover.Button className="inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-primary-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-600">
                    <span className="sr-only">Open main menu</span>
                    <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
            </div>

            <Transition
              as={Fragment}
              enter="duration-150 ease-out"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="duration-100 ease-in"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Popover.Panel
                focus
                className="absolute inset-x-0 top-0 z-10 origin-top-right transform p-2 transition xl:hidden"
              >
                {({ close }) => (
                  <div className="overflow-hidden rounded-lg bg-white shadow-md ring-1 ring-black ring-opacity-5">
                    <div className="flex items-center justify-between px-5 pt-4">
                      <Link href="/">
                        <Image
                          src="https://fluxconsole.com/files/item/1332/173523/image002%20(1).png"
                          alt={_.get(general, 'organizationName')}
                          height={1000}
                          width={1000}
                          className="h-14 w-auto"
                        />
                      </Link>
                      <div className="-mr-2">
                        <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                          <span className="sr-only">Close main menu</span>
                          <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </Popover.Button>
                      </div>
                    </div>
                    <div className="py-4 space-y-1 px-2 pt-2 pb-3 max-h-[700px] overflow-y-scroll">
                      {
                        filteredNav?.map((item, i) => {
                          if (_.get(item, 'parentId') === 0) {
                            const subNav = _.filter(filteredNav, data => data.parentId === item.id);

                            if (subNav.length === 0) {
                              return (
                                <div
                                  onClick={() => close()}
                                  key={item.name}
                                >
                                  <Button
                                    data={{
                                      button: {
                                        url: _.get(item, 'fields.nav.url') ? _.get(item, 'fields.nav.url') : item.slug,
                                        text: item.name,
                                        target: _.get(item, 'fields.nav.target'),
                                      },
                                      buttonPageLink: _.get(item, 'fields.pageLink'),
                                      buttonStyle: 'mobile-link'
                                    }}
                                  />
                                </div>
                              )
                            }

                            return <MobileSubNav item={item} subNav={subNav} key={item.name} closeMenu={() => close()} navigation={navigation}/>
                          }
                        })
                      }
                    </div>
                    <div className="grid w-full">
                      {
                        actionBtns?.map((item, i) => {
                          if (_.get(item, 'fields.isMobileFooterButton')) {
                            return (
                              <div 
                                onClick={() => close()}
                                key={item.name}
                              >
                                <Button 
                                  data={{
                                    ..._.get(item, 'fields'),
                                    button: {
                                      ..._.get(item, 'fields.button'),
                                    },
                                    buttonClass: '',
                                    buttonPageLink: _.get(item, 'fields.buttonPageLink'),
                                    buttonStyle: 'mobile-menu-button',
                                    iconStyle: 'h-5 w-5'
                                  }}
                                  navigation={navigation}
                                />
                              </div>
                            )
                          }
                        })
                      }
                    </div>
                  </div>
                )}
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </div>
  )
}
