import Links from 'next/link'

export default function SideBar(){
    return(
        <section className="hidden lg:fixed left-0 top-0 pt-32 pl-4 sidebar flex  align-middle h-screen">
            <nav>
                <p><Links href='/'>
                Dashboard
                </Links>
                </p>
                <p><Links href='/'>
                Scholarships
                </Links>
                </p>
                <p><Links href='/'>
                Applications
                </Links>
                </p>
                <p><Links href='/profile_update'>
                Profile
                </Links>
                </p>
                <p><Links href='/'>
                Settings
                </Links>
                </p>
                <Links href='/'>
                <button>Log Out</button>
                </Links>

            </nav>

        </section>
    )
}