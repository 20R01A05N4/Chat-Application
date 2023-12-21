import React from 'react'

const Message = () => {
  return (
    <div className='message owner'>
        <div className='messageInfo'>
            <img src='https://images.pexels.com/photos/18928507/pexels-photo-18928507/free-photo-of-fireworks-in-the-dark-sky-with-a-black-background.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load'></img>
            <span>just now</span>
        </div>
        <div className='messageContent'>
            <p>hello</p>
            <img src='https://images.pexels.com/photos/18928507/pexels-photo-18928507/free-photo-of-fireworks-in-the-dark-sky-with-a-black-background.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load' alt=''></img>
        </div>
    </div>
  )
}

export default Message