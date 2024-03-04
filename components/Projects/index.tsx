'use client'

import {gsap} from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import Image from 'next/image'
import React, {useLayoutEffect, useState} from 'react'
import {useRef} from 'react'

export function Projects() {
  const imageContainer = useRef(null)
  const [selectedProject, setSelectedProject] = useState(0)

  const projects = [
    {
      title: 'Salar de Atacama',
      src: 'salar_de_atacama.jpg',
    },
    {
      title: 'Valle de la Muerte',
      src: 'valle_de_la_muerte.jpeg',
    },
    {
      title: 'Miscani Lake',
      src: 'miscani_lake.jpeg',
    },
    {
      title: 'Miniques Lagoons',
      src: 'miniques_lagoon.jpg',
    },
  ]

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    ScrollTrigger.create({
      trigger: imageContainer.current,
      end: document.body.offsetHeight,
      start: '-=100px',
      pin: true,
    })
  }, [])

  return (
    <section className='mt-[25vh] flex flex-col p-[10%]'>
      <article className='w-100% flex h-[700px] justify-between gap-[5%]'>
        <figure className='relative h-full w-2/5' ref={imageContainer}>
          <Image
            src={`/images/${projects[selectedProject].src}`}
            alt={projects[selectedProject].title}
            fill={true}
            className='object-cover'
          />
        </figure>
        <div className='w-1/5 text-[1.5vw]'>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            voluptate vel iure itaque deleniti suscipit nesciunt blanditiis,
            fuga quisquam dolore libero perferendis minima ullam esse, mollitia
            voluptates optio ab. Exercitationem, reiciendis sunt.
          </p>
        </div>
        <div className='w-1/5 self-end text-[1vw]'>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
            maxime, aspernatur mollitia voluptatem dolore perspiciatis possimus
            nihil suscipit veniam exercitationem ducimus id? Officia iure hic
            dolorem, itaque nulla quas totam provident necessitatibus vero
            voluptatum ipsa quaerat molestias asperiores laboriosam est facere
            delectus eaque temporibus porro expedita autem incidunt ducimus
            libero! Vitae quidem quos alias dolorum at optio reprehenderit
            voluptatum in, minima nesciunt.
          </p>
        </div>
      </article>
      <menu className='mt-[200px]'>
        {projects.map((project, index) => (
          <li
            key={'p_' + index}
            onClick={() => setSelectedProject(index)}
            className='flex justify-end border-t border-t-white last-of-type:border-b last-of-type:border-b-white'
          >
            <button
              onMouseOver={() => setSelectedProject(index)}
              onClick={() => setSelectedProject(index)}
              className='m-0 mb-[20px] mt-[40px] text-[4vw] font-bold uppercase'
            >
              {project.title}
            </button>
          </li>
        ))}
      </menu>
    </section>
  )
}
