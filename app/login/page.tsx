import React from 'react'
import SloganSide from '@/components/SignUp/Slogan.side'
import RightSide from '@/components/Login/Form.side'
import BackBtn from '@/components/utils/BackBtn'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export default async function Login() {
        const supabase = createServerComponentClient({ cookies });
        const {data: {session}} = await supabase.auth.getSession();

        if (session) {
               redirect('/home'); 
        }
  return (
        <div className="signup flex h-screen relative">
                <div className="absolute z-50 top-0">
                        <BackBtn path='/'></BackBtn>
                </div>
                <RightSide></RightSide>
                <SloganSide isLeft={false}></SloganSide>

    </div>
  )
}
