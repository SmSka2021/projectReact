import React from 'react';

import clas from './Profile.module.css'
import { ProfileInfo } from './MyPosts/ProfileInfo/ProfileInfo';

import {ReactPostContainer} from './MyPosts/reactPostContainer';


export const Profile = (props) => {

  return (
    <div className={clas.pofile}>
      <ProfileInfo />
      <ReactPostContainer />
    </div>
  )
}