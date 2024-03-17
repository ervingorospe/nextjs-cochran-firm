import React from 'react'
import _ from 'lodash'
// component
import * as ComponentSection from '@/components/section'
// function
import { getNavigationDetails } from '@/function/navigation'
// api
import { getCollection } from '@/api/collection'

export async function ComponentLayout({ data, marginTop, sectionCount, componentName }) {
  const ComponentType = ComponentSection[componentName] ? ComponentSection[componentName] : null
  const navigation = await getNavigationDetails()
  let subCollection = [];
  let collection = [];

  if (_.get(data, 'fields.contentCollection')) {
    const collections = await getCollection(_.get(data, 'fields.contentCollection'))
    subCollection = collections[0].items

    if (subCollection.length > 0) {
      collection = await Promise.all(_.filter(subCollection, item => item.fields.active).map(async items => {
        if (_.get(items, 'fields.contentCollection')) {
          return await getCollection(_.get(items, 'fields.contentCollection'))
        }

        return null
      }))
    }
  }

  return (
    <ComponentType 
      data={data} 
      marginTop={marginTop} 
      sectionCount={sectionCount}
      navigation={navigation}
      subCollection={subCollection}
      collections={collection}
    />
  )
}
