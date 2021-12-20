import React, { useState } from 'react'
import { Link } from 'gatsby'

const Header = ({ isHomepage }) => {
  const [hamMenus, setHamMenus] = useState(false)
  const openHamMenus = () =>{
    setHamMenus(!hamMenus)
  }
  
  const homepageClass = isHomepage ? 'homepage-header' : ''
  return (
    <header className={`site-header flex flex-between ${homepageClass}`}>
      <div className="logo"><Link to="/">ISLA’S RIDGE</Link></div>
      <nav id="nav" className={`${hamMenus ? "show-nav" : ""}`}>
        <ul className="flex">
          <li><Link activeClassName="active-menu" to="/">Home</Link></li>
          <li><Link activeClassName="active-menu" to="/about">About</Link></li>
          {/* <li><Link activeClassName="active-menu" to="/more-info">More Info</Link></li> */}
          <li><Link activeClassName="active-menu" to="/rooms">Rooms</Link></li>
          <li><Link activeClassName="active-menu" to="/retreats">Retreats</Link></li>
          <li><Link activeClassName="active-menu" to="/press">Press</Link></li>
          <li><Link activeClassName="active-menu" to="/enquire">Enquire</Link></li>
        </ul>
      </nav>
      <div className="ham-menus relative" onClick={openHamMenus}>
        <div className="ham-menus-lines"></div>
      </div>
    </header>
  )
}

export default Header