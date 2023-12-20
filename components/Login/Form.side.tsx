'use client';
import React, { FormEvent, useState } from 'react';
import InputText from '@/components/Form/Input.field';
import RegButton from '@/components/utils/RegButton';
import axios from 'axios';

export default function FormSide() {
  const initialUser = {
    username: '',
    email: '',
    password: '',
  };

  const [userInfo, setUserInfo] = useState(initialUser);
  const [insertionError, setInsertionError] = useState('');
  const [insertionMessage, setInsertionMessage] = useState('');

  const handleSubmit = async (event:  FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setInsertionError('');
    
    try {
      const response = await axios.post('/auth/login', new FormData(event.currentTarget));
      console.log(response);

      switch (response.data.status) {
        case 501:
        case 502:
        case 503:
          setInsertionError(response.data.statusText);
          break;
      }
    } catch (error) {
      console.error('Error:', error);
      setInsertionError('An error occurred while processing your request.');
    }
  };

  return (
    <div className="flex flex-col right-side w-full md:w-1/2 items-center justify-center bg-white gap-5">
      <p className="text-center text-black font-inria leading-[1.2] font-bold text-xl md:text-3xl lg:text-5xl">
        Welcome Back to <br /> <span className='text-blue'> Edity!</span>
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col w-full items-center gap-4">
        <InputText user={userInfo} value={userInfo?.email} name='email' setInputValue={setUserInfo} placeholder='Email' type='text'></InputText>
        <InputText user={userInfo} value={userInfo?.password} name='password' setInputValue={setUserInfo} placeholder='Password' type='password'></InputText>
        <RegButton title='Login'></RegButton>
      </form>
      {insertionError && (
        <div className="text-red-600 m-4 w-fit h-fit justify-center items-center font-montserrat text-base border rounded-2xl border-red-600 p-4">{insertionError}</div>
      )}
      {insertionMessage && (
        <div className="text-green-600 m-4 w-fit h-fit justify-center items-center font-montserrat text-base border rounded-2xl border-green-600 p-4">{insertionMessage}</div>
      )}
      <p className="text-start font-inria text-black text-lg md:text-xl">
        Don't have an account? <a className='text-blue underline' href="/signup">Signup</a>
      </p>
    </div>
  );
}
