import { validEmail, validName, validPassword } from '@/components/Form/Validation'
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const requestUrl = new URL(request.url)
  const formData = await request.formData()
  const username = String(formData.get('username'))
  const email = String(formData.get('email'))
  const password = String(formData.get('password'))
  const cookieStore = cookies()
  const supabase = createRouteHandlerClient({ cookies: () => cookieStore })
  let errors = ''

  if (!validName(username)) {
        errors = "Please provide a valid username.";
        return NextResponse.json({status: 503, statusText: errors})
  }
  if (!validEmail(email)) {
        errors = "Please provide a valid email.";
        return NextResponse.json({status: 501, statusText: errors})
  }
  if (!validPassword(password)) {
        errors = "Password should contain at least 8 characters.";
        return NextResponse.json({status: 502, statusText: errors})
  }

const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: `${requestUrl.origin}/auth/callback`,
      data: {
        username: username,
        }
    },
  })

  if (error) {
        return NextResponse.json({status: 504, statusText: error.message})
  }
  
  else{
        return NextResponse.json({status: 301})
  }


}