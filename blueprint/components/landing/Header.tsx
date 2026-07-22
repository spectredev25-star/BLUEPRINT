import Link from 'next/link';
import { Home, User, Bell, Sun, Moon} from 'lucide-react';
import ThemeToggle from '../theme_toggle';

export default function Header(){
    return(
        <header className='header fixed w-screen top-0 left-0'>
            <div className='grid grid-cols-3'>
                <Link href = '/'>Schorlar MatchAI</Link>
                <nav className='flex items-center gap-6'>
                    <Link href='/'> 
                    <Home className='float' color="#6366f1" size={24} strokeWidth={1.5} />
                    Home
                    </Link>
                </nav>
                <div>
                <ThemeToggle />
                <Link href='/login'>
                <button type="button" className='btn-primary p-2 float-right mr-8'>LOG IN</button>
                </Link> 
                 <Link href='/register'>
                <button type="button" className='btn-primary p-2 float-right'>SIGN UP</button>
                </Link> 
                </div>
            </div>
        </header>
    )
}