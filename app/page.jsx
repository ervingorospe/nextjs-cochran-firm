import _ from 'lodash'
import Script from 'next/script'
// function
import { pageDetails, getGeneralInfo, getSettings } from '@/function/page'
import { generateStaticRoutes, checkRoute } from '@/function/navigation'
import { sectionsComponent, formatComponentName } from '@/function/formatting'
// component
import * as ComponentSection from '@/components/section'
import { ComponentLayout } from '@/components/layout'
import { BodyScripts } from '@/components/shared'

let count = 0

export async function generateMetadata({ params }) {
  const general = await getGeneralInfo()
  const path = await checkRoute(`/`)
  const { fields } = path

  const metaTitle = _.get(fields, 'metaTitle') ? _.get(fields, 'metaTitle') : _.get(general, 'defaultMetaTitle')

  return {
    title: metaTitle,
    description: _.get(fields, 'metaDescription'),
    openGraph: {
      title: metaTitle,
      description: _.get(fields, 'metaDescription'),
      images: [`${_.get(fields, 'ogImage.imageUrl')}`],
      url: _.get(general, 'url'),
      site_name: _.get(general, 'organizationName')
    },
    alternates: {
      canonical: _.get(general, 'url'),
    },
  };
}

export default async function Home({ params }) {
  const settings = _.first(await getSettings())
  const path = await checkRoute(`home`)
  const pageData = await pageDetails(168016)
  let functionScript = ""
  let noScripts = ""

  if (_.get(path, 'fields.headScripts')) {
    const headScript = _.get(path, 'fields.headScripts')
    const regex = /<script\b[^>]*>([\s\S]*?)<\/script>/gm;
    const matches = [...headScript.matchAll(regex)];

    matches.forEach((match) => {
      const scriptContent = match[1].trim();
      functionScript = scriptContent;
    });

    const noScript = _.get(path, 'fields.headScripts')
    const regex2 = /<noscript\b[^>]*>([\s\S]*?)<\/noscript>/gm;
    const matche2 = [...noScript.matchAll(regex2)];

    matche2.forEach((match) => {
      const scriptContent = match[1].trim();
      noScripts = scriptContent;
    });
  }

  return (
    <>
      {
        functionScript && (
          <Script
            id="facebook-script"
            dangerouslySetInnerHTML={{__html: `${functionScript}`}}
          />
        )
      }

      {
        noScripts && (
          <noscript>
            <div dangerouslySetInnerHTML={{__html: `${noScripts}`}}/>
          </noscript>
        )
      }

      {
        !_.get(path, 'fields.hideLiveChat') && (
          <BodyScripts
            bodyScript={_.get(settings, 'fields.bodyScripts')}
            hide={_.get(path, 'fields.hideLiveChat')}
          />
        )
      }

      {
        _.size(pageData.activeSections) > 0 && (
          pageData.activeSections?.map(item => {
            const componentName = sectionsComponent(item)

            if (componentName) {
              const ComponentType = ComponentSection[formatComponentName(componentName)] ? ComponentSection[formatComponentName(componentName)] : null

              if (ComponentType) {
                return <ComponentLayout 
                  data={item} 
                  key={item.name} 
                  marginTop={`py-12 md:py-16 lg:py-20`} 
                  sectionCount={count = count + 1} 
                  componentName={formatComponentName(componentName)}
                />
              }
            }
          })
        )
      }
    </>
  )
}

export async function generateStaticParams() {
  return await generateStaticRoutes()
}
