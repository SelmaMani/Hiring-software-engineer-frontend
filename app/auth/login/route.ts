import { validEmail, validPassword } from '@/components/Form/Validation'
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const requestUrl = new URL(request.url)
  const formData = await request.formData()
  const email = String(formData.get('email'))
  const password = String(formData.get('password'))
  const cookieStore = cookies()
  const supabase = createRouteHandlerClient({ cookies: () => cookieStore })
  let errors = ''

  if (!validEmail(email)) {
        errors = "Please provide a valid email.";
        return NextResponse.json({status: 501, statusText: errors})
  }
  if (!validPassword(password)) {
        errors = "Password not correct, please try again!";
        return NextResponse.json({status: 502, statusText: errors})
  }

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  })

  if (error) {
        errors = "Wrong Password, retry!";
        return NextResponse.json({status: 503, statusText: error.message})
  }
 
  else{
        return NextResponse.redirect(`${requestUrl.origin}/home`, {
                status: 301,
              })
  }

}