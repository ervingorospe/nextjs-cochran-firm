import { cache } from 'react';
import _ from 'lodash'
// function
import { formatRouteName } from './formatting'
// api
import { getCollection } from '@/api/collection'
import { getItem } from '@/api/item'

const ids = {
  navigation: 29392,
  actionButtons: 29368,
  callToActionSections: 29391,
  footerLocationInfo: 29364,
  socialMedia: 29366,
  location: 165605,
  freeStandingPages: 29394,
  partnersPages: 29660,
  attorneysPages: 29661,
  staffPages: 29662,
}

const getStandingPages = cache(async () => {
  const collections = await getCollection(ids.freeStandingPages)
  return collections[0].items
})

const getNavigation = cache(async () => {
  const collections = await getCollection(ids.navigation)
  return collections[0].items
})

const generateStaticRoutes = cache(async () => {
  const navigations = await getNavigation()
  const standingPages = await getStandingPages()

  const standingPagesPaths = standingPages?.map(data => {
    const slug = _.get(data, 'fields.slug') ? _.get(data, 'fields.slug') : formatRouteName(data.name)

    return {
      slug: [`${slug}`]
    }
  })

  const paths = await Promise.all(navigations?.map(async data => {
    const parentSlug = _.get(data, 'fields.slug') ? _.get(data, 'fields.slug') : data.name

    if (data.parentId !== 0) {
      const items = await getItem(data.parentId)
      const parentRoute = formatRouteName(_.get(items[0], 'fields.slug') ? _.get(items[0], 'fields.slug') : _.get(items[0], 'name'))

      if (_.get(items[0], 'parentId') !== 0) {
        const mainParent = await getItem(_.get(items[0], 'parentId'))
        const mainParentRoute = formatRouteName(_.get(mainParent[0], 'fields.slug') ? _.get(mainParent[0], 'fields.slug') : _.get(mainParent[0], 'name'))

        return {
          slug: [`${mainParentRoute}`,`${parentRoute}`,`${formatRouteName(parentSlug)}`]
        }
      }

      return {
        slug: [`${parentRoute}`,`${formatRouteName(parentSlug)}`]
      }
    }
    
    return {
      slug: [`${formatRouteName(parentSlug)}`]
    }
  }))

  return [...paths, ...standingPagesPaths]
})

const getNavigationDetails = cache(async () => {
  const navigations = await getNavigation()
  const standingPages = await getStandingPages()

  const standingPagesPaths = standingPages?.map(data => {
    const slug = _.get(data, 'fields.slug') ? _.get(data, 'fields.slug') : formatRouteName(data.name)

    return {
      ...data,
      slug
    }
  })

  const paths = await Promise.all(navigations?.map(async data => {
    const parentSlug = _.get(data, 'fields.slug') ? _.get(data, 'fields.slug') : data.name

    if (data.parentId !== 0) {
      const items = await getItem(data.parentId)
      const parentRoute = formatRouteName(_.get(items[0], 'fields.slug') ? _.get(items[0], 'fields.slug') : _.get(items[0], 'name'))

      if (_.get(items[0], 'parentId') !== 0) {
        const mainParent = await getItem(_.get(items[0], 'parentId'))
        const mainParentRoute = formatRouteName(_.get(mainParent[0], 'fields.slug') ? _.get(mainParent[0], 'fields.slug') : _.get(mainParent[0], 'name'))

        return {
          ...data,
          slug: `${mainParentRoute}/${parentRoute}/${formatRouteName(parentSlug)}`,
        }
      }

      return {
        ...data,
        slug: `${parentRoute}/${formatRouteName(parentSlug)}`,
      }
    }

    return {
      ...data,
      slug: formatRouteName(parentSlug),
    }
  }))

  return [...paths, ...standingPagesPaths]
})

const checkRoute = cache(async (routeName) => {
  if (routeName === '/') {
    routeName = 'home'
  }

  const paths = await getNavigationDetails()
  return _.find(paths, data => data.slug == routeName)
})


// for our team - cochran firm
const getPartnersPages = cache(async () => {
  const collections = await getCollection(ids.partnersPages)
  return collections[0].items
})

const getAttorneysPages = cache(async () => {
  const collections = await getCollection(ids.attorneysPages)
  return collections[0].items
})

const getStaffPages = cache(async () => {
  const collections = await getCollection(ids.staffPages)
  return collections[0].items
})

const generateStaticRoutesTeam = cache(async () => {
  const partnersPages = await getPartnersPages()
  const attorneysPages = await getAttorneysPages()
  const staffPages = await getStaffPages()

  const partnersPath = partnersPages?.map(data => {
    const slug = formatRouteName(data.name.replace(/[^a-zA-Z0-9 ]/g, ''))

    return {
      slug
    }
  })

  const attorneysPath = attorneysPages?.map(data => {
    const slug = formatRouteName(data.name.replace(/[^a-zA-Z0-9 ]/g, ''))

    return {
      slug
    }
  })

  const staffPath = staffPages?.map(data => {
    const slug = formatRouteName(data.name.replace(/[^a-zA-Z0-9 ]/g, ''))

    return {
      slug
    }
  })

  return [...partnersPath, ...attorneysPath, ...staffPath]
})

const getTeamDetails = cache(async () => {
  const partnersPages = await getPartnersPages()
  const attorneysPages = await getAttorneysPages()
  const staffPages = await getStaffPages()

  const partnersPath = partnersPages?.map(data => {
    const slug = formatRouteName(data.name.replace(/[^a-zA-Z0-9 ]/g, ''))

    return {
      ...data,
      slug
    }
  })

  const attorneysPath = attorneysPages?.map(data => {
    const slug = formatRouteName(data.name.replace(/[^a-zA-Z0-9 ]/g, ''))

    return {
      ...data,
      slug
    }
  })

  const staffPath = staffPages?.map(data => {
    const slug = formatRouteName(data.name.replace(/[^a-zA-Z0-9 ]/g, ''))

    return {
      ...data,
      slug
    }
  })

  return [...partnersPath, ...attorneysPath, ...staffPath]
})

const checkTeamRoute = cache(async (routeName) => {
  if (routeName === '/') {
    routeName = 'home'
  }

  const paths = await getTeamDetails()
  return _.find(paths, data => data.slug == routeName)
})

export {
  checkRoute,
  generateStaticRoutes,
  getNavigationDetails,
  generateStaticRoutesTeam,
  getTeamDetails,
  checkTeamRoute
}