import React, { useState } from 'react'
import { Link } from 'gatsby'
import Search from './Search'

const Header = ({ isHomepage }) => {
  const [hamMenus, setHamMenus] = useState(false)
  const openHamMenus = () =>{
    setHamMenus(!hamMenus)
  }

  const headerMenus = [
    {
      title: "Home",
      link: "/"
    },
    {
      title: "About",
      link: "/about"
    },
    {
      title: "Rooms",
      link: "/rooms"
    },
    {
      title: "Retreats",
      link: "/retreats"
    },
    {
      title: "Press",
      link: "/press"
    },
    {
      title: "Enquire",
      link: "/enquire"
    }
  ]
  
  const homepageClass = isHomepage ? 'homepage-header' : ''
  return (
    <header className={`site-header flex flex-between ${homepageClass}`}>
      <div className="logo"><Link to="/">ISLA’S RIDGE</Link></div>
      <nav id="nav" className={`flex align-v-center ${hamMenus ? "show-nav" : ""}`}>
        <ul className="flex">
          {
            headerMenus.map((data, index) =>{
              return(
                <li key={index}>
                  <Link activeClassName="active-menu" to={data.link}>{data.title}</Link>
                </li>
              )
            })
          }

          {/* <li><Link activeClassName="active-menu" to="/">Home</Link></li>
          <li><Link activeClassName="active-menu" to="/about">About</Link></li>
          <li><Link activeClassName="active-menu" to="/more-info">More Info</Link></li>
          <li><Link activeClassName="active-menu" to="/rooms">Rooms</Link></li>
          <li><Link activeClassName="active-menu" to="/retreats">Retreats</Link></li>
          <li><Link activeClassName="active-menu" to="/press">Press</Link></li>
          <li><Link activeClassName="active-menu" to="/enquire">Enquire</Link></li> */}
        </ul>

        <Search />
      </nav>
      <div className="ham-menus relative" onClick={openHamMenus}>
        <div className="ham-menus-lines"></div>
      </div>
    </header>
  )
}

export default Header
