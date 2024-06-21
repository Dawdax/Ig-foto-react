import React from 'react'
import { Header } from './components/Header'
import { Contenido } from './components/Contenido'
import { LikeCompo } from './components/LikeCompo'

export const IgFotoReact = () => {
  return (
    <>
      <div className=' bg-[#141414] flex items-center justify-center h-screen'>
        <div className='bg-[#f1f5f9]  rounded shadow-md py-[2rem] px-[1.5rem] max-w-[50rem] min-w-[40rem] max-h-[60rem] min-h-[50rem]'>
          <Header />
          <Contenido />
          <LikeCompo />
        </div>
      </div>
    </>

  )
}
