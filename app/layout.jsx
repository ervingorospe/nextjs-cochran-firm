import './globals.css'
import _ from 'lodash'
import Script from 'next/script'
// components
import { HeaderLayout } from '@/components/layout'
import { HeaderContent, FooterContent } from '@/components/navigation'
import { ShowCookie } from '@/components/shared'
// function
import { getNavigationDetails } from '@/function/navigation'
import { getCommonCollection, getSettings, getGeneralInfo } from '@/function/page'
import { checkIfDisabled } from '@/function/disabled-script'

export const metadata = {
  title: 'The Cochran Firm',
  description: 'Getting YOUR voice heard in Texas. No matter where in the Lone Star State you live, Cochran Texas can help you with your legal needs.',
}

export const dynamicParams = false

export default async function RootLayout({ children }) {
  const navigation = await getNavigationDetails()
  const commonCollection = await getCommonCollection()
  const settings = _.first(await getSettings())
  const general = await getGeneralInfo()

  let headScript1;
  let headScript2;

  if (_.get(settings, 'fields.headScripts')) {
    const splitHeadScripts = _.get(settings, 'fields.headScripts').split('<!-- split script -->')
    headScript1 = splitHeadScripts[0].split('<script>')[1].split("</script>")[0]
    headScript2 = splitHeadScripts[2].split("src='")[1].split("'></script>")[0]
  }

  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"/>
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"/>
        <meta name="msapplication-TileColor" content="#ffffff"/>
        <meta name="theme-color" content="#ffffff"/>
        <meta name="google-site-verification" content="8dKP2h4UHoDKuGEiZ9Y93sKwhp5huTiQb0eYK9i9gFs" />
        <script src="https://cdn.jsdelivr.net/gh/modiphy/disabled@latest/dist/index.js" async></script>
        <script type="text/javascript" src={`https://www.googletagmanager.com/gtag/js?id=${_.get(general, 'analyticsId')}`} async/>
        
        <Script
          id="gtag-init"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${_.get(general, 'analyticsId')}', {
                page_path: window.location.pathname,
              });
              gtag('config', '${_.get(settings, 'fields.analyticsId')}', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
        {
          headScript1 && (
            <Script
              id="pixel"
              dangerouslySetInnerHTML={{__html: `${headScript1}`}}
            />
          )
        }

        {
          headScript2 && (
            <script type="text/javascript" src={headScript2} async/>
          )
        }

        <script
          dangerouslySetInnerHTML={{
            __html: `${_.get(settings, 'fields.headScripts')}`,
          }}
        />
      </head>

      <body className="antialiased">
        {/* header */}
        <HeaderLayout theme='dark' className="relative z-1000 h-0">
          <HeaderContent 
            navigation={navigation}
            actionBtns={_.filter(_.get(commonCollection[0], 'items'), data => _.get(data, 'fields.active') === "1")}
            general={general}
          />
        </HeaderLayout>

        <main className="overflow-hidden">
          { children }
        </main>

        <FooterContent
          navigation={navigation}
          callToAction={_.filter(commonCollection[1].items, res => res.fields.active)}
          locationInfo={_.filter(commonCollection[2].items, res => res.fields.active)}
          socialMedia={_.filter(commonCollection[3].items, res => res.fields.active)}
          location={_.filter(commonCollection[4].items, res => res.fields.active)}
          settings={settings}
          general={general}
        />

        <ShowCookie/>
      </body>
    </html>
  )
}

/* 
ml-8 hidden md:flex
*/
