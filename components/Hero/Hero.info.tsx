"use client"
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

interface IHeroInfo{
        icon: IconProp,
        content: string,
        color: string
}

export default function HeroInfo({icon, color, content}: IHeroInfo) {
  return (
    <div className="flex gap-2 items-center">
     <div className="flex items-center w-10 h-10 justify-center rounded-full" style={{ border: `2px solid ${color}` }}>
        <FontAwesomeIcon icon={icon} style={{ color: color }} />
      </div>
        <h3 className='text-white font-inria text-xl'>{content}</h3>
    </div>
  )
}
