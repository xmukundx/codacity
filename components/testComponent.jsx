'use client'
import { signIn, useSession } from 'next-auth/react'
import React from 'react'

const TestComponent = () => {
  const {data : session } = useSession
  return (
    <div className='text-black bg-yellow-200'>
    {
      session ? (
        <h1>welcome back</h1>
      ) : (
        <>
        <h1>You are not logged in</h1>
        <button onClick={(e)=> {
          e.preventDefault()
          signIn('github')}}>Sign in</button>
        </>)
    }
    </div>
  )
}

export default TestComponent