"use client"
import Input from '@/components/input'
import React, { useState } from 'react'
const Register = () => {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')

  const register = () => {
    fetch('/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email,
        name,
        password
      })
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to register user');
        }
        return response.json();
      })
      .then(data => {
        console.log('User registered successfully:', data);
      })
      .catch(error => {
        console.log(error);
      });
  }

  return (
    <>
      <Input onChange={(e: any) => setEmail(e.target.value)}
        type='email'
        value={email}
      />
      <Input onChange={(e: any) => setName(e.target.value)}
        type='text'
        value={name}
      />
      <Input onChange={(e: any) => setPassword(e.target.value)}
        type='password'
        value={password}
      />
      <button onClick={register} className='bg-blue-500'>submit</button>
    </>

  )
}

export default Register