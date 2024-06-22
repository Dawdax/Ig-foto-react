import React, { useState } from 'react';


const estadoInicial = {
  like: false,
  likeContador: 243,
  save: false
}

export const LikeCompo = () =>   
  {
  const [estado, setEstado] = useState(estadoInicial)
  
  const cambiandoEstadoLike = () =>{
    setEstado(prevState => ({
      ...prevState,
      like: !prevState.like,
      likeContador: prevState.like === false ? prevState.likeContador + 1 : prevState.likeContador - 1
    }))
  }

  const cambiandoEstadoSave = () =>{
      setEstado(prevState => ({
        ...prevState,
        save: !prevState.save,
      }))
   }

  const likeState = estado.like === false ? "like-off" 
                                          : "like-on"
  
  const saveState = estado.save === false ? 'save-off' 
                                          : 'save-on'

  return (
    <>
      <div className="grid grid-cols-8 gap-4 py-[1rem]">
        <div onClick={cambiandoEstadoLike} className={`${likeState} col-span-1`}  ></div>
        <div className="comentario col-span-1"></div>
        <div className="compartir col-span-1"></div>
        <div onClick={cambiandoEstadoSave} className={`${saveState} col-end-10 p-0 m-0`}></div> {/* Último elemento comienza en la columna 8 */}
      </div>
      <div className=' text-xl'>
        <p>{estado.likeContador} Likes</p>
        <p><b>Dawdax</b> Estoy usando ReactJs con useState :D </p>
      </div>
    </>

  );
};
