import React from 'react'
import { Header } from './components/Header'
import { Contenido } from './components/Contenido'
import { LikeCompo } from './components/LikeCompo'

export const IgFotoReact = () => {
  return (
    <>
        <div className='h-50 w-40'>
             <Header />
             <Contenido />
             <LikeCompo />
             
        </div>
    </>
    
  )
}
