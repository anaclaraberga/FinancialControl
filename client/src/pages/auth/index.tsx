import { SignedOut, SignInButton, SignUpButton, useUser } from '@clerk/clerk-react'
import { Navigate} from 'react-router'

import './index.css'

export const Auth = () => {
    const { isSignedIn } = useUser()

    if(isSignedIn) {
        return <Navigate to="/dashboard" replace />;
    }

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

        </div>;
    </>
}