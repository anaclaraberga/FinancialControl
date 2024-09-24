import { Link } from 'react-router-dom'
import './SideBar.css'
import { SignedIn, UserButton, useUser } from '@clerk/clerk-react'

export default function SideBar() {
    const { user } = useUser();
    
    return(
        <>

        <aside id="sidebar">
            <header className="sidebar-header">

                <SignedIn>
                    <UserButton />
                </SignedIn>

                <p className='welcome-user'> Olá {user?.firstName}!</p>

            </header>

            <div className='division-container'></div>

            <nav className='sidebar-links'>
                <a href='/'>
                    <span>
                        <i className="material-symbols-outlined">home</i>

                        <span>Dashboard</span>
                    </span>
                </a>

                <a href='/about-the-application'>
                    <span>
                        <i className="material-symbols-outlined">upload_file</i>

                        <span>Conheça a Financial Control</span>
                    </span>
                </a>

                <a href='/about-me'>
                    <span>
                        <i className="material-symbols-outlined">developer_guide</i>

                        <span>Sobre o desenvolvedor</span>
                    </span>
                </a>
            </nav>

        </aside>
        </>
    )
}