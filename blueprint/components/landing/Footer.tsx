import Link from 'next/link';
export default function Footer(){
    return(
        <section className="flex justify-center items-center">
            <div>
                <p><Link href='/'>About</Link></p>
                <p><Link href='/'>Contact</Link></p>
                <p><Link href='/'>Privacy Policy</Link></p>
            </div>
        </section>
    )
}