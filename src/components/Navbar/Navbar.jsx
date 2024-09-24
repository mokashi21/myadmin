import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import FullscreenOutlinedIcon from '@mui/icons-material/FullscreenOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import TranslateOutlinedIcon from '@mui/icons-material/TranslateOutlined';
import "./Navbar.scss"
const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='wrapper'>
        <div className='search'>
          <input  type='text' placeholder='Search...' /> 
          <SearchIcon />
        </div>
        <div className='items' >
          <div className="item" >
          <TranslateOutlinedIcon className='icon' />
            English
          </div>
          <div className="item" >
          <DarkModeOutlinedIcon className='icon' />
            
          </div>
          <div className="item" >
          <FullscreenOutlinedIcon className='icon' />
            
          </div>

          <div className="item" >
          <ListOutlinedIcon className='icon' />
          </div>

          <div className="item" >
          <ChatBubbleOutlineOutlinedIcon className='icon' />
          <div className='counter'>3</div>

          </div>

          <div className="item" >
          <NotificationsNoneOutlinedIcon  className='icon' />
          <div className='counter'>1</div>
            
          </div>
          <div className="item">
            <img src="https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?w=740&t=st=1727188755~exp=1727189355~hmac=20e3f1c8c107ba3e9618355bb50c095f3d9d0bc9c96237c60b514c2fb358a665" alt="" className='avatar' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar;