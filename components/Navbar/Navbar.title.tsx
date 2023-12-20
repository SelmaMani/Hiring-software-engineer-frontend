'use client'
import React from 'react'
import { motion } from 'framer-motion'

interface ITitle{
        title: string,
        id: string
}

export default function NavbarTitle({title, id}: ITitle) {
        const scrollToSection = () => {
                const section = document.getElementById(id);
                    if (section) {
                  section.scrollIntoView({ behavior: "smooth" });
                }
              };
  return (
    <motion.div
    whileHover={{
       scale:1.1,
       color: '#43CBFF'
      }}
      onClick={()=>{
        scrollToSection()
      }}
     className="flex text-center text-sm font-inria items-center justify-center lg:text-xl text-white px-2 lg:px-4 py-2">
        {title}
    </motion.div>
  )
}
