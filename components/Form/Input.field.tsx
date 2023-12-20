'use client'
import React from 'react'
import { User } from './User';
interface IInput{
        type: string,
        placeholder: string,
        name: string,
        user: User,
        value: string,
        setInputValue: (updateUser: User) => void,
}
export default function InputText({type, name, value, user,setInputValue, placeholder}: IInput) {
  return (
    <input 
    placeholder={placeholder}
     title={placeholder}
      type={type}
      value={value}
      name={name}
      onChange={(e) => {
          setInputValue(({
              ...user,
              [name]: e.target.value
          }));
      }}
       className='border border-black w-2/3 bg-white font-inria rounded-2xl text-black text-xl justify-start p-3'></input>
  )
}
