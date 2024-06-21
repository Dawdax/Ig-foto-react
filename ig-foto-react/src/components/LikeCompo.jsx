import React from 'react';

export const LikeCompo = () => {
  return (
    <>
      <div className="grid grid-cols-8 gap-4 py-[1rem]">
        <div className="like-off col-span-1"></div>
        <div className="comentario col-span-1"></div>
        <div className="compartir col-span-1"></div>
        <div className="col-end-10 p-0 m-0 save-off"></div> {/* Último elemento comienza en la columna 8 */}
      </div>
      <div className=' text-xl'>
        <p>234 likes</p>
        <p><b>Dawdax</b> Estoy usando ReactJs con useState :D </p>
      </div>
    </>

  );
};
