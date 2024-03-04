'use client'

import React, {useLayoutEffect, useRef} from 'react'
import {gsap} from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'

export function Description() {
  const phrases = [
    'Los Flamencos National Reserve',
    'is a nature reserve located',
    'in the commune of San Pedro',
  ]

  return (
    <section className='relative z-20 ml-[10vw] mt-[30vw] text-[3vw] uppercase'>
      {phrases.map((phrase, index) => (
        <AnimatedText key={index}>{phrase}</AnimatedText>
      ))}
    </section>
  )
}

interface AnimatedTextProps {
  children: string
}

function AnimatedText({children}: AnimatedTextProps) {
  const text = useRef(null)

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    gsap.from(text.current, {
      scrollTrigger: {
        trigger: text.current,
        start: '0px bottom',
        end: 'bottom+=400px bottom',
        scrub: true,
      },
      left: '-200px',
      opacity: 0,
      markers: true,
    })
  }, [])

  return (
    <p ref={text} className='relative m-0'>
      {children}
    </p>
  )
}
