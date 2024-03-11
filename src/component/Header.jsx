import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../images/logo.jpg'
import { MdOutlineMenu } from "react-icons/md";
import { IoCloseSharp } from "react-icons/io5";
function Header() {
  const [navShow, setNavShow] = useState(window.innerWidth > 800 ? true : false);

  const closeNavHandler = () => {
    if (window.innerWidth < 800) {
      setNavShow(false)
    }
    else setNavShow(true)
  }

  return (
    <nav>
      <div className="container nav__container">
        <Link to="/" className="nav__logo" onClick={closeNavHandler}>
          LOGO
        </Link>
        {navShow && <ul className='nav__menu'>
          <li><Link to="/profile/fdf" onClick={closeNavHandler} >Ernest Achiever</Link></li>
          <li><Link to="/create" onClick={closeNavHandler}>Create Post</Link></li>
          <li><Link to="/authors" onClick={closeNavHandler}>Authors</Link></li>
          <li><Link to="/logout" onClick={closeNavHandler}>Logout</Link></li>
        </ul>}

        <button className='nav__toggle--btn' onClick={() => setNavShow(!navShow)}>

          {
            navShow ? <IoCloseSharp /> : <MdOutlineMenu />
          }
        </button>
      </div>


    </nav>
  )
}

export default Header