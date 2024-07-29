import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import '../rootLayout/rootLayout.css'
import { ClerkProvider, SignedOut, SignInButton ,SignedIn, UserButton} from '@clerk/clerk-react'


const PUBLISHABLE_KEY = "pk_test_Zmlyc3QtZG92ZS0xNS5jbGVyay5hY2NvdW50cy5kZXYk"

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}


const RootLayout = () => {
  return (

<ClerkProvider  publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
    <div className='rootLayout'>

<header>

<Link className='logo'>

<img   src='/logo.png'  alt=''/>

<span>   AI   </span>


</Link>

<div  className='user'>  <header>
    
      <SignedIn>
        <UserButton />
      </SignedIn>
    </header>     </div>

</header>


<main>

    <Outlet/>
</main>

    </div>
    </ClerkProvider>
   
  )
}

export default RootLayout