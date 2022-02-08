import React, { useState } from 'react'
import { Link } from 'gatsby'
import Search from './Search'
import Overlay from './Overlay'

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
    <header className={`site-header flex flex-between align-v-center ${homepageClass}`}>
      <div className="logo flex"><Link to="/" className='font1'>ISLA’S RIDGE</Link></div>
      <nav id="nav" className={`flex align-v-center main-navigation ${hamMenus ? "show-nav" : ""}`}>
        <ul className="flex">
          {
            headerMenus.map((data, index) =>{
              return(
                <li key={index}>
                  <Link activeClassName="active-menu" exact="true" to={data.link} onClick={openHamMenus}>{data.title}</Link>
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
      <div className={`ham-menus relative ${hamMenus ? "ham-cross" : ""}`} onClick={openHamMenus} aria-hidden="true">
        <div className="ham-menus-lines"></div>
      </div>

      <Overlay isOverlayShow={hamMenus} hideContainer={openHamMenus} />
    </header>
  )
}

export default Header
