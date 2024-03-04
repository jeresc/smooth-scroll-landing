'use client'

import Image from 'next/image'
import React, {useLayoutEffect, useRef} from 'react'
import {gsap} from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'

export function Hero() {
  const bgImage = useRef(null)
  const introImage = useRef(null)

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: document.documentElement,
        start: 'top',
        end: '+=500px',
        scrub: true,
      },
    })

    timeline
      .from(bgImage.current, {
        clipPath: 'inset(15%)',
      })
      .to(
        introImage.current,
        {
          height: '200px',
        },
        0,
      )
  }, [])

  return (
    <section>
      <figure
        className='absolute top-0 h-[140vh] w-full brightness-[60%]'
        ref={bgImage}
      >
        <Image
          src='/images/background.jpeg'
          alt='Background Image'
          fill={true}
          className='object-cover'
          quality={100}
        />
      </figure>
      <div className='mt-[35vh] flex items-center justify-center'>
        <figure
          className='absolute h-[475px] w-[350px]'
          ref={introImage}
          data-scroll
          data-scroll-speed='0.3'
        >
          <Image
            src='/images/intro.png'
            alt='Introduction Image'
            fill={true}
            className='object-cover object-top'
            quality={100}
          />
        </figure>
        <h1
          className='z-10 text-[7vw] font-bold uppercase'
          data-scroll
          data-scroll-speed='0.7'
        >
          Smooth Scroll
        </h1>
      </div>
    </section>
  )
}
