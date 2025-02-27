'use client'
 
import React from 'react'
import dynamic from 'next/dynamic'
 
const Portfolio = dynamic(() => import('../../views/Home'), { ssr: false })
 
export function ClientOnly() {
  return <Portfolio />
}