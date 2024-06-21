import React from 'react'

const backgroundImage = "../public/images/gato-perfil.jpg"

export const Header = () => {
  return (
    <>
      <div className='flex items-center'>
        <div className='rounded-full w-[5rem] h-[5rem] bg-cover bg-center' style={{backgroundImage: `url(${backgroundImage})`}}> </div>
        <h1 className='ml-4'>@gatocoqueto213</h1>
        <img className='ml-[25rem] size-[2rem]' src="../public/images/puntos.png" alt="puntos" />
      </div>
    </>
  )
}
