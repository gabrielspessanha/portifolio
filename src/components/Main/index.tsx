'use client'
import Link from 'next/link'
import React from 'react'
import { Button } from 'reactstrap'

const Main = () => {
  return (
    <main className="h-5/6 flex justify-center items-center flex-col">
      <h1 className='text-5xl max-md:text-3xl'>GABRIEL SANTOS PESSANHA</h1>
      <p className='text-2md'>DESENVOLVEDOR <span className='text-gradient'>FULL-STACK</span></p>
      <Link href="/about">
        <Button className='bg-light text-white bg-gradient-to-r from-orange to-pink border-none px-5 py-2 hover:scale-110 transition-all' style={{ border: 'none'}}>Saiba mais</Button>
      </Link>
    </main>
  )
}

export { Main }