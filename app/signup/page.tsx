import React from 'react'
import BackBtn from '@/components/utils/BackBtn'
import SloganSide from '@/components/SignUp/Slogan.side'
import FormSide from '@/components/SignUp/Form.side'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';



export default async function SignUp() {
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
       <SloganSide isLeft={true}></SloganSide>
       <FormSide></FormSide>
       
    </div>
  )
}
