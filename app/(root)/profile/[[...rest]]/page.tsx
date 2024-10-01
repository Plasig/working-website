import React from 'react'
import { SignIn, UserProfile } from '@clerk/nextjs';
import { SignedIn, SignedOut } from '@clerk/nextjs';
const ProfilePage = () => {
  return (
    <main>
      <SignedIn>
      <div className='container mx-auto px-1 py-1 max-w-2xl'>
        <div className='bg-white shadow-md rounded-lg overflow-hidden'>
          <UserProfile 
            path="/profile" 
            routing="path"
            appearance={{
              elements: {
                rootBox: "max-w-full",
                card: "shadow-none",
                navbar: "hidden",
                pageScrollBox: "p-2",
              },
            }}
          />
        </div>
      </div>
      </SignedIn>

      <SignedOut>
        <div className='flex justify-center items-center h-[75vh]'>
          <SignIn />
        </div>
      </SignedOut>
    </main>
  )
}

export default ProfilePage