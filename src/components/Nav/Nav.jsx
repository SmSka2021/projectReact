import React from 'react';
import n from './Nav.module.css'
import { NavLink } from 'react-router-dom';


export const Nav = () => {
  return (
    <nav className={n.nav}>
      <ul>
      <li><NavLink className={(data) => data.isActive ? n.active : n.item} to='/profile'>Profile</NavLink></li>
      <li><NavLink className={(data) => data.isActive ? n.active : n.item} to='/dialogs'>Dialogs</NavLink></li>
      <li><NavLink className={(data) => data.isActive ? n.active : n.item} to='/musik'>Musik</NavLink></li>
      <li><NavLink className={(data) => data.isActive ? n.active : n.item} to='/news'>News</NavLink></li>
      <li><NavLink className={(data) => data.isActive ? n.active : n.item} to='/Setting'>Setting</NavLink></li>
      <li><NavLink className={(data) => data.isActive ? n.active : n.item} to='/first'>First</NavLink></li>      
      </ul>
    </nav>
  )
}
