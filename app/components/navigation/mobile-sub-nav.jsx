'use client'

import React, { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
// component
import { SubNavButton } from '@/components/shared'

export function MobileSubNav({ item, subNav, closeMenu, navigation }) {
  return (
    <Popover
      className="group relative"
    >
      {({ open }) => (
        <>
          <Popover.Button className="cursor-pointer" styles={{ border: 'none !important;' }}>
            <div
              className="flex block p-3 text-base font-normal uppercase tracking-wider text-gray-700 hover:text-primary-300"
            >
              <span>{item.name}</span>
              <svg
                className={`ml-2 h-5 w-5 fill-secondary-900 hover:fill-secondary-700 transition-transform ${open ? 'rotate-180' : ''}`}
                x-description="Heroicon name: solid/chevron-down"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
          </Popover.Button>

          <Transition
            as={Fragment}
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <Popover.Panel
              className="flex w-screen max-w-xs flex-col"
              static
            >
              {({ close }) => (
                <div className="relative overflow-hidden">
                  <span
                    className="is-block absolute left-1/2 -top-2 -ml-3"
                    aria-hidden="true"
                  >
                    <svg
                      className="h-[8px] w-[20px] fill-current text-primary-400"
                      viewBox="0 0 5 2"
                      preserveAspectRatio="none"
                    >
                      <path d="M 0 2 L 2.5 0 L 5 2 Z"></path>
                    </svg>
                  </span>
                  <div className="ml-2 relative grid">
                    {
                      subNav?.map((subItem, i) => {
                        const subItems = _.filter(navigation, data => data.parentId === subItem.id);

                        if (subItems.length > 0) {
                          return <SubItems item={subItem} subNav={subItems} navigation={navigation} key={subItem.name} closeMainPopover={() => closeMenu()}/>
                        }

                        return (
                          <div
                            onClick={() => closeMenu()}
                            key={subItem.name}
                          >
                            <SubNavButton
                              className={{
                                container: "",
                                div: "ml-3 flex items-center gap-3 transition-all",
                                text: "group-hover/child-nav:text-primary-500 text-gray-900 text-sm font-medium tracking-wide"
                              }}
                              data={{
                                button: {
                                  url: _.get(subItem, 'fields.nav.url') ? _.get(subItem, 'fields.nav.url') : subItem.slug,
                                  text: subItem.name,
                                  target: _.get(subItem, 'fields.nav.target'),
                                },
                                buttonPageLink: _.get(subItem, 'fields.pageLink'),
                                buttonStyle: 'mobile-sub-nav'
                              }}
                              navigation={navigation}
                            />
                          </div>
                        )
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
  )
}

const SubItems = ({ item, subNav, navigation, closeMainPopover }) => {
  return (
    <Popover
      className="group relative"
    >
      {({ open }) => (
        <>
          <Popover.Button className="cursor-pointer group/child-nav block px-3 py-3 text-sm font-medium text-gray-600 hover:text-gray-700" styles={{ border: 'none !important;' }}>
            <div className="ml-3 flex items-center gap-3 transition-all">
              <p className="group-hover/child-nav:text-primary-500 text-gray-900 text-sm font-medium tracking-wide">
                {item.name}
              </p>
              <svg
                className="fill-gray-400 transition-transform group-hover/child-nav:translate-x-2 group-hover/child-nav:fill-primary-300"
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
            </div>
          </Popover.Button>

          <Transition
            as={Fragment}
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <Popover.Panel
              className=""
              static
            >
              {({ close }) => (
                <div className="relative overflow-hidden bg-white">
                  <div className="relative grid">
                    {
                      subNav?.map(subItem => {
                        if (_.get(subItem, 'fields.showInNavigation')) {
                          const subItems = _.filter(navigation, data => data.parentId === subItem.id);

                          if (subItems.length > 0) {
                            return
                          }
                          return (
                            <div
                              onClick={() => closeMainPopover()}
                              key={subItem.name}
                            >
                              <SubNavButton
                                className={{
                                  container: "",
                                  div: "ml-6 flex items-center gap-3 transition-all",
                                  text: "group-hover/child-nav:text-primary-500 text-gray-900 text-xs font-medium tracking-wide"
                                }}
                                data={{
                                  button: {
                                    url: _.get(subItem, 'fields.nav.url') ? _.get(subItem, 'fields.nav.url') : subItem.slug,
                                    text: subItem.name,
                                    target: _.get(subItem, 'fields.nav.target'),
                                  },
                                  buttonPageLink: _.get(subItem, 'fields.pageLink'),
                                  buttonStyle: 'sub-items'
                                }}
                                navigation={navigation}
                                showIcon={false}
                                marginLeft="ml-6"
                                iconStyle="fill-gray-400 transition-transform group-hover/child-nav:translate-x-2 group-hover/child-nav:fill-primary-300"
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
  )
}