import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton} from '@clerk/clerk-react'

import './index.css'

export const Auth = () => {
    return <>
        <div className='sign-in-container'>

            <div className='text-alignment'>
                <h2>Faça seu login no</h2>
                <h1>Financial Control</h1>
            </div>

            <div className='button-alignment'> 
                <SignedOut>
                    <SignUpButton mode='modal'/>
                    <SignInButton mode='modal'/>
                </SignedOut>
            </div>

            <SignedIn>
                <UserButton />
            </SignedIn>
        </div>;
    </>
}