import React from "react"
import type { Metadata } from 'next'
import { IBM_Plex_Sans_Arabic, Tajawal } from 'next/font/google'
import Link from 'next/link'

import './globals.css'
import DataUsageTracker from '@/components/DataUsageTracker'

const ibmPlexSansArabic = IBM_Plex_Sans_Arabic({
  subsets: ['arabic'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-ibm-plex',
})

const tajawal = Tajawal({
  subsets: ['arabic'],
  weight: ['300', '400', '500', '700', '800'],
  variable: '--font-tajawal',
})

export const metadata: Metadata = {
  title: 'Najahni - منصة نجّحني التعليمية',
  description: 'منصة تعليمية تمنحك الطاقة للتفوق. اكتشف متعة التعلم مع أفضل الأساتذة ومحتوى تفاعلي يضمن لك النجاح والتميز.',
  generator: 'v0.app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${ibmPlexSansArabic.variable} ${tajawal.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <head>
        <link
          rel="preload"
          as="style"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&display=swap"
        />
      </head>
      <body className="bg-background-light text-text-main min-h-screen flex flex-col overflow-x-hidden selection:bg-electric-blue selection:text-white font-body antialiased">
        {children}
        <DataUsageTracker />
      </body>
    </html>
  )
}
