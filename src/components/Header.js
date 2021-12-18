import React from 'react'
import { Link } from 'gatsby'

const Header = ({ isHomepage }) => {
  const homepageClass = isHomepage ? 'homepage-header' : ''
  return (
    <header className={`site-header ${homepageClass}`}>
      <Link to="/"><div className="logo">ISLA’S RIDGE</div></Link>
      <nav id="nav">
        <ul>
          <li><Link activeClassName="active-menu" to="/">Home</Link></li>
          <li><Link activeClassName="active-menu" to="/about">About</Link></li>
          {/* <li><Link activeClassName="active-menu" to="/more-info">More Info</Link></li> */}
          <li><Link activeClassName="active-menu" to="/rooms">Rooms</Link></li>
          <li><Link activeClassName="active-menu" to="/retreats">Retreats</Link></li>
          <li><Link activeClassName="active-menu" to="/press">Press</Link></li>
          <li><Link activeClassName="active-menu" to="/enquire">Enquire</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
