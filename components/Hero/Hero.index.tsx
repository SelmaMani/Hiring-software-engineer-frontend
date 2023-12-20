"use client"
import React from 'react'
import Image from 'next/image'
import CButton from '../utils/CButton'
import girl from '../../public/Hero/girl.webp'
import boy from '../../public/Hero/boy.webp'
import HeroInfo from './Hero.info'
import { faPenToSquare, faChalkboardUser, faShareFromSquare, faPeopleCarryBox } from '@fortawesome/free-solid-svg-icons'

export default function Hero() {
  return (
    <div className="hero flex flex-col justify-center items-center m-10 p-10 gap-12 relative">
        <div className=" flex flex-col items-center z-50 gap-8">
        <p className="slogan text-center text-white font-inria font-bold text-4xl lg:text-6xl">
                Unlock Collaboration At Its <br /> Finest With <span className='text-blue'> Edity</span>
        </p>
        <div className="flex justify-center items-center flex-col md:flex-row gap-8">
                <div className="flex gap-8">
                <HeroInfo color='#FFC727' icon={faPenToSquare} content='edit'></HeroInfo>
                <HeroInfo color='#3AA892' icon={faChalkboardUser} content='organize'></HeroInfo>
                </div>
                <div className="flex gap-8">
                <HeroInfo color='#407BFF' icon={faShareFromSquare} content='share'></HeroInfo>
                <HeroInfo color='#EF5350' icon={faPeopleCarryBox} content='collaborate'></HeroInfo>
                </div>
        </div>
        </div>
         <CButton title='Get Started' path='/signup'></CButton>
         <div className="flex justify-end md:justify-between w-[90%] md:top-[40%] absolute">
                <Image className='w-1/4 hidden md:block' src={girl} alt=''></Image>
                <Image  className=' opacity-25 w-full sm:w-1/2 md:w-1/4 md:opacity-100'  src={boy} alt=''></Image>
        </div>
    </div>
  )
}
