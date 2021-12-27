import React from 'react'
// import prismicLogo from '../images/logo-prismic.svg'
import { Link } from 'gatsby'

const Footer = () => (
  <footer>
    {/* <p>
      Proudly published with <a href="https://prismic.io" target="_blank" rel="noopener noreferrer">Prismic</a>
      <br />
      <a href="https://prismic.io" target="_blank" rel="noopener noreferrer">
        <img className="footer-logo" src={prismicLogo} alt="Prismic logo" />
      </a>
    </p> */}
    <div className="flex">      
      <div className="margin-b-0 flex padding-r-5">
        <Link to="/tnc">Terms & Conditions</Link>
      </div>
      <div>&copy; 2021</div> &nbsp;
      <a className="padding-left" href="mailto:islasridge@gmail.com">islasridge@gmail.com</a>
    </div>
  </footer>
)

export default Footer
