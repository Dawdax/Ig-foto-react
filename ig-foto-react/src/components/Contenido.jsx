import React from 'react'
const backgroundimage = '../public/images/panzona.jpg'
export const Contenido = () => {
  return (
    <div className='flex justify-center pt-[1rem]'>                      
      <div className='w-full h-[30rem] bg-center bg-cover' style={{backgroundImage: `url(${backgroundimage})`}}></div>
    </div>
  )
}
