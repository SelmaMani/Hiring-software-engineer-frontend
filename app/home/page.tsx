import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import React from 'react'
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import LogoutBtn from '@/components/utils/LogoutBtn';

export default async function Home() { 
        const supabase = createServerComponentClient({ cookies });
        const {data: {session}} = await supabase.auth.getSession();

        if (!session) {
               redirect('/login'); 
        }

  return (
      <div className="home flex flex-col justify-center h-screen relative">
        <div className="flex justify-end p-6">
               <LogoutBtn></LogoutBtn>
        </div>
        <div className="h-full justify-center items-center flex">
                <p className="flex w-fit h-fit text-white p-4 border rounded-2xl  border-white font-inria items-center text-3xl justify-center">
                        Welcome Back {session.user.user_metadata['username']}
                </p>
        </div>
       
        
    </div>
  )
}
