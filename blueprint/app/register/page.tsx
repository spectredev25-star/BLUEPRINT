import { signup } from './action';

export default function RegisterPage() {
  return (
    <section className='p-4 flex justify-center items-center h-screen sign-up'>
    <form action={signup} className="space-y-4">
      <div>
      <div>
        <p className='pt-4'>Full Name: </p>
         <input
        type="text"
        name="full_name"
        placeholder="Full Name"
        required
      />
      </div>
      <div>
        <p className='pt-4'>Email: </p>
        <input
        type="email"
        name="email"
        placeholder="Email"
        required
      />
      </div>
     <div>
      <p className='pt-4'>Password: </p>
       <input
        type="password"
        name="password"
        placeholder="Password"
        required
      />
     </div>
      <button type="submit" className='pt-4 cursor-pointer'>
        Create Account
      </button>
      </div>
    </form>
    </section>
  )
}