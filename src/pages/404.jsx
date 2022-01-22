import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import { Link } from 'gatsby'

const NotFoundPage = () => (

  <>
    <style>
      {`
          body,.site-header{background-color: #F5F9E3;}
          *, .site-header a, a{color:black;}
          .ham-menus-lines, .ham-menus::before, .ham-menus::after{background-color: black;} 
      `}
    </style>
    <Layout>
      <SEO title="Not found" />
      <div className="container">
        <div className="error-page">
          <div className="error-text">404</div>
          <div className="error-text error-text-page">PAGE NOT FOUND</div>
          <p>The page you are looking for does not exist. It might have been moved or deleted</p>
          <br />
          <Link className="to-home" to="/">
            BACK TO HOME
          </Link>
        </div>
      </div>
    </Layout>
  </>
)

export default NotFoundPage
