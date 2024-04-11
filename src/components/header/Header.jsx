import React from 'react'
import './header.css'
import { MdOutlineKeyboardArrowDown, MdOutlineSearch } from 'react-icons/md'
import { GiHamburgerMenu } from "react-icons/gi";


function Header({ setShowSearch }) {
  return (
    <header>
      <div className='website__logo'>
        <p>Mediartrade</p>
      </div>
      <nav>
        <ul>
          <li>Upcoming Auction</li>
          <li>Private Sale</li>
          <li>Log In</li>
          <li>IT <MdOutlineKeyboardArrowDown /></li>
          <li onClick={() => setShowSearch(true)}><MdOutlineSearch /></li>
          <li><GiHamburgerMenu /></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
