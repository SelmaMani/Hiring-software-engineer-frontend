'use client'
import { motion } from 'framer-motion'

interface IRBtn{
        title: String,
}

export default function RegButton({title}: IRBtn) {
  return (
    <motion.button 
    whileHover={{
        scale:1.1,
        backgroundColor: '#174557'
    }}
    type='submit'
    className="bg-blue z-50 text-white font-inria py-4 px-7 text-xl rounded-3xl">
        {title}
    </motion.button>
  )
}
