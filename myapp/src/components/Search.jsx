import React from 'react'

const Search = () => {
  return (
    <div className='search'>
        <div className='searchForm'>
            <input type="text" placeholder='Find a user'/>
        </div>
        <div className='userChat'>
            <img src="https://images.pexels.com/photos/18779467/pexels-photo-18779467/free-photo-of-catrina.png?auto=compress&cs=tinysrgb&w=400&lazy=load" alt=""></img>
            <div className='userChatInfo'>
                <span>Neha</span>
            </div>
        </div>
    </div>
  )
}

export default Search