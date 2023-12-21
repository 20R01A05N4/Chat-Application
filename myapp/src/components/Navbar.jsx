import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
        <span className='logo'>Neha</span>
        <div className='user'>
            <img src='https://images.pexels.com/photos/18898429/pexels-photo-18898429/free-photo-of-close-up-of-a-wet-spiderweb-and-mountain-ash-berries.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load' alt=''/>
            <span>Neha</span>
            <button>Log out</button>
        </div>
    </div>
  )
}

export default Navbar