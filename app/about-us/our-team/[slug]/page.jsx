import _ from 'lodash'
// function
import { getGeneralInfo, getSettings } from '@/function/page'
import { generateStaticRoutesTeam, checkTeamRoute } from '@/function/navigation'
// components
import { DefaultHero, ImageLeftSmallImageTeam } from '@/components/section'
import { BodyScripts } from '@/components/shared'

export async function generateMetadata({ params }) {
  const general = await getGeneralInfo()
  const path = await checkTeamRoute(params.slug)
  const { fields } = path
  const metaTitle = _.get(fields, 'metaTitle') ? _.get(fields, 'metaTitle') : _.get(general, 'defaultMetaTitle')

  return {
    title: `${path.name} - ${metaTitle}`,
    description: `${_.get(fields, 'metaDescription')}`,
    openGraph: {
      title: `${metaTitle}`,
      description: `${_.get(fields, 'metaDescription')}`,
      images: [`${_.get(fields, 'ogImage.imageUrl')}`],
      url: `${_.get(general, 'url')}about-us/our-team/${path.slug}`,
      site_name: _.get(general, 'organizationName')
    },
    alternates: {
      canonical: `${_.get(general, 'url')}about-us/our-team/${path.slug}`,
    },
  };
}

export default async function Page({ params }) {
  const path = await checkTeamRoute(params.slug)
  const settings = _.first(await getSettings())
  
  return (
    <>
       {
        _.get(path, 'fields.hideLiveChat') === "1" && (
          <BodyScripts
            bodyScript={_.get(settings, 'fields.bodyScripts')}
          />
        )
      }

      <div>
        <DefaultHero data={{ name: path.name }}/>

        <ImageLeftSmallImageTeam
          data={{
            ...path,
            fields: {
              title: path.name,
              ...path.fields
            }
          }}
          marginTop={`py-12 md:py-16 lg:py-20`} 
          sectionCount={2} 
        />
      </div>
    </>
  )
}

export async function generateStaticParams() {
  return await generateStaticRoutesTeam()
}
