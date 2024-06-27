"use client"
import Input from '@/components/input'
import React, { useState } from 'react'

const Register = () => {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  return (
    <>
      <Input onChange={(e: any) => setEmail(e.target.value)}
        type='email'
        value={email}
      />
      <Input onChange={(e: any) => setName(e.target.value)}
        type='email'
        value={name}
      />
      <button className='bg-blue-500'>submit</button>
    </>

  )
}

export default Register