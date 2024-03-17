/* eslint-disable @next/next/no-head-element */
'use client'

import React, { useEffect, useState } from 'react'
import Script from 'next/script'

export function BodyScripts({ bodyScript }) {
  const [scripts, setScripts] = useState('')

  useEffect(() => {
    if (bodyScript) {
      const splitScript = bodyScript.split('<!-- Source Script -->')
      const script1 = splitScript[0].split('<script>')
      const script2 = splitScript[1].split('src="')
      
      setScripts({
        body: script1[1].split('</script>')[0],
        source: script2[1].split('"></script>')[0]
      })
    }
  }, [bodyScript])

  return (
    <>
      {
        scripts && (
          <>
            <Script
              id="show-contact-div"
              dangerouslySetInnerHTML={{__html: `${scripts.body}`}}
            />
            <Script
              id="show-contact"
              src="//cdn.callrail.com/companies/681427785/d0c277f34509277db43f/12/swap.js"
            />
          </>
        )
      }
    </>
  )
}
