import _ from 'lodash'
import { cache } from 'react';
// function
import { setDefaultHeaderColor, setHeaderColor } from './theme-style'
// api
import { getCollection, generalInfo } from '@/api/collection'
import { getItem } from '@/api/item'

const ids = {
  actionButtons: 29368,
  callToActionSections: 29391,
  footerLocationInfo: 29364,
  socialMedia: 29366,
  location: 29363,
  settings: 168017
}

export const getGeneralInfo = async () => {
  return await generalInfo()
}

const getSettings = cache(async () => {
  const items = await getItem(ids.settings)
  return items
})

const pageDetails = cache(async (id) => {
  const collection = await getItem(id)

  const { sectionItems } = _.first(collection)
  const firstSection = _.find(_.first(collection).sectionItems, data => data.fields.active === '1')
  const activeSections = _.filter(sectionItems, data => _.get(data, 'fields.active') === '1')

  let themeColor = setDefaultHeaderColor(_.get(firstSection, 'fields.customType') || _.get(firstSection, 'fields.type'));
  
  if (_.get(firstSection, 'fields.backgroundColorClass')) 
    themeColor = setHeaderColor(_.get(firstSection, 'fields.backgroundColorClass') ? _.get(firstSection, 'fields.backgroundColorClass') : 'default')

  if (!themeColor)
    themeColor = 'light-theme' 

  return {
    themeColor,
    activeSections
  }
})

const getCommonCollection = cache(async () => {
  return await getCollection(`${ids.actionButtons},${ids.callToActionSections},${ids.footerLocationInfo},${ids.socialMedia},${ids.location}`)
})

export {
  pageDetails,
  getCommonCollection,
  getSettings
}