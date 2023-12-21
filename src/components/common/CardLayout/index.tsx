'use client'
import React, { ReactElement, useEffect, useState } from 'react'
import { Card, CardBody, CardText, CardTitle } from 'reactstrap'
import ReactModal from 'react-modal';
import Modal from 'react-modal'
import { IoMdClose } from "react-icons/io";

import styles from './styles.module.scss'
import Link from 'next/link';
import Image from 'next/image';

export interface CardProps {
  id: number
  url: string
  title: string
  description: string
  urlGitHub: string
  urlDeploy: string
  tecnologies: ReactElement[]
}

const CardLayout = (props: CardProps) => {
  const [modalOpen, setModalIsOpen] = useState(false);
  const description = props.description.split(' ');
  const croppedDescription = description.slice(0, 11).join(' ')

  const handleOpenModal = ()=>{
    setModalIsOpen(true)
  };
  const handleCloseModal = ()=>{
    setModalIsOpen(false)
  }
  
  useEffect(()=>{
    ReactModal.setAppElement("#main")
  },[])

  return (
    <Card
      color='dark'
      style={{
        width: '20rem'
      }}
      className={styles.cardLayout}
      id='main'
      key={props.title}
    >
      <Image
        alt={props.title}
        src={props.url}
        width={500}
        height={100}
        className={styles.imgCard}
      />
      <CardBody>
        <CardTitle className='text-white font-black' tag="h5">
          {props.title}
        </CardTitle>
        <CardText className={`text-white ${styles.cardDescription}`}>
          {croppedDescription + '...'}
        </CardText>
        <button  className='bg-light text-white bg-gradient-to-r from-orange to-pink border-none py-2 ease-out duration-300 rounded-md hover:scale-110' style={{ border: 'none', width: '10rem'}} onClick={handleOpenModal}>Ver mais</button>
      </CardBody>

      <Modal 
          isOpen={modalOpen} 
          onRequestClose={handleCloseModal} 
          shouldCloseOnEsc={true}
          className={styles.modal}
          overlayClassName={styles.overlayModal}
        >
          <IoMdClose size={35} onClick={handleCloseModal} className={styles.closeBtn} />

          <img className={styles.imgModal} alt="Sample"src={props.url} />
          <div className={styles.contentModal}>
            <h3 className='text-4xl font-bold'>{props.title}</h3>
            <p className='px-4'>{props.description}</p>
            <div className='flex gap-4 justify-center'>
              <Link className={styles.buttonLink} href={props.urlGitHub} target='__blank'>
                <button className='bg-light text-white bg-gradient-to-r from-violet-900 to-cyan-950 border-none py-2 ease-out duration-300 rounded-md hover:scale-110' style={{ border: 'none'}}>Github</button>
              </Link>

              <Link className={props.id === 4? styles.buttonLinkDisable : styles.buttonLink} href={props.urlDeploy} target='__blank'>
                <button className='bg-light text-white bg-gradient-to-r from-amber-400 to-amber-500 border-none py-2 ease-out duration-300 rounded-md hover:scale-110' style={{ border: 'none'}}>Ver Projeto</button>
              </Link>
            </div>

            <div className={styles.tecnologies}>
              {props.tecnologies}
            </div>
          </div>
      </Modal>
      
    </Card>
  )
}

export default CardLayout