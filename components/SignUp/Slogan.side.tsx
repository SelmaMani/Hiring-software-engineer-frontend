import React from 'react'
import Image from 'next/image'
import boy from '@/public/SignUp/boy.webp'
import penTool from '@/public/SignUp/Pen_Tool.svg'
import player from '@/public/SignUp/Player.webp'
import pin from '@/public/SignUp/pin.svg'
import pin2 from '@/public/Login/pin.svg'
import girl from '@/public/Login/girl.svg'
import folder from '@/public/Login/folder.svg'
import paper from '@/public/Login/paper.svg'

interface ISlogan{
        isLeft: boolean
}

export default function SloganSide({isLeft}: ISlogan) {
  return (
        <div className="left-side md:flex bg-black flex-col w-1/2 justify-center relative hidden   items-center">
       
        { isLeft ? 
         <div className="flex w-5/6 absolute top-24 lg:top-40 justify-between">
                <Image src={penTool} alt=''></Image>
                <Image src={pin} alt=''></Image>
        </div> 
        : 
        <div className="flex w-5/6 absolute top-24 lg:top-40 justify-between">
                <Image src={folder} alt=''></Image>
                <Image src={pin2} alt=''></Image>
        </div>
        }

       
        <p className="slogan text-center w-1/2 text-white font-inria leading-[1.2] font-bold text-xl md:text-3xl lg:text-5xl">
        Unlock Collaboration At Its Finest With <span className='text-blue'> Edity</span> 
        </p>

        { isLeft ?
         <div className="w-5/6 flex bottom-2 lg:bottom-4 absolute justify-between">
                <Image className='w-1/5 h-1/5'  src={player} alt=''></Image>
                <Image className='w-1/2' src={boy} alt=''></Image>
        </div>
        :
        <div className="w-5/6 flex bottom-2 lg:bottom-4 absolute justify-between">
                <Image className='w-[45%] lg:w-1/2 xl:w-[40%]'  src={girl} alt=''></Image>
                <Image className='' src={paper} alt=''></Image>
        </div>
         }
</div>
  )
}
