'use client'

import React from 'react'

export function Chip({ data }) {
  return (
    <span className="ml-2 sm:ml-0 tracking-wide bg-secondary-700 text-gray-300 rounded-xl mt-1 py-1 px-3 text-base">
      {data.name}
    </span>
  )
}
