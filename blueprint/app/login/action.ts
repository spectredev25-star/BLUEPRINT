'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { createClient } from '@/utils/supabase/server'

export async function login(formData: FormData) {
  // Initialize the server-side Supabase client
  const supabase = await createClient()

  // Safely extract the input data from your HTML form fields
  const email = formData.get('email') as string
  const password = formData.get('password') as string

  // Attempt log in with Supabase Authentication
  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  })

  // If credentials don't match, send user back with an explicit error URL parameter
  if (error) {
    redirect('/login?error=Could not authenticate user')
  }

  // Clear cache filters to safely sync login states across your layouts
  revalidatePath('/', 'layout')
  
  // Send the authenticated user to your main layout landing or workspace dashboard
  redirect('/') 
}
