import React from 'react'
import '../SignInPage/SignUpPage.css'
import { SignUp } from '@clerk/clerk-react'

const SignUpPage = () => {
  return (
    <div>

<SignUp path="/sign-in"  signInUrl='sign-in'/>
    </div>
  )
}

export default SignUpPage