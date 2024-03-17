'use client'

import clsx from 'clsx'
import { useState, useEffect } from 'react'

const themeColor = {
  dark: 'dark-theme',
  light: 'light-theme'
}

export function HeaderLayout({ theme, className, ...props }) {
  const [pageData, setPageData] = useState(theme)

  useEffect(() => {
    window.onscroll = async () => {
      if(window.pageYOffset === 0) {
        setPageData('dark')
      }

      if(window.pageYOffset > 0) {
        setPageData('light')
      }
    }
  }, [pageData])

  return <header className={clsx(themeColor[pageData], className)} {...props} />
}
