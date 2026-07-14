import Link from 'next/link';
import { Home, User, Bell, Sun, Moon} from 'lucide-react';
import ThemeToggle from '../theme_toggle';

export default function Header(){
    return(
        <header className='header fixed w-screen top-0 left-0'>
            <div className='grid grid-cols-3'>
                <Link href = '/'>BLUEPRINT</Link>
                <nav className='flex items-center gap-6'>
                    <Link href='/'> 
                    <Home className='float' color="#3b82f6" size={24} strokeWidth={1.5} />
                    Home
                    </Link>
                    <Link href='/'>
                    <User className='float' color="#3b82f6" size={24} strokeWidth={1.5} />
                    Profile
                    </Link>
                    <Link href='/'>
                    <Bell className='float' color="#3b82f6" size={24} strokeWidth={1.5} />
                    Notification
                    </Link>
                </nav>
                <div>
                    <ThemeToggle />
                    <button type="button" className='btn-primary p-2 float-right'>LOG IN</button> 
                </div>
            </div>
        </header>
    )
}