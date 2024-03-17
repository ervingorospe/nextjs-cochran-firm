/* eslint-disable @next/next/no-img-element */
'use client'

import React from 'react'
import Image from 'next/image'
import { usePathname } from 'next/navigation';
// function
import { sectionsComponent, formatComponentName } from '@/function/formatting'
// component
import * as FooterSection from '@/components/shared/location-info'
import * as ComponentSection from '@/components/section'
import { LocationCard } from '@/components/navigation'
import { Button } from '@/components/shared'


export function FooterContent({ navigation, callToAction, locationInfo, socialMedia, location, settings, general }) {
  let pathname = usePathname();

  if (pathname === '/') {
    pathname = '/home'
  }

  const navDetails = _.find(navigation, data => `/${data.slug}` === pathname)
  const filterNavigation = _.filter(navigation, data => _.get(data, 'fields.showInNavigation'))
  const defaultLocationInfo = _.find(location, data => data.name === 'Location Info')
  const filterLocation = _.filter(location, data => data.name !== 'Location Info')

  return (
    <>
      {/* call to action section */}
      {
        !_.get(navDetails, 'fields.hideCallToActionSections') && (
          callToAction?.map((item, i) => {
            const componentName = sectionsComponent(item)

            if (componentName) {
              const ComponentType = ComponentSection[formatComponentName(componentName)] ? ComponentSection[formatComponentName(componentName)] : null

              if (ComponentType) {
                return <ComponentType data={item} key={item.name} settings={settings} navigation={navigation}/>
              }
            }
          })
        )
      }

      {/* footer section */}
      {
        !_.get(navDetails, 'fields.hideFooter') && (
          <footer className="bg-secondary-900 pt-12 pb-24">
            <div className="container max-w-screen-lg space-y-16 text-center lg:text-left">
              {/* address */}
              <div>
                <p className="text-center font-heading text-4xl font-semibold text-white md:text-5xl xl:text-6xl">Our Offices</p>
                <div className="mt-6 grid gap-3 md:grid-cols-2">
                  {
                    filterLocation?.map((item) => (
                      <LocationCard
                        data={item}
                        key={item.name}
                      />
                    ))
                  }
                </div>
              </div>
              
              {/* location info */}
              {
                !_.get(navDetails, 'fields.hideFooterLocationInfo') && (
                  <div className="space-y-5 lg:flex lg:justify-between lg:space-y-0">
                    {
                      locationInfo?.map((item, i) => {
                        const componentName = sectionsComponent(item)
                        
                        if (componentName && _.get(item, 'fields.active')) {
                          const ComponentType = FooterSection[formatComponentName(componentName)]

                          if (ComponentType) {
                            return <ComponentType 
                              data={item} 
                              socialMedia={socialMedia} key={i}
                              location={defaultLocationInfo}
                              navigation={navigation}
                              styles={{
                                title: 'text-lg font-medium uppercase tracking-wide text-primary-400',
                                contentText: 'mt-3 text-lg text-secondary-200 ',
                                link: 'hover:text-white'
                              }}
                            />
                          }
                        }
                      })
                    }
                  </div>
                )
              }

              {/* navigation */}
              <ul className="space-y-2 lg:flex lg:justify-between lg:space-y-0">
                {
                  filterNavigation?.map((item, i) => {
                    if (_.get(item, 'parentId') === 0){
                      const subNav = _.filter(filterNavigation, data => data.parentId === item.id);

                      if (subNav.length === 0) {
                        return (
                          <li key={item.name}>
                            <Button
                              styles="block font-normal tracking-wide text-secondary-200 hover:text-white"
                              data={{
                                button: {
                                  url: _.get(item, 'fields.nav.url') ? _.get(item, 'fields.nav.url') : item.slug,
                                  text: item.name,
                                  target: _.get(item, 'fields.nav.target'),
                                },
                                buttonPageLink: _.get(item, 'fields.pageLink'),
                                buttonStyle: 'footer-link'
                              }}
                            />
                          </li>
                        )
                      }

                      return (
                        <li key={item.name} className="block">
                          <div className="block font-normal uppercase tracking-wide text-secondary-200 hover:text-white">{item.name}</div>
                          {
                            subNav?.map((subItem) => (
                              <Button
                                className="mt-1 "
                                data={{
                                  button: {
                                    url: _.get(subItem, 'fields.nav.url') ? _.get(subItem, 'fields.nav.url') : subItem.slug,
                                    text: subItem.name,
                                    target: _.get(item, 'fields.nav.target'),
                                  },
                                  buttonPageLink: _.get(subItem, 'fields.pageLink'),
                                  buttonStyle: 'footer-sublink'
                                }}
                                key={subItem.name}
                              />
                            ))
                          }
                        </li>
                      )
                    }
                  })
                }
              </ul>

              {/* logos */}
              <div className="">
                <div className="">
                  <Image 
                    className="mx-auto h-24 w-auto" 
                    src="https://fluxconsole.com/files/item/1332/174561/logo-footer_1.svg" 
                    alt={_.get(general, 'organizationName')} 
                    height={100}
                    width={100}
                  />
                </div>

                <p className="mt-5 flex items-center justify-center space-x-1 text-center text-sm text-secondary-300">
                  <span className="inline-block"> ©{new Date().getFullYear()} {_.get(general, 'organizationName')} All rights reserved. </span>
                  <span className="leading-0 inline-block">
                    <a className="" href="https://www.modiphy.com/" target="_blank" rel="noopener" title={`MODIPHY® DESIGN | ${_.get(general, 'defaultMetaTitle')}`}>
                      <svg className="h-6 w-6 fill-current" version="1.1" id="Foreground" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 74.3 74.3" style={{ enableBackground: 'new 0 0 74.3 74.3' }} xmlSpace="preserve" role="img" aria-labelledby="modiphy-logo-title">
                        <title id="modiphy-logo-title">{`MODIPHY® DESIGN | ${_.get(general, 'defaultMetaTitle')}`}</title>
                        <path
                          className="path"
                          d="M74.3,28.2c0-4.6-8.3-8.5-19.5-9.6c3.7-6.2,4.8-11.6,2.3-14c-3.3-3.3-11.9-0.2-20.6,7C34.7,4.6,31.7,0,28.2,0
              c-4.6,0-8.5,8.3-9.6,19.5c-6.2-3.7-11.6-4.8-14-2.3c-3.3,3.3-0.2,11.9,7,20.6C4.6,39.5,0,42.6,0,46c0,4.6,8.3,8.5,19.5,9.6
              c-3.7,6.2-4.8,11.6-2.3,14c3.3,3.3,11.9,0.2,20.6-7c1.8,7,4.8,11.6,8.3,11.6c4.6,0,8.5-8.3,9.6-19.5c6.2,3.7,11.6,4.8,14,2.3
              c3.3-3.3,0.2-11.9-7-20.6C69.7,34.7,74.3,31.7,74.3,28.2z M61.1,45.5c-3.9,3.9-14.1,0.1-24-8.4c2,2.9,4.4,5.8,7.3,8.7
              c3.5,3.5,7.1,6.3,10.5,8.5C53,57.9,50.7,60,48.1,60c-5.5,0-10.1-9.9-11-22.9c-0.6,3.4-1,7.3-1,11.3c0,4.9,0.5,9.5,1.4,13.4
              c-3.9,1.2-7,1-8.8-0.8c-3.9-3.9-0.1-14.1,8.4-24c-2.9,2-5.8,4.4-8.7,7.3c-3.5,3.5-6.4,7.1-8.5,10.5c-3.6-1.9-5.7-4.2-5.7-6.8
              c0-5.5,9.9-10.1,22.9-11c-3.4-0.6-7.2-1-11.3-1c-4.9,0-9.5,0.5-13.4,1.4c-1.2-3.9-1-7,0.8-8.9c3.9-3.9,14.1-0.1,24,8.4
              c-2-2.9-4.4-5.8-7.3-8.7c-3.5-3.5-7.1-6.4-10.5-8.5c1.9-3.6,4.2-5.7,6.8-5.7c5.5,0,10.1,9.9,11,22.9c0.6-3.4,1-7.3,1-11.3
              c0-4.9-0.5-9.5-1.4-13.4c3.9-1.2,7-1,8.9,0.8c3.9,3.9,0.1,14.1-8.4,24c2.9-2,5.8-4.4,8.7-7.3c3.5-3.5,6.4-7.1,8.5-10.5
              c3.6,1.9,5.7,4.2,5.7,6.8c0,5.5-9.9,10.1-22.9,11c3.4,0.6,7.3,1,11.3,1c4.9,0,9.5-0.5,13.4-1.4C63.1,40.6,62.9,43.7,61.1,45.5z"
                        ></path>
                      </svg>
                    </a>
                  </span>
                </p>
                <div className="mt-5">
                  <nav className="flex justify-center space-x-4 text-secondary-300">
                    <a className="hover:text-white" href="/privacy-policy">Privacy Policy</a>
                    <span>|</span>
                    <a className="hover:text-white" href="/cookie-policy">Cookie Policy</a>
                  </nav>
                </div>
              </div>
            </div>
          </footer>
        )
      }
    </>
  )
}