'use client'
import React from 'react'
import NavbarTitle from './Navbar.title'
import CButton from '../utils/CButton'
import { motion } from 'framer-motion'

export default function Navbar() {
  return (
    <div className='flex w-screen items-center justify-between gap-1 md:justify-evenly p-4 '>
        <div className="text-blue font-inria flex items-center font-bold justify-center font-fredoka text-xl lg:text-4xl">
                Edity
        </div>
        <div className="flex gap-2 lg:gap-8">
        <NavbarTitle title='Home' id='hero'></NavbarTitle>
        <NavbarTitle title='Services' id='features'></NavbarTitle>
        <NavbarTitle title='Docs' id='pricing'></NavbarTitle>
        <NavbarTitle title='Blog' id='contact'></NavbarTitle>
        </div>
        <div className="hidden md:flex md:gap-4 justify-center items-center">
                <motion.a
                whileHover={{
                        color: '#FFFFFF',
                        scale: 1.1
                }}
                 className='text-blue underline text-lg lg:text-xl font-inria' href='/login'>Login</motion.a>
                <CButton title='Sign up' path='/signup'></CButton>
        </div>
    </div>
  )
}
