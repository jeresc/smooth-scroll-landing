import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import './globals.css'

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
  title: 'Smooth Scroll Landing Page',
  description:
    'This is a landing page with smooth scrolling powered by Locomotive Scroll and GSAP.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body
        className={
          inter.className +
          ' min-h-screen bg-[#f0f0f0] text-black dark:bg-[#0f0f0f] dark:text-white'
        }
      >
        {children}
      </body>
    </html>
  )
}
