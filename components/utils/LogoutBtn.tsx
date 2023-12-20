'use client'
import React, { FormEvent } from 'react'
import { motion } from 'framer-motion'

export default function LogoutBtn() {

  return (
        <form action="/auth/logout" method='post'>
                <motion.button 
                whileHover={{
                        scale:1.1,
                        backgroundColor: '#174557'
                }}
                type='submit'
                className="bg-blue z-50 text-white font-inria py-4 px-7 text-xl rounded-3xl">
                       Logout
                </motion.button>
    </form>
  )
}
