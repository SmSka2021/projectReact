import React from 'react';
import clas from './ProfileInfo.module.css'


export const ProfileInfo = (props) => {
  return (
    <> 
   <div className={clas.de}>
   <img src='https://avatars.mds.yandex.net/i?id=ea54f0739b2d13f252e2cca06db7b781-5277647-images-thumbs&n=13' alt='foto' />
        <p>Hello world. Welcom my country. Viva Ukraine!!!</p>
      </div>
      </>
  )
}