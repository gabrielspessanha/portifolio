'use client'
import { useEffect, useState } from 'react';
import { Alert, Container } from 'reactstrap';

import styles from './styles.module.scss'
import Image from 'next/image';
import Link from 'next/link';
import { Footer } from '@/components/common/Footer';

export default function Thankyou(){
  const [visible, setVisible] = useState(true);

  const onDismiss = () => setVisible(false);
  
  useEffect(()=>{
    setVisible(true)
    setTimeout(()=>{
      setVisible(false)
    }, 1000 * 3)
  },[])

  return (
    <>
    <Container className='h-screen flex flex-col gap-2 justify-center items-center'>
      <div className='fixed top-10 z-20'>
        <Alert style={{ background: '#83E509', border: 'none'}} isOpen={visible} toggle={onDismiss}>
          Menssagem enviada com sucesso!
        </Alert>
      </div>
      <Image className='absolute right-6 bottom-5' src="/gif/thankyou.gif" alt="thankyougif" width={100} height={100} />
      <h1>Obrigado pelo contato</h1>
      <p className='text-center'>Recebi sua mensagem e entrarei em contato assim que possível</p>
      <Link href="/about">
        <button className={` ${styles.button}`}>Voltar</button>
      </Link>
    </Container>
    <Footer />
    </>
  )
}