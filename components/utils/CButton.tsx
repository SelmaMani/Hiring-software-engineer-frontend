'use client'
import React from 'react' 
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'


interface ICBtn{
        title: string,
        path: string
}

export default function CButton({title, path}: ICBtn) {
        const router = useRouter();
        const handleClick = ()=>{
                router.push(path)
        }
  return (
    <motion.button 
    whileHover={{
        scale:1.1,
        backgroundColor: '#174557'
    }}
    onClick={handleClick}
    className="bg-blue z-50 text-white font-inria py-2 px-5 lg:py-4 lg:px-7 text-lg lg:text-xl rounded-3xl">
        {title}
    </motion.button>
  )
}
