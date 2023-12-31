import React from 'react'
import { signOut } from 'firebase/auth'
import {auth} from '../firebase'
import { AuthContext } from '../context/AuthContext'
import { useContext } from 'react';
const Navbar = () => {
  const {currentUser}=useContext(AuthContext)
  return (
    <div className='navbar'>
        <span className='logo'>Neha</span>
        <div className='user'>
            <img src= {currentUser.photoURL} alt=""/>
            <span>{currentUser.displayName}</span>
            <button onClick={()=>signOut(auth)}>Log out</button>
        </div>
    </div>
  )
}

export default Navbar