'use client'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons'
import { useRouter } from 'next/navigation'

interface IBack{
        path: string
}

export default function BackBtn({path}: IBack) {
        const router = useRouter()
        const handleBack = ()=>{
                router.push(path)
        }
  return (
    <button onClick={()=>{
        handleBack()
    }} className='rounded-full p-2 bg-blue mt-9 ml-9 w-10 h-10'>
        <FontAwesomeIcon icon={faArrowLeft} style={{color: '#FFFFFF'}} />
    </button>
  )
}
