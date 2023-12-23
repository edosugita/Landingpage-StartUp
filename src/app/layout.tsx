'use client'

import type { Metadata } from 'next'
import { Providers } from "./providers"
import { Poppins } from 'next/font/google'
import './globals.css'
import NavbarUser from '@/components/navbar'
import FooterUser from '@/components/footer'
import AOSinit from './AOSinit'
import 'animate.css'
import Loading from '@/components/loading'
import { useEffect, useState } from 'react'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (document.readyState === 'complete') {
      setIsLoading(false)
    } else {
      setIsLoading(true)
    }
  }, [isLoading])

  return (
    <html lang="en" className='scroll-smooth'>
      <AOSinit />
      <body className={poppins.className}>
        {isLoading ? (
          <Loading />
        ) : (
          <Providers>
            <NavbarUser />
            <main className='relative z-10 min-h-[calc(100vh_-_64px_-_108px)] flex-grow overflow-hidden h-full'>
              {children}
            </main>
            <FooterUser />
          </Providers>
        )
        }
      </body>
    </html>
  )
}
