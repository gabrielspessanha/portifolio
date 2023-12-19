'use client'
import Link from 'next/link'
import React from 'react'

import styles from './styles.module.scss';
import { BackToTopButton } from '../common/backToTopButton';

const Main = () => {
  return (
    <main className="flex justify-center items-center flex-col h-screen">
      <h1 className={`${styles.name}`}>GABRIEL SANTOS PESSANHA</h1>
      <p className={`text-2md ${styles.subtitle}`}>DESENVOLVEDOR <span className='text-gradient sm:text-2xl'>FULL-STACK</span></p>
      <Link href="/about">
        <button className='bg-light text-white font-semibold bg-gradient-to-r from-orange to-pink border-none px-5 py-2 hover:scale-110 ease-out duration-300 rounded-md' style={{ border: 'none'}}>Saiba mais</button>
      </Link>
      <BackToTopButton />
    </main>
  )
}

export { Main }