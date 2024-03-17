'use client'
 
import { useSearchParams } from 'next/navigation'
import Script from 'next/script'
// function
import { splitWuffooForm } from '@/function/embed-codes'

export function WufooFormWithParams({ fields }) {
  const wufooForm = splitWuffooForm(fields.embed)
  const searchParams = useSearchParams()
  let defaultValues = ''
  let temp = '';
  const defaultWufooIds = {
    utm_source: '123',
    utm_campaign: '124',
    utm_medium: '126'
  }
  
  for (const key of searchParams.keys()) {
    if (defaultWufooIds[key]) {
      temp = `${temp}&field${defaultWufooIds[key]}=${searchParams.get(key)}`
    } else {
      temp = `${temp}&field=${searchParams.get(key)}`
    }

    defaultValues = temp.slice(1)
  }

  const splitWufoo = wufooForm.scriptCode.split('}; s.src');
  const scriptCode = `${splitWufoo[0]},'defaultValues':'${defaultValues}' }; s.src${splitWufoo[1]}`

  if (fields.embed)
    return (
      <div className="mt-6 lg:mt-0 grid justify-items-center lg:justify-items-center">
        <div className="relative w-full bg-gray-50 lg:max-w-2xl rounded-lg lg:max-w-lg max-w-[600px] min-h-[399px]">
          <div className="px-6 pt-6">
            <div dangerouslySetInnerHTML={{__html: wufooForm.divElement}}/>
            <Script
              id="form-script"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: eval(`${scriptCode}`),
              }}
            />
          </div>
          <p className="abosulute text-xs text-center bg-gray-100 border rounded-b-xl p-0 py-7 m-0">
            We care about protecting your data. Read our <strong><a href="/privacy-policy" target="_blank">Privacy Policy.</a></strong>
          </p>
        </div>
      </div>
    )
}