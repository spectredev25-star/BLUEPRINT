import { login } from './action'
import Link from 'next/link'

interface PageProps {
  searchParams: Promise<{ error?: string }>
}

export default async function LoginPage({ searchParams }: PageProps) {
  const { error } = await searchParams

  return (
    <section>

    <div className='p-4 flex justify-center items-center h-screen sign-up sign-card'>
      <form action={login}>
        <div>
          <h1 className='text-2xl font-bold pb-4'>Log In</h1>
        <div>
        <p className='pb-2'>Email: </p>
        <input
        type="email"
        name="email"
        placeholder="Email"
        required
      />
      </div>
       <div>
        <p className='pb-2'>Password: </p>
        <input
        type="password"
        name="password"
        placeholder="*******"
        required
      />
      </div>
      <div className='mt-4'>
        <Link href='/' className='underline mt-4'>
        Forgot Password?
        </Link>
      </div>
      <div className='log-in mt-6'>
      <button type="submit" className='cursor-pointer'>
        Log In
      </button>
      </div>
      </div>
      </form>
      </div>
    </section>
  )
}
