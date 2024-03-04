'use client'
import {Description} from '@/components/Description'
import {Hero} from '@/components/Hero'
import {Projects} from '@/components/Projects'
import {useEffect} from 'react'

export default function Home() {
  useEffect(() => {
    ;(async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default
      new LocomotiveScroll()
    })()
  }, [])
  return (
    <main className='min-h-screen'>
      <Hero />
      <Description />
      <Projects />
    </main>
  )
}
